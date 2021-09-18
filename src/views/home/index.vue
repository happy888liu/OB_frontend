<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="4">
        <v-text-field append-icon="mdi-magnify" label="请输入UP主id或者昵称"
                      :rules="rules" hide-details="auto" @click:append="search"
                      v-model="searchWord">

        </v-text-field>
      </v-col>
      <v-col cols="auto">
        <add2-watch/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-iterator
            :items="ups"
            :options.sync="options"
            :server-items-length="totalItem"
            :items-per-page="15">
          <template v-slot:default="{ items }">
            <v-row v-for="item in items" :key="item.mid">
              <v-col>
                <up-card :upData="item"/>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {getHotUps} from '@/api'
import UpCard from '@/components/up/UpCard'
import Add2Watch from "@/components/up/Add2Watch";

export default {
  name: 'index',
  components: {Add2Watch, UpCard},
  data() {
    return {
      searchWord: '',
      totalItem: 5,
      loading: true,
      options: {},
      ups: [],
      rules: [value => !!value || '必须输入昵称或者ID.',]
    }
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi()
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi()
  },
  methods: {
    getDataFromApi() {
      getHotUps(this.options).then(
          data => {
            this.totalItem = data.data.total
            this.ups = data.data.items
          }
      )
    },
    search() {
      alert(this.searchWord)
    },
    getDialog() {

    },
  }
};
</script>