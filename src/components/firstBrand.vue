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
                <a href="#"><img src="img/home/firstBrand/wine.jpg" alt=""></a>
            </div>
            <div>
                <div class="subtitle">CK制造商</div>
                <div><span>25元起</span></div>
                <a href="#"><img src="img/home/firstBrand/shoes.png" alt=""></a>
            </div>
            <div></div>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{}
        },
        mounted(){
            this.axios.get('http://localhost:4000/newImage/newImages').then(res=>{
//                console.log(res.data)
            })
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
        border:1px solid lightblue;
        position:relative;
        overflow: hidden;
        text-align: center;
        color:#666;
    }
    .imgs>div img{
        position: absolute;
        top:0;left:0;
        z-index: -1;

    }

    .imgs>div .subtitle{
        font-size:24px;
        margin:20px 0 40px;
    }
    .imgs>div span{
        font-size:14px;
        border-top:1px solid #666;
        padding-top:17px;
    }
</style>