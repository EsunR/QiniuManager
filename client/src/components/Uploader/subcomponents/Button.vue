<template>
  <button
    :disabled="disabled"
    @click="handleClick"
    :class="{ 'uploader-btn': true, disabled: disabled }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e)
    }
  }
}
</script>

<style lang="scss" scoped>
.uploader-btn {
  background-color: #1976d2;
  color: #fff;
  padding: 6px 20px;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 0.3);
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  height: 47px;
  &:hover {
    background-color: #319ef7;
    user-select: none;
  }
  &:active {
    background-color: #0f8ef7;
    box-shadow: none;
  }
}
.disabled {
  background-color: #aeb4b9;
  cursor: not-allowed;
  &:hover {
    background-color: #aeb4b9;
  }
}
</style>
