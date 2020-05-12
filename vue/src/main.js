import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
