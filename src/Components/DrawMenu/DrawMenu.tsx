import { useCards } from "../../Store/useCards"

const DrawMenu = () => {
    const [_, drawCard] = useCards();
    console.log("update");
    return <button onClick={drawCard}>DRAW</button>
}

export default DrawMenu;