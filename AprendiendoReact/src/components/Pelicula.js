import React, { Component } from "react";

class Pelicula extends Component {

    //Funcion que envia a marcarFavoritas que viene del padre le asigna la props.pelicula ******
    marcar = ()  =>{
        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    }

    render() {
        const { titulo, image } = this.props.pelicula;
        
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                <button onClick={this.marcar}>
                    Favorita *
                </button>

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;