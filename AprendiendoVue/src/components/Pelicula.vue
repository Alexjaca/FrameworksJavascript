<template>


<article class="article-item" >
                <div class="image-wrap">
                <img :src="pelicula.image" :title="pelicula.title" />

                </div>

                <h2>{{pelicula.title}}</h2>
                <span class="date" v-bind:class="{
                    greenyear: pelicula.year >= 2000,
                    redyear: pelicula.year < 2000,
                }">
                    {{pelicula.year}}
                </span>
                <a href="#">Leer más</a>

                <input type="button" value="Marcar Favorita"
                @click="pasarFavoritaAlPadre(pelicula)"
                />

                <div class="clearfix"></div>
            </article>

</template>

<script>
export default{
    name: 'AppPelicula',
    props: ['pelicula'],
    mounted(){
        //console.log(this.pelicula);
    },
    methods:{
        pasarFavoritaAlPadre(pelicula ){
            console.log('Pasando Favorita al Padre y es= ');
            console.log(pelicula.title);
            console.log('********************************************');
            this.$emit('favorita', pelicula);

        }
    }
}
</script>