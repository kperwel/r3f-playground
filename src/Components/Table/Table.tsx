import { PropsWithChildren } from "react";
import { Vector3 } from "three";

interface TableProps extends PropsWithChildren {
  position: Vector3;
}

function Table({ position, children }: TableProps) {
  return (
    <group position={position.clone().add(new Vector3(0, 0.5, 0))}>
      <mesh receiveShadow>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color="green" />
      </mesh>
      {children !== null ? (
        <group position={[0, 0.5, 0]}>{children}</group>
      ) : null}
    </group>
  );
}

export default Table;
