import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnDestroy{
  
  constructor(){

  }

  ngOnDestroy(): void {
    console.log("Se va a eliminar el componente PELICULAS de la ejecucion");
  }



}
