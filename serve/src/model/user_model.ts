import db from "../db/index"
import { DataTypes, Model } from "sequelize"

class User extends Model {
  findByName(name: string) {
    return User.findOne({ where: { name } })
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100]
      }
    }
  },
  {
    sequelize: db.sequelize,
    modelName: "user"
  }
)

export default User
