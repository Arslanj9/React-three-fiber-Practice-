import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Shape3d2 from './Shape3d2';

function App() {
  return (
    <Canvas style={{marginTop: "100px"}}>
      <Suspense fallback={null}>
        <directionalLight position={[4, 2, 6]}/>
        <OrbitControls />
        <Shape3d2 />
      </Suspense>
    </Canvas>
  );
}

export default App;
