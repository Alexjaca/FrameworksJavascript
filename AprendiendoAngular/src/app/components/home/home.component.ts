import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent {
  
  public title?: string;
  public articless!: Article[];

  constructor(private _articleService : ArticleService ){
    this.title = "ULTIMOS ARTICULOS";

    this._articleService.getArticles(true).subscribe(    //suscribe recibe los datos desde http
    	response =>{
        //console.log(response.articles);
        if(response.articles){
          this.articless = response.articles;
          //console.log(this.articless);
        }else{

        }
      },
      error =>{
        console.log(error);
      }
   );

  }

}
