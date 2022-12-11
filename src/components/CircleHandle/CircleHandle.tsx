import Draggable from 'gsap/Draggable';
import React, { useRef } from 'react';
import s from './CircleHandle.module.scss';
import gsap from 'gsap';

const CircleHandle = () => {
    const rotationCircleHandle = useRef(null);
    gsap.registerPlugin(Draggable);
    const snapping = 72;
    Draggable.create(rotationCircleHandle.current, {
        type: 'rotation',
        throwProps: true,
        snap: function (value) {
            console.log(value);

            return Math.floor(value / 72) * 72;
        },
    });

    return (
        <div className={s.path} ref={rotationCircleHandle}>
            <div className={s.handle}></div>
        </div>
    );
};

export default CircleHandle;
