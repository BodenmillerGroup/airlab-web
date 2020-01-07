// Import Component hooks before component definitions
import "@/component-hooks";
import App from "@/App.vue";
import "@/plugins/masonry-css";
import vuetify from "@/plugins/vuetify";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css";
import { applicationToString, conjugateStatusToString, validationStatusToString } from "@/utils/converters"; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.filter("applicationToString", applicationToString);
Vue.filter("validationStatusToString", validationStatusToString);
Vue.filter("conjugateStatusToString", conjugateStatusToString);

new Vue({
  router: router,
  store: store,
  vuetify: vuetify,
  render: h => h(App),
}).$mount("#app");
