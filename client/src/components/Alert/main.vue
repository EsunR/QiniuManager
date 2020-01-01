<template>
  <transition name="fade" appear @after-leave="handleAfterLeave">
    <div class="alert" v-show="show" @click="handleCancel">
      <div class="inner" @click.stop="">
        <div class="title">{{ title }}</div>
        <div class="content">{{ content }}</div>
        <div class="btn-wrapper">
          <button @click.stop="handleCancel">取消</button>
          <button style="color: #1976D2" @click.stop="handelSubmit">
            确定
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      title: "标题",
      content: "内容",
      show: true
    }
  },
  methods: {
    handelSubmit() {
      if (this.show) {
        this.$emit("submit")
        this.show = false
      }
    },
    handleCancel() {
      this.$emit("onCancel")
      this.show = false
    },
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    background-color: #fff;
    padding: 15px;
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.4);
    color: rgba($color: #000000, $alpha: 0.7);
    .title {
      padding-bottom: 10px;
      font-size: 22px;
      font-weight: bold;
    }
    .content {
      padding-bottom: 10px;
    }
    .btn-wrapper {
      display: flex;
      justify-content: flex-end;
      button {
        padding: 5px 10px;
        margin-left: 10px;
        outline: none;
        border-radius: 5px;
        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.1);
        }
      }
    }
  }
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
