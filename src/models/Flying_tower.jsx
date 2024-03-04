import React ,{useEffect,useRef} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import flyingTowerScene from "../assets/3d/flying_tower.glb";
import { useFrame } from '@react-three/fiber';

const Flying_tower =()=> {
  const flyTowerRef=useRef();
  const{scene,animations}=useGLTF(flyingTowerScene);
  const{actions}=useAnimations(animations,flyTowerRef);
useEffect(()=>{
actions["Animation"].play();
},[])
useFrame(({clock,camera})=>{
    flyTowerRef.current.position.y=Math.sin(clock.elapsedTime)*0.5+2;
    if(flyTowerRef.current.position.x>camera.position.x+10){
        flyTowerRef.current.rotation.y=Math.PI;
    }
    else if(flyTowerRef.current.position.x<camera.position.x-10){
flyTowerRef.current.rotation.y=0;
    }
   else if(flyTowerRef.current.rotation.y===0){
        flyTowerRef.current.position.x+=0.01;
        flyTowerRef.current.position.z -=0.01;
    }
    else{
        flyTowerRef.current.position.x -=0.01;
        flyTowerRef.current.position.z +=0.01;
    }
});

    return (
<mesh ref={flyTowerRef} position={[-1.2,5,0]} scale={[0.150,0.150,0.150]}>
    <primitive object={scene}/>
</mesh>
        );
};

export default Flying_tower;