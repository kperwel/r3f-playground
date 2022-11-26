import { useTexture } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { ReactElement, useEffect, useMemo, useRef } from "react";
import { BoxGeometry, Quaternion, Vector3 } from "three";

interface WallProps {
  from: Vector3;
  to: Vector3;
  height: number;
  thickness: number;
  texture: string;
}

function Wall({ from, to, height, thickness, texture }: WallProps): ReactElement {
  const diffuse = useTexture(texture);

  const quaternion = useMemo(() => {
    const direction = to.clone().sub(from).normalize();
    return new Quaternion().setFromUnitVectors(new Vector3(1, 0, 0), direction);
  }, [to, from]);

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
