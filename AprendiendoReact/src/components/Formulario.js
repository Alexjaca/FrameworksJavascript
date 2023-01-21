import React, { Component } from "react";
import AppSidebar from "./AppSidebar";

class Formulario extends Component {

    //creando las variables con una referencia de react
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    biografiaRef = React.createRef();
    gHombreRef = React.createRef();
    gMujerRef = React.createRef();
    gOtroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault(); //evita que el formulario recargue la pantalla (bloqueando el evento de recarga por defecto de los formularios)
        //console.log(this.nombreRef.current.value);

        var genero = 'hombre';
        if (this.gHombreRef.current.checked) {
            genero = this.gHombreRef.current.value;
        } else if (this.gMujerRef.current.checked) {
            genero = this.gMujerRef.current.value;
        } else {
            genero = this.gOtroRef.current.value;
        }

        //asignando al obeto user las variables 
        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            biografia: this.biografiaRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        });

        console.log(user);
    }

    render() {

        var user = this.state.user;

        return (
            <div id="formulario">

                <h1 className="subheader">Formulario</h1>

                {(this.state.user.nombre && this.state.user.apellidos && this.state.user.biografia) &&
                    <div className="DatosUsuario">
                        <p><strong>Nombre = </strong>{user.nombre}</p>
                        <p><strong>Apellidos = </strong>{user.apellidos}</p>
                        <p><strong>Biografia = </strong>{user.biografia}</p>
                        <p><strong>Genero = </strong>{user.genero}</p>
                    </div>
                }



                <div className="center">
                    <div id="content">
                    {/*onChange llena las variables de forma reactiva */}
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.biografiaRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.gHombreRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.gMujerRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.gOtroRef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>

                    </div>
                    <AppSidebar NavBlog="true" />
                </div>
            </div>
        );
    }
}

export default Formulario;