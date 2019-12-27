import db from "./index"
import User from "../model/user_model"
import Token from "../model/token_model"

User.hasMany(Token)

export default function() {
  db.sequelize.sync()
}
