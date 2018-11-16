<template>
    <div class="furnishing">
        <!--<swiper :imgs="imgs"></swiper>-->
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="bedshowList" :title="bedtitle" :sub="bedsub"></goodsShow>
        <goodsShow :showList="pillowshowList" :title="pillowtitle" :sub="pillowsub"></goodsShow>
        <Footer></Footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import swiper from '@/components/swiper.vue'
    import classify from '@/components/classifySort.vue'
    import goodsShow from '@/components/goodsShow.vue'
    import Footer from '@/components/footer.vue'
    export default {
        components: {
           swiper,classify,goodsShow,Footer
        },
        data:function () {
            return{   imgs:[],famliy:[],
                bedshowList:[],bedtitle:'床品套件',bedsub:'MUJI等品牌制造商出品',
                pillowshowList:[],pillowtitle:'被枕',pillowsub:'守护你的睡眠时光'

            }
        },
        mounted(){
            this.axios.get('http://localhost:4000/furnishing/banner').then(res=>{
               this.imgs=res.data
            });
            this.axios.get('http://localhost:4000/furnishing/class').then(res=>{
                this.famliy=res.data
            });
             this.axios.get('http://localhost:4000/furnishing/furnishing',{params:{
                 fid:101
             }
             }).then(res=>{
                this.bedshowList = res.data
             })
            this.axios.get('http://localhost:4000/furnishing/furnishing',{params:{
                fid:102
            }
            }).then(res=>{
                this.pillowshowList = res.data
            })
        }
    }
</script>
<style scoped>
    .furnishing{
        margin-top: 300px;
    }

</style>