import { useTexture } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { ReactElement, useEffect, useRef } from "react";
import { BoxGeometry, Quaternion, Vector3 } from "three";

interface WallProps {
  from: Vector3;
  to: Vector3;
  height: number;
  thickness: number;
}

const textures = ["/wall2/wall_basecolor.jpg"];

function Wall({ from, to, height, thickness }: WallProps): ReactElement {
  const [diffuse] = useTexture(textures);

  const direction = to.clone().sub(from).normalize();
  const quaternion = new Quaternion().setFromUnitVectors(
    new Vector3(1, 0, 0),
    direction
  );

  return (
    <group quaternion={quaternion} position={from}>
      <mesh position={[from.distanceTo(to) / 2, height / 2, 0]}>
        <boxGeometry args={[from.distanceTo(to), height, thickness]} />
        <meshStandardMaterial map={diffuse} />
      </mesh>
    </group>
  );
}

export default Wall;
