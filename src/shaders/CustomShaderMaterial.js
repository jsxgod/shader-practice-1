import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";

const CustomShaderMaterial = shaderMaterial(
  // Uniforms
  { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0) },

  //Vertex Shader
  glsl`
    varying vec2 vUv;
    precision mediump float;
    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main () {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 1.5;
      float noiseAmp = 0.25;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,

  //Fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    varying vec2 vUv;
    uniform float uTime;

    void main () {
      gl_FragColor = vec4(sin(vUv.x + uTime) + uColor, 1.0);
    }
  `
);

export default CustomShaderMaterial;
