import { Vector3, DoubleSide, Mesh, Vector3Tuple } from "three";
import { useSpring, animated as a } from "@react-spring/three";
import { useRef } from "react";
import { MeshProps } from "@react-three/fiber";

interface CardPropsType extends MeshProps {
  shown: boolean;
}

function Card({ shown }: CardPropsType) {
  const spring = useSpring({
    "rotation-x": !shown ? -Math.PI / 2 : Math.PI / 2,
    position: !shown
      ? ([0, 0.11, 0] as Vector3Tuple)
      : ([0, 0.01, -0.25] as Vector3Tuple),
    config: { mass: 1, tension: 100 },
  });

  return (
    <a.mesh rotation={[-Math.PI / 2, 0, 0]} {...spring}>
      <planeGeometry args={[0.3, 0.2]} />
      <meshStandardMaterial side={DoubleSide} color="yellow" />
    </a.mesh>
  );
}

export default Card;
