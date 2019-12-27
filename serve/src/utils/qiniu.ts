import qiniu from "qiniu"

/**
 * 获取上传图片的 Token
 * @param accessKey
 * @param secretKey
 */
export function getImageUploadToken(
  accessKey: string,
  secretKey: string,
  bucket: string
) {
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  const options: qiniu.rs.PutPolicyOptions = {
    scope: bucket,
    expires: 7200
  }
  var putPolicy = new qiniu.rs.PutPolicy(options)
  var uploadToken: string = putPolicy.uploadToken(mac)
  return uploadToken
}

function uploadFile(uptoken: string, key: string, localFile: File) {
  var config = new qiniu.conf.Config()
  var extra = new qiniu.form_up.PutExtra()
  // (uptoken, key, localFile, extra, function(err, ret) {
  //   if (!err) {
  //     // 上传成功， 处理返回值
  //     console.log(ret.hash, ret.key, ret.persistentId)
  //   } else {
  //     // 上传失败， 处理返回代码
  //     console.log(err)
  //   }
  // })
}
