import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Shape3d2 from '../../Shape3d2';
import Text from '../../components/Text'

const Model1 = () => {
  return (
    <>
      <div id="container">
        <Canvas id="canvas">
          <Suspense fallback={null}>
            {/* <directionalLight position={[4, 2, 6]} /> */}
            <OrbitControls enableZoom={false} />
            <Shape3d2 />
          </Suspense>
          <Environment preset="sunset"/>
        </Canvas>
        <Text />
      </div>
    </>
  );
};

export default Model1;
