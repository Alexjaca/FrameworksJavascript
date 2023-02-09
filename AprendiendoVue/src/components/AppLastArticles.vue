<template>
    <div class="general">
        <AppSlider texto="Bienvenido al Curso de Vue con Víctor Robles de victorroblesweb.es" btn="true"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Últimos artículos</h2>

                <!--Listado articulos-->
                <div id="articles">
                 <Articles v-bind:articles="articles"></Articles>

                </div>

            </section>
            <AppSidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import AppSlider from './AppSlider.vue';
import AppSidebar from './AppSidebar.vue';
import Articles from './Articles.vue';
import Global from '../Global';
import axios from 'axios';
//import { toRaw } from 'vue';

export default {
    name: 'AppLastArticles',
    components: {
        AppSlider,
        AppSidebar,
        Articles
  },
  data() {
        return {
            articles: [],
            url: Global.url
        }
    },
    mounted() {
        this.getLastArticles();

    },
    methods: {
        getLastArticles() {
            axios.get(this.url + 'articles/true')
                .then(res => {
                    if (res.data.articles) {

                        this.articles = res.data.articles;
                        // this.article MUESTRA UN OBJETO PROXY toRaw me ayuda a ver el Json Limpio
                        //console.log(toRaw(this.articles));

                    }
                });
        }
    }
}
</script>