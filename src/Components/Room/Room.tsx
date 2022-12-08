import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PropsWithChildren, ReactElement, useRef } from "react";
import { DirectionalLight, Line, PointLight, Vector3, Vector3Tuple } from "three";
import Floor from "./Floor";
import Wall from "./Wall";

interface RoomProps extends PropsWithChildren {
  width: number;
  length: number;
  height: number;
  wallTexture: string;
  floorTexture: string;
}

type props = {
  start: number[];
  end: number[];
};

function Room({
  children,
  width,
  length,
  height,
  wallTexture,
  floorTexture,
}: RoomProps) {
  const corners = createCorners(width, length);
  const light = useRef<null | PointLight>(null);

  useFrame((state) => {
    if (!light.current) {
      return;
    }

    light.current.position.x = Math.cos(Math.PI + state.clock.getElapsedTime()) * 1;
    light.current.position.z = Math.sin(Math.PI + state.clock.getElapsedTime()) * 1;
  });

  return (
    <>

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <pointLight ref={light} intensity={0.2} castShadow color="white" position={[0, 3, 0]} />
      <Floor texture={floorTexture} from={corners[0]} to={corners[2]} />
      {wrapVectorsAroundThePoints(corners, (from, to, index) => (
        <Wall
          from={from}
          to={to}
          key={index}
          height={height}
          texture={wallTexture}
        />
      ))}
      <group position={[0, 0, 0]}>{children}</group>
      {/* <Environment preset="city" /> */}
    </>
  );
}

function createCorners(width: number, length: number) {
  const x = width / 2;
  const z = length / 2;
  return [
    new Vector3(x, 0, -z),
    new Vector3(x, 0, z),
    new Vector3(-x, 0, z),
    new Vector3(-x, 0, -z),
  ];
}

function wrapVectorsAroundThePoints(
  corners: Array<Vector3>,
  createWall: (from: Vector3, to: Vector3, index: number) => ReactElement
) {
  return corners.reduce(
    (walls, _corner, index) =>
      walls.concat(
        createWall(corners.at(index - 1)!, corners.at(index)!, index)
      ),
    [] as Array<ReactElement>
  );
}

export default Room;
