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

const textures = [
  "/wall2/wall_basecolor.jpg",
  "/wall2/wall_metallic.jpg",
  "/wall2/wall_normal.jpg",
  "/wall2/wall_roughness.jpg",
];

function Wall({ from, to, height, thickness }: WallProps): ReactElement {
  const geometry = useRef<BoxGeometry | null>(null);

  const [diffuse, mettalic, normal, roughness] = useTexture(textures);

  useEffect(() => {
    if (geometry.current === null) {
      return;
    }
    geometry.current.center();
    geometry.current.translate(from.distanceTo(to) / 2, height / 2, 0);
  }, [geometry, from, to, height]);

  const direction = to.clone().sub(from).normalize();
  const quaternion = new Quaternion().setFromUnitVectors(
    new Vector3(1, 0, 0),
    direction
  );

  return (
    <mesh quaternion={quaternion} position={from}>
      <boxGeometry
        ref={geometry}
        args={[from.distanceTo(to), height, thickness]}
      />
      <meshStandardMaterial
        normalMap={normal}
        map={diffuse}
        metalnessMap={mettalic}
        roughnessMap={roughness}
      />
    </mesh>
  );
}

export default Wall;
