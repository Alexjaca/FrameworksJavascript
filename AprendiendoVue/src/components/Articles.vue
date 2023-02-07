<template>

    <div id="article-list">
        <article class="article-item" v-for="article in articles" :key="article._id">
            <div class="image-wrap">
                <img :src="this.url + 'get-image/' + article.image" :alt="article.title" v-if="article.image" />

                <img src="../assets/images/nofound.jpg" :alt="article.title" v-if="!article.image" />
            </div>

            <h2>{{ article.title }}</h2>
            <span class="date">
                {{ article.Date }}
            </span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
        </article>
    </div>

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