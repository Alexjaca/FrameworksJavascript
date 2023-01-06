import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

@Input() pelis! : Pelicula;

//--Creando un evento para enviarlo al componente padre (peliculas.component.ts)
@Output() marcarFavorita = new EventEmitter();

  constructor(){

  }

  //---Recibiendo parametros desde pelicula.component.html---
  seleccionar(event:any, pelis:any){
    this.marcarFavorita.emit({
      pelicula : pelis
    });
  }

}
