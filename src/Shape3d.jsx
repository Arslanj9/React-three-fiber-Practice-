import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Shape3d(props) {
  // const group = useRef()
  const { nodes, materials } = useGLTF('/shape3d.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[-1.439, 1.26, 0]} />
    </group>
  );
}

useGLTF.preload('/shape3d.gltf');
