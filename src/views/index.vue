<template>
    <div class="index">
        <swiper :imgs="imgs"></swiper>
            <firstBrand></firstBrand>
            <click-show></click-show>
            <popu></popu>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <Footer></Footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import swiper from '@/components/swiper.vue'
    import firstBrand from '@/components/firstBrand.vue'
    import clickShow from '@/components/clickShow.vue'
    import popu from '@/components/popularity.vue'
    import Footer from '@/components/footer.vue'

    export default {
        components: {
           swiper,firstBrand,clickShow,popu,Footer
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
