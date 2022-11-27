import React from 'react';
import Link from '../Link/Link';
import s from './AllInterface.module.scss';
import { ReactComponent as LogoBashka } from '../../../icons/logoBashka.svg';
import RotatingText from '../RotatingText/RotatingText';

const AllInterface = () => {
    return (
        <div className={s.main_grid}>
            <div className={s.content_block}>
                <div className={s.link_container}>
                    <div className={s.logo_container}>
                        <LogoBashka className={s.logo} />
                        <Link text={'Предскажет будущее'} />
                    </div>
                    <Link text={'о проекте'} />
                </div>

                <div></div>
                <p className={s.text}>
                    Издревле сущестовало лишь солнце, вода, земля, огонь и....
                    башка. Она познала этот мир будто прожила три миллиарда лет
                    на трех триллиардах планет и теперь видит все будущее. Башка
                    готова поделиься своими сакральными знаниями с миром. здесь
                    и сейчас.
                </p>
            </div>
            <div className={s.rotation}>
                <RotatingText />
            </div>
        </div>
    );
};

export default AllInterface;
