<template>
    <div class="goods-show">
        <div class="title">{{title}}</div>
        <div>{{sub}}</div>
        <ul>
            <li v-for="item in showList"><singleShow :item="item"></singleShow></li>
        </ul>
    </div>

</template>
<script>
    import singleShow from '@/components/singleShow.vue'
    export default {
        components: {
            singleShow
        },
        data:function () {
            return{}
        },props:['showList','title','sub'],
        mounted(){
        }

    }

</script>
<style scoped>
    .goods-show{
        width:1090px;
        margin: 0 auto;
    }
    .goods-show>.title{
        text-align: center;
        font-size:24px;
        font-weight: bold;
        line-height: 40px;
        margin-top:40px;
    }
    .goods-show>div+div{
    text-align: center;
        font-size:14px;
        color:#999;
        line-height:40px
    }
    .goods-show>ul{
       display: flex;
        flex-wrap:wrap;
    }
    .goods-show>ul li{
        margin: 0 5px;
    }
</style>