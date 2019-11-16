import { Sequelize } from "sequelize"
import { databaseConfig } from "../config"

const { host, name, user, password } = databaseConfig
const sequelize = new Sequelize(name, user, password, {
  host: host,
  dialect: "mysql"
})

export default sequelize

export function connectTest() {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.")
    })
    .catch((err: Error) => {
      console.error("Unable to connect to the database:", err)
    })
}
