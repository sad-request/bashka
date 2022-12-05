import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import bashka from '../../models/bashka.gltf';
import textureImage from '../../models/textures/rock-basecolor.png';
import normalImage from '../../models/textures/NormalMap.png';
import { Vector2 } from 'three';
import { gsap } from 'gsap';
import { lerp } from '../../utils';
import { throttle } from 'underscore';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import state from '../../state';

type GLTFResult = GLTF & {
    nodes: {
        Scene: THREE.Scene;
    };
    materials: { [key: string]: THREE.Material };
};
const Bashka = () => {
    const bashkaRef = useRef<THREE.Group>(null!);
    const snap = useSnapshot(state);

    useFrame(() => {
        if (bashkaRef.current.position.y < -1.3) {
            bashkaRef.current.position.y = bashkaRef.current.position.y + 0.02;
            bashkaRef.current.rotation.y =
                bashkaRef.current.rotation.y + Math.PI / 33;
        }
        if (snap.rotatingCircleClicked && bashkaRef.current.position.y < -0.5) {
            bashkaRef.current.position.y = bashkaRef.current.position.y + 0.04;
            bashkaRef.current.position.x = bashkaRef.current.position.x + 0.02;
            bashkaRef.current.scale.x = bashkaRef.current.scale.x + 0.015;
            bashkaRef.current.scale.y = bashkaRef.current.scale.y + 0.015;
            bashkaRef.current.scale.z = bashkaRef.current.scale.z + 0.015;
        }
    });
    // let scaleXX = 1;
    // useEffect(() => {
    //     if (snap.rotatingCircleClicked) {
    //         gsap.to(bashkaRef.current, {
    //             scaleXX: '2',
    //             duration: '2',
    //             ease: 'easeOut',
    //         });
    //     }
    //     console.log(bashkaRef.current);
    // }, [snap.rotatingCircleClicked]);

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
    const [pos, setPos] = useState({ x: 0, y: 0 });
    document.addEventListener('mousemove', (e) => {
        setPos((prevState) => ({
            x: e.x - prevState.x,
            y: e.y - prevState.y,
        }));
    });

    useEffect(() => {
        if (pos.x <= 35 && pos.y <= 20) {
            // console.log(pos);
        }

        return () => {};
    }, [pos.x, pos.y]);

    // console.log(pos);

    return (
        <group
            ref={bashkaRef}
            position={[0.7, -4, 0]}
            // rotation={[
            //     (pos.y * Math.PI) / 30 + Math.PI * 2,
            //     (pos.x * Math.PI) / 30 + Math.PI * 2,
            //     0,
            // ]}
            rotation={[0, -Math.PI / 5, 0]}
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
