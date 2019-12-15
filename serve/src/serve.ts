import { sysConfig } from "./config"
import Koa from "koa"
import Router from "koa-router"
import cors from "@koa/cors"
import bodyPaser from "koa-bodyparser"
import errorHandler from "./middle/error_handler"
import tokenChecker from "./middle/token_checker"
import dbGenerator from "./db/db_generator"
import koaJwt from "koa-jwt"

const app: Koa = new Koa()
const router: Router = new Router()

// Database
dbGenerator()

// Middle Wear
app.use(errorHandler())
app.use(cors())
app.use(bodyPaser())
app.use(
  koaJwt({ secret: sysConfig.tokenSalt }).unless({
    path: [
      /^\/api\/user\/login/,
      /^\/api\/user\/register/,
      /^((?!\/api).)*$/ // 设置除了私有接口外的其它资源，可以不需要认证访问
    ]
  })
)
app.use(tokenChecker())

// Router
import userRouter from "./routers/user_router"
import uploadRouter from "./routers/upload_router"
router.get("/api/test", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "api serve ok!"
  await next()
})
router.use("/api/user", userRouter)
router.use("/api/upload", uploadRouter)
app.use(router.routes()).use(router.allowedMethods())

// Listen
app.listen(sysConfig.port)
console.log(`serve running on http://localhost:${sysConfig.port}`)
