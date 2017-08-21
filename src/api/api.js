import VueResource from 'vue-resource'
import Vue from 'vue'
import config from './config'
Vue.use(VueResource)
// 获取微信api accesstoken
export const accessToken = params => { return Vue.http.jsonp(config.getToken, {params: params}).then(res => res.data) }
