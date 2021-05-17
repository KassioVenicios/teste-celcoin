import backImage from '../assets/images/artboard.png';
import './index.css';

const backGradient = 'linear-gradient(107.65deg, #1042DD 0.43%, #24B0A8 100%)';
const background = 'url(' + backImage + '), ' + backGradient;

function App() {
  return (
    <div className="App" style={{ background }}>
      
    </div>
  );
}

export default App;
