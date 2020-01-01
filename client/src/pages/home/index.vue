<template>
  <div id="home">
    <Uploader
      class="uploader"
      ref="uploader"
      @upload="handleUpload"
      :uploading="uploading"
    />
    <ImageInfo v-for="item in uploadedList" :key="item.key" :info="item" />
  </div>
</template>

<script>
import Uploader from "@/components/Uploader"
import ImageInfo from "./subcomponents/ImageInfo"
import { uploadImage } from "@/api/image"
export default {
  name: "home",
  data() {
    return {
      uploading: false,
      uploadedList: []
    }
  },
  components: {
    Uploader,
    ImageInfo
  },
  methods: {
    async handleUpload(files) {
      // const startTime = new Date()
      this.uploading = true
      for (let file of files) {
        try {
          let res = await uploadImage(file)
          this.$refs.uploader.removeImage(file)
          this.uploadedList.unshift(res.data[0])
        } catch (e) {
          console.log(e)
        }
      }
      this.uploading = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
