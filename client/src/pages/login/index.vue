<template>
  <div id="login-wrapper">
    <div class="content">
      <v-card class="mx-auto my-12">
        <v-img height="200" :src="this.$global.img"></v-img>
        <div
          :class="{ 'form-wrapper': true, 'form-wrapper-height': !loginMode }"
        >
          <transition name="slideBottomToTop" mode="out-in">
            <login-form v-if="loginMode" :loginMode.sync="loginMode" />
            <register-form v-else :loginMode.sync="loginMode" />
          </transition>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
export default {
  name: "login",
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      loginMode: true
    }
  }
}
</script>

<style lang="scss" scoped>
#login-wrapper {
  width: 100%;
  height: calc(100vh - 30px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .content {
    width: 800px;
    position: relative;
    top: -100px;
  }
  .form-wrapper {
    transition: height 0.3s ease;
    height: 290px;
  }
  .form-wrapper-height {
    height: 380px;
  }
}
</style>

<style lang="scss">
#login-wrapper {
  .v-card__actions {
    justify-content: flex-end;
    padding: 0;
  }
}
</style>
