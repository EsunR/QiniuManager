<template>
  <layout />
</template>

<script>
import Vue from "vue"
import Layout from "@/layout"

export default Vue.extend({
  name: "App",
  components: {
    Layout
  },
  mounted() {
    // 获取用户信息
    this.$store.dispatch("user/getUserInfo")
  }
})
</script>
