// import SysConfig from "types/sysConfig"

export const sysConfig = {
  port: 2099,
  pwdSaltRound: 10,
  tokenSalt: "awsl",
  tokenExp: "168h", // 7 Days
  maxDevice: 3
}

export const databaseConfig = {
  host: "localhost",
  name: "qiniu",
  user: "root",
  password: "root"
}
