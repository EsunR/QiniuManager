import Koa from "koa"

class UserController {
  async test(ctx: Koa.Context) {
    ctx.body = "测试成功"
  }
}

export default new UserController()
