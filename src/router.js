import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

const routes = [
  {
    path: '/:id', // Динамический маршрут
    name: 'page',
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
