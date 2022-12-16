import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import about from './views/about.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: about
        }
    ]
})
