import db from "../db"
import { Model, DataTypes } from "sequelize"
import { sysConfig } from "../config"
import { User } from "./user_model"
import { getToken } from "../utils/jwt"

class Token extends Model {
  static async createToken(userId: number): Promise<string> {
    // 1. 列出数据库已有token
    const tokens: Array<Model> = await Token.findAll({ where: { userId } })
    // 2. 对比Token条数与设置的设备数，如果超出数量限制，删除最早的Token
    if (tokens.length >= sysConfig.maxDevice) {
      for (let i = 0; i <= tokens.length - sysConfig.maxDevice; i++) {
        await tokens[i].destroy()
        console.log("删除了一条数据")
      }
    }
    // 3. 生成一条记录并返回这条记录
    const token: token = await Token.build({ userId }).save()
    return "Bearer " + getToken({ userId: userId, tokenId: token.id })
  }

  static async hasToken(tokenId: string): Promise<boolean> {
    const token = await Token.findOne({ where: { id: tokenId } })
    console.log("token: ", token)
    if (token === null) {
      return false
    } else {
      return true
    }
  }
}

Token.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id"
      }
    }
  },
  {
    sequelize: db.sequelize,
    modelName: "token"
  }
)

interface token {
  id: number
  uid: number
  createdAt: Date
  updateAt: Date
}

export { Token, token }
