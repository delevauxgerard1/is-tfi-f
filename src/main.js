//main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import './index.css';
import BuscarArticulo from './pages/BuscarArticulo.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faPenToSquare, faTrashCan, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Agrega iconos a la librería
library.add(faUserSecret, faPenToSquare, faTrashCan, faTrashAlt);

// Configura el router
const routes = [
  { path: '/', component: Home },
  { path: '/buscar-articulo', component: BuscarArticulo},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Crea la aplicación y úsala con el router
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');



