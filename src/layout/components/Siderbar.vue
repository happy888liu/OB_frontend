<template>
  <v-navigation-drawer
      class="blue-grey lighten-5"
      width="232"
      :mini-variant="mini"
      permanent
      app>
    <v-list dense>
      <v-list-item to="/home">
        <v-list-item-action>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>up主搜索</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/dailyList">
        <v-list-item-action>
          <v-icon>mdi-calendar-month</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>up榜单</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/dailyList">
        <v-list-item-action>
          <v-icon>mdi-calendar-month</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>视频监控</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/dailyList">
        <v-list-item-action>
          <v-icon>mdi-apple</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>我的收藏</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      mini: false
    }
  },
  methods: {
    toggleSidebar() {
      this.mini = !this.mini;
    },
  }
}
</script>

<style scoped>

</style>