<template>
  <div id="login-wrapper">
    <div class="content">
      <v-card class="mx-auto my-12">
        <v-img
          height="200"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <login-form v-if="loginMode" />
        <register-form v-else />
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
  .content {
    width: 800px;
    position: relative;
    top: -100px;
  }
}
</style>
