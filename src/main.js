// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import qs from 'qs';

import 'babel-polyfill';
import 'lib-flexible/flexible'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.use(ElementUI);
import axios from 'axios'
import VueAxios from 'vue-axios'
// import './utils/http'
// http://192.168.2.184:8888/role/list?pageNumber=1&pageSize=10&enable=true
// axios.defaults.baseURL="http://192.168.2.134:8090"
// axios.defaults.baseURL="http://127.0.0.1:8090"
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.prototype.$qs = qs


Vue.config.productionTip = false





  



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


