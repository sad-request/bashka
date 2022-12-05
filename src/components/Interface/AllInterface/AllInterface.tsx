import React, { useEffect, useRef } from 'react';
import Link from '../Link/Link';
import s from './AllInterface.module.scss';
import { ReactComponent as LogoBashka } from '../../../icons/logoBashka.svg';
import RotatingText from '../RotatingText/RotatingText';
import gsap from 'gsap';
import Cursor from '../Cursor/Cursor';
import { useSnapshot } from 'valtio';
import state from '../../../state';
import RotatingItem from '../RotatingText/RotatingItem';

const AllInterface = () => {
    const rotationAnim = useRef(null);
    const logoAnim = useRef(null);
    const linkAnim = useRef(null);
    const linkProjectAnim = useRef(null);
    const textAnim = useRef(null);
    const rotationItemAnim = useRef(null);

    const snap = useSnapshot(state);

    useEffect(() => {
        gsap.from(rotationAnim.current, {
            y: '650',
            rotate: '-100deg',
            delay: '0.7',
            duration: '2',
            ease: 'power3.out',
        });
        gsap.from(logoAnim.current, {
            y: '500',
            delay: '0.2',
            duration: '2',
            ease: 'power3.out',
        });
        gsap.from(textAnim.current, {
            // y: '500',
            opacity: '0',
            delay: '0.2',
            duration: '2',
            ease: 'power3.out',
        });
        gsap.from(linkAnim.current, {
            y: '100',
            delay: '0.2',
            duration: '1',
            ease: 'power3.out',
        });
        gsap.from(linkProjectAnim.current, {
            y: '100',
            delay: '0.3',
            duration: '1',
            ease: 'power3.out',
        });
    }, [window.onload]);

    useEffect(() => {
        console.log(snap.rotatingCircleClicked);
        if (snap.rotatingCircleClicked) {
            gsap.to(logoAnim.current, {
                y: '-100',
                x: '-132',
                scale: '0.4',
                duration: '0.75',
                ease: 'power3.out',
            });
            gsap.to(rotationAnim.current, {
                y: '650',
                rotate: '-100deg',
                delay: '0.2',
                duration: '2',
                ease: 'power3.out',
            });
            gsap.to(textAnim.current, {
                // y: '500',
                opacity: '0',
                delay: '0.2',
                duration: '1',
                ease: 'power3.out',
            });
            gsap.to(linkAnim.current, {
                y: '100',
                delay: '0.2',
                duration: '1.6',
                ease: 'power3.out',
            });
            gsap.to(linkProjectAnim.current, {
                y: '100',
                delay: '0.3',
                duration: '1.6',
                ease: 'power3.out',
            });
            gsap.fromTo(
                rotationItemAnim.current,
                {
                    // x: '-800',
                    rotate: '-50deg',
                },
                {
                    y: '-2500',
                    // x: '0',
                    rotate: '0deg',
                    delay: '0.7',
                    duration: '2.3',
                    ease: 'power2.out',
                }
            );
        }
    }, [snap.rotatingCircleClicked]);

    return (
        <div className={s.main_grid}>
            <div className={s.content_block}>
                <div className={s.link_container}>
                    <div className={s.logo_container}>
                        <LogoBashka className={s.logo} ref={logoAnim} />
                        <div ref={linkAnim}>
                            <Link text={'Предскажет будущее'} />
                        </div>
                    </div>
                    <div className={s.overflow_hidden}>
                        <div ref={linkProjectAnim}>
                            <Link text={'о проекте'} />
                        </div>
                    </div>
                </div>

                <div></div>
                <p className={s.text} ref={textAnim}>
                    Издревле сущестовало лишь солнце, вода, земля, огонь и....
                    башка. Она познала этот мир будто прожила три миллиарда лет
                    на трех триллиардах планет и теперь видит все будущее. Башка
                    готова поделиься своими сакральными знаниями с миром. здесь
                    и сейчас.
                </p>
            </div>
            <div className={s.rotation} ref={rotationAnim}>
                <RotatingText />
            </div>
            <div className={s.rotationItem} ref={rotationItemAnim}>
                <RotatingItem />
            </div>
        </div>
    );
};

export default AllInterface;
