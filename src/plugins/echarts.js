import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts'

/*引入部分组件*/
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/markLine";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/radar";
import "echarts/lib/component/calendar";
import "echarts/lib/component/legend";
import "echarts/lib/component/visualMap";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/graph";
import "echarts/lib/chart/heatmap";

Vue.component('v-chart', ECharts);