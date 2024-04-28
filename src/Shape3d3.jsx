import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Shape3d3(props) {

  const obj3d = useRef()

  useFrame((state, delta) => {
    obj3d.current.rotation.z += delta * 0.3;
    // obj3d.current.rotation.y += delta * 0.3;
  })

  const { nodes, materials } = useGLTF('/shape3d3.gltf')

  return (
    <group ref={obj3d} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/shape3d3.gltf')
