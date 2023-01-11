import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {

  public articleD!: Article;
  public url: string;

  constructor(
    private _articleservice: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this.url = Global.url;

  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleservice.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.articleD = response.article;
            console.log(this.articleD);
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }

      );

    });

  }

  delete(id:any){
   
    Swal.fire({
      title: 'Seguro deseas eliminar el Articulo '+ this.articleD.title + '?',
      text: "Si lo haces borraras el articulo del sistema",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Articulo ' + this.articleD.title + ' Eliminado!!',
          'El Articulo fue eliminado con exito.',
          'success'
        )

        this._articleservice.delete(id).subscribe(
          response =>{
            this._router.navigate(['/blog']);
          },
          error =>{
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );

      }
    })

      
   
        

  } 

}
