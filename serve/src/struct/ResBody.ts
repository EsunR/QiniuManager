interface options {
  success?: boolean
  data?: object | null | undefined
  msg?: string | null | undefined
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
    if (options.data === undefined || options.data === null) {
      this.data = {}
    } else {
      this.data = options.data
    }
    if (options.msg === undefined || options.msg === null) {
      this.msg = ""
    } else {
      this.msg = options.msg
    }
  }
}
