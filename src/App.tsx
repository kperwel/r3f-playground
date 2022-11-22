import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Room from "./Components/Room/Room";
import Deck from "./Components/Deck";
import Table from "./Components/Table";
import { Vector3 } from "three";

function App() {
  return (
    <Canvas shadows>
      <color attach="background" args={['#666']} />
      <ambientLight />
      
      <Room width={4} length={4} height={3}>
        <Table position={new Vector3()}>
          <Deck />
        </Table>
      </Room>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
        minAzimuthAngle={(Math.PI / 2)}
        maxAzimuthAngle={2 * (Math.PI / 2)}
      />
      <axesHelper />
      <gridHelper />
    </Canvas>
  );
}

export default App;
