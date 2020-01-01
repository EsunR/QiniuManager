import Vue from "vue"
import Main from "./main.vue"
let MessageConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1

const Message = function(options = {}) {
  // 处理预设
  if (typeof options === "string") {
    options = {
      message: options
    }
  }
  // 设置 id 并实例化组件
  let id = "message_" + seed++
  let userOnClose = options.onClose
  options.onClose = function() {
    Message.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  // 手动将组件挂载到页面上
  instance.$mount()
  document.body.appendChild(instance.$el)

  // 新出现的弹窗位置要向上便宜一定的像素
  let verticalOffset = options.offset || 20
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset

  instances.push(instance)
  return instance
}

Message.close = function(id, userOnClose) {
  let len = instances.length
  let index = -1
  let removedHeight
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      if (typeof userOnClose === "function") {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style["bottom"] =
      parseInt(dom.style["bottom"], 10) - removedHeight - 16 + "px"
  }
}

export default Message
