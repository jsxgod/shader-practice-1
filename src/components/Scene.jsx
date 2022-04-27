import React, { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import CustomShaderMaterial from "../shaders/CustomShaderMaterial";
import Wave from "./Wave";

extend({ CustomShaderMaterial });

const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
