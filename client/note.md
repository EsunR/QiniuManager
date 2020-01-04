## 1. 消息组件 Message

引入方式使用：

```js
import Message from "@/components/Message/main.js"
// ... ... 
Message({
  type: string,
  message: string
})
```

全局方式使用：

```js
import Vue from "vue"
import Message from "@/components/Message/main.js"
// ... ...
Vue.prototype.$message = Message
```

```js
this.$message("登录成功, 正在跳转")
```

Message 配置项

| 参数    | 类型   | 可选值                        |
| ------- | ------ | ----------------------------- |
| type    | string | error, success, info, warning |
| message | string |                               |

## 2. 弹窗组件 Alert

引入方式使用：

```js
import Alert from "@/components/Alert/main.js"
Aalert({
  title: "确认操作",
  content: "您确定要删除当前的 Key 吗？",
  callback: () => {
    this.$store.dispatch("key/delQiniuKey", id)
    this.$message("删除成功")
  }
})
```

全局方式使用：

```js
import Vue from "vue"
import Alert from "@/components/Alert/main.js"
// ... ...
Vue.prototype.$alert = Alert
```

```js
this.$alert({
  title: "确认操作",
  content: "您确定要删除当前的 Key 吗？",
  callback: () => {
    this.$store.dispatch("key/delQiniuKey", id)
    this.$message("删除成功")
  }
})
```

Alert 配置项

| 参数     | 类型     |
| -------- | -------- |
| title    | string   |
| content  | string   |
| callback | function |
| onCancel | function |
