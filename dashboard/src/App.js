import './App.css';
import LightDarkButton from './components/LightDarkButton';
import DigitalClock from './components/DigitalClock';
import Timer from './components/Timer';

function App() {
  return (
    // <Draggable>
      <div>
        <LightDarkButton />
        <DigitalClock />
        <Timer />
      </div>
  );
}

export default App;
