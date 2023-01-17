import React, { Component } from 'react';

class MiComponente extends Component {



    render() {
        var name = 'Alex';
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Harina', 'Queso', 'Jamon'],
            calorias: 400
        };

        return (
            //Etiqueta usada para poder retornar varios modulos html
            <React.Fragment>
                <h1>Hola soy, {name} desde Mi Componente </h1>
                <h2>{'Nombre de la Receta: ' + receta.nombre}</h2>
                <h2>ingredientes: </h2>
                <ol> 
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            //console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <h2>{'Calorias: ' + receta.calorias}</h2>
            </React.Fragment> //Lo recomendable es usar un div

        );
    }
}

export default MiComponente;