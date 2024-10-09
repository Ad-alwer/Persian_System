import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import home from "./components/Home.vue"

const routes = [
    { path: "/", component: home },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(bootstrap).use(router).mount("#app");
