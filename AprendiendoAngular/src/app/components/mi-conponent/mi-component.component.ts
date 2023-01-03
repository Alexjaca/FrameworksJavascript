import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-component.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario?: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Titulo de Componente";
        this.comentario = "Comentario de mi componente",
        this.year = 2023;
        this.mostrarPeliculas = true;
        console.log('Componente Mi Componente cargado');
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}