import Router from "koa-router"
import controller from "../controller/key_controller"
const router = new Router()

router.post("/addQiniuKey", controller.addQiniuKey)
router.delete("/delQiniuKey", controller.delQiniuKey)
router.get("/getQiniuKeys", controller.getQiniuKeys)

export default router.routes()
