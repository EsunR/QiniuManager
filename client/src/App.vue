<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Qiniu Manager</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Edit By EsunR
        </md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">首页</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="main-container">
          <router-view></router-view>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 16px;
}
.md-app {
  height: calc(100vh);
  border: 1px solid rgba(#000, 0.12);
  font-size: 1rem;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.main-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: "Reveal",
  data: () => ({
    menuVisible: false
  })
}
</script>
