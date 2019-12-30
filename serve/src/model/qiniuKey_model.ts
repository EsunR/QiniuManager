import db from "../db/index"
import { DataTypes, Model } from "sequelize"
import User from "./user_model"

// interface key {
//   id: number
//   userId: number
//   name: string
//   Key: string
//   privateKey: string
//   bucket: string
//   domain: string
//   createdAt: Date
//   updateAt: Date
//   deleted: number
// }

class QiniuKey extends Model {
  public id!: number
  public userId!: number
  public name!: string
  public publicKey!: string
  public privateKey!: string
  public bucket!: string
  public domain!: string
  public createdAt!: Date
  public updateAt!: Date
  public deleted!: number

  static createKey(
    name: string,
    userId: number,
    publicKey: string,
    privateKey: string,
    bucket: string,
    domain: string
  ): Promise<QiniuKey> {
    const key = QiniuKey.build({
      userId,
      name,
      publicKey,
      privateKey,
      bucket,
      domain
    })
    return key.save()
  }

  static async delKey(id: number, userId: number): Promise<boolean> {
    const effectLine = await QiniuKey.update(
      { deleted: 1 },
      { where: { id, userId, deleted: 0 } }
    )
    if (effectLine[0] === 1) {
      return true
    } else {
      return false
    }
  }

  static getUserKeys(userId: number): Promise<[QiniuKey]> {
    return QiniuKey.findAll({ where: { userId, deleted: 0 } })
  }

  static async updateKey(
    id: number,
    userId: number,
    name: string,
    publicKey: string,
    privateKey: string,
    bucket: string,
    domain: string
  ): Promise<boolean> {
    let effectLine = await QiniuKey.update(
      { name, publicKey, privateKey, bucket, domain },
      { where: { id, userId } }
    )
    if (effectLine[0] === 1) {
      return true
    } else {
      return false
    }
  }
}

QiniuKey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id"
      }
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "未命名Key"
    },
    publicKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    privateKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bucket: {
      type: DataTypes.STRING,
      allowNull: false
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize: db.sequelize,
    modelName: "qiniu_key"
  }
)

export default QiniuKey
