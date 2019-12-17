<template>
  <div class="uploader">
    <div class="preview">
      <div class="preview-row">
        <div class="preview-col" v-for="file in fileList" :key="file.id">
          <div class="preview-item">
            <div class="mask" @click="handleRemove(file.id)">
              <v-btn color="error" fab>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
            <div class="img-wrapper">
              <img
                ref="img"
                :src="createUrl(file)"
                :alt="file.name"
                :title="file.id"
              />
            </div>
          </div>
        </div>
        <div
          v-if="fileList.length < 8"
          class="preview-col"
          :style="{ width: fileList.length === 0 ? '100%' : '25%' }"
        >
          <label for="uploadInput" class="preview-item upload-dropper">
            <i class="mdi mdi-comment-plus-outline"></i>
            <span class="text">点击或拖拽上传</span>
          </label>
        </div>
      </div>
    </div>
    <input
      id="uploadInput"
      ref="uploadInput"
      type="file"
      @change="handleSelect"
      accept="image/*"
      multiple
    />
  </div>
</template>

<script>
export default {
  name: "Uploader",
  data() {
    return {
      fileList: []
    }
  },
  mounted() {
    document.addEventListener("dragenter", this.handleDragenter)
    document.addEventListener("dragover", this.handleDragover)
    document.addEventListener("drop", this.handleDrop)
  },
  methods: {
    handleSelect() {
      /** @type {HTMLInputElement} */
      let input = this.$refs.uploadInput
      let fileList = input.files
      this.addFiles(fileList)
      input.value = ""
    },
    handleRemove(id) {
      this.fileList = this.fileList.filter(file => file.id !== id)
    },
    handleDragenter(/** @type {Event} */ e) {
      e.preventDefault()
    },
    handleDragover(/** @type {Event} */ e) {
      e.preventDefault()
    },
    handleDrop(/** @type {Event} */ e) {
      e.preventDefault()
      let fileList = e.dataTransfer.files
      this.addFiles(fileList)
    },
    addFiles(fileList) {
      Array.prototype.forEach.call(fileList, file => {
        if (file.type.indexOf("image") === -1) {
          this.$message({
            type: "error",
            message: "仅支持上传图片"
          })
          return false
        }
        file.id = new Date().valueOf() - file.size
        this.fileList.push(file)
        this.$nextTick(() => {
          Array.prototype.forEach.call(this.$refs.img, img => {
            let imgHeight = parseInt(window.getComputedStyle(img).height)
            if (imgHeight < 230) {
              img.style.height = "100%"
              img.style.width = "inherit"
            }
          })
        })
      })
    },
    createUrl(file) {
      return window.URL.createObjectURL(file)
    }
  }
}
</script>

<style lang="scss" scoped>
#uploadInput {
  display: none;
}

.preview-row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  align-items: flex-start;
}

.preview-col {
  width: 25%;
  box-sizing: border-box;
  padding: 10px;
}

.preview {
  width: 100%;
  min-height: 272px;
  max-height: 522px;
  box-sizing: border-box;
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  padding: 20px;
  border-radius: 5px;
  .preview-item {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 230px;
    transition: all 0.3s ease;
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    &:hover {
      box-shadow: 0 5px 7px rgba($color: #000000, $alpha: 0.05);
      transform: scale(1.05);
    }
    .mask {
      position: absolute;
      background-color: rgba($color: #000000, $alpha: 0.5);
      height: 100%;
      width: 100%;
      opacity: 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      &:hover {
        opacity: 1;
      }
    }
    .img-wrapper {
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
  .upload-dropper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba($color: #000000, $alpha: 0.3);
    border: 1px dashed rgba($color: #000000, $alpha: 0.1);
    background-color: #f7f7f7;
    cursor: pointer;
    &:hover {
      color: rgba($color: #000000, $alpha: 0.5);
    }
    .mdi {
      font-size: 50px;
    }
    .text {
      font-weight: 100;
    }
  }
}
</style>
