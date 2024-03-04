import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import AnimatedbflyScene from '../assets/3d/animated_butterfly.glb';
const AnimeBfly=({isRotating,...props})=> {
  const ref =useRef();
  const {scene,animations} = useGLTF(AnimatedbflyScene);
const {actions}= useAnimations(animations,ref);
useEffect(()=>{
  if(isRotating){
    actions["Flying"].play()
  }
  else 
  {actions["Flying"].stop()}
},[actions,isRotating]);
  return (
  <mesh{...props} ref={ref}>
   <primitive object={scene}/>
  </mesh>
  );
};
    
  export default AnimeBfly;

 