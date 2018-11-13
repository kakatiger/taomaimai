<template>
    <div class="index">
        <swiper :imgs="imgs"></swiper>
        <firstBrand></firstBrand>
        <smallSwiper></smallSwiper>
    </div>
</template>
<script>
    import Vue from 'vue'
    import swiper from '@/components/swiper.vue'
    import firstBrand from '@/components/firstBrand.vue'
    import smallSwiper from '@/components/smallSwiper.vue'
    export default {
        components: {
           swiper,firstBrand,smallSwiper
        },
        data:function () {
            return{   imgs:[
                {id:1,src:'img/banner/banner1.jpg'},
                {id:2,src:'img/banner/banner2.jpg'},
                {id:3,src:'img/banner/banner3.jpg'},
                {id:4,src:'img/banner/banner4.jpg'},
                {id:5,src:'img/banner/banner5.jpg'}
            ],}
        }
    }
</script>