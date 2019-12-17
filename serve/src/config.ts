export const sysConfig = {
  host: "localhost",
  port: 2099,
  pwdSaltRound: 10,
  tokenSalt: "awsl",
  tokenExp: 3600 * 24 * 7, // 7 Days
  maxDevice: 3
}

export const databaseConfig = {
  host: "localhost",
  name: "qiniu",
  user: "root",
  password: "root"
}
