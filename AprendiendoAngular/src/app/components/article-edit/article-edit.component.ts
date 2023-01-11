import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})

export class ArticleEditComponent implements OnInit{
  
  public article: Article;
  public status!: string;
  public is_edit : boolean;
  public page_title : string;
  public url: string;

///////////////////////////////////////////////////////////////////////////////////////////////
  //configuracion del componente de angular para subir imagenes (angulas-file-uploader)
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: 50,
    uploadAPI:  {
      url:Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Seleccionar',
      resetBtn: 'Reset',
      uploadBtn: 'Subir',
      dragNDropBox: 'Imagen',
      attachPinBtn: 'Sube tu Imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

constructor( private _articleService: ArticleService,
            private _route : ActivatedRoute,
            private _router : Router
          ){

  this.article = new Article('','','','',null);
  this.is_edit = true;
  this.page_title = "Editar Articulo";
  this.url = Global.url;

}
  
  ngOnInit(): void {

    this.getArticle(); /// Llamando a cargartse esta funcion al iniciar
    
  }

  onSubmit(){
    //console.log(this.article);
    this._articleService.update(this.article._id, this.article).subscribe(
      response =>{
        if(response.status == 'success'){
          this.article = response.article;
          //console.log(response);
          this._router.navigate(['/blog/articulo/', this.article._id]);

          //Alerta Libreria sweetalert de Angular
          Swal.fire(
            'Articulo Editado!!!',
            'El Articulo se a editado correctamente',
            'success'
        );

        }else{
          this.status = 'Error';

          //Alerta Libreria sweetalert de Angular
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El Articulo no pudo editarse!'
          })

        }

      },
      error => {
        console.log(error);
        this.status = 'Error';

        //Alerta Libreria sweetalert de Angular
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El Articulo no pudo editarse!'
        })
      }
    );
  }

  imageUpload(data: any){
    //let image_data = JSON.parse(data.response); // formatear la imagen que llega a objeto JSON
    //alert(data.body.image);
    this.article.image = data.body.image;
    //console.log(data.body.image);
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article);
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


}
