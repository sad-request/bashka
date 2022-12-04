import './App.scss';
import AllInterface from './components/Interface/AllInterface/AllInterface';
import Cursor from './components/Interface/Cursor/Cursor';
import Scene from './components/Scene/Scene';

const App = () => {
    return (
        <div className="all_container">
            <div className="scene_container">
                <Scene />
            </div>
            <Cursor />
            <AllInterface />
        </div>
    );
};

export default App;
