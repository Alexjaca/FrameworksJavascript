import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppSlider extends Component {

    render() {
        return (
            
                    < div id="slider" className={this.props.size} >
                        <h1>{this.props.title}</h1>
                        {
                            this.props.MsgButton &&
                            <Link to={'/blog'} className="btn-white">{this.props.MsgButton}</Link>

                        }
                    </div >

        );


    }

}

export default AppSlider;