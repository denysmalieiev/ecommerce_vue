import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomeView.vue';
import AboutPage from '../views/AboutView.vue';
import LoginPage from '../views/Login.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
