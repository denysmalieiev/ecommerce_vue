import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomeViews/HomeView.vue';
import AboutPage from '../views/AboutView.vue';
import UiPage from '../views/UiView.vue';
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
    path: '/ui',
    component: UiPage,
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
