<template>
    <div>
        <div class="bg-pop">
            <div class="popular">
            <div class="title">
                <ul>
                    <li><a href="#">人气推荐</a></li>
                    <li :class="{active:a==c}" @click="titleC($event,1)"><a href="#" >编辑推荐</a></li>
                    <li :class="{active:b==c}" @click="titleC($event,2)"><a href="#">热销总榜</a></li>
                </ul>
                <div>
                    <span><a href="#">更多推荐&gt;</a></span>

                </div>
            </div>
            <div class="pic">
               <div class="bigPic">
                   <div><img :src="list[3].home"></div>
                   <div class="salesInfo">
                       <div class="s-info">爆品</div>
                       <div class="s-title"><a href="#">{{list[0].title}}</a></div>
                       <div class="s-price">¥{{list[0].price}}</div>
                   </div>
               </div>
                <div class="smallPic">
                   <div v-for="i in 6">
                       <div><img :src="list[1].home"></div>
                       <div class="salesInfo">
                           <div class="s-info">爆品</div>
                           <div class="s-title"><a href="#">{{list[2].title}}</a></div>
                           <div class="s-price">¥{{list[2].price}}</div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        </div>
        <div class="limit">
            <div class="title">
                <ul>
                    <li><a href="#">限时购</a></li>
                </ul>
                <div>
                    <span><a href="#">更多抢购&gt;</a></span>

                </div>
            </div>
            <div class="content">
                <a href="#" class="countdown" >
                    <div class="what">20</div>
                    <div class="h">{{ct.h}}</div>
                    <div class="m">{{ct.m}}</div>
                    <div class="s">{{ct.s}}</div>
                </a>
                <div class="list">
                    <div v-for="i in 4">
                        <a href="#"><img src="https://yanxuan.nosdn.127.net/17cde9b5d4c098aafc97c7a33501b246.png?imageView&thumbnail=180x180&quality=95"></a>
                        <div>
                            <div class="title"><a href="#">{{list[2].title}}</a></div>
                            <div class="sub">胶香浓郁，营养健康</div>
                            <div class="rest">还剩600件</div>
                            <div class="price"><span>限时价</span><span>¥</span>{{list[2].price}}</div>
                            <div class="buyNow"><a href="#">立即抢购</a></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="bg-welf">
            <div class="welfare">
                <div class="title">
                    <ul>
                        <li><a href="#">福利社</a></li>
                    </ul>
                    <div>
                        <span><a href="#">查看全部福利&gt;</a></span>
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        <div v-for = 'item in imgs'>
                            <img :src='item' >
                        </div>
                            <div class="d-left"></div>
                            <div class="d-right"></div>
                    </div>
                    <div class="middle">

                    </div>
                    <div class="right">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data:function () {
            return{a:1,b:2,c:1,
                list:[],
                end:new Date('2018/12/18 00:00:00'),
                ct:{},
                imgs:['img/index/tiny1.jpg','img/index/tiny2.jpg','img/index/tiny3.jpg'],
            }
        },
        methods:{
            titleC(e,val){
                e.preventDefault()
                this.c=val
            },
            ctime(){
                var temp= this.end - new Date()
                var s = parseInt(temp/1000);
                var d = parseInt(s/3600/24)
                var h = parseInt(s%(3600*24)/3600)
                var m = parseInt(s%3600/60)
                s%=60
                if(h<10) h=`0${h}`
                if(m<10) m=`0${m}`
                if(s<10) s=`0${s}`
                this.ct={h,m,s}
            },

        },
        mounted(){
            this.axios.get('newImage/newImages').then(res=>{

                console.log(res)
                this.list=res.data
                console.log('hah',this.list)
            });
            setInterval(this.ctime,1000)

        }
    }
