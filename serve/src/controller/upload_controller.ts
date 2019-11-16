import Koa from "koa"
import qiniu from "qiniu"
import ResBody from "../struct/ResBody"

class UploadController {
  async test(ctx: Koa.Context) {
    ctx.body = "测试成功"
  }
  async getUploadToken(ctx: Koa.Context) {
    const accessKey: string = "2_beaL9z4clNRNff70R7MkIsYZJn075zwUwSlvmy"
    const secretKey: string = "cSk8QpPpsBaew_9kAK54TRvDz_tHW-Xiu7RDdNwT"
    const bucket: string = "image"
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const options: qiniu.rs.PutPolicyOptions = {
      scope: bucket,
      expires: 7200
    }
    var putPolicy = new qiniu.rs.PutPolicy(options)
    var uploadToken = putPolicy.uploadToken(mac)
    ctx.body = new ResBody({
      data: {
        token: uploadToken
      }
    })
  }
}

export default new UploadController()
