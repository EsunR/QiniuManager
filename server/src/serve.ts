import { sysConfig } from "./config"
import Koa from "koa"
import Router from "koa-router"
import cors from "@koa/cors"
import KoaBody from "koa-body"
import errorHandler from "./middle/error_handler"
import tokenChecker from "./middle/token_checker"
import dbGenerator from "./db/db_generator"
import koaJwt from "koa-jwt"
import koaStatic from "koa-static"
import path from "path"
import koaCompress from "koa-compress"
import history from "koa2-connect-history-api-fallback"

const app: Koa = new Koa()
const router: Router = new Router()

// Database
dbGenerator()

// Middle Wear
app.use(errorHandler())
app.use(cors())
app.use(history({ whiteList: ["/api"] }))
app.use(koaCompress({ threshold: 2048 }))
app.use(
  koaStatic(path.join(__dirname, "../static"), {
    gzip: true
  })
)
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      maxFieldsSize: 2000 * 1024 * 1024
    }
  })
)
app.use(
  koaJwt({ secret: sysConfig.tokenSalt }).unless({
    path: [
      /^\/api\/test/,
      /^\/api\/user\/login/,
      /^\/api\/user\/register/,
      /^((?!\/api).)*$/ // 设置除了私有接口外的其它资源，可以不需要认证访问
    ]
  })
)
app.use(tokenChecker())

// Router
import userRouter from "./routers/user_router"
import imageRouter from "./routers/image_router"
import keyRouter from "./routers/key_router"
router.get("/api/test", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "api serve is ok!"
  await next()
})
router.use("/api/user", userRouter)
router.use("/api/image", imageRouter)
router.use("/api/key", keyRouter)
app.use(router.routes()).use(router.allowedMethods())

// Listen
app.listen(sysConfig.port)
console.log(`serve running on port ${sysConfig.port}`)
