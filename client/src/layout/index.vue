<template>
  <v-app id="app-main">
    <!-- 侧边栏 -->
    <Drawer v-model="drawer" />
    <!-- 侧边栏 -->

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
      <!-- 下拉菜单 -->
      <v-menu :min-width="200" :nudge-bottom="50">
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in menuList"
            :key="i"
            @click="item.handle"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- 下拉菜单 -->
    </v-app-bar>
    <!-- 顶部栏 -->

    <!-- 内容 -->
    <v-content>
      <v-container id="app-container" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- 内容 -->

    <!-- 关于 -->
    <v-dialog v-model="dialogAbout" max-width="400" class="about">
      <v-card>
        <v-card-title class="headline">关于</v-card-title>
        <v-card-text class="about-content">
          <p>当前版本：v1.0.0 β</p>
          <p>已有功能：</p>
          <ul>
            <li>用户登录、注册</li>
            <li>图片选择上传</li>
            <li>剪切板图片上传</li>
            <li>用户管理七牛云Token</li>
          </ul>
          <p>TODO：</p>
          <ul>
            <li>图片 url 上传</li>
            <li>图片自动转换为 webp 上传</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" text @click="dialogAbout = false">
            了解
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 关于 -->
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
      drawer: false,
      menuList: [{ title: "关于", handle: this.showAbout }],
      dialogAbout: false
    }
  },
  methods: {
    showAbout() {
      this.dialogAbout = true
    }
  }
}
</script>

<style lang="scss" scoped>
#app-header {
  position: fixed;
}
#app-container {
  position: relative;
  min-height: calc(100% - 20px);
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 130px;
  margin-top: 20px;
}
#app-drawer {
  position: fixed;
}
.about-content {
  p {
    margin: 5px 0;
  }
}
</style>

<style lang="css">
.v-list-item {
  min-height: 30px;
}
</style>
