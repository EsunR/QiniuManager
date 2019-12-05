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
        <login-form v-if="loginMode" v-model="loginFormData" ref="loginForm" />
        <register-form v-else v-model="registerFormData" ref="registerForm" />
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
          <md-button
            class="md-dense md-raised md-primary"
            @click="handleRegisterClick"
            >提交</md-button
          >
        </div>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
export default {
  name: "Login",
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      loginFormData: {
        name: "",
        password: ""
      },
      registerFormData: {
        name: "",
        password: "",
        rePassword: ""
      },
      loginMode: true
    }
  },
  methods: {
    handleLoginClick() {
      if (this.$refs.loginForm.vaild()) {
        console.log("登录成功")
      }
    },
    handleRegisterClick() {
      if (this.$refs.registerForm.vaild()) {
        console.log("注册成功！")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  max-width: 700px;
  margin: 0 auto;
  margin-top: 60px;
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
