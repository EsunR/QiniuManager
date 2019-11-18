import db from "./index"
import User from "../model/user_model"
import Token from "../model/token_model"

User.hasMany(Token)
Token.belongsTo(User)

export default function() {
  db.sequelize.sync()
}
