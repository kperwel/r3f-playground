import { useSpring, useSpringRef, useTransition } from "@react-spring/three";
import { Vector3Tuple, Vector3 } from "three";
import { useEffect, useRef } from "react";
import { Card } from "../../Store/card";

export default function useFakeCardsAnimation(cards: Array<Card>) {
  const springRef = useSpringRef();
  const initial = useRef(true);

  useEffect(() => {
    if (cards.length === 0 && !initial.current) {
      springRef.start();
    }
    initial.current = false;
  }, [cards.length]);

  return useSpring({
    ref: springRef,
    from: { position: [0, 0, 0] as Vector3Tuple },
    delay: 400,
    to: async (next) => {
      await next({ position: [0, 0.08, 0] as Vector3Tuple });
      await next({ position: [0, 0, 0] as Vector3Tuple });
    },
  });
}
