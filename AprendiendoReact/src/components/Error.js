import React from "react";
import ImgError from "../assets/images/404.png";

const Error = () => {

    return (
        <div id='content'>
            <img src={ImgError} className="img-error" />
            <h1>PAGINA NO ESNCONTRADA</h1>
            <div >
                <button id="btn-center" className="btn btn-blue" >IR AL INICIO</button>
            </div>
        </div>
    );
}

export default Error;