<template>
  <button @click="handleClick" class="uploader-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick(e) {
      this.$emit("click", e)
    }
  }
}
</script>

<style lang="scss" scoped>
.uploader-btn {
  background-color: #2196f3;
  color: #fff;
  padding: 5px 20px;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 0.3);
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  &:hover {
    background-color: #319ef7;
    user-select: none;
  }
  &:active {
    background-color: #0f8ef7;
    box-shadow: none;
  }
}
</style>
