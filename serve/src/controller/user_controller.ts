import Koa from "koa"
import { User, user } from "../model/user_model"
import ResBody from "../struct/ResBody"
import bcypt from "../utils/bcypt"
import { Token } from "../model/token_model"
import { sysConfig } from "../config"

class UserController {
  async register(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    if ((await User.findByName(name)) !== null) {
      const e = new Error("用户名已被注册")
      // e.status = 400
      throw e
    }
    let user = await User.createUser(name, password)
    ctx.body = new ResBody({ data: user })
  }

  async login(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    let user: user | null = await User.findByName(name)
    if (user === null) {
      let e = new Error("用户名错误")
      // e.status = 400
      throw e
    }
    let result = bcypt.verify(password, user.password)
    if (result) {
      const token = await Token.createToken(user.id)
      ctx.body = new ResBody({ data: { token } })
    } else {
      ctx.body = new ResBody({ success: false, msg: "密码错误" })
    }
  }

  async getUserInfo(ctx: Koa.Context) {
    let token = ctx.req.headers.authorization
    const { tokenId, userId, exp } = ctx.state.user
    // 1. 检查距离Token的过期时间
    const current: number = parseInt(String(new Date().valueOf() / 1000))
    if (exp - current < sysConfig.tokenExp / 2) {
      // 2. 如果相差超过一半时间，就创建一个新Token并返回
      Token.deleteById(tokenId)
      token = await Token.createToken(userId)
    }
    // 获取用户信息，前端在拿到用户信息后必须重新 set token，保证 token 为最新的
    const user: user | null = await User.findById(userId)
    if (user !== null) {
      ctx.body = new ResBody({
        data: {
          id: user.id,
          name: user.name,
          token: token
        }
      })
    } else {
      let e = new Error("未找到相关用户信息")
      // e.status = 404
      throw e
    }
  }
}

export default new UserController()
