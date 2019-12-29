<template>
  <div class="clip-input">
    <v-text-field
      v-model="inputValue"
      ref="text-field"
      class="input"
      :label="label"
    />
    <v-btn class="btn" color="primary" @click="copy"
      ><v-icon left>mdi-clipboard</v-icon> 复制</v-btn
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit("input", newVal)
      }
    }
  },
  methods: {
    copy() {
      let input = this.$refs["text-field"].$refs.input
      input.select()
      document.execCommand("Copy")
      this.$message("复制成功")
    }
  }
}
</script>

<style lang="scss" scoped>
.clip-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input {
    padding-right: 20px;
  }
}
</style>
