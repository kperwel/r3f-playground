import { Mesh, Vector3 } from "three";
import Card from "./Card";

import { useSpring, animated } from "@react-spring/three";
import { useRef, useState } from "react";
import FakeCards from "./FakeCards";

const CARDS = ["A", "B", "C", "D", "E"];

function Deck() {
  const [num, setNum] = useState(0);

  return (
    <group
      castShadow
      position={new Vector3(0, 0, 0)}
      onClick={() => setNum(num + 1)}
    >
      {new Array(num).fill("").map((_, key) => (
        <Card shown={true} key={key} />
      ))}
      <FakeCards />
    </group>
  );
}

export default Deck;
