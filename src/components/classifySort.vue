<template>
    <div class="classify">
        <div class="kind">
            <div>分类：</div>
            <ul>
                <li><a href="#">全部</a></li>
                <li v-for="item in famliy"><a href="#">{{item.famliy_name}}</a></li>
            </ul>
        </div>
        <div class="area">
            <div>配送地区：</div>
            <ul>
                <li><a href="#">全部</a></li>
                <li><a href="#">港澳台地区</a></li>
                <li><a href="#">日韩</a></li>
                <li><a href="#">亚洲</a></li>
                <li><a href="#">欧洲</a></li>
                <li><a href="#">美洲</a></li>
            </ul>

        </div>
        <div class="sort">
            <div>排序：</div>
            <ul>
                <li><a href="#">默认</a></li>
                <li><a href="#">价格</a></li>
            </ul>

        </div>
    </div>

</template>
<script>
    export default {
        data:function () {
            return{}
        },props:['famliy'],

    }
</script>
<style scoped>
    .classify{
        width:1090px;height:165px;
        margin: 40px auto 20px;
        font-size:14px;
    }
    .classify>div{
        display: flex;
        height:55px;
        line-height: 55px;
        border-bottom:1px dashed #dedede;
    }
    .classify>div.sort{
        border-bottom:1px solid #dedede;
    }
    .classify>div>div{
        width:70px;
        color:#999;
    }
    .classify>div>ul>li{
        float:left;
        margin-right: 25px;
    }
    .classify>div>ul>li a:hover{
        text-decoration: none;
        color:#D0C4AF;
        font-weight:lighter;
    }
</style>