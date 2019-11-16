import sequelize from "../db"
import { DataTypes, Model } from "sequelize"

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "user"
  }
)

User.sync()

export default User
