import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import AppHeader from './components/AppHeader';
import AppSlider from './components/AppSlider';
import AppSidebar from './components/AppSidebar';
import AppFooter from './components/AppFooter';

var ButtonString = "Ir al blog";

class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                {/*NOS TRAGIMOS HEADER Y DEMAS COMPONENTES A ROUTER PARA PODER USAR NAVLINK EN CADA COMPONENTE QUE SE NECESITE */}
                <AppHeader />

                <AppSlider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                    MsgButton={ButtonString} />

                <div className="center">

                    <Routes>
                        {/*CONFIGURAR RUTAS Y PAGINAS */}
                        <Route path="/" element={<Peliculas />} />
                        <Route path="/home" element={<Peliculas />} />
                        <Route path="/ruta-prueba" element={<SeccionPruebas />} />
                        <Route path="/segunda-ruta" element={<MiComponente />} />

                        {/*-----RUTA SIN COMPONENTE CREADO --------*/}
                        <Route path="/pagina-1" element={
                            <React.Fragment>
                                <h1>Hola mundo desde la ruta /pagina-1</h1>
                                <MiComponente saludo="SALUDO ENVIADO DESDE LAS RUTAS *******************************" />
                            </React.Fragment>
                        } />
                        {/*-----RUTA SIN COMPONENTE CREADO --------*/}


                        {/*-----RUTA SIN COMPONENTE PASANDO PARAMETROS (:id)-*/}
                        <Route path='/parametros/:id' element={<Parametros nombre="Alex Cardenas" />} />
                        <Route path='/parametros2/:nombre/:apellido?' element={<Parametros2 />} />
                        {/*-----RUTA SIN COMPONENTE PASANDO PARAMETROS--------*/}

                        <Route path="*" element={<Error />} />
                    </Routes>

                    <AppSidebar />
                    <div className="clearfix"></div>
                </div> {/*FIN DEL DIV CENTER*/}
                <AppFooter />
            </BrowserRouter >

        );
    }

}

var Parametros = props => {
    let params = useParams();
    return (
        <div id='content'>
            <h1>Parametro enviado desde el Componente Parametros enviando el nombre = {props.nombre}</h1>
            <h3 className='subheader'>Estas intentando ingresar a la ruta 'http://localhost:3000/parametros/{params.id}'</h3>
        </div>
    );
}


var Parametros2 = props => {
    let params = useParams();
    let siApellidos = (null);
    let siNombre = (null);

    if (params.nombre) {
        siNombre = (
            <h1 className='subheader'> Mi Nombre es {params.nombre}</h1>
        );
    }

    if (params.apellido) {
        siApellidos = (
            <h1 className='subheader'> Mi apellido es {params.apellido}</h1>
        );
    }

    return (
        <div id='content'>
            {siNombre}
            {siApellidos}
        </div>
    );
}


export default Router;