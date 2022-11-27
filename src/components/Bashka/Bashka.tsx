import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import mushroom from '../../models/mushroom.glb';

type GLTFResult = GLTF & {
    nodes: {
        Scene: THREE.Scene;
    };
    materials: { [key: string]: THREE.Material };
};
const Bashka = () => {
    const material = new THREE.MeshStandardMaterial({ color: '#e2e2e2' });
    const { nodes } = useGLTF(mushroom) as GLTFResult;

    return (
        <group position={[0.3, -0.5, 0]}>
            {nodes.Scene.children.map((child) => (
                //@ts-ignore
                <mesh geometry={child.geometry} material={material}></mesh>
            ))}
        </group>
    );
};

export default Bashka;
