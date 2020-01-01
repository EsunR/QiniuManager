import request from "@/utils/request"

export function getQiniuKeys() {
  return request({
    url: "/key/getQiniuKeys",
    method: "get"
  })
}

export function addQiniuKey({
  name,
  publicKey,
  privateKey,
  bucket,
  domain,
  zone
}) {
  return request({
    url: "/key/addQiniuKey",
    method: "put",
    data: { name, publicKey, privateKey, bucket, domain, zone }
  })
}

export function delQiniuKey(id) {
  return request({
    url: "/key/delQiniuKey",
    method: "delete",
    params: { id }
  })
}

export function updateQiniuKey({
  id,
  name,
  publicKey,
  privateKey,
  bucket,
  domain,
  zone
}) {
  return request({
    url: "/key/updateQiniuKey",
    method: "post",
    data: { id, name, publicKey, privateKey, bucket, domain, zone }
  })
}
