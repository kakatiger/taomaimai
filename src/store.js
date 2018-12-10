import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      allshow:false,//配送地址的显示与隐藏
      closeLoginState:false,//登录的状态
      cartCount:0,//购物车数量
  },
  mutations: {
      showArea(state){state.allshow=true},
      hiddenArea(state){state.allshow=false},//控制收货地址
      openLogin(state){state.closeLoginState=true},
      closeLogin(state){state.closeLoginState=false}, //控制登录页面的打开
      addCartCount(state,c){state.cartCount+=parseInt(c)},//购物车数量增加(详情页)
      updateCartCount(state,c){state.cartCount=parseInt(c)} //购物车数量改变(购物车页)
  },
  getters: {
      isAllshow:function(state){
          return state.allshow
      },
      isCloseLogin:function (state) {
          return state.closeLoginState
      },
      getCartCount(state){
          return state.cartCount
      },
      getCartList(state){
          return state.cartList
      }
  }
})
