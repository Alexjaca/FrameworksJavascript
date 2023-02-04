<template>
<header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/images/vue.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>Vue
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <RouterLink to="/">Inicio</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/blog">Blog</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/formulario">Formulario</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/peliculas">Peliculas</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{name: 'page', params: {id: '21101985'}}">Pagina</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/micomponente">Pagina 2</RouterLink>
                        </li>                               
                    </ul>
                </nav>

                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>
export default{
        name: 'AppHeader'
}
</script>