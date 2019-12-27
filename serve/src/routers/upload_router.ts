import Router from "koa-router"
import controller from "../controller/upload_controller"
const router = new Router()

router.get("/test", controller.test)
router.get("/getUploadToken", controller.getUploadToken)
router.post("/uploadImage", controller.uploadImage)

export default router.routes()
