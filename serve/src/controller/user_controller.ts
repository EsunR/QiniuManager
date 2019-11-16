import { sysConfig } from "../config"
import Koa from "koa"
import User from "../model/user_model"
import ResBody from "../struct/ResBody"

class UserController {
  async register(ctx: Koa.Context, next: Koa.Next) {
    const body = ctx.request.body
    const user = User.build({ name: body.name, password: body.password })
    let data = await user.save()
    ctx.body = new ResBody({ data })
  }
}

export default new UserController()
