<template>
    <div class="slider">
        <div class="window" :style="Wwidth" @mouseenter="slideEnd()" @mouseleave="slideStart()">
            <ul class="dir">
                <li><div class="dir-left" @click="slide(-1)"><i class="icon iconfont icon-jiantou_liebiaoxiangzuo"></i></div></li>
                <li><div class="dir-right" @click="slide(1)"><i class="icon iconfont icon-jiantou_liebiaoxiangyou"></i></div></li>
            </ul>
            <ul class="dot">
                <li v-for="i in imgs.length"><div :class="{active: i==index+1}"></div></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data:function () {
        return{
            mySlide:{left:'100%'},
            index:0,
            screenWidth:document.body.clientWidth,/*Wwidth:{width:'1900px'},*/
            timer:setInterval(this.autoSlide,3500)

        }
    },props:['imgs'],
    methods:{
        slide(val){
            this.mySlide.left = parseInt(this.mySlide.left)+val*1900+'px'
//            console.log(this.mySlide.left)
            if(parseInt(this.mySlide.left) < -9500) this.mySlide.left=-1900+'px'
            if(parseInt(this.mySlide.left) > -1900) this.mySlide.left=-9500+'px'
            console.log(this.screenWidth)
            console.log(this.Wwidth)
            console.log(this.imgs)
            this.index+=val
            if(this.index>4) this.index=0;
            if(this.index<0) this.index=4;
        },
        autoSlide(){
            this.index+=1
            if(this.index>4) this.index=0;
        },
        slideEnd(){
            clearInterval(this.timer)
        },
        slideStart(){
            this.timer=setInterval(this.autoSlide,3500)
        }
//
    },

    computed:{
        Wwidth(){
            if(this.screenWidth<1400) this.screenWidth=1400;
            return {width:this.screenWidth+'px',backgroundImage:`url(${this.imgs[this.index].src})`}
        },

    },
    mounted(){
        var that=this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }

    }
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    .slider{
        position:relative;
        width:100%;height:500px;
    }
    .window{
        height:430px;
        position:absolute;
        top:75px;
        border:1px solid red;
        background-position:center;
        background-repeat: no-repeat;
    }
    ul.container>li img{
        height:430px;

    }
    ul.dir>li>div{
        width:50px;height:50px;
        background: #D0C4AF;
        border-radius: 50%;
        position:absolute;
        z-index: 89;
        top:200px;
    }
    ul.dir>li>div.dir-right{
        right:200px;
    }
    ul.dir>li>div.dir-left{
        left:200px;
    }
    ul.dir>li>div>i{
        font-size:50px;
        line-height:50px;
    }
    ul.dot{
        position:absolute;
        bottom:50px;left:50%;
        z-index: 89;
    }
    ul.dot>li{
        float:left;
        margin-right: 10px;
    }
    ul.dot>li>div{
        width:8px;height:8px;
        border:1px solid gray;
        background: white;
        border-radius:50%;
    }
    ul.dot>li>div.active{
        box-shadow:0 0 5px 5px  #D0C4AF;
        background: #a7936e;
    }





</style>