<template>
    <div class="detailsMain">
        <div class="left">
            <img :src="img_src==undefined?main_obj.show1:img_src" width="428px" height="428px">
        </div>
        <div class="middle">
            <ul>
                <li v-for="(item,index) in arr"><img @mouseenter="change($event,index)" :src="item" width="79px" height="79px"  :class="{active:index==current}" ></li>
            </ul>
        </div>
        <div class="right">
            <div class="info">
                <div class="title">
                    <h1>{{main_obj.title}}</h1>
                    <span>{{main_obj.subtitle}}</span>
                </div>
                <div class="buy-info">
                    <div>
                        <span>价格</span>
                        <div class="price"><span>￥</span>{{main_obj.price}}</div>
                    </div>
                    <div>
                        <span>促销</span>
                        <div class="sales">优惠满减，等你来拿</div>
                    </div>
                    <div>
                        <span>积分</span>
                        <div>购买最多得16积分</div>
                    </div>
                    <div class="deliver">
                        <span>配送</span>
                        <div><span>至</span><input type="text" placeholder="选择配送地址"></div>
                        <!--<div id="select_address"></div>-->

                    </div>
                    <div>
                        <span>服务</span>
                        <div>
                           <span>･ 支持30天无忧退换货</span>&nbsp;&nbsp;<span>･ 48小时快速退款</span><br> <span>･ 满88元免邮费</span>&nbsp;&nbsp;<span>･ 网易自营品牌</span><span>･ 国内部分地区无法配送</span> </div>
                    </div>
                </div>
            </div>
            <div>
                <span>规格</span>
                <div>

                </div>
            </div>
            <div>
                <span>数量</span> <button>-</button>
                <input type="text"><button>+</button>
            </div>
            <div></div>
            <select-address></select-address>

        </div>
    </div>
</template>
<script>
    import selectAddress from '@/components/details/selcetAddress.vue'

//    import selectAddress from '@/component/details/seleceAddress.vue'
    export default {
        components:{selectAddress},
        data:function () {
            return{
                img_src:this.main_obj.show1,current:0
            }
        },
        props:['main_obj','arr'], //父组件传过来的duixiang
        methods:{
            change(e,index){
                this.img_src=e.target.src
                this.current=index
                console.log(provice)
            }
        },
        mounted(){
            console.log(this.img_src) //在新打开的页面第一次会显示
        }
    }
</script>
<style scoped>

    .detailsMain .middle li img.active{
        border:3px solid #D0C4AF;
    }
    .left img{
        background-color: #f4f4f4;
        border:1px solid rgba(208, 196 ,175, 0.5);
    }
    .detailsMain{
        margin-top: 50px;
        display: flex;
        justify-content: flex-start;
    }
    .detailsMain .middle{
        margin-left:20px;
        margin-right: 60px;
    }
    .detailsMain .middle li{
        margin-bottom: 5px;
    }
    .detailsMain .middle li  img{
        background-color: #f4f4f4;
        border:3px solid transparent;
    }
    /*.detailsMain .middle li:first-child  img{*/
        /*border:3px solid #D0C4AF;*/
    /*}*/
    .detailsMain h1{
        font-size:20px;font-weight: 700;
    }
    .detailsMain .right .title span{
        font-size:12px;color:#999;
    }
    .detailsMain .right .buy-info{
        background-color: #f5f3ef;
        margin-top:25px;
        padding:10px 0;
        width: 500px;
        border-bottom:1px dotted #dedede;
        border-top:1px dotted #dedede;
    }
    .detailsMain .right .buy-info>div{
        display: flex;
        margin:8px;
        line-height: 30px;

    }
    .detailsMain .right .buy-info .deliver{
        border-bottom:1px dashed #dedede;
        padding-bottom:10px;
    }
    .detailsMain .right .buy-info>div>span{
        width:55px;
        font-size:13px;
        color:#666;
    }
    .detailsMain .right .buy-info>div>div{
        width:350px;
        color:#666;
    }
    .detailsMain .right .buy-info .price{
        font-size:28px;color:#d7282d;
    }
    .detailsMain .right .buy-info .price span{
        font-size:18px;
    }
    .detailsMain .right .buy-info .sales{
        color:#d52b33;font-size:13px;
    }
    .detailsMain .right .buy-info .deliver{
        position: relative;
    }


</style>