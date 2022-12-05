import React, { useEffect, useRef, useState } from 'react';
import s from './RotatingText.module.scss';
import { ReactComponent as Rotating } from '../../../icons/chooseCardCircle.svg';
import gsap from 'gsap';
import state from '../../../state';
import { useSnapshot } from 'valtio';

const RotatingItem = () => {
    const snap = useSnapshot(state);

    const firstCircle = useRef(null);

    return (
        <>
            <Rotating
                className={s.rotatingItem}
                ref={firstCircle}
                onClick={() =>
                    (state.rotatingCircleClicked = !state.rotatingCircleClicked)
                }
            />
        </>
    );
};

export default RotatingItem;
