import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomeViews/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main", auth: true },
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "main", auth: true },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/ui",
    name: "Ui",
    meta: { layout: "main", auth: true },
    component: () => import("../views/UiView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "main", auth: false },
    component: () => import("../views/TheLogin.vue"),
  },
  {
    path: "/category/:categoryName",
    name: "Category",
    meta: { layout: "main", auth: false },
    component: () => import("../views/CategoryViews/CategoryView.vue"),
  },
  {
    path: "/details/:productItem",
    name: "Details",
    meta: { layout: "main", auth: false },
    component: () => import("../views/DetailsViews/DetailsViews.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
});

export default router;
