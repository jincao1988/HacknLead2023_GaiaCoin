import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Dashboard from "../components/Dashboard.vue";
import BarChart from "../components/BarChart.vue";
import SustView from "../views/SustView.vue";
// import Vue from 'vue';
// import VueRouter from 'vue';
// Vue.use(VueRouter);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/barchart',
      name: 'barchart',
      component: BarChart
    },
    {
      path: '/sust',
      name: 'sust',
      component: SustView
    }
    // {
    // path: '/about',
    // // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (About.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // }
  ]
})
export default router


















