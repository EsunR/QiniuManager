import Koa from "koa"
import QiniuKey from "../model/qiniuKey_model"
import ResBody from "../struct/ResBody"

class KeyController {
  async addQiniuKey(ctx: Koa.Context) {
    const userId: number = ctx.state.user.userId
    const {
      name,
      publicKey,
      privateKey,
      bucket,
      domain
    }: {
      name: string
      publicKey: string
      privateKey: string
      bucket: string
      domain: string
    } = ctx.request.body
    try {
      let key = await QiniuKey.createKey(
        name,
        userId,
        publicKey,
        privateKey,
        bucket,
        domain
      )
      ctx.body = new ResBody({ data: key })
    } catch (error) {
      ctx.body = new ResBody({
        success: false,
        msg: "创建七牛Key记录失败"
      })
    }
  }

  async delQiniuKey(ctx: Koa.Context) {
    const userId: number = ctx.state.user.userId
    const keyId: number = ctx.request.query.id
    let result = await QiniuKey.delKey(keyId, userId)
    if (result) {
      ctx.body = new ResBody({})
    } else {
      throw new Error("400-删除失败")
    }
  }

  async getQiniuKeys(ctx: Koa.Context) {
    const userId: number = ctx.state.user.userId
    let keys = await QiniuKey.getUserKeys(userId)
    ctx.body = new ResBody({ data: keys })
  }

  // TODO: 修改 token 记录
}

export default new KeyController()
