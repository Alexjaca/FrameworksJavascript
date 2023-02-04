<template>
    <section id="content">
        <h2 class="subheader">PELICULAS</h2>

        <!--Listado articulos-->
        <div id="articles">
        
           <div v-for="pelicula in peliculas" :key="pelicula">
                <Pelicula prueba = "prueba"></Pelicula>
            </div>
        
        </div>

    </section>
</template>

<script>
import Pelicula from './Pelicula.vue';

export default {
    name: 'AppPeliculas',
    components: {
        Pelicula
    },
    data() {
        return {
            peliculas: [
                { title: 'Batman', year: 2010, image: 'https://m.media-amazon.com/images/I/91QP2M4hbfL.jpg' },
                { title: 'Superman', year: 2014, image: 'https://media.revistagq.com/photos/63578ec8868dbbdd9bf3b8c0/1:1/w_2400,h_2400,c_limit/henry-cavill-superman-regreso.jpg' },
                { title: 'Thor', year: 2017, image: 'https://images.ecestaticos.com/90UTFOUNT4b6W5tgADs3_j15Osc=/247x0:1112x609/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fba9%2F620%2F92c%2Fba962092c6b8f19a2f8162c2e197d281.jpg' },
                { title: 'Spiderman', year: 2018, image: 'https://sm.ign.com/t/ign_es/review/m/marvels-sp/marvels-spider-man-remastered-for-pc-vs-ps5-performance-revi_ehag.1200.jpg' },
                { title: 'El Chapulin colorado', year: 1990, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/El_Chapul%C3%ADn_Colorado_logo.svg/1200px-El_Chapul%C3%ADn_Colorado_logo.svg.png' }
            ],
            prueba: 'HOLA-'
        }
    }
}

</script>