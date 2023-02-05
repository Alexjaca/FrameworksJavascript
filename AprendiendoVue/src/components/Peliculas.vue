<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <div class="computed"   >
                    <p v-html="misDatos" ></p>
                </div>
                <h2 class="subheader">PELICULAS </h2>
                {{ $filters.mayuscula($filters.concatenaYear(web,'EL MEJOR AÑO'))}}
                <div class="favorita" v-if="favorita">
                    <h3>MI PELICULA FAVORITA ES:</h3>
                    <h2>{{ favorita.title }}</h2>
                  
                </div>
                <!--Listado articulos-->
                <div id="articles">
                    <!--NO LE PONEMOS A LA FUNCION EL haLLegadoPeliculaFavorita() POR QUE YA VIENE EL PARAMETRO DEFINIDO-->
                    <div v-for="pelicula in peliculasMayuscula" :key="pelicula">
                        <Pelicula :pelicula='pelicula' v-on:favorita="haLLegadoPeliculaFavorita">'</Pelicula>
                        <!--se puede usar v-on:favorita o @favorita para decirle que es un metodo-->
                    </div>

                </div>

            </section>
            <AppSidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Pelicula from './Pelicula.vue';
import AppSidebar from './AppSidebar.vue';

export default {
    name: 'AppPeliculas',
    components: {
        Pelicula,
        AppSidebar
    },
    //PROPIEDADADES COMPUTADAS***************************
    computed:{
        peliculasMayuscula(){
            var peliculasMod = this.peliculas;
            for(var i = 0; i < this.peliculas.length; i++){
                peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
            }
            return peliculasMod;
        },
        misDatos(){
            return this.nombre +' '+ this.apellido+' '+'<br/><strong>Sitio web: <strong/>' +this.web;
        }
    },
    //FILTORS O PIPES ****************************** YA NO SE USA ASI EN VUE 3
    filters:{
        mayuscula(value){
            return value.toUpperCase();
        }
    },
    methods: {
        haLLegadoPeliculaFavorita(favorita) {
            console.log('Llegando pelicula favorita al padre y es = ');
            console.log(favorita.title);
            console.log('********************************************');
            this.favorita = favorita;
        }
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
            favorita: null,
            nombre: 'Alexander',
            apellido: 'Cardenas',
            web: 'www.jac.com'
        }
    }
}

</script>