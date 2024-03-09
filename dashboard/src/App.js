import './App.css';
import LightDarkButton from './components/LightDarkButton';
import DigitalClock from './components/DigitalClock';
// import Draggable from 'react-draggable';

function App() {
  return (
    // <Draggable>
      <div>
        <LightDarkButton />
        <DigitalClock />
      </div>
    // </Draggable>
  );
}

export default App;
