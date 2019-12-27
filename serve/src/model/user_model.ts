import db from "../db/index"
import { DataTypes, Model, Promise } from "sequelize"
import bcypt from "../utils/bcypt"

interface user {
  id: number
  name: string
  password: string
  createdAt: Date
  updateAt: Date
}

class User extends Model {
  public id!: number
  public name!: string
  public password!: string
  public createdAt!: Date
  public updateAt!: Date
  static createUser(name: string, password: string): Promise<user | null> {
    const user = User.build({ name, password: bcypt.hash(password) })
    return user.save()
  }
  static findByName(name: string): Promise<user | null> {
    return User.findOne({ where: { name } })
  }
  static findById(id: number): Promise<user | null> {
    return User.findOne({ where: { id } })
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
