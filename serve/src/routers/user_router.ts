import Router from "koa-router"
import controller from "../controller/user_controller"
const router = new Router()

router.post("/register", controller.register)
router.get("/login", controller.login)

export default router.routes()
