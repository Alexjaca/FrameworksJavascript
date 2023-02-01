import axios from "axios";
import React from "react";
import Moment from "react-moment";
import { Navigate, useParams } from "react-router-dom";
import Global from "../Gobal";
import AppSidebar from "./AppSidebar";
import Swal from 'sweetalert2';
import Image from '../assets/images/nofound.jpg';
import Image404 from '../assets/images/404.png';






const Article = () => {
    let Url = Global.url;
    let params = useParams();


    //useStatees un React Hook que le permite agregar una variable de estado a su componente.
    //const [state, setState] = useState(initialState)
    const [article, setArticle] = React.useState(null);
    const [status, setStatus] = React.useState(null);

    //useEffectes un React Hook que te permite sincronizar un componente con un sistema externo.
    //useEffect(setup, dependencies?)
    React.useEffect(() => {
        axios.get(Url + 'article/' + params.id)
            .then((response) => {
                setArticle(response.data.article);
            });
    });//,[]



    if (!article) return (
        <div className="center">
            <section id="content">
                <h1>El Articulo no Existe</h1>
                <img src={Image404} alt="404"></img>
            </section>
            <AppSidebar NavBlog="true" />
        </div>
    );

    function Eliminar(id){

        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir el proceso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Tu Articulo ha sido eliminado.',
                    'success'
                )
                axios.delete(Url + 'article/' + id)
                    .then(res => {
                      setStatus('deleted');
                       
                    });

            }
        })
    }

    function Editar(){
        setStatus('edited');
    }

    


    return (


        <div className="center">
            {status === 'deleted' && 
            <Navigate to={'/blog'}></Navigate>
            }

            {status === 'edited' && 
            <Navigate to={'/blog/editar/'+article._id}></Navigate>
            }

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
                        <button onClick={
                            () => {
                                Editar();
                            }
                        } className="btn btn-success">Editar</button>
                        <button onClick={
                            () => {
                                Eliminar(article._id);
                            }
                        } className="btn btn-warning">Eliminar</button>
                    </div>


                    <div className="clearfix"></div>
                </article>
            </section>
            <AppSidebar NavBlog="true" />
        </div>
    );


}



export default Article;