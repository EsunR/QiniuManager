<template>
  <div id="login-form">
    <v-card-title>用户登录</v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="form.name"
          label="用户名"
          outlined
          prepend-inner-icon="mdi-account-circle"
          :rules="[v => !!v || '请输入用户名']"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="密码"
          outlined
          prepend-inner-icon="mdi-lock-reset"
          :append-icon="pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
          :type="pwdShow ? 'text' : 'password'"
          @click:append="pwdShow = !pwdShow"
          :rules="[v => !!v || '请输入密码']"
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn text @click="handleToRegister">注册</v-btn>
        <v-btn color="primary" @click="handleLogin">登录</v-btn>
      </v-card-actions>
    </v-card-text>
  </div>
</template>

<script>
import { login } from "@/api/user"
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      pwdShow: false
    }
  },
  methods: {
    handleToRegister() {
      this.$emit("update:loginMode", false)
    },
    handleLogin() {
      if (this.$refs.form.validate()) {
        login(this.form).then(res => {
          const { token } = res.data
          // 设置 token
          window.localStorage.setItem("token", token)
          // PS: 在此无需要 fetch 用户信息，由登录页面跳转到其他页面后会自动获取用户信息（详见 router.js）
          this.$message("登录成功, 正在跳转")
          setTimeout(() => {
            this.$router.push("/home")
          }, 1000)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login-form {
  position: relative;
}
</style>
