<template>
  <v-app id="app-main">
    <v-navigation-drawer v-model="drawer" app>Sidebar</v-navigation-drawer>

    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-threshold="500"
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
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

      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent">
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-container fluid>container</v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  components: {
    // Header
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
