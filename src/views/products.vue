<template>
    <div class="products">
        <goods-show :showList="list"></goods-show>
    </div>
</template>
<script>
    import goodsShow from '@/components/goodsShow.vue'

    export default {
        components: {
            goodsShow
        },
        data:function () {
            return{list:[]}
        },
        methods:{

        },
        mounted(){
            this.axios.get('http://localhost:4000/furnishing/select',{params:{
                kw:this.$route.query.kw
//                kw:this.kw

            }
            }).then(res=>{
                console.log(res)
                this.list=res.data
            })
        }
    }
</script>
<style scoped>
    .products{
        margin:100px auto;
        /*margin-top: 300px;*/
        width:1090px;}
</style>