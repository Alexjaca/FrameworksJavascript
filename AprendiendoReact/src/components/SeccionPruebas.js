import React, { Component } from "react";
import Peliculas from "./Peliculas";
import MiComponente from "./MiComponente";


class SeccionPruebas extends Component {

    HolaMundo(nombre, edad) {
        var presentacion = <div>
          <h2>Hola, soy {nombre}</h2>
          <h1>Tengo  {edad} años</h1>
        </div>;
        return presentacion;
      }


    render() {
        var nombre = 'Alex Cardenas';
        var edad = 37;
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {this.HolaMundo(nombre, edad)}

                <section className='componentes'>
                    <MiComponente/>
                    <Peliculas/>
            
                </section>

            </section>
        );
    }
}

export default SeccionPruebas;