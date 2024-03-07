import './App.css';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <div>
      <DigitalClock />
      <AnalogClock />
    </div>
  );
}

export default App;
