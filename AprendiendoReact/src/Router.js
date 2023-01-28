import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams, Redirect, Navigate } from 'react-router-dom';


import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                {/*NOS TRAGIMOS HEADER Y DEMAS COMPONENTES A ROUTER PARA PODER USAR NAVLINK EN CADA COMPONENTE QUE SE NECESITE */}
                <AppHeader />

                    <Routes>
                        {/*CONFIGURAR RUTAS Y PAGINAS */}
                        <Route path="/" element={<Peliculas />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:search" element={<Search />} />
                        <Route path="/blog/articulo/:id" element={<Article/> }/>
                        <Route path="/blog/crear" element={<CreateArticle/> }/>
                        <Route path="/redirect/:search" element={<Buscar/>} />

                        <Route path="/formulario" element={<Formulario />} />
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

                    
                    <div className="clearfix"></div>
                
                <AppFooter />
            </BrowserRouter >

        );
    }

}

var Buscar = () => {
    let params = useParams();
    return(<Navigate to={"/blog/" + params.search}/>);
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