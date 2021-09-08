import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui'
Vue.use(Indicator)
Vue.use(VueRouter)
new Vue({
  render: h => h(App)
}).$mount('#app')
