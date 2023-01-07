import { Injectable } from "@angular/core"; //Injectar dependencias a componente
import { HttpClient, HttpHeaders } from "@angular/common/http"; //client hace peticiones  ajax del backend
// y Headers manipular estos elemenos traidos del backend
import { Observable } from "rxjs"; // Se utiliza para recoger datos que devuelve el api
import { Article } from "../models/article"; // Modelo del articulo
import { Global } from "./global";

@Injectable()
export class ArticleService {

    public url! : string;

    //Debe cargarse eñ HttpClientModule  en el app.module.ts para que se puedan hacer
    //peticiones ajax en angular
    constructor( private _http: HttpClient){

        this.url = Global.url;
    }

    pruebas(){
        return "Soy el Servicio de articulos (ArticleService)";
    }

    getArticles():Observable<any>{          // Debo poner el Observable para poder recibir respuestas
        return this._http.get(this.url +'articles');     //Retonando los Json por ajax a travez del metodo http
    }



}


