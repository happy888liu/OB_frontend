<template>
  <v-container>
    <v-card elevation="0">
      <v-row justify="space-around" no-gutters>
        <v-col cols="auto">
          <v-btn color="pink lighten-3" tile outlined :href="`https://space.bilibili.com/${$route.params.mid}`">
            <v-icon left>mdi-home</v-icon>
            UP主空间
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="green" tile outlined>
            <v-icon left>mdi-refresh</v-icon>
            刷新数据
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="green" tile outlined>
            <v-icon left>mdi-qqchat</v-icon>
            刷新数据
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Operation"
}
</script>

<style scoped>

</style>