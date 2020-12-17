import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Menu from "../views/Menu.vue"
import Where from "../views/Where.vue"
import Shop from "../views/Shop.vue"
import NotFound from "../views/NotFound.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name: "Home",
            component: Home
        },
        {
            path:"/about",
            name: "About",
            component: About
        },
        {
            path:"/menu",
            name: "Menu",
            component: Menu
        },
        {
            path:"/where",
            name: "Where",
            component: Where
        },
        {
            path:"/shop",
            name: "Shop",
            component: Shop
        },
        
        {
            path:"/:catchAll(.*)",
            component: NotFound
        },
    ]
})

export default router