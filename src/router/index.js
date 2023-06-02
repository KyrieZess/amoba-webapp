import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import LoggedRouterView from '../views/LoggedRouterView.vue'
import NotLoggedRouterView from '../views/NotLoggedRouterView.vue'

import { AuthLogic } from '../logic/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LoggedRouterView",
    component: LoggedRouterView,
    children: [
      {
        path: '/',
        name: 'Home',
        components: { loggedView: Home },
      },
      {
        path: '/about',
        name: 'About',
        components: { loggedView: About },
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

router.beforeEach((to, from, next) => {
  const tokenIsValid = AuthLogic.TokenIsValid();

  console.log(from.name)
  console.log(to.name)
  console.log(tokenIsValid)

  if (!tokenIsValid && to.name != "Login" && from.name != null) {
    next("login");
  } else if (tokenIsValid || from.name == null) {
    next()
  }
});

export default router
