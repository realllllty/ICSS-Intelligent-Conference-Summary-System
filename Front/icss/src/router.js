import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from "vue-router";
import Bottom_Bar from "./components/App_bottom_bar.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Bottom_Bar,
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
        component: () => import("./components/Login.vue"),
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
