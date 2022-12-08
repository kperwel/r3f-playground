import { Vector3 } from "three";
import Card from "./Card";

import { animated as a } from "@react-spring/three";
import FakeCards from "./FakeCards";
import useCardTransition from "./useCardTransition";
import { useCards } from "../../Store/useCards";
import useFakeCardsAnimation from "./useFakeCardsAnimation";

function Deck() {
  const [cards, drawCard] = useCards();
  const cardsTransition = useCardTransition(cards);
  const animationProps = useFakeCardsAnimation(cards);

  return (
    <group castShadow position={new Vector3(0, 0, 0)} onClick={drawCard}>
      <a.group { ...animationProps }>
        <FakeCards />
      </a.group>

      {cardsTransition((spring, card) => (
        <a.group {...spring} key={card.id}>
          <Card card={card} showLabel={cards.includes(card)} />
        </a.group>
      ))}
    </group>
  );
}

export default Deck;
