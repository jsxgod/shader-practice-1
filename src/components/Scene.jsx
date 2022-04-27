import React from "react";
import { Canvas } from "@react-three/fiber";

const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <planeBufferGeometry args={[3, 5]} />
      </mesh>
    </Canvas>
  );
};

export default Scene;
