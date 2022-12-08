import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Room from "./Components/Room/Room";
import Deck from "./Components/Deck";
import Table from "./Components/Table";
import { Vector3 } from "three";
import { Suspense } from "react";

const azimuthAngle = 2 * (Math.PI / 4);
const azimuthMovementLimit = Math.PI / 4;

const polarAngle = Math.PI / 4;
const polarMovementLimit = Math.PI / 8;

function App() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas shadows>
        <Room
          width={6}
          length={6}
          height={3}
          floorTexture="/floor.png"
          wallTexture="/wall.png"
        >
          <Table position={new Vector3(0, 0, 0)}>
            <Deck />
          </Table>
        </Room>

        <OrbitControls
          target={[0, 0.7, 0]}
          enablePan={false}
          enableZoom={true}
          maxDistance={3}
          minDistance={2}
          minPolarAngle={polarAngle - polarMovementLimit / 2}
          maxPolarAngle={polarAngle + polarMovementLimit / 2}
          minAzimuthAngle={azimuthAngle - azimuthMovementLimit / 2}
          maxAzimuthAngle={azimuthAngle + azimuthMovementLimit / 2}
        />
        <axesHelper />
        <gridHelper />
      </Canvas>
    </Suspense>
  );
}

export default App;
