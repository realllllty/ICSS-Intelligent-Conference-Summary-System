import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from "vue-router";
import Example from "./components/Example.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Example,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        component: () => import("./views/HomePage.vue"),
      },
      {
        path: "about",
        component: () => import("./views/About.vue"),
      },
      {
        path: "library",
        component: () => import("./views/LibraryPage.vue"),
      },
      {
        path: "login",
        component: () => import("./views/login.vue"),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
