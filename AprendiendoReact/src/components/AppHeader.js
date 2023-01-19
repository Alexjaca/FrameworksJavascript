import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
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
                           
                                <NavLink to="/">Inicio</NavLink>
                               
                            
                            </li>
                            
                       

                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Formulario</a>
                            </li>
                            <li>
                                <a href="#">Pagina 1</a>
                            </li>
                            <li>
                                <a href="#">Pagina 2</a>
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