</script>
<style scoped>
    *{margin:0;padding:0}
    .bg-pop{
        width:100%;
        height:698px;
        padding:60px;
        background:#f4f0ea ;
        margin-top:100px;
    }
    .popular{
        margin:0 auto;
        width:1090px;
        height: 578px;
    }
    .title{   /*设置所有标题*/
        display: flex;
        justify-content: space-between;
    }
    .title a:hover{
        color:#b4a078;
        text-decoration: none;
    }
    .title ul li{
        float: left;
        text-align: center;
        font-size: 14px;
        width: 70px;
        height: 28px;
        line-height: 28px;
        margin-right: 55px;
    }
    .title ul li.active{
        border-bottom:2px solid #b4a078;
    }
    .title ul li.active a{
        color: #b4a078;
    }
    .title ul li:first-child{
        width: 120px;
        font-size:28px;font-weight: 700;
    }

    /*设置人气榜*/
    .popular .pic{
        display: flex;
        margin-top:18px;
        justify-content:space-between;
}
    /*大图片展示区域*/
    .popular .pic .bigPic{
        width:390px;height:530px;
        text-align: center;
    }
    .popular .pic .bigPic>div:first-child{
        background: #fff;
    }
    .popular .pic .bigPic img{
        width:320px;height:320px;
        margin:40px 35px;
    }
    .popular .pic .bigPic .salesInfo{
        margin-top:3px;
        background: #fff;
        padding:15px
    }
    .popular .pic .bigPic .s-info{
        display: inline-block;
        background: #F28F2D;
        line-height:20px;font-size:12px;
        color:white;
        padding:0 6px;
        margin-bottom: 6px;

    }
    .popular .pic .bigPic .s-title a{
        font-size:18px;
        color:#333;
        font-weight: 800;
    }
    .popular .pic .bigPic .s-title a:hover{
       color:#D0C4AF;
        text-decoration: none;
    }
    .popular .pic .bigPic .s-price{
        color: #d4282d;font-size:18px;
        margin-top:10px;
    }
    /*小图片展示区*/
    .popular .pic .smallPic{
        width:690px;
    }
    .popular .pic .smallPic>div{
        width:223px;height:255px;
    }
    .popular .pic .smallPic{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:flex-end;
    }
    .popular .pic .smallPic img{
        width:180px;height:180px;
    }
    .popular .pic .smallPic>div>div:first-child{
        padding:0 21.75px;
        background: #fff;

    }
    .popular .pic .smallPic .salesInfo{
        margin-top:2px;
        background: #fff;
        text-align: center;
        padding:2px;
    }
    .popular .pic .smallPic .s-info{
        display: inline-block;
        background: #F28F2D;
        line-height:20px;font-size:12px;
        color:white;
        padding:0 6px;
        margin-bottom: 3px;

    }
    .popular .pic .smallPic .s-title a{
        font-size:12px;
        color:#333;
        font-weight: 800;
    }
    .popular .pic .smallPic .s-title a:hover{
        color:#D0C4AF;
        text-decoration: none;
    }
    .popular .pic .smallPic .s-price{
        color: #d4282d;font-size:13px;
        margin-top:3px;
    }
    /*限时购限时购限时购限时购限时购限时购限时购限时购限时购限时购*/
    .limit{
        width: 1090px;height:425px;
        margin:50px auto;
    }
    .limit .content{
        margin-top: 20px;
        height:377px;width:100%;
        display: flex;
        border:1px solid #f0ece4;

    }
    .limit .content .countdown{
        height: 100%;width:244px;
        background-image:url( '../../public/img/index/limit.png'); /*倒计时背景*/
        background-size:cover;
        position: relative;
    }
    .limit .content .countdown>div{
        position: absolute;
        width: 40px;height:40px;
        top:181px;
        color: #ffffff;
        font-size:20px;
        text-align: center;
    }
    .limit .content .countdown .what{
        top:62px;left:69px;
        font-size:28px;
        color: #615548;
        font-weight: 400;
    }
    .limit .content .countdown .h{   /*倒计时位置*/
        left:47px;
    }
    .limit .content .countdown .m{
        left:97px;
    }
    .limit .content .countdown .s{
        left:147px;
    }

    .limit .content .list{
        height: 100%;width:886px;
    }
    .limit .content .list>div{
        width:426px;height:189px;
        float: left;
        display: flex;
    }
    .limit .content .list>div:nth-child(1){  /*展示图片的边框*/
        border-bottom:1px solid #f0ece4;
    }
    .limit .content .list>div:nth-child(2){
        border-bottom:1px solid #f0ece4;
        border-left:1px solid #f0ece4;
    }
    .limit .content .list>div:nth-child(4){
        border-left:1px solid #f0ece4;
    }
    .limit .content .list img{
        width:180px;height:180px;
    }

    .limit .content .list>div>div{  /*展示图片右侧的位置*/
        padding-top:12px;
    }
    .limit .content .list .title{
        font-size:16px;
        line-height: 28px;
    }
    .limit .content .list .sub{
        color:#999;
        font-size:14px;
        line-height:24px;
    }
    .limit .content .list .rest{
        font-size:14px;
        color:#999;
    }
    .limit .content .list .price{
        font-size:24px;
        font-weight: 500;
        color:#be4141;
    }
    .limit .content .list .price span{
       font-size:14px;
        font-weight: 400;
    }
    .limit .content .list .price span:last-child{
        font-size: 24px;
        font-weight: 200;
    }
    .limit .content .list .buyNow{  /*限时抢购*/
        width:118px;
        height:31px;
        line-height:31px;
        text-align:center;
        font-size:16px;
        background:#be4141;
        border-radius:3px;
        margin-top:12px;
    }
    .limit .content .list .buyNow:hover{
        background:#da4f4f;

    }
    .limit .content .list .buyNow a{
        color:#fff;
    }

    /*下面开始写福利社了*/

    .bg-welf{
        width:100%;height: 526px;
        background-color:#f4f0ea ;
        padding:50px;
    }
    .welfare{
        width:1090px;
        margin: 0 auto;
    }
    .welfare .content{
        width:1090px;
        margin: 0 auto;
        height: 376px;
        background-color: salmon;
        display: flex;
    }
    .welfare .content .left{ /*福利社的左边轮播图*/
        height: 376px;
        width:224px;
        position: relative;
        background-color: lightblue;
    }
    .welfare .content .left>div{
        position: absolute;
        top:0;left:0;
    }
    .welfare .content .left .d-left,.welfare .content .left .d-right{
        width:30px;height:30px;
        border-radius: 50%;
        background-color: yellow;
    }













    .welfare .content .middle{  /*福利社的中部*/
        height: 376px;
        width:586px;
        background-color: #b4a078;
        margin:0 18px;
    }
    .welfare .content .right{  /*福利社的右边*/
        height: 376px;
        width:200px;
        background-color: brown;
    }



























</style>