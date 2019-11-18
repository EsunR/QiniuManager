import { sysConfig } from "../config"
import Koa from "koa"
import User from "../model/user_model"
import ResBody from "../struct/ResBody"
import bcypt from "../utils/bcypt"

interface user {
  name: string
  password: string
}

class UserController {
  async register(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    const user = User.build({ name, password: bcypt.hash(password) })
    let data = await user.save()
    ctx.body = new ResBody({ data })
  }
  async login(ctx: Koa.Context) {
    let { name, password } = ctx.request.body
    let user: user = await User.prototype.findByName(name)
    if (user === null) {
      throw new Error("用户名错误")
    }
    let result = bcypt.verify(password, user.password)
    if (result) {
      ctx.body = new ResBody({
        data: {
          token: "wulalalalal"
        }
      })
    } else {
      ctx.body = new ResBody({
        success: false,
        msg: "密码错误"
      })
    }
  }
}

export default new UserController()
