import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers : [ArticleService]
})

export class BlogComponent implements OnInit{
  
  public title!: string;
  public article! : Article[];
  public url! : string;

  constructor( private _articleService : ArticleService){
    this.title ="BIENVENIDO AL BLOG";
  }
  ngOnInit(): void {
    this.url = Global.url;
   //console.log(this._articleService.pruebas());
   this._articleService.getArticles().subscribe(    //suscribe recibe los datos desde http
    	response =>{
        console.log(response.articles);
        if(response.articles){
          this.article = response.articles;
        }else{

        }
      },
      error =>{
        console.log(error);
      }
   );
  }

}
