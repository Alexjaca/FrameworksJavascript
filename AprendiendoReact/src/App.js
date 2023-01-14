import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importando componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import AppHeader from './components/AppHeader';





function HolaMundo(nombre, edad){
  var presentacion = <div>
                      <h2>Hola, soy {nombre}</h2>
                      <h1>Tengo  {edad} años</h1>
                      </div>;
  return presentacion;
}

function App() {
  var nombre = 'Alex Cardenas';
  var edad = 37;

  return (
    <div className="App">
      <AppHeader/>
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre, edad)}

        <section className='componentes'>
          <MiComponente/>
          <Peliculas/>
       

        </section>

      </header>
    </div>
  );
}

export default App;
