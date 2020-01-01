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
      path: "/login",
      name: "login",
      component: () => import("@/pages/login")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/home")
    },
    {
      path: "/keyManage",
      name: "keyManage",
      component: () => import("@/pages/key-manage")
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem("token")
  // 当跳转的页面不是登录页面，并且没有 Token
  // 就强行重定向至登录页面
  if (to.name !== "login" && !token) {
    console.log("路由重定向")
    window.localStorage.removeItem("token")
    next("/login")
  } else {
    // 获取应用必要的初始化信息
    if (to.name !== "login" && !store.getters.login) {
      store.dispatch("user/getUserInfo")
      store.dispatch("key/getQiniuKeys")
    }
    next()
  }
})

export default router
