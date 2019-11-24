import db from "../db/index"
import { DataTypes, Model, Promise } from "sequelize"
import bcypt from "../utils/bcypt"

class User extends Model {
  static createUser(name: string, password: string): Promise<user | null> {
    const user = User.build({ name, password: bcypt.hash(password) })
    return user.save()
  }
  static findByName(name: string): Promise<user | null> {
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

interface user {
  id: number
  name: string
  password: string
  createdAt: Date
  updateAt: Date
}

export { User, user }
