import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/react.svg';



class AppHeader extends Component {
    
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/*<!-- LOGO -->*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/*<!-- MENU -->*/}
                    <nav id="menu">
                        <ul>
                            <li>
                            <NavLink to="/home">Home</NavLink >
                            </li>
                            <li>
                            <NavLink to="/blog">blog</NavLink >
                            </li>
                            <li>
                            <NavLink to="/formulario">Formulario</NavLink >
                            </li>
                            <li>
                            <NavLink to="/pagina-1">Pagina1</NavLink >
                            </li>
                            <li>
                            <NavLink to="/parametros2/Alex">Parametros</NavLink >
                            </li> 
                            <li>
                            <NavLink to="/">Peliculas</NavLink >
                            </li>     
                           
                        </ul>
                    </nav>

                    {/*<!-- LIMPIAR FLOTADOS -->*/}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default AppHeader;