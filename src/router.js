import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './views/index.vue'
import furnishing from './views/furnishing.vue'
import details from './views/details.vue'
import products from './views/products.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home',component: Home,children:[
        { path:"", component: index },
        { path:"furnishing", component: furnishing },
        { path:"details", component: details },
        { path:"products", name:'products',component: products,props:true},
    ]
    },
      {
          path:'/register',component:()=> import('./views/register.vue')
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
