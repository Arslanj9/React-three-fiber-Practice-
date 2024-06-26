import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Shape3d3 from '../../Shape3d3';
import Text from '../../components/Text'

const Model1 = () => {
  return (
    <>
      <div id="container">
        <Text />
        <Canvas id="canvas">
          <Suspense fallback={null}>
            {/* <directionalLight position={[4, 2, 6]} /> */}
            <OrbitControls enableZoom={false} />
            <Shape3d3 />
          </Suspense>
          <Environment preset="sunset"/>
        </Canvas>
      </div>
    </>
  );
};

export default Model1;
