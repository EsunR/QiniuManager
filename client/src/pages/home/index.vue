<template>
  <div id="home">
    <uploader ref="uploader" @upload="handleUpload" :uploading="uploading" />
  </div>
</template>

<script>
import Uploader from "@/components/Uploader"
import { uploadImage } from "@/api/upload"
export default {
  name: "home",
  data() {
    return {
      uploading: false,
      uploaded: []
    }
  },
  components: {
    Uploader
  },
  methods: {
    async handleUpload(files) {
      // const startTime = new Date()
      this.uploading = true
      for (let file of files) {
        try {
          let res = await uploadImage(file)
          this.$refs.uploader.removeImage(file)
          this.uploaded.push(res.data[0])
        } catch (e) {
          console.log(e)
        }
      }
      this.uploading = false
      //   uploadImage(files)
      //     .then(res => {
      //       const costTime = new Date() - startTime
      //       const delayTime = 1500 - costTime > 0 ? 1500 - costTime : 0
      //       const { data } = res
      //       setTimeout(() => {
      //         this.uploading = false
      //         data.forEach(imgInfo => {
      //           this.uploaded.push(imgInfo)
      //         })
      //       }, delayTime)
      //     })
      //     .catch(() => {
      //       this.uploading = false
      //     })
    }
  }
}
</script>

<style lang="scss" scoped></style>
