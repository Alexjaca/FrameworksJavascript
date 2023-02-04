<template>
    <hr/>
    <section id="content">
    <h1>Este es MiComponente</h1>
    <h2>{{ subtitulo     }}</h2>
    <hr/>
    <h3>REACTIVIDAD</h3>
    <input type="text" v-model="nombre"/>
    Mi nombre es : <strong>{{ nombre }}</strong>

    <pre>
        {{ $data }}
    </pre>
    <hr/>
    <h3>DIRECTIVAS CONDICIONALES</h3>
    <input type="number" v-model="edad"/>
    Mi edad es : <strong>{{ edad }}</strong>
    <p style="color:green; font-weight: bold;" v-if="edad && edad >= 18 && edad < 65">ERES MAYOR DE EDAD!!! </p>
    <p style="color:purple; font-weight: bold;" v-else-if="edad && edad >= 65" >ERES DE EDAD AVANZADA!!! </p>
    <p style="color:red; font-weight: bold;" v-else >ERES MENOR DE EDAD!!! </p>
    <hr/>

    <h3>DIRECTIVAS ITERATIVA</h3>
    <ol>
        <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
    </ol>


</section>
</template>


<script>
export default{
    name: 'MiComnponente',
    data(){
        return{
            subtitulo: 'Soy el subtitulo de MiComponente',
            nombre: '',
            edad: 37,
            peliculas : ['Batman vs Supermam', 'El señor de los Anillos', 'Spiderman', 'Capitan America', 'El chapulin colorado']
        }
    }
}
</script>