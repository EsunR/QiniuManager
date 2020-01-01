<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawerStatus"
    absolute
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ username }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item link @click="goto('home')">
        <v-list-item-icon>
          <v-icon>mdi-home-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link @click="goto('keyManage')">
        <v-list-item-icon>
          <v-icon>mdi-key</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Key 管理</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>个人中心</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link @click="handleLogout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>退出登录</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  model: {
    prop: "drawer",
    event: "toggle"
  },
  data() {
    return {}
  },
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    drawerStatus: {
      get() {
        return this.drawer
      },
      set(newVal) {
        this.$emit("toggle", newVal)
      }
    },
    username() {
      return this.$store.getters.name
    }
  },
  methods: {
    goto(name) {
      this.$router.push({ name })
    },
    handleLogout() {
      window.localStorage.removeItem("token")
      this.$router.push({ name: "login" })
      this.$message("登出成功")
    }
  }
}
</script>

<style lang="scss" scoped></style>
