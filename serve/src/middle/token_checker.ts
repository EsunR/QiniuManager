import Token from "../model/token_model"
import Koa from "koa"

export default function() {
  return async function(ctx: Koa.Context, next: Koa.Next) {
    if (ctx.state.user) {
      const { tokenId } = ctx.state.user
      if ((await Token.hasToken(tokenId)) === false) {
        const e = new Error()
        e.message = "401-Token 已过期"
        throw e
      } else {
        await next()
      }
    } else {
      await next()
    }
  }
}
