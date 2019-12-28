<template>
  <div class="image-info">{{ info.url }}</div>
</template>

<script>
export default {
  name: "ImageInfo",
  data() {
    return {}
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.image-info {
}
</style>
