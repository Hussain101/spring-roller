/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
export function Candy(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/candy/model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder086.geometry}
        material={materials["Orange.001"]}
      >
        <animated.meshStandardMaterial
          {...materials["Orange.001"]}
          transparent
          opacity={props.opacity}
        />
      </mesh>
      <mesh
        geometry={nodes.Cylinder086_1.geometry}
        material={materials["Black.004"]}
      >
        <animated.meshStandardMaterial
          {...materials["Black.004"]}
          transparent
          opacity={props.opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/candy/model.gltf");
