import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // 引入Material Desgin Icon的css文件
import '@fortawesome/fontawesome-free/css/all.css'//引入fontawesome的css文件
Vue.use(Vuetify,{
    iconfont: ['fa','mdi']
});

export default new Vuetify({
});
