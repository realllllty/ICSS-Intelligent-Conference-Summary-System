import {createRouter, createWebHistory} from "@ionic/vue-router";
import Choose from "@/components/Choose.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

const routes = [
    {
        path: "/",
        component: Choose,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
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
                component: () => import("./views/Settings.vue"),
            },
            {
                path: "library",
                component: () => import("./views/LibraryPage.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
