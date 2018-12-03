<template>
    <div class="furnishing">
        <small-swiper :list="imgs"></small-swiper>
        <classify :famliy="famliy"></classify>
        <goodsShow :showList="bedshowList" :title="bedtitle" :sub="bedsub"></goodsShow>
        <goodsShow :showList="pillowshowList" :title="pillowtitle" :sub="pillowsub"></goodsShow>
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
        components: {
           classify,goodsShow,Footer,smallSwiper
        },
        data:function () {
            return{   imgs:[],famliy:[],
                bedshowList:[],bedtitle:'床品套件',bedsub:'MUJI等品牌制造商出品',
                pillowshowList:[],pillowtitle:'被枕',pillowsub:'守护你的睡眠时光'

            }
        },
        mounted(){
            this.axios.get('furnishing/banner').then(res=>{
               this.imgs=res.data
            });
            this.axios.get('furnishing/class',{params:{
                bigId:1
            }
            }).then(res=>{
                this.famliy=res.data
            });
             this.axios.get('furnishing/furnishing',{params:{
                 fid:101
             }
             }).then(res=>{
                this.bedshowList = res.data
             })
            this.axios.get('furnishing/furnishing',{params:{
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
        margin:100px auto;
        /*margin-top: 300px;*/
        width:1090px;

    }

</style>