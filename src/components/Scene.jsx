import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import CustomShaderMaterial from "../shaders/CustomShaderMaterial";

extend({ CustomShaderMaterial });

const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <pointLight position={[10, 10, 10]} />
        <planeBufferGeometry args={[3, 5]} />
        <customShaderMaterial uColor="blue" />
      </mesh>
    </Canvas>
  );
};

export default Scene;
