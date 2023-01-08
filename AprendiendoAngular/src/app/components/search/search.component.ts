import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Route, ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articless! : Article[];
  public search! : string;

  constructor(
    private _articleService : ArticleService,
    private _route : ActivatedRoute,
    private _router: Router
    ){

  }

  ngOnInit(): void {

    this._route.params.subscribe( params =>{
      var search = params['search'];
      this.search = search;

     this._articleService.search(search).subscribe(
      response =>{
        if(response.articles){
            this.articless = response.articles;
            //console.log(this.articless);
        }else{
          this.articless = [];
        }
      },
      error =>{
        console.log(error);
        this.articless = [];
      }
     );
    });

  }

}
