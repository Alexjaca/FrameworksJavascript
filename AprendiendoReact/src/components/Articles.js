import React, { Component } from "react";
import axios from 'axios'; //LIBRERIA ESPECIAL PARA HACER PETICIONES HTTP EN REACT
import Global from '../Gobal';
import Image from '../assets/images/nofound.jpg'

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }

    //--componentDidMount--Cargame la funcion getArticles antes de cargar la pagina
    componentDidMount() {
        this.getArticles();
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

    render() {

        if (this.state.articles.length > 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <div id="articles"  key={article._id}>
                        <article className="article-item" id="article-template">

                            <div className="image-wrap">
                            {article.image !== null ?(
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                ):(
                                    <img src={Image} alt={article.title} />
                                )
                            }
                            </div>

                            <h2>{this.state.articles.title}</h2>
                            <span className="date">
                                {article.Date}
                            </span>
                            <a href="#">Leer más</a>

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
                </div>
            );
        }

    }
}

export default Articles;