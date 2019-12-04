<template>
  <div id="login">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">验证您的身份</div>
          <div class="md-subhead">User Login</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <login-form
          v-if="loginMode"
          v-model="formData"
          ref="loginForm"
        ></login-form>
      </md-card-content>
      <md-card-actions>
        <div class="login-actions" v-if="loginMode">
          <md-button @click="loginMode = false" class="md-dense md-primary"
            >注册</md-button
          >
          <md-button
            class="md-dense md-raised md-primary"
            @click="handleLoginClick"
            >登录</md-button
          >
        </div>
        <div v-else class="register-actions">
          <md-button @click="loginMode = true" class="md-dense md-primary">
            返回登录
          </md-button>
          <md-button class="md-dense md-raised md-primary">提交</md-button>
        </div>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm"
export default {
  name: "Login",
  components: {
    LoginForm
  },
  data() {
    return {
      formData: {
        name: "",
        password: ""
      },
      loginMode: true
    }
  },
  methods: {
    handleLoginClick() {
      this.$refs.loginForm.vaild()
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  max-width: 700px;
  margin: 0 auto;
  /deep/ .md-card-header {
    background-color: $color-primary;
    color: #ffffff;
  }

  /deep/ .md-card-content {
    padding-top: 16px;
    font-size: 1rem;
  }
}
</style>
