<template>
  <v-container>
    <v-card elevation="0">
      <div class="d-flex flex-no-wrap justify-start">
        <v-avatar size="80px" class="ma-3">
          <v-img :src="zipPic(upData.face)"/>
        </v-avatar>
        <div>
          <v-card-text>
            <p>
              {{ upData.name }}
              <v-chip color="pink" outlined small>
                LV {{ upData.level }}
              </v-chip>
              <sex-icon
                  style="vertical-align: text-bottom;"
                  :sex="upData.sex"
              />
            </p>
            <h6 class="caption text--grey">
              粉丝数:{{ upData.cfans }}
            </h6>
            <div>
              {{ upData.official }}
            </div>
          </v-card-text>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import SexIcon from "@/components/up/SexIcon";

export default {
  name: "UpThumbnail",
  components: {SexIcon},
  props: {
    upData: {required: true, type: Object}
  },
}
</script>

<style scoped>

</style>