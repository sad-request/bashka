import './App.scss';
import AllInterface from './components/Interface/AllInterface/AllInterface';
import Scene from './components/Scene/Scene';

const App = () => {
    return (
        <div className="all_container">
            <div className="scene_container">
                <Scene />
            </div>
            <AllInterface />
        </div>
    );
};

export default App;
