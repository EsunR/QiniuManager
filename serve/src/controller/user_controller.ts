import Koa from "koa"
import { User, user } from "../model/user_model"
import ResBody from "../struct/ResBody"
import bcypt from "../utils/bcypt"
import { Token } from "../model/token_model"

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

  async freshToken(ctx: Koa.Context) {
    const { tokenId, userId } = ctx.state.user
    // 1. 检查距离Token的过期时间
    // 2. 如果相差超过一半时间，就创建一个新Token并返回
    // 3. 否则返回true
  }

  async getUserInfo(ctx: Koa.Context) {
    const { tokenId, userId } = ctx.state.user
    ctx.body = new ResBody({ data: { user: "userInfo" } })
  }
}

export default new UserController()
