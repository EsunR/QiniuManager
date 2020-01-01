const getters = {
  // user
  login: state => state.user.login,
  name: state => state.user.name,
  // APP
  showNavigation: state => state.app.showNavigation,
  // keys
  qiniuKeys: state => state.key.qiniuKeys
}
export default getters
