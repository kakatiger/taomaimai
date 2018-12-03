import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
Vue.use(Button)
 Vue.use(Select)
Vue.use(ElementUI);
Vue.directive('focus',{
    inserted:function(el){
        el.focus()
        console.log(el)
    }
})
Vue.config.productionTip = false
axios.defaults.withCredentials=true//让axios可以携带cookie
axios.defaults.baseURL='http://127.0.0.1:4000/'
Vue.prototype.axios=axios;
new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app')
