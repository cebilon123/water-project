import logo from './logo.svg';
import Map from './components/map'
import './App.css';
import Hero from '../src/assets/hero.jpg'
import DonateButton from './components/donate'

function App() {
  return (
    <div className="App">
      <div className="App__Toolbar">
        <div className="App__Toolbar__Logo">
          WaterHelpers
        </div>
        <div className="App__Toolbar__Buttons">
          <p>O nas</p>
          <p>Jak działamy?</p>
          <DonateButton/>
        </div>
      </div>
      <div className="App__Hero">
        <div className="App__Hero__TextContainer">
          <h1>Dajemy dostęp do pitnej wody, ponieważ wszyscy mają do niej prawo</h1>
          <h3>Pomóż nam</h3>
          <DonateButton/>
        </div>
        <img src={Hero} alt="hero" className="App__Hero__img"/>
      </div>
      <div className="App__TextContainer">
        <p>
          W wielu miejscach na świecie wciąż nie ma dostępu do pitnej wody lub jest on bardzo ograniczony. 
          Misją naszej organizacji jest stworzenie właśnie dostępu do tego zasobu. Dokonując wpłaty, możesz wybrać jaką kwotę
          przeznaczysz oraz na jaki region świata, resztą już my się zajmiemy.
        </p>
      </div>
      <Map/>
    </div>
  );
}

export default App;
