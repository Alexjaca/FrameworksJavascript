<template>
    <h1>Redirigiendo...</h1>
</template>

<script>
export default{
    name: 'AppRedirect',
    mounted(){
        var search = this.$route.params.searchString;
        this.$router.push('/buscar/'+search);
    }
}
</script>