import axios from "axios";
import React, { Component, createRef } from "react";
import { Navigate } from "react-router-dom";
import Global from "../Gobal";
import AppSidebar from "./AppSidebar";

//VALIDACION DE FORMULARIOS Y ALERTAS

class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;

    state={
        article : {},
        status : null
    };  
    

    changedState = () =>{
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content : this.contentRef.current.value
            }
        });

        //console.log(this.state);
    }

    saveArticle = (e) =>{
        e.preventDefault();

        this.changedState();

        //Hacer una peticion por post para guardar el articulo
        axios.post(this.url+'/save', this.state.article)
        .then(res =>{
            if(res.data.article){
                //console.log(res.data.article);
                this.setState({
                    article : res.data.article,
                    status: 'success'
                });
                console.log(this.state.status);

            }else{
                this.setState({
                    status: 'failed'
                });
            }
        });
        
    }


    render() {

        {/*NO ME HACE LA PUTA REDIRECCIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN */}
 
        if(this.state.status === 'success'){
            return(<Navigate to={'/blog'}/>);
        }

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">CREAR ARTICULO</h1>


                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title"  ref={this.titleRef} onChange={this.changedState}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changedState}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" />
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