import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import storex from './store'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state:{allshow:false},//配送地址的显示与隐藏
    mutations:{
      showArea(state){state.allshow=true},
      hiddenArea(state){state.allshow=false}
    },
    getters:{
      isAllshow:function(state){
        return state.allshow
      }
    }
})

Vue.config.productionTip = false
axios.defaults.withCredentials=true//让axios可以携带cookie
Vue.prototype.axios=axios;

new Vue({
  router,
    store,
    storex,
  render: h => h(App)
}).$mount('#app')
