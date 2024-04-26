import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <>

      <Canvas>
        <directionalLight position={[0, 1, 2]} />
        <mesh position={[1, 1, 0]}>
          <boxGeometry args={[1, 1, 4]}/>
          <meshStandardMaterial color={"green"}/>
        </mesh>
      </Canvas>
    </>
  )
}

export default App
