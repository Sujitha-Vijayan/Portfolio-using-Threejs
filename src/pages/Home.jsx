import React , {Suspense, useEffect, useState,useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import Loader from '../components/Loader';
import Bflygirl from '../models/Butterflygirl';
import { soundoff,soundon } from '../assets/icons';
import Sky from '../models/Sky';
import AnimeBfly from '../models/AnimatedButterfly';
import Flying_tower from '../models/Flying_tower';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/audio/sakura.mp3';
const Home = () => {
    const audioRef=useRef(new Audio(sakura));
    audioRef.current.volume=0.4;
    audioRef.current.loop=true;

    const [isRotating, setIsRotating]=useState(false);
    const [currentStage,setCurrentStage]=useState(1);
    const [isPlayingMusic,setIsPlayingMusic]=useState(false);

    useEffect(()=>{
        if(isPlayingMusic){
            audioRef.current.play();
        }
        return()=>{
            audioRef.current.pause();
        }
    },[isPlayingMusic]);
const adjustAnimeflyscene=()=>{
let screenScale,screenPosition;
if(window.innerWidth < 768){
    screenScale=[0.5,0.5,0.5];
    screenPosition=[-2.5,0.8,0];
}
else{
    screenScale=[0.8,0.4,0.6];
    screenPosition=[-5.6,1.3,-0.5];
}
return [screenScale,screenPosition];
}

    const adjustBflyGirlScreenSize=()=>{
        let screenScale,screenPosition;
        if(window.innerWidth < 768){
            screenScale=[0.9,0.9,0.9];
            screenPosition=[-50,-145,-180.4];
        }
        else{
            screenScale=[3,1,1];
            screenPosition=[-153,-153.5,-190.4];
        }
        return [screenScale,screenPosition];
    };

const [bflygirlScale, bflygirlPosition]= adjustBflyGirlScreenSize();
const [animeFlyScale, animeFlyPosition]= adjustAnimeflyscene();
  return (
<div className='w-full h-screen relative'>
    <div className='absolute top-20 left-12 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
    </div>
    <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing":"cursor-grab"} `} 
    camera={{near:0.1,far:1000}}
    >
<Suspense fallback={<Loader/>}>
<directionalLight position={[1,1,1]} intensity={1}/>
<ambientLight intensity={0.5}/>
<hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
<pointLight position={[10,5,10]} intensity={1}/>
<spotLight position={[0,50,10]} angle={0.15} penumbra={1} intensity={2}/>
<Flying_tower/>
<Sky isRotating={isRotating}/>
{/* <BflyBox/> */}
<AnimeBfly  isRotating={isRotating} position={animeFlyPosition} scale={animeFlyScale}
rotation = {[0.5,1.9077,0]}/>

<Bflygirl 
isRotating={isRotating} setIsRotating={setIsRotating}
currentStage={currentStage} setCurrentStage={setCurrentStage}
position={bflygirlPosition} screenScale={bflygirlScale}
rotation = {[0,0.9077,0]}/>

</Suspense>
    </Canvas>
    <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff : soundon} alt="jukebox" onClick={()=>setIsPlayingMusic((curr)=>!curr)}
        className='w-10 h-10 cursor-pointer object-contain'
        />
    </div>
</div>
  );
};




export default Home