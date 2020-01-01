import request from "../utils/request"

export function uploadImage(files) {
  let formData = new FormData()
  if (files instanceof Array) {
    files.forEach((file, index) => {
      formData.append(`Image${index}`, file)
    })
  } else {
    formData.append("Image1", files)
  }
  return request({
    method: "POST",
    url: "/image/uploadImage",
    data: formData
  })
}
