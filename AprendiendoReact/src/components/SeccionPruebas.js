import React, { Component } from "react";
import MiComponente from "./MiComponente";


class SeccionPruebas extends Component {

    contador = 0;

    //Crear constructor para pasarle los propps y desde el state modificar el contador
    /*constructor(props){
        super(props);

        this.state =  {
            contador : 0
        };

    }*/

    //Crear constructor para pasarle los propps y desde el state modificar el contador
    state = {
        contador: 0
    };

    HolaMundo(nombre, edad) {
        var presentacion = <div>
            <h2>Hola, soy {nombre}</h2>
            <h1>Tengo  {edad} años</h1>
        </div>;
        return presentacion;
    }

    //Debemos usar el SetState para poder modificar el state y su contador (No bindeada)
    //Se creo con metodo de flecha pàra no ser bindeada
    sumar = (e) => {
        //this.contador = this.contador + 1;
        this.setState({
            contador: this.state.contador + 1
        });
    }

    //Debemos usar el SetState para poder modificar el state y su contador
    restar(e) {
        //this.contador--;
        this.setState({
            contador: this.state.contador - 1
        });
    }


    render() {
        var nombre = 'Alex Cardenas';
        var edad = 37;
        return (
            <section id="content">

                <h2 className="subheader">Últimos artículos</h2>
                <hr />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <h2 className="subheader">Funciones y JSX Basico</h2>
                <hr />
                {this.HolaMundo(nombre, edad)}

                <h2 className="subheader">Componentes</h2>
                <hr />
                <section className='componentes'>
                    <MiComponente />
    

                </section>

                <h2 className="subheader">Estados</h2>
                <hr />
                <p>Contador = {this.state.contador}</p>
                <p>
                    {/*tambien podemos crear la funcion sumar con metodo de flecha y asi no se bindea */}
                    <input type="button" value="sumar" onClick={this.sumar} />
                    {/*Bindeando el This para que la funcion lo reconozca */}
                    <input type="button" value="restar" onClick={this.restar.bind(this)} />
                </p>


            </section>
        );
    }
}

export default SeccionPruebas;