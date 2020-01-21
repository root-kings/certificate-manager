import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import './assets/css/lib/dayshmookh.layout.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
