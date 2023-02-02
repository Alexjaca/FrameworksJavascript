cls<template>
  <AppHeader/>
  <AppSlider/>
  <div class="center">
    <RouterView></RouterView>
    <!--<AppLastArticles/>-->
    <AppSidebar/>
    <div class="clearfix"></div>
  </div>
<AppFooter/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSlider from './components/AppSlider.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSlider,
    AppSidebar,
    AppFooter
  }
 
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

@import './assets/css/styles.css';
</style>
