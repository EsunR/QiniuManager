import qiniu from "qiniu"
import { File } from "formidable"
import crypto from "crypto"

interface qiniuRes {
  key: string
  hash: string
  fsize: number
  bucket: string
  url: string
}

/**
 * 获取上传图片的 Token
 * @param accessKey
 * @param secretKey
 */
export function getImageUploadToken(
  accessKey: string,
  secretKey: string,
  bucket: string
): string {
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  const options: qiniu.rs.PutPolicyOptions = {
    scope: bucket,
    expires: 7200,
    returnBody:
      // eslint-disable-next-line quotes
      '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)"}'
  }
  var putPolicy = new qiniu.rs.PutPolicy(options)
  var uploadToken: string = putPolicy.uploadToken(mac)
  return uploadToken
}

/**
 * 七牛云图片上传
 * @param uploadToken
 * @param file
 * @param zone
 * @param url
 */
export function uploadFile(
  uploadToken: string,
  file: File,
  zone: string,
  url: string
): Promise<qiniuRes> {
  let qiniuZone: qiniu.conf.Zone
  switch (zone) {
    case "z0":
      qiniuZone = qiniu.zone.Zone_z0
      break
    case "z1":
      qiniuZone = qiniu.zone.Zone_z1
      break
    case "z2":
      qiniuZone = qiniu.zone.Zone_z2
      break
    case "as0":
      qiniuZone = qiniu.zone.Zone_as0
      break
    case "na0":
      qiniuZone = qiniu.zone.Zone_na0
      break
    default:
      throw new Error("qiniu zone 参数错误")
  }
  const config: any = new qiniu.conf.Config()
  config.zone = qiniuZone
  const formUploader = new qiniu.form_up.FormUploader(config)
  const putExtra = new qiniu.form_up.PutExtra()
  const fileExt = file.name.split(".").pop()
  // 获取短路径字符
  const fileKey = new Date().valueOf() + "." + fileExt
  const localFile = file.path
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, fileKey, localFile, putExtra, function(
      respErr,
      respBody,
      respInfo
    ) {
      if (respErr) {
        console.log("respErr: ", respErr)
        reject(new Error("七牛服务器错误，请稍候重试"))
      }
      if (respInfo.statusCode == 200) {
        url = url.slice(-1) === "/" ? url : url + "/"
        respBody.url = url + respBody.key
        respBody.name = file.name
        resolve(respBody)
      } else {
        reject(new Error("七牛服务器回调错误，请检查配置信息"))
      }
    })
  })
}
