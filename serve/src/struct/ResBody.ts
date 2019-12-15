interface options {
  success?: boolean
  data?: object | null
  msg?: string
}
export default class ResBody {
  success: boolean
  data: object
  msg: string
  constructor(options: options) {
    if (options.success === undefined) {
      this.success = true
    } else {
      this.success = options.success
    }
    if (options.data === undefined) {
      this.data = {}
    } else {
      this.data = options.data
    }
    if (options.msg === undefined) {
      this.msg = ""
    } else {
      this.msg = options.msg
    }
  }
}
