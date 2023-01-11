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


    getArticles(last:any = null):Observable<any>{      // Debo poner el Observable para poder recibir respuestas

        var articles = 'articles';
        if(last != null){
            var articles = 'articles/true';
        }
        return this._http.get(this.url +articles);     //Retonando los Json por ajax a travez del metodo http
    }


    getArticle(articleId = ""):Observable<any>{
        return this._http.get(this.url+'article/'+articleId);
        
    }


    search(searchString = ""):Observable<any>{
        return this._http.get(this.url + 'search/' + searchString);
    }

    create(article : Article):Observable<any>{
        //let params = JSON.stringify(article); //convirtiendo article (Objeto javascript) a objeto JSON String  para guiardarlo
        //let headers = new HttpHeaders().set('Content-Type', 'application-json'); //configurar cabeceras en este caso el content-type
        
        //return this._http.post(this.url + 'save', params, {headers: headers});
        return this._http.post(this.url + 'save', article);
    }

    update(id:any, article : Article):Observable<any>{
        return this._http.put(this.url + 'article/' + id, article);
    }

    delete(id:any):Observable<any>{
        return this._http.delete(this.url + 'article/' + id);
    }

    
}




