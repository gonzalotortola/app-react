import logo from './assets/img/logo-h-waymara.svg';
import './app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="benefitBar__container">
            <div className="benefitBar__container--content">
                🔥 Envío gratis en compras que superen $10.000 🔥
            </div>
        </div>
        <div className="logo-div">
          <a href="#">
            <img src={logo} className="App-logo" alt="logo-waymara" />
          </a>
        </div>
        <NavBar/>

        <ItemListContainer greeting={<h1>Bienvenido a la tienda de Waymara</h1>}/>
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
