import { useTexture } from "@react-three/drei";
import { ReactElement, useMemo } from "react";
import { DoubleSide, Euler, Quaternion, Vector3 } from "three";

interface WallProps {
  from: Vector3;
  to: Vector3;
  height: number;
  texture: string;
}

const orientation = new Vector3(1, 0, 0);

function Wall({ from, to, height, texture }: WallProps): ReactElement {
  const diffuse = useTexture(texture);

  const quaternion = useMemo(() => {
    const direction = to.clone().sub(from).normalize();
    return new Quaternion().setFromUnitVectors(orientation, direction);
  }, [to, from]);

  const length = from.distanceTo(to);

  return (
    <group quaternion={quaternion} receiveShadow position={from}>
      <mesh position={[length / 2, height / 2, 0]}>
        <planeGeometry args={[length, height]} />
        <meshStandardMaterial map={diffuse} />
      </mesh>
    </group>
  );
}

export default Wall;
