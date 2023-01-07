import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers : [PeliculaService] //Se trae el Servicio Peliculas para Injectarlo en el componente peliculas
})
export class PeliculasComponent implements OnDestroy, OnInit{
  
  public peliculas!: Array<Pelicula>;
  public favorita!: Pelicula;
  public fechaPrueba : any;

  constructor(private _peliculaService : PeliculaService){ //se declara _pelicula por que es componente de un servicio

    this.peliculas= this._peliculaService.getPeliculas(); // comunicando con el servicio pelicula

    this.fechaPrueba = new Date(2023,9,21);

  }
  ngOnInit(): void {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngOnDestroy(): void {
    console.log("Se va a eliminar el componente PELICULAS de la ejecucion");
  }

  mostrarFavorita(event:any){
    //console.log('Recibiendo datos de pelicula en el componente padre ', event);
    this.favorita = event.pelicula;
    console.log(this.favorita.title, this.favorita.year, this.favorita.image);
  }


}
