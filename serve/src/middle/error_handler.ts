import Koa from "koa"
import ResBody from "../struct/ResBody"

export default function() {
  return async function(ctx: Koa.Context, next: Koa.Next) {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = new ResBody({
        success: false,
        msg: err.message
      })
      ctx.app.emit("error", err, ctx)
    }
  }
}
