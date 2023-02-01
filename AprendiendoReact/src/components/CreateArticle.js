import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
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

    componentDidMount(){
        this.validator = new SimpleReactValidator();    
    }


    changedState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });

        
    }

    saveArticle = (e) => {
        e.preventDefault();

        this.changedState();

        //Hacer una peticion por post para guardar el articulo
        axios.post(this.url + 'save', this.state.article)
            .then((res) => {
                console.log('GUARDANDO ARTICULO EN WAITING');
                this.setState({
                    article: res.data.articleStored,
                    status: 'waiting'
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
                    for (var entrie of formData.entries()) {
                        console.log(entrie[0]); 
                        console.log(entrie[1]);
                    }

          
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
            });

    }

    ///RECOGE EL EVENTO Y CAPTURA LOS DATOS DE LA IMAGEN*************
    fileChange = (event) => {
        
        this.setState({
            selectedFile: event.target.files[0]
        });
     
    }


    render() {


        if (this.state.status === 'success') {
            console.log('status en Render = '+this.state.status);
            return (<Navigate to={"/blog"} />);
        } else {
            console.log('status en Render = '+this.state.status);
        }


        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">CREAR ARTICULO</h1>


                    <form className="mid-form" onSubmit={this.saveArticle} onChange={this.changedState}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef}></textarea>
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