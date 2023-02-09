/*PAQUETES A IMPORTAR */
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
//import VueMoment from 'vue-moment';
import Vuelidate from 'vuelidate';

/*MIS COMPONENTES */
import MiComponente from './components/MiComponente';
import AppLastArticles from './components/AppLastArticles';
import AppFormulario from './components/Formulario';
import Blog from './components/Blog';
import AppPagina from './components/Pagina';
import Error from './components/Error';
import AppPeliculas from './components/Peliculas';
import Search from './components/Search';
import Redirect from './components/Redirect';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';


const routes = [
    {path: '/', component: AppLastArticles},
    {path: '/formulario', component: AppFormulario},
    {path: '/blog', component: Blog},
    {path: '/crearArticulo', component: CreateArticle},
    {path: '/buscar/:searchString', component: Search},
    {path: '/articulo/:id', name:'article', component: Article},
    {path: '/redirect/:searchString', component: Redirect},
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
  },
  fechaHastaAhora(value){
    //console.log(typeof value);
    var date = new Date();
    date.setTime(Date.parse(value));
   // console.log(typeof date);
    return date;
  }
}


/***Instancia del router y montar la app***/
app.use(router);
app.use(Vuelidate);
//app.use(VueMoment);
app.mount("#app");


