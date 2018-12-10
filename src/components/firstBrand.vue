<template>
    <div class="firstBrand">
        <div class="title">
            <div class="title-left">
                <span>品牌制造商</span>
                <span>工厂直达消费者，剔除品牌溢价</span>
            </div>
            <div class="title-right">
                <span>更多制造商&gt;</span>
            </div>

        </div>
        <div class="imgs">
            <div>
                <div class="subtitle">海外制造商</div>
                <div><span>9.9元起</span></div>
                <a href="#"><img src="http://127.0.0.1:5050/img/brand/cover/wine.jpg" alt=""></a>
            </div>
            <div>
                <div class="subtitle">CK制造商</div>
                <div><span>25元起</span></div>
                <a href="#"><img src="http://127.0.0.1:5050/img/brand/cover/shoes.png" alt=""></a>
            </div>
            <div class="small-img">
                <div class="top">
                    <div class="subTitle">新秀丽制造商</div>
                    <div class="minP"><span>39.9元起</span></div>
                    <img src="http://127.0.0.1:5050/img/brand/cover/box.png" alt="">
                </div>
                <div class="bottom">
                    <div class="subTitle">MUJI制造商</div>
                    <div class="minP"><span>35元起</span></div>
                    <img src="http://127.0.0.1:5050/img/brand/cover/slippers.jpg" alt="">
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{}
        }
    }
</script>
<style scoped>
    .firstBrand{
        width:1090px;height:370px;
        margin: 0 auto;
    }
    .title{
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    .title .title-left span:first-child{
        font-size:28px;
        font-weight: 700;
        padding-right:20px;
    }
    .title .title-left>span+span{
        font-size:14px;
    }
    .title .title-left span{
        font-size:14px;
    }
    .imgs{
        display: flex;
        justify-content: space-around;
    }
    .imgs>div{
        width:357px;height:325px;
        position:relative;
        overflow: hidden;
        text-align: center;
        color:#666;
    }
    .imgs>div:not(:last-child) img{
        position: absolute;
        top:0;left:0;
        z-index: -1;
        transition-duration: 1s;
    }
    .imgs>div:not(:last-child):hover img{
        transform: scale(1.2);
    }
    .imgs>div:not(:last-child) .subtitle{
        font-size:24px;
        margin:20px 0 40px;
    }
    .imgs>div:not(:last-child) span{
        font-size:14px;
        border-top:1px solid #666;
        padding-top:17px;
    }
    .imgs .small-img{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .imgs .small-img>div{
        text-align: left;
    }
    .imgs .small-img>div>img{
        position: absolute;
        top:0;left:0;
        z-index:-1;
        transition-duration: 1s;
    }
    .imgs .small-img>div:hover>img{
        transform: scale(1.1);
    }
    .imgs .small-img>div.bottom>img{
        top:166px;
    }
    .imgs .small-img .subTitle{
        font-size:20px;
        margin-bottom:8px;
        margin-left: 13px;
    }
    .imgs .small-img .minP span{
        font-size:14px;
        border-top:1px solid #666;
        padding-top:6px;
        margin-left: 13px;
    }
</style>