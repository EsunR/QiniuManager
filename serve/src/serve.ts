import Koa from "koa"
import Router from "koa-router"
import { sysConfig } from "./config"
import cors from "@koa/cors"

const app: Koa = new Koa()
const router: Router = new Router()

app.use(cors())

import userRouter from "./routers/user"

router.use("/api/user", userRouter)
app.use(router.routes()).use(router.allowedMethods())

app.listen(sysConfig.port)
console.log(`serve running on http://localhost:${sysConfig.port}`)
