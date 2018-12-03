<template>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item ,index) in list" :key="index">
            <img :src="item.src" alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    export default {
        data:function () {
            return{}
        },props:['list']
    }
</script>
<style scoped="">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>