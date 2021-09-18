<template>
  <v-card elevation="0">
    <v-card-subtitle>
      {{title}}
    </v-card-subtitle>
    <v-card-text>
      <v-chart :autoresize="true" :options="options" :theme="theme"/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DetailChart",
  data() {
    return {
      theme: "colorful",
    }
  },
  props: {
    options: {require: true, type: Object},
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>