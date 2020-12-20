import Vue from 'vue'
import VueRouter from 'vue-router'
import TableRowHover from '../views/TableRowHover.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TableRowHover',
    component: TableRowHover
  },
  {
    path: '/TableRules',
    name: 'TableRules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TableRules.vue')
  },
  {
    path: '/WatchRouter',
    name: 'WatchRouter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/watchRouter/WatchRouter.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
