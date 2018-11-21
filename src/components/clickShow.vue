<template>
    <div class="smallSlide"  >
        <div class="title">
            <div class="title-left">
                <span>新品首发</span>
                <span>为你寻觅世间好物</span>
            </div>
            <div class="title-right">
                <span>更多新品&gt;</span>
            </div>
        </div>
        <div class="border" >
            <div class="swiper" :style="mySlide"  ondragstart="return false" oncopy="return false">
                <div v-for="(img,index) in list" @mouseenter="showImg2(index)" @mouseleave="showImg1()">
                    <img :src="img.home" v-show="isShow || index!=current"><img :src="img.show1" v-show="!isShow  && index==current">
                    <div class="salesInfo">
                        <div class="s-info">狂欢特惠</div>
                        <h4 class="s-title"><a href="#">{{img.title}}</a></h4>
                        <div class="s-price">{{img.price}}</div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="dir">
            <li><div class="dir-left" @click="slide(1)"><i class="icon iconfont icon-jiantou_liebiaoxiangzuo"></i></div></li>
            <li><div class="dir-right" @click="slide(-1)"><i class="icon iconfont icon-jiantou_liebiaoxiangyou"></i></div></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data:function(){return{
            list:[],
            isShow:true,current:0,
            mySlide:{left:'0px'},
            canMove:false,offsetX:0,

        }
        },
        methods:{
            showImg2(index){
                this.isShow=false;
                this.current=index
            },
            showImg1(){
                this.isShow=true;
            },
            slide(val){
                this.mySlide.left = parseInt(this.mySlide.left)+val*1090+'px';
                if(parseInt(this.mySlide.left) > 0) this.mySlide.left=0+'px'
            },
        },
        mounted(){
            this.axios.get('http://localhost:4000/newImage/newImages').then(res=>{
                this.list=res.data
            });
        }
    }
</script>
<style scoped>
    .smallSlide{
        width:1090px;height:370px;
        margin:0 auto;
        position: relative;
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
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
    .smallSlide .border{
        width:100%;
        height:100%;
        position: relative;
        overflow: hidden;
        margin-top:-20px;
    }
    .smallSlide .border>div.swiper>div:hover>.salesInfo{
        background: #f4f0ea;
    }
    .smallSlide .border>div.swiper>div:hover{
        border:1px solid rgba(233, 233, 233, 0.84);
    }
    .smallSlide .swiper{
        height:344px;
        justify-content:space-between;
        display: flex;
        position:absolute;
        bottom:0px;
    }
    .smallSlide .swiper img{
        width:272.5px;height:265px;
    }
    .smallSlide .swiper .salesInfo{
        text-align:center;
    }
    .smallSlide .swiper .salesInfo .s-info{
        display: inline-block;
        font-size:12px;line-height:20px;
        background:#e36844;border:1px solid transparent;
        padding:0 8px;margin-top: 5px;margin-bottom:5px;
        font-weight: 800;color:white;
    }
    .smallSlide .swiper .salesInfo .s-title a:hover{
        text-decoration: none;
        color:#D0C4AF;
    }
    .smallSlide .swiper .salesInfo .s-price{
        color:#d4282d;font-size:13px;
        margin:4px;
    }
    ul.dir>li>div{
        width:50px;height:50px;
        background: #D0C4AF;
        border-radius: 50%;
        position:absolute;
        z-index: 89;
        top:180px;
    }
    ul.dir>li>div.dir-right{
        right:-50px;
    }
    ul.dir>li>div.dir-left{
        left:-50px;
    }
    ul.dir>li>div>i{
        font-size:50px;
        line-height:50px;
    }
</style>