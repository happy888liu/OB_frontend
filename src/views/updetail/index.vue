<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card>
          <up-thumbnail :upData="upData"/>
          <v-divider/>
          <operation/>
          <v-divider/>
          <up-data/>
        </v-card>
      </v-col>
      <v-col align="center">
        <detail-chart title="UP主历史信息" :options="historyDataOptions"/>
        <detail-chart title="变化日历" :options="upCalendarOptions"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

import UpThumbnail from "@/components/up/UpThumbnail";
import {getUpData, getUpHistory} from '@/api/index'
import Operation from "@/components/up/Operation";
import UpData from "@/components/up/UpData";
import {getMultiChartOptions, getUpCalendarOptions} from "@/utils/echart-multi-line";
import DetailChart from "@/components/chart/DetailChart";

export default {
  name: "index",
  components: {DetailChart, UpData, Operation, UpThumbnail},
  data() {
    return {
      upData: {},
      upHistory: {},
      historyDataOptions: Object(),
      upCalendarOptions: Object(),
      mid: Number(),
    }
  },
  mounted() {
    if (this.$route.params.mid !== undefined) {
      this.mid = this.$route.params.mid;
    }
    getUpData(this.mid).then(data => {
      this.upData = data.data
    })
    //获取历史粉丝数，点赞，播放信息
    getUpHistory(this.mid, -1).then(data => {
      this.upHistory = data.data
      let fansArray = [];
      let likeArray = [];
      let viewArray = [];

      this.upHistory.forEach((e) => {
        if (e.fans !== undefined && e.fans !== 0) {
          fansArray.push([e.datetime, e.fans])
        }
        if (e.fans !== undefined && e.fans !== 0) {
          likeArray.push([e.datetime, e.fans])
        }
        if (e.fans !== undefined && e.fans !== 0) {
          viewArray.push([e.datetime, e.fans])
        }
      })
      fansArray = fansArray.reverse()
      likeArray = likeArray.reverse()
      viewArray = viewArray.reverse()

      this.historyDataOptions = getMultiChartOptions([
        [fansArray, "粉丝数", "#1e88e5"],
        [viewArray, "播放数", "#2b821d"],
        [likeArray, "获赞数", "#c12e34"]
      ])
      this.upCalendarOptions = getUpCalendarOptions([
        [fansArray, "粉丝数", "#1e88e5"],
        [viewArray, "播放数", "#2b821d"],
        [likeArray, "获赞数", "#c12e34"]
      ])
    })
  }
}
</script>

<style scoped>

</style>