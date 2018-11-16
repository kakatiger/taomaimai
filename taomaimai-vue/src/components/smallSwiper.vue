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
        <div class="border" @mouseup="notMove($event)" @mousedown="isMove($event)" @mousemove="move($event)">
            <div class="swiper" :style="mySlide"  >
                <div v-for="img in list" >
                    <img :src="img.home" v-show="isShow"><img :src="img.show1" v-show="!isShow">
                    <div class="salesInfo">
                        <div class="s-info">狂欢特惠</div>
                        <div class="s-title">{{img.title}}</div>
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
            isShow:true,
            mySlide:{left:'0px'},
            canMove:false,offsetX:0,
        }
        },
        methods:{
            slide(val){
                this.mySlide.left = parseInt(this.mySlide.left)+val*1090+'px';
                if(parseInt(this.mySlide.left) > 0) this.mySlide.left=0+'px'
            },
            isMove(e){
                e.stopPropagation()
                this.canMove=true;
                this.offsetX=e.offsetX;
            },
            notMove(e){
                e.stopPropagation()
                this.canMove=false;
            },
            move(e){
                if(e.target.nodeName==='DIV'){
                console.log(e.target)
                e.stopPropagation()
                console.log(e.offsetX)
                console.log(this.canMove)
                if(this.canMove){
                    this.mySlide.left=e.offsetX;
                }}
            }
        },
        mounted(){
            this.axios.get('http://localhost:4000/newImage/newImages').then(res=>{
                console.log(res)
                this.list=res.data
                console.log('aha')
                console.log(this.list)
            });
//            var that=this;
//            window.onmousemove = function(e){
////                console.log(e.clientX)
////                console.log(that.offsetX)
//                if(that.canMove)
//                that.mySlide.left=e.offsetX-that.offsetX +'px'
//                console.log(that.mySlide.left)
//                console.log(that.canMove)
//            }
        }
    }
</script>
<style scoped>
    .smallSlide{
        width:1090px;height:370px;
        margin: 0 auto;
        position: relative;
        border:1px solid red;
    }
    .smallSlide .border{
        width:100%;
        height:100%;
        position: relative;
        overflow: hidden;
    }
    .smallSlide .swiper{
        height:344px;
        justify-content:space-between;
        display: flex;
        position:absolute;
        bottom:0px;
    }
    .smallSlide .swiper>div{
        margin-right:5px;

    }
    .smallSlide .swiper img{
        width:265px;height:265px;
    }
    .smallSlide .swiper .salesInfo{
        text-align:center;
    }
    ul.dir>li>div{
        width:50px;height:50px;
        background: #D0C4AF;
        border-radius: 50%;
        position:absolute;
        z-index: 999;
        top:200px;
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