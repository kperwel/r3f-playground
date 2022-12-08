import { useTexture } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { ReactElement } from "react";
import { Texture, Vector3, Vector3Tuple, RepeatWrapping, Vector2 } from "three";

interface FloorProps {
  from: Vector3;
  to: Vector3;
  texture: string;
}

const getRectangle = (p1: Vector3, p2: Vector3) => {
  const left = Math.min(p1.x, p2.x);
  const right = Math.max(p1.x, p2.x);
  const top = Math.max(p1.z, p2.z);
  const bottom = Math.min(p1.z, p2.z);
  const width = right - left;
  const height = top - bottom;

  return { left, bottom, width, height };
};

const rotation: Euler = [-Math.PI / 2, 0, 0];

function Floor({ from, to, texture }: FloorProps): ReactElement {
  const { left, bottom, width, height } = getRectangle(from, to);
  const diffuse = useTexture(texture);
  const originShift: Vector3Tuple = [left + width / 2, 0, bottom + height / 2];

  return (
    <mesh rotation={rotation} receiveShadow position={originShift}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={diffuse} />
    </mesh>
  );
}

export default Floor;
