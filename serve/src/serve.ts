import Koa from "koa"
import Router from "koa-router"
import { sysConfig } from "./config"

const app: Koa = new Koa()
const router: Router = new Router()

router.get("/", (ctx: Router.RouterContext, next: Koa.Next) => {
  ctx.body = "测试成功"
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(sysConfig.port)
console.log(`serve running on http://localhost:${sysConfig.port}`)
