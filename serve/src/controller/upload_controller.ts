import Koa from "koa"
import fs from "fs"
import ResBody from "../struct/ResBody"
import crypto from "crypto"
import { getImageUploadToken } from "../utils/qiniu"

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
    const bucket = "image"
    const uploadToken = getImageUploadToken(accessKey, secretKey, bucket)
    try {
      const files = ctx.request.files
      for (let key in files) {
        const file = files[key]
        const reader = fs.createReadStream(file.path) // 创建可读流
        const ext = file.name.split(".").pop() // 获取上传文件扩展名
        const hash = crypto.createHash("md5")
        file.name = `${hash.update(file.name).digest("hex")}.${ext}`
        const upStream = fs.createWriteStream(`upload/images/${file.name}`) // 创建可写流
        reader.pipe(upStream)
      }
      ctx.body = new ResBody({})
    } catch (error) {
      ctx.body = new ResBody({
        success: false,
        msg: "上传失败，请稍候重试"
      })
    }
  }
}

export default new UploadController()
