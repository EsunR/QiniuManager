<template>
  <div class="process">
    <div class="wrapper">
      <div class="inner" :style="{ width: `${process}%` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.timmer = null
    return {
      process: 0
    }
  },
  mounted() {
    this.processing()
  },
  props: {
    success: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    success(newVal) {
      if (newVal === true) {
        clearInterval(this.timmer)
        this.process = 100
      }
    }
  },
  methods: {
    processing() {
      this.timmer = setInterval(() => {
        this.process = this.process + ((100 - this.process) / 2) * Math.random()
      }, 1500 * Math.random())
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 20px;
}
.wrapper {
  height: 3px;
  width: 100%;
  background-color: #a3ccec;
}
.inner {
  height: 100%;
  width: 0%;
  background-color: #2196f3;
  box-shadow: 0 2px 2px rgba($color: #000000, $alpha: 0.1);
  transition: all 0.2s ease;
}
</style>
