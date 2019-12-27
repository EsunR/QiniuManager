<template>
  <div id="home">
    <uploader @upload="handleUpload" />
  </div>
</template>

<script>
import Uploader from "@/components/Uploader"
import { uploadImage } from "@/api/upload"
export default {
  name: "home",
  data() {
    return {}
  },
  components: {
    Uploader
  },
  methods: {
    handleUpload(files) {
      uploadImage(files).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
