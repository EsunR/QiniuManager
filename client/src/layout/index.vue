<template>
  <v-app id="app-main">
    <!-- 侧边栏 -->
    <Drawer v-model="drawer" />
    <!-- 顶部栏 -->
    <v-app-bar
      id="app-header"
      absolute
      color="#2E4571"
      dark
      shrink-on-scroll
      :src="this.$global.img"
      scroll-threshold="200"
      v-if="$route.path !== '/login'"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Qiniu Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 内容 -->
    <v-content>
      <v-container id="app-container" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "./subcomponents/Drawer"
export default {
  name: "Layout",
  components: {
    Drawer
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
#app-header {
  position: fixed;
}
#app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 130px;
}
#app-drawer {
  position: fixed;
}
</style>
