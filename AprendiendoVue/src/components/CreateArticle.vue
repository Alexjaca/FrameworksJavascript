<!--VINCULANDO EL CreateArticle.html CON EL COMPONENTE CreateArticle.vue-->
<template src="./CreateArticle.html"></template>

<script>
import AppSidebar from './AppSidebar.vue';
import axios from 'axios';
import Global from '../Global';
import Article from '../models/Article';
import Swal from 'sweetalert2';


export default {
    name: 'AppCreateArticle',
    data() {
        return {
            article: new Article('', '', null, ''),
            url: Global.url,
            file: ''
        }
    },
    components: {
        AppSidebar
    },
    methods: {
        createArticle() {
            axios.post(this.url + 'save', this.article)
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

                            var articleId = res.data.articleStored._id;

                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.article = res.data.article;
                                        this.$router.push('/blog');
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Articulo registrado con Exito!',
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
                            this.$router.push('/blog');
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Articulo registrado con Exito!',
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
        }
    }
}
</script>