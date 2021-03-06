import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight, faDollarSign, faEuroSign, faExchangeAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faDollarSign)
library.add(faEuroSign)
library.add(faExchangeAlt)
library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
