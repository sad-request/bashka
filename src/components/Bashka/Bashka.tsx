import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import bashka from '../../models/bashka.gltf';
import textureImage from '../../models/textures/rock-basecolor.png';
import normalImage from '../../models/textures/NormalMap.png';
import { Vector2 } from 'three';
import { gsap } from 'gsap';
import { lerp, mapInterval } from '../../utils';
import _, { throttle } from 'underscore';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { a } from '@react-spring/three';
import { useSpring, config } from 'react-spring';

type GLTFResult = GLTF & {
    nodes: {
        Scene: THREE.Scene;
    };
    materials: { [key: string]: THREE.Material };
};

type BashkaSpring = {
    x: number;
    y: number;
    z: number;
    rotationx: number;
    rotationy: number;
    rotationz: number;
    scalex: number;
    scaley: number;
    scalez: number;
};

const Bashka = () => {
    const bashkaRef = useRef<THREE.Group>(null!);
    const snap = useSnapshot(state);

    const [bashkaSpring, setBashkaSpring] = useSpring<BashkaSpring>(() => ({
        x: 0.7,
        y: -4,
        z: 0,
        rotationx: 0,
        rotationy: 0,
        rotationz: 0,
        scalex: 1,
        scaley: 1,
        scalez: 1,
        config: config.molasses,
    }));

    useEffect(() => {
        setBashkaSpring({
            y: lerp(-2, 0.5, 0.25),
            rotationy: lerp(0, 24, 0.5),
        });
    }, [window.onload]);

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
            x: e.pageX,
            y: e.pageY,
        }));
    });

    const settingRotationFunc = () => {
        setBashkaSpring({
            rotationy: lerp(5, pos.x / 20, 0.02),
            rotationx: lerp(-0.7, pos.y / 20, 0.03),
            // rotationy: lerp(0, pos.y / 100 / Math.PI, 0.5),
        });
    };

    const all = _.throttle(settingRotationFunc, 2000);

    useEffect(() => {
        all();
    }, [pos.x, pos.y]);

    useEffect(() => {
        if (snap.rotatingCircleClicked) {
            setBashkaSpring({
                scalex: lerp(1, 1.7, 0.5),
                scaley: lerp(1, 1.7, 0.5),
                scalez: lerp(1, 1.7, 0.5),
                y: lerp(-1, 0, 0.5),
                x: lerp(1, 2, 0.5),
            });
        }
    }, [snap.rotatingCircleClicked]);

    // console.log(pos);

    return (
        <a.group
            ref={bashkaRef}
            // position={[bashkaSpring.x, bashkaSpring.y, bashkaSpring.z]}
            position-x={bashkaSpring.x}
            position-y={bashkaSpring.y}
            position-z={bashkaSpring.z}
            // rotation={[
            //     (pos.y * Math.PI) / 30 + Math.PI * 2,
            //     (pos.x * Math.PI) / 30 + Math.PI * 2,
            //     0,
            // ]}
            // rotation={[0, -Math.PI / 5, 0]}
            rotation-x={bashkaSpring.rotationx}
            rotation-y={bashkaSpring.rotationy}
            rotation-z={bashkaSpring.rotationz}
            scale-x={bashkaSpring.scalex}
            scale-y={bashkaSpring.scaley}
            scale-z={bashkaSpring.scalez}
        >
            {nodes.Scene.children.map((child) => (
                //@ts-ignore
                <mesh geometry={child.geometry} material={material}></mesh>
            ))}
        </a.group>
    );
};

export default Bashka;
