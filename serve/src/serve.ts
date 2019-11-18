import { sysConfig } from "./config"
import Koa from "koa"
import Router from "koa-router"
import cors from "@koa/cors"
import bodyPaser from "koa-bodyparser"
import errorHandler from "./middle/error_handler"
import dbGenerator from "./db/db_generator"

const app: Koa = new Koa()
const router: Router = new Router()

// Database
dbGenerator()

// Middle Wear
app.use(errorHandler())
app.use(cors())
app.use(bodyPaser())

// Router
import userRouter from "./routers/user_router"
import uploadRouter from "./routers/upload_router"
router.use("/api/user", userRouter)
router.use("/api/upload", uploadRouter)
app.use(router.routes()).use(router.allowedMethods())

// Listen
app.listen(sysConfig.port)
console.log(`serve running on http://localhost:${sysConfig.port}`)
