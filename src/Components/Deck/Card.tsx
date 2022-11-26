import { Euler } from "@react-three/fiber";
import { DoubleSide } from "three";

const sample = function <T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
};

const colors = ["red", "pink", "blue", "yellow"];
const rotation: Euler = [-Math.PI / 2, 0, 0];

function Card() {
  return (
    <mesh rotation={rotation}>
      <planeGeometry args={[0.3, 0.2]} />
      <meshStandardMaterial side={DoubleSide} color={sample(colors)} />
    </mesh>
  );
}

export default Card;
