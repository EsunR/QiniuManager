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
      const e = new Error()
      e.message = "用户名已被注册"
      e.status = 400
      throw e
    }
    let user: user = await User.createUser(name, password)
    ctx.body = new ResBody({ data: user })
  }

  async login(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    let user: user = await User.findByName(name)
    if (user === null) {
      throw new Error("用户名错误")
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
    // 获取用户信息
    const user: user = await User.findById(userId)
    ctx.body = new ResBody({
      data: {
        id: user.id,
        name: user.name,
        token: token
      }
    })
  }
}

export default new UserController()
