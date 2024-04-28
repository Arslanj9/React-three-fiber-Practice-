import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Shape3d3 from '../../Shape3d3';
import Text from '../../components/Text'

const Model1 = () => {
  return (
    <>
      <div id="container">
        <Text />
        <Canvas id="canvas">
          <Suspense fallback={null}>
            <directionalLight position={[4, 2, 6]} />
            <OrbitControls />
            <Shape3d3 />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Model1;
