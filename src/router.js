import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import About from "./components/about.vue";
import Page from "./components/page.vue";

const routes = [
    {
        path: '/',
        component: About
    },
    {
        path: '/pages/:pageId',
        component: Page,
        props: true
    }
    
]

export default new VueRouter({
    routes,
    mode: 'history' // что бы не было # в переходе по страницам (для каждого сервера смотреть настройки в документации Режим HTML5 History) 
})