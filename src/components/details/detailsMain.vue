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
                    <div @mouseenter="showqqq()" @mouseleave="hidenqqq()" class="deliver">
                        <span>配送</span>
                        <div ><span>至</span><input type="text" :value="address" placeholder="选择配送地址" disabled></div>
                        <select-address @selec="getAddresses" class="selecAdd" ></select-address>
                    </div>
                    <div>
                        <span>服务</span>
                        <div>
                           <span>･ 支持30天无忧退换货</span>&nbsp;&nbsp;<span>･ 48小时快速退款</span><br> <span>･ 满88元免邮费</span>&nbsp;&nbsp;<span>･ 网易自营品牌</span><span>･ 国内部分地区无法配送</span> </div>
                    </div>
                </div>
                <div class="count">
                    <div>
                        <span>规格</span>
                        <div class="spec">
                            <span v-for="(s,i) in spec" @click="changeSpec(i)" :class="{active:i==specCurrent}" >{{s}} <div><i class="icon iconfont icon-jiantou_liebiaozhankai"></i></div></span>
                        </div>
                    </div>
                    <div class="addcount">
                        <span>数量</span> <button @click="addCount(-1)"><i class="icon iconfont icon-jianhao"></i></button>
                        <input type="text" v-model="count"><button @click="addCount(1)"><i class="icon iconfont icon-jiahao"></i></button>
                    </div>
                </div>
            </div>
            <div class="buyOrCart">
                <a href="#" class="buy"><span>立即购买</span></a><a href="#" class="cart" @click="addToCart($event)"><div><i class="icon iconfont icon-gouwuche"></i><span >加入购物车</span></div></a>
                <div class="store" title="点击收藏" @click="favorite()"><div><i class="icon iconfont" :class="myClass"></i></div><p>{{store}}</p></div>
            </div>
        </div>
    </div>
</template>
<script>
    import selectAddress from '@/components/details/selcetAddress.vue'
    export default {
        components:{selectAddress},
        data:function () {
            return{
                img_src:this.main_obj.show1,current:0,specCurrent:0,count:1,
                address:'',store:'收藏',
                myClass:{'icon-xingxing1':true,'active':false,'icon-xingxing':false},
            }
        },
        props:['main_obj','arr','spec'], //父组件传过来的对象
        // computed:{
        //     cc(){ //观察购物车数量发生变化即发送异步请求，跟新购物车列表
        //         return this.$store.getters.getCartCount
        //     }
        // },
        // watch:{
        //     cc(){//观察购物车数量发生变化即发送异步请求，跟新购物车列表
        //         var uid=sessionStorage.getItem('uid') //在header里保存的用户id
                
        //        this.axios.get('cart/select',{params:{uid}}).then((res)=>{
        //           this.$store.commit('updateCartList',res.data)
        //        })
                
        //     }
        // },
        methods:{
            change(e,index){
                this.img_src=e.target.src
                this.current=index
            },
            changeSpec(i){
                this.specCurrent=i
            },
            getAddresses(add){//在子组件中获取地址
                this.address=add
            },
            showqqq(){//地址选项的显示
                this.$store.commit("showArea")
            },
            hidenqqq(){ //地址选项的隐藏
                this.$store.commit('hiddenArea')
            },
            addCount(val){
                this.count+=val
                if(this.count<=1) this.count=1;
                if(this.count>=99) this.count=99;
            },
            favorite(){ //点击收藏
                if(this.store == '收藏'){
                    this.store = '已收藏'
                    this.myClass['icon-xingxing1']=false;
                    this.myClass['active']=true;
                    this.myClass['icon-xingxing']=true;
                }else {
                    this.store = '收藏'
                    this.myClass['icon-xingxing1']=1;
                    this.myClass['active']=0;
                    this.myClass['icon-xingxing']=0;
                }
            },
            addToCart(e){
                e.preventDefault()
                this.$store.commit('addCartCount',this.count);
                (async ()=>{
                    var res = await new Promise((open)=>{
                        this.axios.get('user/isLogin').then((res)=>{
                            console.log(res)
                            open(res)
                        })
                    }) 
                    if(res.data.ok==0){
                        this.$message({
                             message: '请先登录',
                             type: 'warning'
                        }); 
                    }else{
                    this.uid=res.data.uid
                    await new Promise(()=>{
                        this.axios.get('cart/add',{params:{
                            uid:res.data.uid, img:this.main_obj.show1, title:this.main_obj.title, spec:this.spec[this.specCurrent], price:this.main_obj.price, count:this.count
                        }})
                        this.$message({
                             message: '添加成功',
                             type: 'success'
                        });
                    })}
                })()               
                // Promise.all([
                //     new Promise(open=>{
                //         this.axios.get('user/isLogin').then((res)=>{
                //             open(res)
                //         })
                //     }),
                //     new Promise(open=>{
                //         this.axios.get('user/isLogin').then((res)=>{
                //             open(res)
                //         })
                //     })
                // ]).then(values=>{
                    
                // })      
            }
        },
        mounted(){
            // console.log(this.$store.getters.getCartCount)
        }
    }
