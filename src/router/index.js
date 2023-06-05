import Vue from 'vue'
import VueRouter from 'vue-router'

import Game from '../views/Game.vue'
import Login from '../views/Login.vue'
import LoggedRouterView from '../views/LoggedRouterView.vue'
import NotLoggedRouterView from '../views/NotLoggedRouterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LoggedRouterView",
    component: LoggedRouterView,
    children: [
      {
        path: '/',
        name: 'Game',
        components: { loggedView: Game },
      },
    ]
  },
  {
    path: "/",
    name: "NotLoggedRouterView",
    component: NotLoggedRouterView,
    children: [
      {
        path: '/login',
        name: 'Login',
        components: { notLoggedView: Login },
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
