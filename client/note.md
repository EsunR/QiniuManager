## 1. 全局消息组件 Message

```js
import Message from "@/components/Message/main"
// ... ... 
Message({
  type: string,
  message: string
})
```

默认弹出成功消息：

```js
this.$message("登录成功, 正在跳转")
```

Message 配置项

| 参数 | 类型   | 可选值                        |
| ---- | ------ | ----------------------------- |
| type | string | error, success, info, warning |