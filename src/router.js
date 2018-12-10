import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home',component:  resolve=>require(['./views/Home.vue'],resolve),children:[
        { path:"", component: resolve=>require(['./views/index.vue'],resolve) },
        { path:"furnishing", component: resolve=>require(['./views/furnishing.vue'],resolve) },
        { path:"shoes", component: resolve=>require(['./views/shoes.vue'],resolve) },
        { path:"details", component: resolve=>require(['./views/details.vue'],resolve) },
        { path:"products", name:'products',component: resolve=>require(['./views/products.vue'],resolve),props:true},
        { path:'shopcart',name:'shopcart',component:resolve=>require(['./views/shopCart.vue'],resolve)},
        { path:'address',name:'address',component:resolve=>require(['./views/address.vue'],resolve)},
        {path:'order',name:'order',component:resolve=>require(['./views/order.vue'],resolve)},
        {path:'foryou',name:'foryou',component:resolve=>require(['./views/justForYou.vue'],resolve)},
    ]
    },
      {
          path:'/register',component: resolve=>require(['./views/register.vue'],resolve)
      }
  ]
})
