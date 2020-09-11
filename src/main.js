import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import { router } from "./routes/routes";
import "./assets/css/common.less";
// 有关antdUi组件
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import Request from './api/api'
import './api/index'
import validateRules from './utils/validateRules'
import tim from './utils/tim'
import TIM from 'tim-js-sdk'
import echarts from 'echarts'
import showMsgCenterEx from "./utils/showMsgCenter";

Vue.prototype.$echarts = echarts
Vue.prototype.tim = tim
Vue.prototype.TIM = TIM
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
window.showMsgCenterEx = showMsgCenterEx;

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.Request = Request;
Vue.prototype.validateRules = validateRules;

document.cookie = "JSESSIONID=4EBCC36EB6F1744201914CA915ACEBCF";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
