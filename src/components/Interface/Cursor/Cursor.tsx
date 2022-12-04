import React, { useEffect, useRef, useState } from 'react';
import s from './Cursor.module.scss';
import { gsap } from 'gsap';
import { getMousePos } from '../../../utils';

const Cursor = () => {
    const mouseRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isMovedIn, setIsMovedIn] = useState(false);
    window.addEventListener('mousemove', (e) => setPos(getMousePos(e)));
    window.addEventListener('mouseenter', () => setIsMovedIn(true));
    useEffect(() => {
        gsap.to(mouseRef.current, {
            y: pos.y,
            x: pos.x,
            ease: 'power3.out',
        });
        if (isMovedIn) {
            gsap.to(mouseRef.current, { scale: 3, ease: 'power3.out' });
        }
    }, [pos, isMovedIn]);
    console.log(isMovedIn);

    return <div className={s.cursor} ref={mouseRef}></div>;
};

export default Cursor;
