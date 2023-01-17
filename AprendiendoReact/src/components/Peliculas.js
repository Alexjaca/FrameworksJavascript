import React, { Component } from 'react';
import Pelicula from './Pelicula';


class Peliculas extends Component {

    state = {
        Peliculas: [
            { titulo: 'Batman', image: 'https://mlyazqwnm7ri.i.optimole.com/cb:mrhB.22221/w:auto/h:auto/q:mauto/f:avif/id:0e88ee01ccfae7d8eecf7a5d4b4e41c8/https://www.espadasymas.com/Batman.png' },
            { titulo: 'Superman', image: 'https://bandaicollector.com/wp-content/uploads/2022/10/Sin-titulo-500-%C3%97-300-px-1000-%C3%97-692-px-1.webp' },
            { titulo: 'Spiderman', image: 'https://eltallerdehector.com/wp-content/uploads/2022/10/Spiderman-png-Clipart.png' }

        ],
        nombre: 'Alex Cardenas',
        favorita: {}
    };

    //CAMBIAT ARTIBUTO DE ESTE MODELO
    cambiarTitulo = () => {
        var { Peliculas } = this.state;


        Peliculas[0].titulo = 'Batman Begins';

        this.setState({
            Peliculas: Peliculas
        });
    }

    //ENVIANDO PROPS DEL COMPONENTE HIJO AL PADRE
    favorita = (peliFav, indice) => {
        //console.log('Favorita Marcada');
        //console.log(peliFav, indice);

        this.setState({
            favorita: peliFav
        });

    }

    render() {
        var pStyle= {
            background: 'green',
            color: 'white',
            padding: '10px'

        };

        return (
            <div id='content' className='peliculas'>
                <h2 className="subheader">Pliculas</h2>
                <p>Seleccion de las peliculas de {this.state.nombre}</p>
                <div>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo Batman
                    </button>
                </div>

                {/* SIMILAR A LA CONDICION ngIf de ANGULAR CUANDO (this.state.favorita.titulo) EXISTA EJECUTA  */}
                {this.state.favorita.titulo &&

                        ///*APLICANDO STILOS EN UNA VARIUABLE LOCAL  (pStyle)*/
                    <p className='favorita' style={pStyle}>
                        <strong>La Pelicula Favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                }


                {/*CREAR COMPONENTE PELICULA */}
                <div id='articles' className='peliculas'>
                    {
                        this.state.Peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                    indice = {i}
                                />
                            )
                        })

                    }
                </div>

            </div>

        );
    }
}

export default Peliculas;