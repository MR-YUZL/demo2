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


Vue.prototype.tim = tim
Vue.prototype.TIM = TIM

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.Request = Request;
Vue.prototype.validateRules = validateRules

document.cookie = "JSESSIONID=1B3DB383235A83C4F8CFD66D24FF1229";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
