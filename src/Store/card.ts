import { sample } from "../utils/array";

enum SUIT {
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Spades = "Spades",
}
enum COURT {
  Ace = "Ace",
  King = "King",
  Queen = "Queen",
  Jack = "Jack",
}
const pips = [2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const courts = [COURT.Ace, COURT.Jack, COURT.King, COURT.Queen];
const suits = [SUIT.Clubs, SUIT.Diamonds, SUIT.Hearts, SUIT.Spades];
const ranks = [...courts, ...pips];

function isPip(
  rank: typeof pips[number] | typeof courts[number]
): rank is typeof pips[number] {
  return pips.includes(rank as typeof pips[number]);
}

const suitsEmojis = new Map<SUIT, string>([
  [SUIT.Clubs, "♣"],
  [SUIT.Spades, "♠"],
  [SUIT.Hearts, "♥"],
  [SUIT.Diamonds, "♦"],
]);

export function createCard() {
  return {
    id: Math.random(),
    rank: sample(ranks),
    suit: sample(suits),
  };
}

export type Card = ReturnType<typeof createCard>;

export function getLabel(card: Card) {
  return `${isPip(card.rank) ? card.rank : card.rank[0]}\n${
    suitsEmojis.get(card.suit) ?? "X"
  }`;
}
