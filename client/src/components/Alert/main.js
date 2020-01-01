import Vue from "vue"
import Main from "./main.vue"
let AlertConstructor = Vue.extend(Main)

const Alert = function(
  { title, content, callback, onCancel } = {
    title: "",
    content: "",
    callback: null,
    onCancel: null
  }
) {
  // 设置组件信息
  let instance = new AlertConstructor({
    data: { title, content }
  })
  instance.$on("submit", () => {
    callback instanceof Function ? callback() : null
  })
  instance.$on("cancel", () => {
    onCancel instanceof Function ? onCancel() : null
  })

  // 挂载
  instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}

export default Alert
