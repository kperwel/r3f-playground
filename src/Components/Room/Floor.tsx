import { useTexture } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { ReactElement } from "react";
import { Vector3 } from "three";

interface FloorProps {
  from: Vector3;
  to: Vector3;
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

const textures = [
  '/carpet/carpet-ao.jpg',
  '/carpet/carpet-diffuse.jpg',
  '/carpet/carpet-displacement.jpg',
  '/carpet/carpet-normal.jpg',
  '/carpet/carpet-specular.jpg',
]

function Floor({ from, to }: FloorProps): ReactElement {
  const { left, bottom, width, height } = getRectangle(from, to);

  const [ao, diffuse, displacement, normal, specular] = useTexture(textures)

  return (
    <mesh
      rotation={rotation}
      position={[left + width / 2, 0, bottom + height / 2]}
    >
      <planeGeometry args={[width, height]} />
      <meshPhongMaterial 
        map={diffuse}
        aoMap={ao}
        displacementMap={displacement}
        normalMap={normal}
        specularMap={specular}
      />
    </mesh>
  );
}

export default Floor;
