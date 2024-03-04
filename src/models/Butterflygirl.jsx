import React, { useRef ,useEffect,useContext}from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame,useThree} from '@react-three/fiber';
import { a } from "@react-spring/three";
import butterfly_girl from '../assets/3d/butterfly_girl.glb';
function Bflygirl({
 isRotating, setIsRotating, setCurrentStage, ...props}) {


    const butterflyGirl=useRef();
    const {gl, viewport}=useThree();
  const { nodes, materials } = useGLTF(butterfly_girl);
  const lastX=useRef(0);
  const rotationSpeed=useRef(0);
  const dampingFactor=0.95;
  const handlePointerDown=(event)=>{
event.stopPropagation();
event.preventDefault();
setIsRotating(true);
const clientX=event.touches?event.touches.clientX:event.clientX;
lastX.current=clientX;
  };

  const handlePointerUp=(event)=>{
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  
  };
  const handlePointerMove=(event)=>{
    event.stopPropagation();
    event.preventDefault();
    if(isRotating){
      const clientX=event.touches?event.touches[0].clientx:event.clientX
const delta=(clientX -lastX.current)/viewport.width;
butterflyGirl.current.rotation.y+=delta*0.01*Math.PI;
lastX.current=clientX;
rotationSpeed.current=delta*0.01*Math.PI;
    }
  
  };
  const handleKeyDown=(event)=>{
    if(event.key==="ArrowLeft"){
      if(!isRotating) setIsRotating(true);
      butterflyGirl.current.rotation.y +=0.005*Math.PI;
    rotationSpeed.current=0.007;
    }
    else if(event.key==="ArrowRight"){
      if(!isRotating) setIsRotating(true);
      butterflyGirl.current.rotation.y -=0.005*Math.PI;
    rotationSpeed.current=-0.007;
    }
  };

  const handleKeyUp=(event)=>{
    if(event.key==="ArrowLeft"||event.key==="ArrowRight"){
      setIsRotating(false)
    }
  }
  useEffect(()=>{
  const canvas = gl.domElement;
  canvas.addEventListener("pointerdown",handlePointerDown);
  canvas.addEventListener("pointerup",handlePointerUp);
  canvas.addEventListener("pointermove",handlePointerMove);
  window.addEventListener("keydown",handleKeyDown);
  window.addEventListener("keyup",handleKeyUp);
  return ()=>{
    
    canvas.removeEventListener("pointerdown",handlePointerDown);
    canvas.removeEventListener("pointerup",handlePointerUp);
    canvas.removeEventListener("pointermove",handlePointerMove);
    window.removeEventListener("keydown",handleKeyDown);
    window.removeEventListener("keyup",handleKeyUp);
  };}
  ,[gl,handlePointerDown,handlePointerUp,handlePointerMove])

  useFrame(()=>{
    if(!isRotating)
    {
rotationSpeed.current *=dampingFactor;

if(Math.abs(rotationSpeed.current)<0.001){
  rotationSpeed.current=0;
}
butterflyGirl.current.rotation.y +=rotationSpeed.current
    }
    else{
      const rotation =butterflyGirl.current.rotation.y ;
      const normalization= ((rotation % (2* Math.PI))+2*Math.PI)%(2*Math.PI);
      switch(true){
        case normalization>=5.45&& normalization<=5.85:
          setCurrentStage(4);
        break;
        case normalization>=0.85&& normalization<=1.3:
          setCurrentStage(3);
        break;
        case normalization>=2.4&& normalization<=2.6:
          setCurrentStage(2);
        break;
        case normalization>=4.25&& normalization<=4.75:
          setCurrentStage(1);
        break;
        default:
          setCurrentStage(null);
      }
    }
  })
 return (
    <a.group ref={butterflyGirl} {...props} >
<group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
      
          geometry={nodes.face_face_0.geometry}
          material={materials.face}
          position={[0, -1.925, 109.001]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
      
          geometry={nodes.robe_robe_0.geometry}
          material={materials.robe}
          position={[0, -1.925, 109.001]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
       
          geometry={nodes.body_body_0.geometry}
          material={materials.body}
          position={[0, -1.925, 109.001]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
       
          geometry={nodes.butterfly_butterfly_0.geometry}
          material={materials.butterfly}
          position={[0, -1.925, 109.001]}
        />
      </group>
    </a.group>
  );
};

export default Bflygirl;