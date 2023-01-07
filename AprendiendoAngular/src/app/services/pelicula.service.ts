import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable() // Algo parecido a Inmjeccion de dependencias en java
export class PeliculaService{

    public peliculas : Pelicula[];

    constructor(){

        this.peliculas = [
            //USAMOS EL MODELO PELICULA PARA PASAR PARAMETROS
            new Pelicula("Ironman", 2019, "https://sm.ign.com/ign_es/screenshot/default/iron-man-marvel-regreso_hft3.jpg"),
            new Pelicula("Spiderman 4", 2020, "https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg"),
            new Pelicula("Batman", 2018, "https://media.revistagq.com/photos/62208fef87bd6b25be3992a6/1:1/w_987,h_987,c_limit/100882.jpg"),
            new Pelicula("Superman", 2012, "https://www.infobae.com/new-resizer/SmSUnEc132L0Albz6pkXODHGmVA=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/YKUHUPENUJCFPLMZSMGW4FH74U.jpg"),
          //OTRA FORMA DE PASAR PARAMERTROS------------------
            {year: 2010, title: "Mario Bros", image: "https://i.ytimg.com/vi/DmCZoiCp5C0/maxresdefault.jpg"}
          ];
    }

    holaMundo(){
        return 'Hola Mundo desde el servicio PeliculasService de Angular!!!!!';
        
    }

    getPeliculas(){
        return this.peliculas;
    }
}