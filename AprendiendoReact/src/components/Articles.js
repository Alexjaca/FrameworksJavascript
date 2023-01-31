import React, { Component } from "react";
import axios from 'axios'; //LIBRERIA ESPECIAL PARA HACER PETICIONES HTTP EN REACT
import Moment from 'react-moment'; //LIBRERIA PARA TRABAJAR CON FECHAS
import 'moment/locale/es'; // poner los datos de la fecha en español
import { Link } from 'react-router-dom';

import Global from '../Gobal';
import Image from '../assets/images/nofound.jpg'
import ImageLoadinf from '../assets/images/loading.gif'

class Articles extends Component {

    url = Global.url;
    home = this.props.home;
    search = this.props.search;
    

    state = {
        articles: [],
        status: null
    }

    //--componentDidMount--Cargame la funcion getArticles antes de cargar la pagina
    componentDidMount() {

        if(this.home === 'true'){       
            this.getLastArticles();
           
        }else if(this.search && this.search != null){
            this.getArticlesBySearch(this.search);
        }
        else{
            this.getArticles();
        }
     
    }

    // componente se ejecuta al recibir nuevos propos en la misma ruta
    componentWillReceiveProps(nextProps) {
        if(this.props.search !== nextProps.search) {
            if (nextProps.home) {
                this.getLastArticles();
            } else if (nextProps.search && nextProps.search !== '') {
                this.getArticlesBySearch(nextProps.search);
            } else {
                this.getArticles();
            }
        }
    }

    getArticles = () => {
        axios.get(this.url + "articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            });
    }

    getLastArticles = () => {
        axios.get(this.url + "articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            });
    }

    getArticlesBySearch = (search) => {
        axios.get(this.url + "search/"+search)
            .then(res => {
               
                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    });    
                
            }).catch(err =>{
                this.setState({
                    articles: [],
                    status: 'success'
                });
            });
    }


    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <div id="articles"  >
                        <article className="article-item" id="article-template" key={article._id}>

                            <div className="image-wrap">
                            {article.image !== null ?(
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                ):(
                                    <img src={Image} alt={article.title} />
                                )
                            }
                            </div>

                            <h2>{article.title}</h2>
                            <span className="date">
                                <Moment fromNow>{article.Date}</Moment>
                            </span>
                            <Link to={"/blog/articulo/"+article._id}>Leer más</Link>

                            <div className="clearfix"></div>
                        </article>
                    </div>
                );
            });

            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        }
        else if (this.state.articles.length === 0 && this.state.status === 'success') {

            return (
                <div id="articles">
                    <h1 className="subheader">No hay articulos para mostrar</h1>
                </div>
            );
        }
        else {

            return (
                <div id="articles">
                    <h1 className="subheader">Cargando....</h1>
                    <img src={ImageLoadinf} alt="Loading" />
                </div>
            );
        }

    }
}

export default Articles;