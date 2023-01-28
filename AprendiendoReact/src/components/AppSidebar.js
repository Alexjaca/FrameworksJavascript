import React, {Component} from "react";
import { Navigate, redirect } from "react-router-dom";
import Global from "../Gobal";
import axios from "axios";

class AppSidebar extends Component{

    url = Global.url;

    //creando las variables con una referencia de react
    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    }

    redirectToSearch = (e) =>{
        e.preventDefault();//EVITA QUE LA PAGINA RECARGUE AL LLAMAR EL EVENTO

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });        

    }

    getArticle = () => {
        axios.get(this.url + "search/"+this.state.search)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                //console.log(this.url + "blog/"+this.state.search);
            });
    }

    render(){ 
                if(this.state.redirect){
                    this.setState({
                        redirect: false
                    });   
                    return(<Navigate to={"/blog/" + this.state.search}></Navigate>);
                    {/*--ME MUESTRA LSO ARTICULOS PERO AL VOLVER A BUSCAR ME MONTA OTRA BUSQUEDA ENCIMA 
                <Navigate  to={this.state.search}></Navigate> ------{this.url+'blog/'+this.state.search}-*/}
                  
                    
                }

        return(
            <aside id="sidebar">
                {/*MUESTRTA EL NAV-BLOG SOLO SI ESTAMOS EN UNA PAGINA QUE NO SEA EL BLOG */}
                {this.props.NavBlog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear artículo</a>
                </div>
                }
            

            <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form className="mid-form" onSubmit={this.redirectToSearch}>
                        <input type="text" name="search" ref={this.searchRef}/>
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
            </div>
        </aside>
            );
       
    }
}

export default AppSidebar;