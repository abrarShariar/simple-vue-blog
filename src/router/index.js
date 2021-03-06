import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogComponent from '../components/BlogComponent'
import ParentEventComponent from '../components/ParentEventComponent'
import DestinationBox from '../components/DestinationBox'
import CounterComponent from '../components/CounterComponent'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogComponent
  },
  {
    path: '/parent-event',
    name: 'ParentEventComponent',
    component: ParentEventComponent
  },
  {
    path: '/destination-box',
    name: 'DestinationBox',
    component: DestinationBox
  },
  {
    path: '/counter',
    name: 'CounterComponent',
    component: CounterComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
