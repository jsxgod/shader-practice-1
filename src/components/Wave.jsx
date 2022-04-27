import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Wave = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <customShaderMaterial uColor="blue" ref={materialRef} wireframe />
    </mesh>
  );
};

export default Wave;
