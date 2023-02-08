<template>

<aside id="sidebar">
                <div id="nav-blog" class="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" class="btn btn-success">Crear artículo</a>
                </div>

                <div id="search" class="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form @submit.prevent="goSearch">
                            <input type="text" name="search" v-model="searchString" @change="goSearch"/>
                            <input type="submit" name="submit" value="Buscar" class="btn" />
                        </form>
                </div>
            </aside>

</template>

<script>
export default{
    name: 'AppSidebar',
    data(){
        return{
            searchString: null
        }
    },
    methods:{
        goSearch(){
            console.log(this.searchString);
            //REDIRIGE A UN TERCER COMPONENTE ANTES DE SEARCH PARA QUE PERMITA LAS BUSQUEDAS DESDE CUALQUIER COMPONENTE
            this.$router.push('/redirect/'+this.searchString);
        }
    }
}
</script>