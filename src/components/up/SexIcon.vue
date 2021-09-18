<template>
  <v-icon v-if="sex =='男'" small color="primary">
    mdi-gender-male
  </v-icon>
  <v-icon v-else-if="sex =='女'" small color="pink">
    mdi-gender-female
  </v-icon>
  <v-icon v-else-if="sex === '保密'" small color="purple">
    mdi-gender-male-female
  </v-icon>
</template>

<script>
export default {
  name: "SexIcon",
  props: {
    sex: String("")
  }
}
</script>

<style scoped>

</style>