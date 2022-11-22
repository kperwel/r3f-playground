import { useFrame } from "@react-three/fiber";
import { PropsWithChildren, useRef } from "react";
import { DirectionalLight, Light, PointLight, Vector3 } from "three";
import Floor from "./Floor";
import Wall from "./Wall";

const corners = [
  new Vector3(-3, 0, -3),
  new Vector3(-3, 0, 3),
  new Vector3(3, 0, 3),
];

interface RoomProps extends PropsWithChildren {
  width: number;
  length: number;
  height: number;
}

function Room({ children, width, length, height }: RoomProps) {
  const corners = createCorners(width, length);
  const light = useRef<null | PointLight>(null);

  useFrame((state) => {
    if (!light.current) {
      return;
    }

    light.current.position.x =
      10 + Math.cos(Math.PI + state.clock.elapsedTime) * 10;
  });

  return (
    <>
      <ambientLight />
      <pointLight
        ref={light}
        castShadow
        color="white"
        position={[0, 10, 0]}
      />
      <Floor from={corners[0]} to={corners[2]} />
      <Wall from={corners[0]} to={corners[1]} height={height} thickness={0.2} />
      <Wall from={corners[1]} to={corners[2]} height={height} thickness={0.2} />
      <group position={[0, 0, 0]}>{children}</group>
    </>
  );
}

function createCorners(width: number, length: number) {
  return [
    new Vector3(-width / 2, 0, -length / 2),
    new Vector3(-width / 2, 0, length / 2),
    new Vector3(width / 2, 0, length / 2),
  ];
}

export default Room;
