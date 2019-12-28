import Koa from "koa"
import ResBody from "../struct/ResBody"
import crypto from "crypto"
import { getImageUploadToken, uploadFile } from "../utils/qiniu"

class UploadController {
  async test(ctx: Koa.Context) {
    ctx.body = "测试成功"
  }
  async getUploadToken(ctx: Koa.Context) {
    const accessKey: string = "2_beaL9z4clNRNff70R7MkIsYZJn075zwUwSlvmy"
    const secretKey: string = "cSk8QpPpsBaew_9kAK54TRvDz_tHW-Xiu7RDdNwT"
    const uploadToken = getImageUploadToken(accessKey, secretKey, "image")
    ctx.body = new ResBody({
      data: {
        token: uploadToken
      }
    })
  }
  async uploadImage(ctx: Koa.Context) {
    // 获取 key
    const accessKey: string = "2_beaL9z4clNRNff70R7MkIsYZJn075zwUwSlvmy"
    const secretKey: string = "cSk8QpPpsBaew_9kAK54TRvDz_tHW-Xiu7RDdNwT"
    const bucket = "novel-system"
    const url = "http://study.esunr.xyz"
    const zone = "z0"
    const uploadToken = getImageUploadToken(accessKey, secretKey, bucket)
    // 已上传文件的 Url 列表
    let uploadedFiles = []
    try {
      const files = ctx.request.files
      // 遍历传入的文件列表
      for (let key in files) {
        const file = files[key]
        // 转发文件上传请求到七牛云服务器
        const uploadRes = await uploadFile(uploadToken, file, zone, url)
        uploadedFiles.push(uploadRes)
      }
      ctx.body = new ResBody({ data: uploadedFiles })
    } catch (error) {
      ctx.body = new ResBody({
        success: false,
        msg: error.message
      })
    }
  }
}

export default new UploadController()
