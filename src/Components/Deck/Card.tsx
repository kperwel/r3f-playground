import { Euler, useThree } from "@react-three/fiber";
import { BackSide, FrontSide, RepeatWrapping, Texture, Vector2 } from "three";
import { memo } from "react";
import { Label } from "./Label";
import { Card, getLabel } from "../../Store/card";
import { useTexture } from "@react-three/drei";

const rotation: Euler = [-Math.PI / 2, 0, 0];

function CardView({ showLabel, card }: { showLabel: boolean; card: Card }) {
  const flowers = useTexture("/flowers.png", (t) => {
    if (t instanceof Texture) {
      t.wrapS = t.wrapT = RepeatWrapping;
      t.repeat = new Vector2(1.8, 1);
    }
  });
  return (
    <group rotation={rotation}>
      {showLabel ? <Label name={getLabel(card)} /> : null}
      <mesh castShadow>
        <planeGeometry args={[0.3, 0.2]} />
        <meshStandardMaterial color="#fff" side={BackSide} />
      </mesh>
      <mesh castShadow>
        {showLabel ? <Label name={getLabel(card)} /> : null}
        <planeGeometry args={[0.3, 0.2]} />
        <meshStandardMaterial map={flowers} side={FrontSide} />
      </mesh>
    </group>
  );
}

export default memo(CardView);
