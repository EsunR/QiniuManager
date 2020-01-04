<template>
  <div class="uploader">
    <!-- 预览组 -->
    <div class="preview card">
      <div class="uploading-mask" v-if="uploading">
        <i class="mdi mdi-loading"></i>
        <h3 class="text">上传中</h3>
      </div>
      <div class="preview-row">
        <!-- 预览方块 -->
        <div class="preview-col" v-for="file in fileList" :key="file.id">
          <div class="preview-item">
            <div class="mask">
              <v-btn color="error" fab small @click="removeImage(file)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
            <div class="img-wrapper">
              <img
                ref="img"
                :src="_createUrl(file)"
                :alt="file.name"
                :title="file.id"
              />
            </div>
          </div>
        </div>
        <!-- 拖拽上传方块 -->
        <div
          v-if="fileList.length < 8"
          class="preview-col"
          :style="{ width: fileList.length === 0 ? '100%' : '25%' }"
        >
          <label
            for="uploadInput"
            class="preview-item upload-dropper"
            :class="{ 'upload-dropper-single': fileList.length === 0 }"
          >
            <i class="mdi mdi-comment-plus-outline"></i>
            <span class="text">点击或拖拽上传</span>
          </label>
        </div>
      </div>
    </div>
    <!-- 上传控件本体 -->
    <input
      id="uploadInput"
      ref="uploadInput"
      type="file"
      @change="handleSelect"
      accept="image/*"
      multiple
    />
    <!-- 功能区 -->
    <div class="opration card">
      <div class="left-wrapper">
        <transition name="fade">
          <div class="slot-wrapper" v-if="!uploading">
            <Input
              placeholder="输入图片url"
              v-if="!uploading"
              v-model="inputValue"
            />
            <slot></slot>
          </div>
          <Process :success="!uploading" v-else />
        </transition>
      </div>
      <div class="right-wrapper">
        <Button
          @click="handleSubmitUpload"
          :disabled="uploading || fileList.length === 0"
        >
          <i class="mdi mdi-cloud-upload"></i> 确认上传
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./subcomponents/Button"
import Input from "./subcomponents/Input"
import Process from "./subcomponents/Process"
export default {
  name: "Uploader",
  components: {
    Button,
    Input,
    Process
  },
  data() {
    return {
      fileList: [],
      inputValue: "",
      uploadSuccess: true
    }
  },
  props: {
    uploading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    }
  },
  mounted() {
    // 绑定事件
    document.addEventListener("dragenter", this.handleDragenter)
    document.addEventListener("dragover", this.handleDragover)
    document.addEventListener("drop", this.handleDrop)
    document.addEventListener("paste", this.handlePaste)
  },
  methods: {
    _createUrl(file) {
      return window.URL.createObjectURL(file)
    },
    // 点击上传
    handleSelect() {
      /** @type {HTMLInputElement} */
      let input = this.$refs.uploadInput
      let fileList = input.files
      this.addFiles(fileList)
      input.value = ""
    },
    // 拖拽上传
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
        file.id = new Date().valueOf() - file.size * Math.random()
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
    // 粘贴图片
    handlePaste(e) {
      var items = e.clipboardData && e.clipboardData.items
      var file = null
      if (items && items.length) {
        // 检索剪切板items
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            file = items[i].getAsFile()
            break
          }
        }
      }
      if (file) {
        this.$emit("upload", [file])
      }
    },
    // 上传图片
    handleSubmitUpload() {
      this.$emit("upload", this.fileList)
    },
    // 移除文件(对外暴露)
    removeImage(targetFile) {
      this.fileList = this.fileList.filter(
        file =>
          !(file.size === targetFile.size && file.name === targetFile.name)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#uploadInput {
  display: none;
}

.card {
  box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 0.1);
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
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
  user-select: none;
  position: relative;
  overflow: hidden;
  .uploading-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2196f3;
    .mdi {
      animation: circle 1.5s infinite linear;
      margin-right: 5px;
      font-size: 1.5rem;
    }
    .text {
      font-weight: 400;
    }
  }
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
    background-color: #e9e9e9;
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
  .upload-dropper-single {
    &:hover {
      color: rgba($color: #000000, $alpha: 0.5);
      transform: scale(1);
    }
  }
}

.opration {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .left-wrapper {
    width: 100%;
    height: 50px;
    padding-right: 20px;
    .slot-wrapper {
      display: flex;
      flex-wrap: nowrap;
      color: rgba($color: #000000, $alpha: 0.6);
      height: 100%;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter {
  transform: translateY(50px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
