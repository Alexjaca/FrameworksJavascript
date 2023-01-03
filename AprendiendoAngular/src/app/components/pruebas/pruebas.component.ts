import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})

export class PruebasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;

  constructor(){
    this.titulo = "Componente de pruebas";
        console.log("En el contructor");
  }

  ngOnInit(): void {
    console.log('En el OnInit');
    
  }

  ngDoCheck(): void {
    console.log("DoCheck Lanzado");
  }

  cambiarTitulo(){
    this.titulo = "Titulo cambiado con exito";
  }

  ngOnDestroy(): void {
    console.log("Se va a eliminar el componente de la ejecucion");
  }

}
