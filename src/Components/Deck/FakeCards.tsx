import { Vector3, DoubleSide } from "three";

function FakeCards() {
  return (
    <group position={new Vector3(0, 0, 0)}>
      <mesh castShadow position={new Vector3(0, 0.05, 0)}>
        <boxGeometry args={[0.3, 0.1, 0.2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

export default FakeCards;
