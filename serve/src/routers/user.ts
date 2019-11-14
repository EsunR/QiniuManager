import Router from "koa-router"
import controller from "../controller/user"
const router = new Router()

router.get("/test", controller.test)

export default router.routes()
