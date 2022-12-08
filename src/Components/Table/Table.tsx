import { useGLTF, useTexture } from "@react-three/drei";
import { PropsWithChildren } from "react";
import { Group, Mesh, Vector3 } from "three";

interface TableProps extends PropsWithChildren {
  position: Vector3;
}
//  as unknown as GLTFResult
26;
// 27  return <mesh material={materials['Material.001']} geometry={(nodes.Suzanne as Mesh).geometry} />
function Model() {
  const gltf = useGLTF("/tablewithtexture.glb");
  console.log(gltf);
  return (
    <group scale={2}>
      <mesh castShadow receiveShadow material={gltf.materials.Table} geometry={(gltf.nodes.Cylinder001 as Mesh).geometry} />
      <mesh castShadow receiveShadow geometry={(gltf.nodes.Cylinder001_1 as Mesh).geometry}>
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
  // return (<primitive object={gltf.scene} />)
}

function Table({ position, children }: TableProps) {
  return (
    <group position={position}>
      <Model />
      {children !== null ? (
        <group position={[-0.1, 0.9, 0]}>{children}</group>
      ) : null}
    </group>
  );
}

export default Table;
