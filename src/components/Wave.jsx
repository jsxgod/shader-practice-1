import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Wave = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeBufferGeometry args={[3, 5]} />
      <customShaderMaterial uColor="blue" ref={materialRef} />
    </mesh>
  );
};

export default Wave;
