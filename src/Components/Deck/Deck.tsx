import { Vector3 } from "three";
import Card from "./Card";

import { animated as a } from "@react-spring/three";
import { useState } from "react";
import FakeCards from "./FakeCards";
import useCardTransition from "./useCardTransition";
import { useCards } from "../../Store/useCards";

function Deck() {
  const [cards, drawCard] = useCards();
  const transitions = useCardTransition(cards);

  return (
    <group castShadow position={new Vector3(0, 0, 0)} onClick={drawCard}>
      <FakeCards />
      {transitions((spring, card) => (
        <a.group {...spring} key={card}>
          <Card />
        </a.group>
      ))}
    </group>
  );
}

export default Deck;
