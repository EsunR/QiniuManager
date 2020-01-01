import Router from "koa-router"
import controller from "../controller/key_controller"
const router = new Router()

router.get("/getQiniuKeys", controller.getQiniuKeys)
router.put("/addQiniuKey", controller.addQiniuKey)
router.delete("/delQiniuKey", controller.delQiniuKey)
router.post("/updateQiniuKey", controller.updateQiniuKey)

export default router.routes()
