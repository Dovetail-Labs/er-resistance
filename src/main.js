import Vue from 'vue'
import App from './App.vue'
import { VuePlausible } from 'vue-plausible'

import router from './router'

Vue.config.productionTip = false;

Vue.use(VuePlausible, {
  domain: "emojify.info"
})
Vue.$plausible.enableAutoPageviews()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
