import React from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Global from "../Gobal";
import AppSidebar from "./AppSidebar";
import ImgLoading from '../assets/images/loading.gif';
import Image from '../assets/images/nofound.jpg';
import Swal from 'sweetalert2'; 



// 1. RECOGER EL ID DEL ARTICULO DESDE LA URL

// 2. CREAR UN METODO PARA SACAR EL OBJETO DEL BACKEND

// 3. RELLENAR EL FORMULARIO CON ESOS DATOS

// 4. ACTUALIZAR EL OBJETO HACIENDO UNA PETICION AL BACKEND



function EditArticles() {

    let url = Global.url;
    const id = useParams().id; // recogiendo lo que llega de la url
    var titleRef = React.createRef();
    var contentRef = React.createRef();
    

    const [article, setArticle] = React.useState(null);
    const [status, setStatus] = React.useState(null);
    const [image, setImage] = React.useState(null);



    //useEffectes un React Hook que te permite sincronizar un componente con un sistema externo.
    //useEffect(setup, dependencies?)
    React.useEffect(() => {
        axios.get(url + 'article/' + id)
            .then((response) => {
                setArticle(response.data.article);
                //console.log(article);
                setStatus('waiting');
            });
    });//,[]






    if (!article) return (
        <div className="center">
            <section id="content">
                <h1>Cargando....</h1>
                <img src={ImgLoading} alt="Loading"></img>
            </section>
            <AppSidebar NavBlog="true" />
        </div>
    );

    function EditArticle(e) {
        e.preventDefault();
        
        //GUARDANDO EN UN OBJETO LOS VALORES DE LAS REFERENCIAS
         var articulo = {
            title: titleRef.current.value,
            content: contentRef.current.value
         }

    

       axios.put(url + 'article/' + id, articulo)
            .then((response) => {
                setArticle(response.data.article);
                setStatus('edited');
            }).catch((err) =>{
                setStatus('failed');
            });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Articulo editado correctamente!',
                showConfirmButton: false,
                timer: 1500
              });

            //SI LA IMAGEN EXISTE GUARDAR LA IMAGEN
            if(image){
                const formData = new FormData();

                formData.append('file0', image);

                axios.post(url + 'upload-image/' + article._id, formData, { headers: { 'Content-type': 'multipart/form-data' } })
                .then((res)=>{
                    if(res.data.article){
                        setStatus('edited');
                    }
                }).catch((err)=>{
                    setStatus('failed');
                });
                
            }else{
                setStatus('edited');
            }
            
    }


    function fileChange(event) {
        setImage(event.target.files[0]);
   
    }


    return (
        <div className="center">
          
          {status === 'edited' &&
            <Navigate to={'/blog'}></Navigate>
          }
 
            <section id="content">
                <h1 className="subheader">EDITAR ARTICULO ARTICLESS JS</h1>


                <form className="mid-form" onSubmit={EditArticle}>
                    <div className="form-group">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" defaultValue={article.title} ref={titleRef} required/>


                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Contenido</label>
                        <textarea name="content" defaultValue={article.content} ref={contentRef}  required></textarea>



                    </div>

                    <div className="form-group">
                        <label htmlFor="file0">Imagen</label>
                        {article.image !== null ? (
                            <img src={url + 'get-image/' + article.image} alt={article.title} className="thumb" />
                        ) : (
                            <img src={Image} alt={article.title} className="thumb" />
                        )
                        }
                        <input type="file" name="file0" onChange={fileChange}/>
                    </div>

                    <div className="clearfix"></div>

                    <input type="submit" value="Editar" className="btn btn-success" />

                </form>
            </section>
            <AppSidebar />
        </div>
    );
}

export default EditArticles;