</script>
<style scoped>
    #test1234{
        color:black;
    }

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
    .detailsMain .right .buy-info>div, .detailsMain .right .count>div{   /*黄色价格区域*/
        display: flex;
        margin:5px;
        line-height: 30px;

    }
    .detailsMain .right .buy-info .deliver{
        border-bottom:1px dashed #dedede;
        padding-bottom:10px;position: relative;
    }
    .detailsMain .right .buy-info .deliver input{
        margin-left:12px;
    }
    .detailsMain .right .buy-info .deliver .selecAdd{
        position: absolute;right:0px;top:25px;
        background-color: white;
        width:404px;
    }
    .detailsMain .right .buy-info>div>span,.detailsMain .right .count>div>span{
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
    .detailsMain .right .count>div{
        margin-top:22px;
    }
    .detailsMain .right .count .spec span{ /*规格*/
        border:1px solid #ddd;
        display: block;
        padding:0px 30px;margin-right:25px;
        cursor:pointer;float:left;
    }
    .detailsMain .right .count .spec span.active{
        border:2px solid #D0C4AF;
        position: relative;
        z-index: -1;
    }
    .detailsMain .right .count .spec span.active div{
        display:block;
        position: absolute;
        bottom:0;right:0;
        width: 0;height:0;
        border-style:solid;
        border-width:0px 0px 15px 15px;
        border-color: transparent transparent #D0C4AF transparent;
    }
    .detailsMain .right .count .spec span div{
        display: none;
    }
    .detailsMain .right .count .spec span.active div i{
        position: absolute;
        right: -3px;top:-3px;color:white;
    }
   .detailsMain .right .count .addcount button{  /*加减数量*/
       width:36px;height:35px;background-color: #fff;
       outline:none;border: 1px solid #ddd;
       font-weight:900;color:#999;font-size:16px;
    }
    .detailsMain .right .count .addcount input{
        width:60px;height:35px;background:none;
        outline:none;
        border-width:1px 0px;border-style:solid;border-color:#ddd;
        text-align:center;
    }
    .right .buyOrCart{   /*购买和加入购物车*/
        display: flex;
        margin-top:40px;
        text-align:center;
    }
    .right .buyOrCart a{
        width:166px;height:50px;
        line-height: 50px;
        border-radius: 3px;
    }
    .right .buyOrCart a.buy{
        border:1px solid #D0C4AF;
        background: #f5f3ef;
        font-size:18px;color:#b4a078;
        text-decoration: none;
    }
    .right .buyOrCart a.cart{
        border:1px solid #b4a078;
        background: #b4a078;
        font-size:18px;color:#fff;
        text-decoration: none;
        margin-left:15px;
    }
    .right .buyOrCart a.cart span{
        float:left
    }
    .right .buyOrCart a.cart i{
        color:#fff;font-size:40px;
        float: left;
        margin-left:14px;
    }
    .right .buyOrCart .store{
        width:50px;height:49px;
        border:1px solid #ccc;
        color:#999;
        cursor: pointer;
        border-radius: 3px;
        margin-left:15px;
    }
    .right .buyOrCart .store i.active{
        color:#b4a078;
    }



</style>