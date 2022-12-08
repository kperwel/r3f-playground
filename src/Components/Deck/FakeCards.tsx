import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import {
  Vector3,
  DoubleSide,
  FrontSide,
  RepeatWrapping,
  Texture,
  Vector2,
  CubeTexture,
} from "three";

function FakeCards() {
  const flowers = useTexture("/flowers.png", (t) => {
    if (t instanceof Texture) {
      t.wrapS = t.wrapT = RepeatWrapping;
      t.repeat = new Vector2(2, 1.2);
    }
  });
  return (
    <group>
      <mesh castShadow position={new Vector3(0, 0.05, 0)}>
        <boxGeometry args={[0.3, 0.1, 0.2]} />
        <meshStandardMaterial map={flowers} />
      </mesh>
    </group>
  );
}

export default FakeCards;
