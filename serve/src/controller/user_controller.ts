import Koa from "koa"
import User from "../model/user_model"
import ResBody from "../struct/ResBody"
import bcypt from "../utils/bcypt"

interface user {
  id: string
  name: string
  password: string
}

class UserController {
  async register(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    const user = User.build({ name, password: bcypt.hash(password) })
    let data: user = await user.save().catch((e: Error) => {
      e.message = "用户名已被注册"
      e.status = 400
      throw e
    })
    ctx.body = new ResBody({ data: { name: data.name } })
  }
  async login(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    let user: user = await User.prototype.findByName(name)
    if (user === null) {
      throw new Error("用户名错误")
    }
    let result = bcypt.verify(password, user.password)
    if (result) {
      // TODO: 生成 token
      ctx.body = new ResBody({ data: { token: "wulalalalal" } })
    } else {
      ctx.body = new ResBody({
        success: false,
        msg: "密码错误"
      })
    }
  }
}

export default new UserController()
