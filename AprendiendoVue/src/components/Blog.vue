<template>
    <div class="general">
        <AppSlider texto="Blog" btn="false" />
        <div class="center">
            <section id="content">
                <h2 class="subheader">BLOG</h2>

                <div id="articles" v-if="articles">

                    <Articles :articles="articles"></Articles>

                </div>

            </section>
            <AppSidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Articles from './Articles.vue';
import AppSlider from './AppSlider.vue';
import AppSidebar from './AppSidebar.vue';
import axios from 'axios';
import { toRaw } from 'vue';
import Global from '../Global';


export default {
    name: 'AppBlog',
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
        this.getArticles();

    },
    methods: {
        getArticles() {
            axios.get(this.url + 'articles')
                .then(res => {
                    if (res.data.articles) {

                        this.articles = res.data.articles;
                        // this.article MUESTRA UN OBJETO PROXY toRaw me ayuda a ver el Json Limpio
                        console.log(toRaw(this.articles));

                    }
                });
        }
    }
}
</script>