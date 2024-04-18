import { createRouter, createWebHistory } from "vue-router";
import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import ProductDetails from "@/views/ProductDetails.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contactez-nous",
        name: "Contact",
        component: Contact,
        alias: "/contact"
    },
    {
        path: "/products/:name",
        name: "product-details",
        component: ProductDetails,
        props: true,
    },
    {
        path: "/:catchAll(.*)",
        name: NotFound,
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;