<template>
    <section>
        <div id="article-list" v-if="articles && articles.length > 0">
            <article class="article-item" v-for="article in articles" :key="article._id">
                <div class="image-wrap">
                    <img :src="this.url + 'get-image/' + article.image" :alt="article.title" v-if="article.image" />

                    <img src="../assets/images/nofound.jpg" :alt="article.title" v-if="!article.image" />
                </div>

                <h2><RouterLink :to="{name:'article', params:{id: article._id}}">{{ article.title }}</RouterLink></h2>
                <span class="date">
                    {{$filters.fechaHastaAhora(article.Date)}}
                </span>
                <RouterLink :to="{name:'article', params:{id: article._id}}">{{$filters.mayuscula('Leer más')}}</RouterLink>

                <div class="clearfix"></div>
            </article>
        </div>

        <div v-else-if="articles && articles.length < 1">
            <p>No hay articulos para mostrar</p>

        </div>

        <div v-else>
            <p>Cargando......</p>
            <img src="../assets/images/loading.gif" alt="Loading" />
        </div>

    </section>

</template>

<script>
import Global from '../Global';

export default {
    name: 'AppArticles',
    props: ['articles'],
    data() {
        return {
            url: Global.url
        }
    }
}
</script>