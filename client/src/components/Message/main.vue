<template>
  <div class="message-wrapper" :style="positionStyle">
    <transition name="fade" appear @after-leave="handleAfterLeave">
      <div class="message" :class="[type]" v-show="!closed">
        <i
          class="mdi"
          :class="{
            'mdi-close-circle': type === 'error',
            'mdi-check-circle': type === 'success',
            'mdi-alert-circle': type === 'warning',
            'mdi-information': type === 'info'
          }"
        ></i>
        <span class="text">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      type: "success",
      verticalOffset: 40,
      closed: false,
      onClose: null,
      duration: 3000
    }
  },
  computed: {
    positionStyle() {
      return {
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  methods: {
    close() {
      this.closed = true
      if (typeof this.onClose === "function") {
        this.onClose(this)
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  mounted() {
    // 根据参数自动关闭消息框
    this.startTimer()
  }
}
</script>

<style lang="scss" scoped>
.message-wrapper {
  width: 100%;
  position: fixed;
  bottom: 20px;
  display: flex;
  justify-content: center;
  color: #fff;
  transition: all ease 0.3s;
  z-index: 999;
}
.message {
  display: flex;
  justify-content: center;
  min-width: 40%;
  text-align: center;
  line-height: 20px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba($color: #000000, $alpha: 0.1);
}
.mdi {
  margin-right: 5px;
}
.text {
  text-align: center;
}
.success {
  background-color: #4caf50;
}
.error {
  background-color: #ff5252;
}
.info {
  background-color: #2196f3;
}
.warning {
  background-color: #fb8c00;
}

// animate
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
