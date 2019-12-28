import axios from "axios"
import config from "@/config"
import Message from "@/components/Message/main"
import router from "@/router"

const service = axios.create({
  baseURL: config.baseURL,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    // 由于 Token 是动态刷新的所以在每次请求前都要重新取 Token
    config.headers.common["Authorization"] = window.localStorage.getItem(
      "token"
    )
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { data } = response
    if (!data.success) {
      Message({ type: "error", message: data.msg })
      return Promise.reject(data.msg)
    } else {
      return data
    }
  },
  err => {
    if (!err.response) {
      Message({
        type: "error",
        message: err
      })
    }
    const { status, data } = err.response
    switch (status) {
      case 401:
        if (router.currentRoute.path !== "/login") {
          Message({
            type: "error",
            message: "登录信息已过期，请重新登录"
          })
          router.push("/login")
        }
        break
      default:
        Message({ type: "error", message: data.msg })
        break
    }
    return Promise.reject(data.msg)
  }
)

export default service
