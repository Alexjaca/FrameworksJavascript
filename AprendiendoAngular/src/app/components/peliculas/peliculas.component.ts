import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnDestroy, OnInit{
  
  public peliculas!: Array<any>;

  constructor(){

    this.peliculas=[
      {year: 2020, title: "Spiderman 4", image: "https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg"},
      {year: 2018, title: "Batman", image: "https://media.revistagq.com/photos/62208fef87bd6b25be3992a6/1:1/w_987,h_987,c_limit/100882.jpg"},
      {year: 2012, title: "Superman", image: "https://www.infobae.com/new-resizer/SmSUnEc132L0Albz6pkXODHGmVA=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/YKUHUPENUJCFPLMZSMGW4FH74U.jpg"},
      {year: 2010, title: "Mario Bros", image: "https://i.ytimg.com/vi/DmCZoiCp5C0/maxresdefault.jpg"}
    ];

  }
  ngOnInit(): void {
    console.log(this.peliculas);
  }

  ngOnDestroy(): void {
    console.log("Se va a eliminar el componente PELICULAS de la ejecucion");
  }



}
