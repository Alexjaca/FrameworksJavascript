<template>
    <section id="content">
        <h2 class="subheader">PAGINA DE PRUEBA</h2>
        <h3 class="subheader">{{id_desde_url}}</h3>
        <button @click="cambiarNombre()">Cambiar Nombre</button>
        <button @click="redirigirBlog()">Ir al Blog</button>
        <h2>{{ nombre }}</h2>

    </section>
</template>

<script>
export default {
    name: 'AppPagina',
    //COMPONENTES DEL CICLO DE VIDA EN VUE
    //mounted() SE EJECUTA CUANDO EL COMPONENTE HA SIDO MONTADO
    mounted() {
        this.id_desde_url = this.$route.params.id;
        console.log('Componente mounted()--Montado');
    },created(){
        console.log('Componente created()--Creado');
    },
    updated(){
        console.log('Componente updated()--Actualizado');
    },
    unmounted(){
        console.log('Componente unmounted()--Destruido sustituto del destroyed');
    },
    data() {
        return {
            id_desde_url: null,
            nombre: 'Alex Cardenas'
        }
    },
    methods:{
        cambiarNombre(){
            this.nombre = 'JOSE ALEXANDER CARDENAS ALVIAREZ'
            console.log(this.nombre);
        },
        redirigirBlog(){
            this.$router.push('/blog');
        }
    }
}
</script>