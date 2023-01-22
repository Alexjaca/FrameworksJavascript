import React, { Component } from "react";


import AppSlider from './AppSlider';
import AppSidebar from "./AppSidebar";
import Articles from "./Articles";

let isBlog = true;

class Blog extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

        return (
            <div id="blog">
                <AppSlider title="BLOG DE REACT"
                    size="slider-small" />

                <div className="center">
                    <div id="content">

                        {/*LISTADO DE ARTICULOS QUE VENDRAN DE LA API REST DE NODE */}

                        <Articles />


                    </div>
                    <AppSidebar isBlog="true" />
                </div>

            </div>

        );
    }
}

export default Blog;