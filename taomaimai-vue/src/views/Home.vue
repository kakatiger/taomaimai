<template>
  <div class="home">
    <Header>
    </Header>
    <swiper></swiper>
    <firstBrand></firstBrand>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import swiper from '@/components/swiper.vue'
import firstBrand from '@/components/firstBrand.vue'

export default {
  components: {
    Header,swiper,firstBrand
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
