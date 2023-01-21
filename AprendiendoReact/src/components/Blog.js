import React, { Component } from "react";
import AppSlider from './AppSlider';
import AppSidebar from "./AppSidebar";

let isBlog = true;

class Blog extends Component{

    render(){

        return(
            <div id="blog">
                <AppSlider title="BLOG DE REACT"
                            size = "slider-small"/>

                <div className="center">
                    <div id="content">

                        <input type="hidden" name="isblog" value={isBlog}/>


                        <h1 className="subheader">BLOG</h1>
                        {/*LISTADO DE ARTICULOS QUE VENDRAN DE LA API REST DE NODE */}

                    </div>   
                    <AppSidebar />  
                </div>
                
            </div> 

        );
    }
}

export default Blog;