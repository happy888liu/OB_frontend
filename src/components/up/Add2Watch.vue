<template>
  <v-container>
    <v-btn @click="getDialog">添加</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>观测新的UP主</v-card-title>
        <v-card-text>
          <v-text-field v-model="id" label="请输入UP主ID(数字)" :rules="[rules.required]"/>
          <v-text-field v-model="interval" label="观测间隔，单位(分)默认一分钟"/>
          <small class="grey--text">UP主的ID可以从UP主个人空间找到~</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn text color="primary" @click="submit">提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>

</template>

<script>
import {addUp2watch} from '@/api'

export default {
  name: "Add2Watch",
  data() {
    return {
      id: "",
      interval: "",
      dialog: false,
      rules: {
        required: (value) => value != "" || "告诉我要观测什么吧"
      },

    }
  },
  methods: {
    getDialog() {
      this.dialog = !this.dialog
    },
    submit() {
      addUp2watch(this.id, this.interval)
      this.dialog = false
    },
  }
}
</script>

<style scoped>

</style>