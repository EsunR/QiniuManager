import db from "../db/index"
import { DataTypes, Model } from "sequelize"

class User extends Model {
  findByName(name: string) {
    return User.findOne({ where: { name } })
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
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
