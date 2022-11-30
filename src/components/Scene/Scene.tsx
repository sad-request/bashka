import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Bashka from '../Bashka/Bashka';
import ChosenItem from '../ChosenItem';
import s from './Scene.module.scss';

const Scene = () => {
    return (
        <div className={s.canvas}>
            <Canvas camera={{ fov: 12, position: [0, 0, 12] }} flat linear>
                <Suspense fallback={null}>
                    <pointLight position={[3, 5, 3]} intensity={1} />
                    {/* <pointLight position={[-10, -10, 10]} intensity={0.2} /> */}
                    {/* <ChosenItem /> */}
                    <Bashka />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
