import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { LayoutPlugin } from 'bootstrap-vue'
import { JumbotronPlugin } from 'bootstrap-vue'
import { ListGroupPlugin } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'
import { SpinnerPlugin } from 'bootstrap-vue'

Vue.use(SpinnerPlugin)
Vue.use(ButtonPlugin)
Vue.use(ListGroupPlugin)
Vue.use(LayoutPlugin)
Vue.use(JumbotronPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
