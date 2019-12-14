import Vue from "vue"
import Router from "vue-router"
import store from "@/store"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/home")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login")
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem("token")
  // 当跳转的页面不是登录页面，并且没有 Token
  // 就强行重定向至登录页面
  if (to.name !== "login" && !token) {
    window.localStorage.removeItem("token")
    next("/login")
  } else {
    next()
  }
})

export default router
