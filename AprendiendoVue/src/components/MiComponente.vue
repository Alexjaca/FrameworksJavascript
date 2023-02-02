<template>
    <hr/>
    <section id="content">
    <h1>Este es MiComponente</h1>
    <h2>{{ subtitulo     }}</h2>
    <hr/>
</section>
</template>


<script>
export default{
    name: 'MiComnponente',
    data(){
        return{
            subtitulo: 'Soy el subtitulo de MiComponente'
        }
    }
}
</script>