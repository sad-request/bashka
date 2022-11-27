import React from 'react';
import s from './Link.module.scss';

const Link = (props: { text: string }) => {
    return <p className={s.link}>{props.text}</p>;
};

export default Link;
