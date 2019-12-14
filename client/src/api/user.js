import request from "../utils/request"

export function login(formData) {
  const { name, password } = formData
  return request({
    url: "/user/login",
    method: "post",
    data: { name, password }
  })
}

export function register(formData) {
  const { name, password } = formData
  return request({
    url: "/user/register",
    method: "post",
    data: { name, password }
  })
}

export function fetchUserInfo() {
  return request({
    url: "/user/info",
    method: "get"
  })
}
