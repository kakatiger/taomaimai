<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>
    <Login></Login>

    <!--<swiper></swiper>-->
    <!--<firstBrand></firstBrand>-->
    <!--<smallSwiper></smallSwiper>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Login from '@/components/login/login.vue'
export default {
  components: {
    Header,Login
  }
}
</script>
<style>
  .home{
    position:relative;
  }
  Header{
    position:relative;
  }
  .home swiper{
    position:absolute;
    top:-200px;
  }
</style>
