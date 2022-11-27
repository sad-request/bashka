import React from 'react';
import s from './RotatingText.module.scss';
import { ReactComponent as Rotating } from '../../../icons/rotatingText.svg';

const RotatingText = () => {
    return (
        <>
            <Rotating className={s.rotating} />
        </>
    );
};

export default RotatingText;
