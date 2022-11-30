import React, { useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import bashka from '../../models/bashka.gltf';
import textureImage from '../../models/textures/rock-basecolor.png';
import normalImage from '../../models/textures/NormalMap.png';
import { Vector2 } from 'three';

type GLTFResult = GLTF & {
    nodes: {
        Scene: THREE.Scene;
    };
    materials: { [key: string]: THREE.Material };
};
const Bashka = () => {
    const texture = new THREE.TextureLoader().load(textureImage);
    const normal = new THREE.TextureLoader().load(normalImage);
    // normal.repeat.set(2, 1);
    texture.repeat.set(1.9, 1.3);

    // const material = new THREE.MeshStandardMaterial({
    //     // map: texture,
    //     normalMap: normal,
    //     normalScale: new Vector2(0.2, 0.2),
    // });

    const material = new THREE.MeshStandardMaterial();

    const { nodes } = useGLTF(bashka) as GLTFResult;
    // console.log();

    const [pos, setPos] = useState({ x: 0, y: 0 });
    document.addEventListener('mousemove', (e) => {
        setPos({ x: e.pageX / 100 - 5, y: e.pageY / 100 - 5 });
    });
    console.log(pos);

    return (
        <group
            position={[0.7, -1.3, 0]}
            // rotation={[0, -Math.PI / 5, 0]}
            rotation={[
                (pos.y * Math.PI) / 30 + Math.PI * 2,
                (pos.x * Math.PI) / 30 + Math.PI * 2,
                0,
            ]}
            scale={[1, 1, 1]}
        >
            {nodes.Scene.children.map((child) => (
                //@ts-ignore
                <mesh geometry={child.geometry} material={material}></mesh>
            ))}
        </group>
    );
};

export default Bashka;
