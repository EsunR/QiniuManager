import Router from "koa-router"
import controller from "../controller/upload_controller"
const router = new Router()

router.get("/test", controller.test)
router.get("/getUploadToken", controller.getUploadToken)

export default router.routes()
