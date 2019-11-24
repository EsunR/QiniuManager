import Router from "koa-router"
import controller from "../controller/user_controller"
const router = new Router()

router.post("/register", controller.register)
router.post("/login", controller.login)
router.get("/info", controller.getUserInfo)

export default router.routes()
