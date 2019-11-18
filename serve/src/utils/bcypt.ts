import bcrypt from "bcryptjs"
import { sysConfig } from "../config"

export default {
  hash(password: string): string {
    var salt: string = bcrypt.genSaltSync(sysConfig.pwdSaltRound)
    let result: string = bcrypt.hashSync(password, salt)
    return result
  },
  verify(password: string, hashPassword: string): boolean {
    return bcrypt.compareSync(password, hashPassword)
  }
}
