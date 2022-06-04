import logo from './assets/img/logo-h-waymara.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="benefitBar__container">
            <div className="benefitBar__container--content">
                🔥 Envío gratis en compras sobre $4000 en la web 🔥
            </div>
        </div>
        <div className="logo-div">
          <a href="#">
            <img src={logo} className="App-logo" alt="logo-waymara" />
          </a>
        </div>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
