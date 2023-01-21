import React, { Component } from "react";
import AppSlider from './AppSlider';
import AppSidebar from "./AppSidebar";

class Home extends Component {

    render() {
        return (
            <div id="home">
                <AppSlider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                            MsgButton="Ir al blog"
                            size = "slider-big" />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">ULTIMO ARTICULOS</h1>
                    </div>
                    <AppSidebar NavBlog = "true"/>  
                </div>
            </div> 
        );
    }
}

export default Home;