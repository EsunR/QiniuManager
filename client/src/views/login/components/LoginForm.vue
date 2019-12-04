<template>
  <div id="login-form">
    <md-field :class="{ 'md-invalid': validator.name }">
      <md-icon>person</md-icon>
      <label>用户名</label>
      <md-input v-model="formData.name"></md-input>
      <span class="md-error">{{ validator.name }}</span>
    </md-field>
    <md-field :class="{ 'md-invalid': validator.password }">
      <md-icon>vpn_key</md-icon>
      <label>密码</label>
      <md-input type="password" v-model="formData.password"></md-input>
      <span class="md-error">{{ validator.password }}</span>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  model: {
    prop: "formData",
    event: "change"
  },
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hasMessages: true,
      validator: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    vaild() {
      if (this.formData.name.trim() === "") {
        this.validator.name = "请输入用户名"
        return false
      } else {
        this.validator.name = ""
      }
      if (this.formData.password.trim() === "") {
        this.validator.password = "请输入密码"
        return false
      } else {
        this.validator.password = ""
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .md-error {
  padding-left: 35px;
}
</style>
