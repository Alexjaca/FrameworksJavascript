import React from "react";
import ImgError from "../assets/images/404.png";
import { NavLink } from "react-router-dom";

const Error = () => {

    return (
        <div id='content'>
            <img src={ImgError} className="img-error" />
            <h1>PAGINA NO ESNCONTRADA</h1>
            <NavLink to="/">
            <button id="btn-center" className="btn btn-blue" >IR AL INICIO</button>
            </NavLink>
               
        </div>
    );
}

export default Error;