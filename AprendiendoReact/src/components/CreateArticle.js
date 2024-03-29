import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator'; //VALIDACIONES
import Swal from 'sweetalert2';
import Global from "../Gobal";
import AppSidebar from "./AppSidebar";

//VALIDACION DE FORMULARIOS Y ALERTAS


class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    constructor(props) {
        super(props);
        // Se carga el objeto para validar el formulario
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este Campo es requerrido..',
                alpha_num_space: 'No puede Escribir caracteres especiales'
            }
        });
    }


    changedState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }

        });
        this.validator.showMessages();
        this.forceUpdate();

    }

    saveArticle = (e) => {
        e.preventDefault();

        this.changedState();

        if (this.validator.allValid()) {



            //Hacer una peticion por post para guardar el articulo
            axios.post(this.url + 'save', this.state.article)
                .then((res) => {
                    this.setState({
                        article: res.data.articleStored,
                        status: 'waiting'
                    });

                      Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Articulo registrado correctamente!',
                        showConfirmButton: false,
                        timer: 1500
                      });
                

                    //  SUBIR LA IMAGEN
                    if (this.state.selectedFile !== null) {
        
                        //Sacar el Id del articulo Guardado
                        var articleId = res.data.articleStored._id;


                        //Crear form data y añadir fichero
                        const formData = new FormData();

                        formData.append(
                            'file0',  //Nombre del fichero que viene como resibe la api
                            this.state.selectedFile //Archivo a guardar
                        );

                        //Recorriendo el FormData() para saber lo que tiene adentro
                        /* for (var entrie of formData.entries()) {
                             console.log(entrie[0]);
                             console.log(entrie[1]);
                         }*/


                        //Peticion ajax

                        axios.post(this.url + 'upload-image/' + articleId, formData, { headers: { 'Content-type': 'multipart/form-data' } })
                            .then((res) => {
                                if (res.data.article) {

                                    this.setState({
                                        article: res.data.article,
                                        status: 'success'
                                    });

                                } else {

                                    this.setState({
                                        article: res.data.article,
                                        status: 'failed'
                                    });

                                }

                            });

                    } else {

                        this.setState({
                            status: 'success'
                        });
                    }

                }).catch((err) => {

                    this.setState({
                        article: null,
                        status: 'failed'
                    });

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error al Registrar el Articulo!'
                      })
                });

        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    ///RECOGE EL EVENTO Y CAPTURA LOS DATOS DE LA IMAGEN*************
    fileChange = (event) => {

        this.setState({
            selectedFile: event.target.files[0]
        });

    }


    render() {

        if (this.state.status === 'success') {
            return (<Navigate to={"/blog"} />);
        } 

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">CREAR ARTICULO</h1>


                    <form className="mid-form" onSubmit={this.saveArticle} onChange={this.changedState}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} />

                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef}></textarea>

                            {this.validator.message('content', this.state.article.content, 'required')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} />
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Guardar" className="btn btn-success" />

                    </form>
                </section>
                <AppSidebar />
            </div>);
    }
}

export default CreateArticle;