import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Shape3d2(props) {

  const obj3d = useRef()

  useFrame((state, delta) => {
    obj3d.current.rotation.x += delta *0.3;
  })

  const { nodes, materials } = useGLTF('/shape3d2.gltf')
  return (
    <group ref={obj3d} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[-1.439, 1.26, 0]} />
    </group>
  )
}

useGLTF.preload('/shape3d2.gltf')
