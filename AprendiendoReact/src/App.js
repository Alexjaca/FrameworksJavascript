import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre, edad)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
