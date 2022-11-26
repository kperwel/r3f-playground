import { useCallback, useMemo } from "react";
import createFastContext from "./createStore";

const { Provider, useStore } = createFastContext<{ cards: Array<number> }>({
  cards: [],
});

const useCards = () => {
  const [cards, setStore] = useStore((store) => store.cards);

  const drawCard = useCallback(() => {
    if (cards.length < 3) {
      setStore({ cards: [...cards, Math.random()] });
    } else {
      setStore({ cards: [] });
    }
  }, [setStore, cards]);

  return useMemo(() => [cards, drawCard] as const, [cards, drawCard]);
};

export { Provider, useCards };
