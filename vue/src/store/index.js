import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account.js'
import chart from './modules/chart.js'

// import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    account,
    chart
  }
})
