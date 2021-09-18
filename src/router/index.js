import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)
export const constantRouters = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/index')
        }]
    },
    {
        path: '/up',
        component: Layout,
        redirect: {name: 'detail'},
        children: [
            {
                path: '/up/detail/:mid',
                name: 'detail',
                component: () => import('@/views/updetail/index')
            },
           /* {
                path: '/up/d/:mid',
                name: 'd',
                component: () => import('@/views/updetail/index')
            },*/
        ]
    },
]

const createRouter = () => new Router({
    routes: constantRouters
})
const router = createRouter()
export default router