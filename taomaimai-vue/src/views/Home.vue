<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>

    <!--<swiper></swiper>-->
    <!--<firstBrand></firstBrand>-->
    <!--<smallSwiper></smallSwiper>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style>
  .home{
    position:relative;
  }
  Header{
    position:relative;
    z-index:5
  }
  .home swiper{
    position:absolute;
    top:-200px;
    z-index:2
  }
</style>
