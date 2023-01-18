import './assets/css/App.css';

//Importando componentes
import AppHeader from './components/AppHeader';
import AppSlider from './components/AppSlider';
import AppSidebar from './components/AppSidebar';
import AppFooter from './components/AppFooter';
//import Peliculas from './components/Peliculas';
import Router from './Router';



function App() {

  var ButtonString = "Ir al blog";

  return (
    <div className="App">
      <AppHeader />
      <AppSlider title = "Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                  MsgButton = {ButtonString} />

      <div className="center">
        
        <Router/>

       {/* <Peliculas/>*/}   

        <AppSidebar />
        <div className="clearfix"></div>
      </div> {/*FIN DEL DIV CENTER*/}
     <AppFooter/>

    </div>
  );
}

export default App;
