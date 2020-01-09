<template>
  <div id="home">
    <Uploader
      class="uploader"
      ref="uploader"
      @upload="handleUpload"
      :uploading="uploading"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-checkbox
            v-on="on"
            v-model="webp"
            class="checkbox"
            label="启用Webp"
            @change="handleCheckboxChange"
          ></v-checkbox>
        </template>
        <span>webp格式可以提供更小的图片占用空间</span>
      </v-tooltip>
      <v-select
        v-model="qiniuKey"
        class="select"
        :items="qiniuKeys"
        label="Upload Key"
        @change="handleSelectChange"
        solo
      ></v-select>
    </Uploader>
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
      uploadedList: [],
      webp: false,
      qiniuKey: null
    }
  },
  computed: {
    qiniuKeys() {
      return this.$store.getters.qiniuKeys.map(key => ({
        text: key.name,
        value: key.id
      }))
    }
  },
  components: {
    Uploader,
    ImageInfo
  },
  mounted() {
    this.webp = window.localStorage.getItem("webp") === "true" ? true : false
    this.qiniuKey = parseInt(window.localStorage.getItem("qiniuKey")) || null
  },
  methods: {
    handleCheckboxChange() {
      window.localStorage.setItem("webp", this.webp)
    },
    handleSelectChange() {
      window.localStorage.setItem("qiniuKey", this.qiniuKey)
    },
    async handleUpload(files) {
      // 检查 localstroage 中存放的 key 是否有效
      const qiniuKeyIds = this.qiniuKeys.map(key => key.value)
      if (qiniuKeyIds.indexOf(this.qiniuKey) === -1) {
        return this.$message({
          type: "error",
          message: "请选择一个有效的Upload Key"
        })
      }
      this.uploading = true
      for (let file of files) {
        try {
          // 判断是否需要转为 webp 上传
          // 每张图片排队调用上传接口，防止集体同时上传造成服务器长时间延迟
          let res = await uploadImage(file, this.qiniuKey, this.webp)
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

<style lang="scss" scoped>
.checkbox {
  margin-right: 20px;
  margin-top: 10px;
  width: 160px;
}
.select {
  max-width: 200px;
}
</style>
