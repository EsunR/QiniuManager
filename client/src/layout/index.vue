<template>
  <v-app id="app-main">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      absolute
      color="#2E4571"
      dark
      shrink-on-scroll
      prominent
      src="http://img.cdn.esunr.xyz/18-12-27/80121584.jpg"
      fade-img-on-scroll
      scroll-threshold="500"
      app
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

    <v-content>
      <v-container id="app-container" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      drawer: false,
      items: [
        { title: "主页", icon: "mdi-home-variant" },
        { title: "个人中心", icon: "mdi-account-circle" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#app-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
