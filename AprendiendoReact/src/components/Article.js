import axios from "axios";
import React, { useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import Global from "../Gobal";
import AppSidebar from "./AppSidebar";
import Image from '../assets/images/nofound.jpg';
import Image404 from '../assets/images/404.png';



const Article = () => {
    let Url = Global.url;
    let params = useParams();
    let status = null;

    //useStatees un React Hook que le permite agregar una variable de estado a su componente.
    //const [state, setState] = useState(initialState)
    const [article, setArticle] = React.useState(null);

    //useEffectes un React Hook que te permite sincronizar un componente con un sistema externo.
    //useEffect(setup, dependencies?)
    React.useEffect(() => {
        axios.get(Url + 'article/' + params.id)
            .then((response) => {
                setArticle(response.data.article);    
            });
    }, []);

        

    if (!article) return (
        <div className="center">
            <section id="content">
                <h1>El Articulo no Existe</h1>
                <img src={Image404}></img>
            </section>
            <AppSidebar NavBlog="true" />
        </div>
    );

    return (

        <div className="center">

            <section id="content">
                <article className="article-item article-detail" id={article._id}>
                    <div className="image-wrap">

                        {article.image !== null ? (
                            <img src={Url + 'get-image/' + article.image} alt={article.title} />
                        ) : (
                            <img src={Image} alt={article.title} />
                        )

                        }

                    </div>

                    <h1 className="subheader">{article.title}</h1>
                    <span className="date">
                        <Moment fromNow>{article.Date}</Moment>
                    </span>
                    <p>
                        {article.content}
                    </p>
                    <div className="buttons">
                        <a href="#" className="btn btn-success">Editar</a>
                        <a href="#" className="btn btn-warning">Eliminar</a>
                    </div>


                    <div className="clearfix"></div>
                </article>
            </section>
            <AppSidebar NavBlog="true" />
        </div>
    );


}

export default Article;