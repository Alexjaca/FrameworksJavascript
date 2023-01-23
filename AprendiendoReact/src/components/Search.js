import React, { Component } from "react";
import AppSlider from './AppSlider';
import AppSidebar from "./AppSidebar";
import Articles from "./Articles";
import { useParams } from "react-router-dom";


function Search() {

    const searched = useParams().search; // recogiendo lo que llega de la url

    return (
            
        <div id="search">
            <AppSlider title={"Busqueda: "+searched}
                        size = "slider-small" />

            <div className="center">
                <div id="content">
                    <h1 className="subheader">Search</h1>

                    <Articles search={searched}>

                    </Articles>
                </div>
                <AppSidebar NavBlog = "false"/>  
            </div>
        </div> 
    );

        
    }



export default Search;