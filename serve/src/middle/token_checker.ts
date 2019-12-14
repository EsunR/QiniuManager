import { Token, token } from "../model/token_model"
import Koa from "koa"

export default function() {
  return async function(ctx: Koa.Context, next: Koa.Next) {
    if (ctx.state.user) {
      const { tokenId } = ctx.state.user
      if ((await Token.hasToken(tokenId)) === false) {
        const e = new Error()
        e.message = "Token 已过期"
        e.status = 401
        throw e
      } else {
        await next()
      }
    } else {
      await next()
    }
  }
}
