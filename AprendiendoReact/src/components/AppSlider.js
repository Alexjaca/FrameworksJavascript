import React, { Component } from "react";

class AppSlider extends Component {

    render() {
        return <div id="slider" className={this.props.size}>
            <h1>{this.props.title}</h1>
            {this.props.MsgButton &&
                <a href="#" className="btn-white">{this.props.MsgButton}</a>
            }

        </div>
    }

}

export default AppSlider;