import Router from "koa-router"
import controller from "../controller/user_controller"
const router = new Router()

router.post("/register", controller.register)

export default router.routes()
