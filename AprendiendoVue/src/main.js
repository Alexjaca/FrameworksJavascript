/*PAQUETES A IMPORTAR */
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

/*MIS COMPONENTES */
import MiComponente from './components/MiComponente';
import AppLastArticles from './components/AppLastArticles';
import AppFormulario from './components/Formulario';
import Blog from './components/Blog';
import AppPagina from './components/Pagina';
import Error from './components/Error';
import AppPeliculas from './components/Peliculas';



const routes = [
    {path: '/', component: AppLastArticles},
    {path: '/formulario', component: AppFormulario},
    {path: '/blog', component: Blog},
    {path: '/pagina/:id', name: 'page',  component: AppPagina},
    {path: '/micomponente', component: MiComponente},
    {path: '/peliculas', component: AppPeliculas},
    {path: '/:pathMatch(.*)*', component: Error}
];


/***Configuración del router***/
const router = createRouter({
    history: createWebHistory(),
    routes,
  });


/***Instancia de createApp()***/
const app = createApp(App);

/*CREANDO FILTROS O PIPES A UTILIZAR */
app.config.globalProperties.$filters = {
  mayuscula (value) {
    return value.toUpperCase();
  },
  concatenaYear(value, message){
    var date = new Date();
    return value + ' ' + date.getFullYear() + ' ' +message;
  }
}

/***Instancia del router y montar la app***/
app.use(router);
app.mount("#app");


