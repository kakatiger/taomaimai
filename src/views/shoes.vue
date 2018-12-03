<template>
    <div class="shoes">
        <small-swiper :list="imgs"></small-swiper>
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="boxshowList" :title="boxshowList.title" :sub="boxshowList.subtitle"></goodsShow>
        <Footer></Footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import classify from '@/components/classifySort.vue'
    import goodsShow from '@/components/goodsShow.vue'
    import Footer from '@/components/footer.vue'
    import smallSwiper from '@/components/smallSwiper.vue'
    export default {
        components:{
            smallSwiper, goodsShow,Footer,classify
        },
        data:function () {
            return{imgs:[],boxshowList:[],famliy:[]}
        },
        mounted(){
            this.axios.get('shoes/banner').then(res=>{
                this.imgs=res.data
            });
            this.axios.get('furnishing/furnishing',{params:{
                 fid:201
             }
             }).then(res=>{
                this.boxshowList = res.data
             });
                         this.axios.get('furnishing/class',{params:{
                bigId:2
            }
            }).then(res=>{
                this.famliy=res.data
            });
        }
    }
</script>
<style>
    .shoes{
        width:1090px;
        margin:100px auto;
    }
</style>