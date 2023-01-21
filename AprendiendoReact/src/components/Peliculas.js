import React, { Component } from 'react';
import Pelicula from './Pelicula';
import AppSlider from './AppSlider';
import AppSidebar from './AppSidebar';


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
    //CICLOS DE VIDA EN REACT------------------------------------
    //componentWillUnmount(), SE INICIA ANTES DE CARGAR LA PAGINA
    componentWillUnmount() {
        //alert("Aqui se va a montar el componente");
    }


    //CICLOS DE VIDA EN REACT------------------------------------
    //componentDidMount(), SE INICIA LUEGO DE HABERSE MONTADO LA PAGINA
    componentDidMount() {
        //alert("Componente cargado con éxito!!!");
    }

    //CICLOS DE VIDA EN REACT------------------------------------
    //componentWillUnmount(), SE INICIA CUNADO ME VOYA  DESMONTAR COMO ES EL CASO DE IR A OTRA RUTA
    componentWillUnmount() {
        //alert("Me voy a desmontar");
    }


    //RENDER ES UNO DE ELLOS
    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'

        };

        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className='favorita' style={pStyle}>
                    <strong>La Pelicula Favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );

        } else {
            favorita = (
                <p>NO HAY PELICULA A MOSTRAR</p>
            );
        }

        return (
            <React.Fragment>

                <AppSlider title="PELICULAS"
                    size="slider-small" />

                <div className='center'>



                    <div id='content' className='peliculas'>
                        <p>Seleccion de las peliculas de {this.state.nombre}</p>
                        <div>
                            <button onClick={this.cambiarTitulo}>
                                Cambiar titulo Batman
                            </button>
                        </div>


                        {/* SIMILAR A LA CONDICION ngIf de ANGULAR CUANDO PERO TIENE ELSE (this.state.favorita.titulo) EXISTA EJECUTA  */}
                        {/*SI FUERA SOLO IN IF SIN ELSE SE HACE ASI = "this.state.favorita.titulo &&" */}
                        {
                            /* this.state.favorita.titulo ? (
         
                                 ///*APLICANDO STILOS EN UNA VARIUABLE LOCAL  (pStyle)*/
                            /* <p className='favorita' style={pStyle}>
                                 <strong>La Pelicula Favorita es: </strong>
                                 <span>{this.state.favorita.titulo}</span>
                             </p>
                         )
                             : ( ///*ESTE ES EL ELSE EN REACT*/
                            /* <p>NO HAY PELICULA A MOSTRAR</p>
                         )*/
                        }
                        {favorita}


                        {/*CREAR COMPONENTE PELICULA */}
                        <div id='articles' className='peliculas'>
                            {
                                this.state.Peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            marcarFavorita={this.favorita}
                                            indice={i}
                                        />
                                    )
                                })

                            }
                        </div>

                    </div>
                    <AppSidebar NavBlog="false" />
                </div>

            </React.Fragment>
        );
    }
}

export default Peliculas;