<template>
    <div class="slider">
        <div class="window" @mouseenter="slideEnd()" @mouseleave="slideStart()">
            <ul class="container" :style="mySlide">
                <li><img :src="imgs[4].src" alt="" ></li>
                <li v-for="(item,i) in imgs" ><img :src="item.src" alt=""></li>
                <li><img :src="imgs[0].src" alt=""></li>
            </ul>
            <ul class="dir">
                <li><div class="dir-left" @click="slide(1)"><i class="icon iconfont icon-jiantou_liebiaoxiangzuo"></i></div></li>
                <li><div class="dir-right" @click="slide(-1)"><i class="icon iconfont icon-jiantou_liebiaoxiangyou"></i></div></li>
            </ul>
            <ul class="dot">
                <li v-for="i in imgs.length"><div :class="{active: i==(parseInt(mySlide.left))/(-1900)}"></div></li>
            </ul>


        </div>
    </div>
</template>
<script>
export default {
    data:function () {
        return{
            imgs:[
                {id:1,src:'img/banner/banner1.jpg'},
                {id:2,src:'img/banner/banner2.jpg'},
                {id:3,src:'img/banner/banner3.jpg'},
                {id:4,src:'img/banner/banner4.jpg'},
                {id:5,src:'img/banner/banner5.jpg'}
            ],
            mySlide:{left:'-1900px'},
            index:1,
            timer:setInterval(this.autoSlide,3500)

        }
    },
    methods:{
        slide(val){
            this.mySlide.left = parseInt(this.mySlide.left)+val*1900+'px'
//            console.log(this.mySlide.left)
            if(parseInt(this.mySlide.left) < -9500) this.mySlide.left=-1900+'px'
            if(parseInt(this.mySlide.left) > -1900) this.mySlide.left=-9500+'px'
//            clearInterval(this.timer)
        },
        autoSlide(){
            this.mySlide.left = parseInt(this.mySlide.left)-1900+'px';
            if(parseInt(this.mySlide.left) < -9500) this.mySlide.left=-1900+'px'
            if(parseInt(this.mySlide.left) > -1900) this.mySlide.left=-9500+'px'
        },
        slideEnd(){
            clearInterval(this.timer)
        },
        slideStart(){
            this.timer=setInterval(this.autoSlide,3500)
        }
    },
//    mounted(){
//        var timer=setInterval(this.autoSlide,2000)
//    }
}
</script>
<style>
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
        width:1900px;
        height:430px;
        /*margin-top:-80px;*/
        overflow: hidden;
        position:absolute;
        top:75px;
        /*margin-left: -100%;*/
    }
    ul.container{
        width:13300px;
        position:absolute;
    }
    ul.container>li{
        float:left;
    }

    ul.container>li img{
        width:1900px;
    }
    ul.dir{

    }
    ul.dir>li>div{
        width:50px;height:50px;
        background: #D0C4AF;
        border-radius: 50%;
        position:absolute;
        z-index: 9;
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
        bottom:50px;left:900px;
        z-index: 99;
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