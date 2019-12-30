import db from "./index"
import User from "../model/user_model"
import Token from "../model/token_model"
import QiniuKey from "../model/qiniuKey_model"

User.hasMany(Token)
User.hasMany(QiniuKey)

export default function() {
  db.sequelize.sync()
}
