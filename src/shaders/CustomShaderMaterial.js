import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";

const CustomShaderMaterial = shaderMaterial(
  // Uniforms
  { uColor: new THREE.Color(0.0, 0.0, 0.0) },

  //Vertex Shader
  glsl`
    varying vec2 vUv;
    void main () {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  //Fragment Shader
  glsl`
    uniform vec3 uColor;
    varying vec2 vUv;
    void main () {
      gl_FragColor = vec4(vUv.x + uColor, 1.0);
    }
  `
);

export default CustomShaderMaterial;
