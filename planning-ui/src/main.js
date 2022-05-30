import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import apiAxios from './services/axios'

//Make Axios global
Vue.prototype.$Axios = apiAxios

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
