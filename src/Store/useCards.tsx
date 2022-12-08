import { useCallback, useMemo } from "react";
import createFastContext from "./createStore";
import { Card, createCard } from "./card";

const { Provider, useStore } = createFastContext<{ cards: Array<Card> }>({
  cards: [],
});

const useCards = () => {
  const [cards, setStore] = useStore((store) => store.cards);

  const drawCard = useCallback(() => {
    if (cards.length < 3) {
      setStore({ cards: [...cards, createCard()] });
    } else {
      setStore({ cards: [] });
    }
  }, [setStore, cards]);

  return [cards, drawCard];
};

export { Provider, useCards };
