// App.jsx
import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';

const Model = () => {
  const modelRef = useRef();

  useFrame(() => {
    // Update the position, rotation, or scale of the model here
    // Example: modelRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={modelRef}>
      {/* Add your 3D model here */}
      <sphereGeometry args={[3, 4, 5]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const App = () => {
  const controlsRef = useRef();

  return (
    <Canvas>
      <OrbitControls ref={controlsRef} />
      <directionalLight />
      <Model />
    </Canvas>
  );
};

export default App;
