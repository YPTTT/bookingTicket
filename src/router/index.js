import VueRouter from 'vue-router'
import Vue from 'vue'

import homePage from '../components/homePage'
import showtimesPage from '../components/showtimesPage'
import promotionPage from '../components/promotionPage'
import adsPage from '../components/adsPage'
import aboutPage from '../components/aboutPage'
import loginPage from '../components/loginPage'

Vue.use(VueRouter)
const routes = [
    {path: '/', name: 'home', component: homePage},
    {path: '/showtimesPage', name: 'showtimesPage', component: showtimesPage},
    {path: '/promotionPage', component: promotionPage},
    {path: '/adsPage', component: adsPage},
    {path: '/aboutPage', component: aboutPage},
    {path: '/loginPage', component: loginPage},
    {path: '/loginSuccess', redirect: '/'}
]

const router = new VueRouter({
    routes
})

export default router