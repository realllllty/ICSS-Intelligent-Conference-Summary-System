import {createRouter, createWebHistory} from "@ionic/vue-router";
// import { RouteRecordRaw } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/Login.vue"),
    },

    {
        path: "/app",
        component: () => import("./components/App_bottom_bar.vue"),
        children: [
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
        ],
    },
];

const router = createRouter({
    // Use: createWebHistory(process.env.BASE_URL) in your app
    history: createWebHistory(),
    routes,
});


export default router;
