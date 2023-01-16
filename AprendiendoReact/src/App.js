import './assets/css/App.css';

//Importando componentes
import AppHeader from './components/AppHeader';
import AppSlider from './components/AppSlider';
import AppSidebar from './components/AppSidebar';
import AppFooter from './components/AppFooter';
import SeccionPruebas from './components/SeccionPruebas';


function App() {

  return (
    <div className="App">
      <AppHeader />
      <AppSlider />

      <div className="center">
        <SeccionPruebas/>
        
        <AppSidebar />
        <div className="clearfix"></div>
      </div> {/*FIN DEL DIV CENTER*/}
     <AppFooter/>

    </div>
  );
}

export default App;
