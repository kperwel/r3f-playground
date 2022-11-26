import { useTransition } from "@react-spring/three";
import { Vector3Tuple, Vector3 } from "three";
import { Euler } from "@react-three/fiber";

export default function useCardTransition(cards: Array<number>) {
  return useTransition(cards, {
    keys: (item) => item,
    sort: (_item, key) => key,
    from: {
      position: [0, 0, 0] as Vector3Tuple,
      rotation: [0, 0, 0] as any as Vector3,
    },
    enter: (_, index) => async (next, cancel) => {
      await next({
        position: [0.3, 0.5, 0] as Vector3Tuple,
        rotation: [0, 0, Math.PI - Math.PI / 4] as Euler,
      });
      await next({
        position: [
          -0.05 * index,
          0.001 * (index + 1),
          -0.25 - 0.05 * index,
        ] as Vector3Tuple,
        rotation: [0, 0, Math.PI] as Euler,
      });
    },
    leave: () => async (next, cancel) => {
      await next({
        position: [0.5, 0.001, 0] as Vector3Tuple,
        rotation: [0, 0, 0] as Euler,
      });
      await next({
        position: [0, 0, 0] as Vector3Tuple,
        rotation: [0, 0, 0] as Euler,
      });
    },
  });
}
