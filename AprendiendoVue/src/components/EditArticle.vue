<!--VINCULANDO EL CreateArticle.html CON EL COMPONENTE CreateArticle.vue-->
<template src="./CreateArticle.html"></template>

<script>
import AppSidebar from './AppSidebar.vue';
import axios from 'axios';
import Global from '../Global';
import Article from '../models/Article';
import Swal from 'sweetalert2';


export default {
    name: 'AppEditArticle',
    data() {
        return {
            article: new Article('', '', null, ''),
            url: Global.url,
            file: '',
            isEdit : true,
            articleId : null
        }
    },
    mounted(){
        this.articleId = this.$route.params.id;
        this.getArticle(this.articleId);
    },
    components: {
        AppSidebar
    },
    methods: {
        createArticle() {
            axios.put(this.url + 'article/' + this.articleId, this.article)
                .then(res => {
                    if (res.data.status == 'success') {

                        if (this.file != null && this.file != undefined && this.file != '') {
                            //SUBIDA DE IMAGENES
                            const formData = new FormData();
                            formData.append('file0', this.file);

                            //Recorriendo el FormData() para saber lo que tiene adentro
                            /*for (var entrie of formData.entries()) {
                                console.log(entrie[0]);
                                console.log(entrie[1]);
                            }*/

                            axios.post(this.url + 'upload-image/' + this.articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.article = res.data.article;
                                        this.$router.push('/articulo/'+this.articleId);
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Articulo Editado con Exito!',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    } else {
                                        //mensaje de error
                                    }
                                }).catch(err => {
                                    console.log(err);
                                })
                        } else {
                            this.$router.push('/articulo/'+this.articleId);
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Articulo Editado con Exito!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }
                }).catch(err => {
                    console.log(err);
                });
        },
        fileChange() {
            //RECOGIENDO EL ARCHIVO GUARDADO EN LA REFERENCIA file (Line 26) 
            this.file = this.$refs.file.files[0];
        },
        getArticle(id) {
            axios.get(this.url + 'article/' + id)
                .then(res => {
                    if (res.data.status == 'success') {
                        this.article = res.data.article;
                    }
                });
        }
    }
}
</script>