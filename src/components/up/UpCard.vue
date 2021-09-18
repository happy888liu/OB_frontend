<template>
  <v-container>
    <v-card :to="`/up/detail/${upData.mid}`">
      <v-row>
        <v-col cols="1" align="center">
          <v-avatar size="80px" class="">
            <v-img :src="zipPic(upData.face)"/>
          </v-avatar>
        </v-col>
        <v-col cols="4">
          <v-row justify="start" no-gutters>
            <v-col cols="auto" class="mr-2">
              <v-chip outlined>
                {{ upData.name }}
              </v-chip>
            </v-col>
            <v-col cols="auto" class="mr-2">
              <sex-icon :sex="upData.sex"/>
            </v-col>
            <v-col cols="auto" class="mr-2">
              <v-chip color="pink" outlined>
                LV {{ upData.level }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col cols="auto">
              <v-chip outlined>
                uid:{{ upData.mid }}
              </v-chip>
            </v-col>
            <v-col cols="auto">
              <v-chip label text-color="white" color="pink">
                <v-icon left>mdi-account</v-icon>
                {{ upData.official }}
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <div class="text-center">
            粉丝总数
          </div>
          <div class="text-center font-weight-black">
            {{ upData.cfans }}
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SexIcon from "@/components/up/SexIcon";

export default {
  name: "UpCard",
  components: {SexIcon},
  props: {
    upData: {required: true, type: Object}
  }
}
</script>

<style scoped>

</style>