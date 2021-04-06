import Vue from 'vue'
import App from './App.vue'
import { VuePlausible } from 'vue-plausible'

import router from './router'

import "@fontsource/press-start-2p/400.css"
import "@fontsource/cousine/400.css"
import "@fontsource/cousine/700.css"
import "@fontsource/cousine/400-italic.css"
import "@fontsource/cousine/700-italic.css"

Vue.config.productionTip = false;

Vue.use(VuePlausible, {
  domain: "emojify.info"
})
Vue.$plausible.enableAutoPageviews()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
