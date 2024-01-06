//router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import BuscarArticulo from './pages/BuscarArticulo.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/buscar-articulo', component: BuscarArticulo },
  // Otras rutas si las tienes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;