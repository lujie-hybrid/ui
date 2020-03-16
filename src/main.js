import Vue from "vue";
import App from "./App.vue";
import My from "../packages";
Vue.use(My);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
