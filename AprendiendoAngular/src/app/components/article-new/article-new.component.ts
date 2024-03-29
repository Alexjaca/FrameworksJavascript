import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert2';



@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})

export class ArticleNewComponent implements OnInit{

  public article: Article;
  public status!: string;
  public page_title : string;
  public url: string;
  public is_edit : boolean;

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
  this.page_title = "Crear Articulo";
  this.url = Global.url;
  this.is_edit = false;

}

  ngOnInit(): void {
    
    
  }

  onSubmit(){
    //console.log(this.article);
    this._articleService.create(this.article).subscribe(
      response =>{
        if(response.status == 'success'){
          this.article = response.article;

          //Alerta Libreria sweetalert de Angular
          swal.fire(
              'Articulo creado!!!',
              'El Articulo se a creado correctamente',
              'success'
          );

          //console.log(response);
          this._router.navigate(['/blog']);

        }else{
          this.status = 'Error';
        }

      },
      error => {
        console.log(error);
        this.status = 'Error';
      }
    );
  }

  imageUpload(data: any){
    //let image_data = JSON.parse(data.response); // formatear la imagen que llega a objeto JSON
    //alert(data.body.image);
    this.article.image = data.body.image;
    //console.log(data.body.image);


  }

  
}
