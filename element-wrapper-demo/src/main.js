import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import ElWrapper from "../Element-Framework";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ElWrapper);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
