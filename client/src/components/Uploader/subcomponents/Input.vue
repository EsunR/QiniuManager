<template>
  <div class="uploader-input">
    <input type="text" @change="handleChange" />
  </div>
</template>

<script>
export default {
  name: "Input",
  model: {
    prop: "value",
    event: "change"
  },
  methods: {
    handleChange(e) {
      let value = e.target.value
      this.$emit("change", value)
    }
  }
}
</script>

<style lang="scss" scoped>
.uploader-input {
  display: flex;
  width: 100%;
  margin-right: 20px;
  input {
    height: 100%;
    width: 100%;
    outline: none;
    border-bottom: 2px solid rgba($color: #000000, $alpha: 0.1);
    color: rgba($color: #000000, $alpha: 0.7);
    &:focus {
      border-width: 1px;
      border-color: #2196f3;
    }
  }
}
</style>
