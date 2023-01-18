import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

class Router extends Component {

    render() {
        return (

        <BrowserRouter>

            {/*CONFIGURAR RUTAS Y PAGINAS */ }
            <Switch>
                <Route exact path="/" Component = {Peliculas} />
                <Route exact path="/ruta-prueba" Component = {SeccionPruebas} />
                <Route exact path="/segunda-ruta" Component = {MiComponente} />

            </Switch>
        
        </BrowserRouter >

        );
    }

}

export default Router;