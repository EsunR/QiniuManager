import request from "../utils/request"

/**
 * @param {Array} imageFileList File 列表
 */
export function uploadImage(imageFileList) {
  let formData = new FormData()
  imageFileList.forEach((file, index) => {
    formData.append(`Image${index}`, file)
  })
  return request({
    method: "POST",
    url: "/upload/uploadImage",
    data: formData
  })
}
