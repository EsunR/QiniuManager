import jwt from "jsonwebtoken"
import { sysConfig } from "../config"

interface tokenPayload {
  userId: number
  tokenId: number
}

export function getToken(payload: tokenPayload): string {
  return jwt.sign(payload, sysConfig.tokenSalt, {
    expiresIn: sysConfig.tokenExp
  })
}

export function getPayload(token: string): Object {
  return jwt.verify(token, sysConfig.tokenSalt)
}
