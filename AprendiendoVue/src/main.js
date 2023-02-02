/*PAQUETES A IMPORTAR */
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

/*MIS COMPONENTES */
import MiComponente from './components/MiComponente';
import AppLastArticles from './components/AppLastArticles';


const routes = [
    {path: '/home', component: AppLastArticles},
    {path: '/micomponente', component: MiComponente}
];


/***Configuración del router***/
const router = createRouter({
    history: createWebHistory(),
    routes,
  });


/***Instancia de createApp()***/
const app = createApp(App);


/***Instancia del router y montar la app***/
app.use(router);
app.mount("#app");


