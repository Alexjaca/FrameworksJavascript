<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <article class="article-item article-detail" v-if="article">
                    <div class="image-wrap" v-if="article.image">
                        <img :src="this.url + 'get-image/' + article.image" :alt="article.title" />
                    </div>
                    <div class="image-wrap" v-else>
                        <img src="../assets/images/nofound.jpg" :alt="article.title" />
                    </div>

                    <h1 class="subheader">{{ article.title }}</h1>
                    <span class="date">
                        {{ article.Date }}
                    </span>
                    <p>{{ article.content }}</p>

                    <div class="clearfix"></div>
                </article>
                <input type="submit" value="EDITAR" class="btn btn-success" />
                <input type="submit" value="ELIMINAR" class="btn btn-danger" @click="deleteArticle(article._id)" />
            </section>
            <AppSidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import AppSidebar from './AppSidebar.vue';
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'AppArticle',
    components: {
        AppSidebar
    },
    data() {
        return {
            url: Global.url,
            article: null
        }
    },
    mounted() {
        var articleId = this.$route.params.id;
        this.getArticle(articleId);

    },
    methods: {
        getArticle(id) {
            axios.get(this.url + 'article/' + id)
                .then(res => {
                    if (res.data.status == 'success') {
                        this.article = res.data.article;
                    }
                });
        },
        deleteArticle(id) {
            Swal.fire({
                title: 'Seguro deseas Eliminarlo?',
                text: "No podras volver atras!!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminarlo!',
                cancelButtonText: 'Cancelar '
            }).then((result) => {
                if (result.isConfirmed) {
                    //CONFIRMACION DE ELIMINAR EL ARTICULO
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            if (res.data.status == "success") {
                                this.$router.push('/blog');
                            }
                        }).catch(err => {
                            console.log(err);
                        });
                    Swal.fire(
                        'Eliminado!',
                        'El Articulo se ha eliminado correctamente!!',
                        'success'
                    )
                }
            })

        }
    }
}
</script>