<template>
  <div class="uploader">
    <div class="preview">
      <div class="preview-row">
        <div class="preview-col" v-for="file in fileList" :key="file.id">
          <div class="preview-item">
            <div class="img-wrapper">
              <img :src="createUrl(file)" :alt="file.name" />
            </div>
            <span class="filename">{{ file.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <input
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
  methods: {
    handleSelect() {
      /** @type {HTMLInputElement} */
      let input = this.$refs.uploadInput
      let fileList = input.files
      Array.prototype.forEach.call(fileList, file => {
        file.id = new Date().valueOf - file.size
        this.fileList.push(file)
      })
    },
    createUrl(file) {
      console.log("file: ", file)
      return window.URL.createObjectURL(file)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  height: 522px;
  box-sizing: border-box;
  border: 1px solid rgba($color: #000000, $alpha: 1);
  padding: 20px;
  .preview-item {
    border-radius: 5px;
    overflow: hidden;
    height: 230px;
    border: 1px solid rgba($color: #000000, $alpha: 1);
    .img-wrapper {
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .filename {
      display: block;
      text-align: center;
      background-color: pink;
      line-height: 28px;
    }
  }
}
</style>
