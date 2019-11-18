import db from "../db"
import { Model } from "sequelize"

class Token extends Model {}
Token.init(
  {},
  {
    sequelize: db.sequelize,
    modelName: "token"
  }
)

export default Token
