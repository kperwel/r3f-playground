import { useTransition } from "@react-spring/three";
import { Vector3Tuple, Vector3 } from "three";
import { Euler, useThree } from "@react-three/fiber";
import { Card } from "../../Store/card";

export default function useCardTransition(cards: Array<Card>) {
  const camera = useThree((state) => state.camera)
  return useTransition(cards, {
    from: {
      position: [0, 0, 0] as Vector3Tuple,
      rotation: [0, 0, 0] as any as Vector3,
    },
    keys: item => item.id, 
    enter: (item) => async (next) => {
      const index = cards.indexOf(item);
      const reversed = cards.length - index;

      await next({
        position: [0.3, 0.5, (1 - index) / 10] as Vector3Tuple,
        rotation: [0, -camera.rotation.x - (Math.PI / 2), Math.PI - Math.PI / 4] as Euler,
      });
      await next({
        position: [
          -0.05 * index,
          0.001 * (index + 1),
          -0.25 - 0.1 * index,
        ] as Vector3Tuple,
        rotation: [0, 0, Math.PI] as Euler,
      });
    },
    leave: (item) => async (next) => {
      const index = cards.indexOf(item);
      const reversed = cards.length - index;
      await next({
        position: [0.5, 0.01 * reversed, 0] as Vector3Tuple,
        rotation: [0, 0, 0] as Euler,
      });
      await next({
        position: [0, 0.001 * reversed, 0] as Vector3Tuple,
        rotation: [0, 0, 0] as Euler,
      });
    },
  });
}
