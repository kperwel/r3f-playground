import { Html } from "@react-three/drei";

export function Label({ name }: { name: string }) {
  return (
    <Html as="div" center distanceFactor={3}>
      <h1 className="card-name">{name}</h1>
    </Html>
  );
}
