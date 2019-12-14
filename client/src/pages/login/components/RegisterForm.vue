<template>
  <div id="register-form">
    <v-card-title>用户注册</v-card-title>
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
          type="password"
          :rules="[v => !!v || '请输入密码']"
        ></v-text-field>
        <v-text-field
          v-model="form.repassword"
          label="确认密码"
          outlined
          prepend-inner-icon="mdi-lock-reset"
          type="password"
          :rules="[
            v => !!v || '请确认密码密码',
            v => comparePwd() || '密码输入不一致'
          ]"
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn text @click="handleToRegister">返回</v-btn>
        <v-btn color="primary" @click="handleReginster">注册</v-btn>
      </v-card-actions>
    </v-card-text>
  </div>
</template>

<script>
import { register } from "@/api/user"
export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        name: "",
        password: "",
        repassword: ""
      },
      pwdShow: false
    }
  },
  methods: {
    handleToRegister() {
      this.$emit("update:loginMode", true)
    },
    comparePwd() {
      if (this.form.repassword === this.form.password) {
        return true
      } else {
        return false
      }
    },
    handleReginster() {
      if (this.$refs.form.validate()) {
        register(this.form).then(() => {
          this.$message("注册成功")
          this.$emit("update:loginMode", true)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#register-form {
  position: relative;
}
</style>
