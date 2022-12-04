import React, { useRef, useState } from 'react';
import s from './RotatingText.module.scss';
import { ReactComponent as Rotating } from '../../../icons/rotatingText.svg';
import gsap from 'gsap';
import { MorphSVGPlugin, PixiPlugin } from 'gsap/all';

const RotatingText = () => {
    const firstCircle = useRef(null);
    const [clicked, setClicked] = useState(false);
    // gsap.registerPlugin(PixiPlugin);
    // gsap.set(firstCircle, { scale: '1', transformOrigin: 'center center' });

    const onClickCircle = () => {
        gsap.to(firstCircle, {
            scaleX: '2',
            transformOrigin: 'center center',
            duration: '0.3',
            ease: 'power3.out',
        });
        setClicked(true);
        console.log('aa');
    };

    return (
        <>
            <Rotating
                className={s.rotating}
                ref={firstCircle}
                onClick={onClickCircle}
            />
        </>
    );
};

export default RotatingText;
