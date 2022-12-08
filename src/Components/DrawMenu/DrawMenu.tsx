import { useCards } from "../../Store/useCards";

const DrawMenu = () => {
  const [cards, drawCard] = useCards();
  return (
    <div className="menu">
      <button className="draw-button" onClick={() => drawCard()}>
        {cards.length < 3 ? "DRAW" : "ROUND"}
      </button>
    </div>
  );
};

export default DrawMenu;
