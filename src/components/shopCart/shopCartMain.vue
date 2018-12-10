<template>
    <div class="cartMain">
      <ul>
          <li class="getcoupon">
              <div>购物车可领优惠券</div>
              <div class="lookCoupon">
                  <span>查看优惠券</span>
                  <i class="icon iconfont icon-jiantou_liebiaozhankai icon-color-c"></i>
              </div>
          </li>
          <li class="selectAllGoods">
             <div class="select-1 select-11">
                <el-checkbox v-model="checkedAll">全部</el-checkbox>
             </div>
              <div class="goods-2">商品信息</div>
              <div class="price-3">单价</div>
              <div class="count-4">数量</div>
              <div class="sum-5">小计</div>
              <div class="op-6">操作</div>
          </li>
           <li class="goods" v-for='(item,index) of list' :key='index'>  <!-- 选中******************************* -->
              <div class="select-1"> <el-checkbox v-model='singleChecked[index]' @change='checkGoods(index)'></el-checkbox></div>
              <div class="goods-2 goods-info" >
                  <img :src="item.img" >
                  <div>
                      <div class="title">{{item.title}}</div>
                      <div class="spec">{{item.spec}}</div>
                  </div>
              </div>
              <div class="price-3">
                  ￥{{item.price}}
              </div>
              <div class="count count-4">
                <el-input-number  size="mini" v-model="item.count" :min="1" ref='count' data-cid='item.cid'  @change="handleChange(item.cid,index)"></el-input-number>
              </div>
              <div class="sum sum-5">
                  ￥{{item.price * item.count}}
              </div>
              <div class="op op-6">
                  <div class="goToStore">移入收藏夹</div>
                  <div class="delete" @click="deleteGoods(item.cid,index)">删除</div>
              </div>
          </li>
          <li class="pay">
              <div class="select-1 select-11">
                <el-checkbox v-model="checkedAll" @change='checkAll'>全部</el-checkbox>
              </div>
              <div class="deleteAll goods-2">
                  <span>批量删除</span>
              </div>
              <div class="coupon price-3">
                  <p><span>商品合计：</span> <span>¥276.00</span></p>
                  <p><span>活动优惠：</span> <span>-¥0.00</span></p>
              </div>
              <div class="actualPay">
                  <p><span>应付总额</span> <span>¥{{sum}}</span></p>
                  <p>{{sum>=888?'已满足免邮条件>':`再购￥${888-sum}免邮 , 去凑单>`}}</p>
              </div>
              <el-button type="primary">下单</el-button>
          </li>
      </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{list:[],//保存购物车列表
                checkedAll:true,
                singleChecked:[]
            }
        },
        methods:{
            checkGoods(j){
                console.log(this.singleChecked[j].state);
                console.log(this.singleChecked)
                // this.checkedAll=false
                var isAll = true
                for(var i=0;i<this.singleChecked.length;i++){
                    isAll=isAll && this.singleChecked[i]
                    }
                    console.log(this.singleChecked)
                    this.checkedAll=isAll
            },
            checkAll(){
                if(this.checkedAll==false){
                    for(var i=0;i<this.singleChecked.length;i++){
                        this.singleChecked[i]=false
                    }
                    
                }else{
                    for(var i=0;i<this.singleChecked.length;i++){
                        this.singleChecked[i]=true
                    }                   
                }
                console.log(this.singleChecked)
            },
            deleteGoods(cid,i){
                console.log(cid)
                this.axios.get('cart/delete',{params:{cid}}).then((res)=>{
                    console.log(res)
                    this.$message({
                             message: res.data.msg
                           }); 
                    this.list.splice(i,1)
                })
            },
            handleChange(cid,index){
                var count = this.list[index].count
                this.axios.get('cart/update',{params:{cid,count}})
            }
        },
        computed:{
                sum:{
                   get:function(){
                        var asum=0
                        for(var i=0;i<this.list.length;i++){
                            if(this.singleChecked[i]==true){
                                asum+=this.list[i].count*this.list[i].price
                            } 
                        }
                        return asum 
                   }
                },
                cartCount(){
                    var count=0
                    for(var i=0;i<this.list.length;i++){
                                count+=this.list[i].count
                        }
                        return count
                        this.$store.commit('addCartCount',count)
                }                
        },
        watch:{
            cartCount(){
                // this.$store.commit('addCartCount',this.cartCount)
                sessionStorage.setItem('cartCount',this.cartCount)
                this.$store.commit('updateCartCount',sessionStorage.getItem('cartCount'))
            }
        },
        mounted(){      
                var uid=sessionStorage.getItem('uid') //在header里保存的用户id
                this.axios.get('cart/select',{params:{uid}}).then((res)=>{
                   this.list=res.data
                   console.log(this.list)
                   var sum=0
                   for(var i=0;i<this.list.length;i++){
                    this.singleChecked.push(true) //保存选中状态
                    sum+=this.list[i].count
                   }
                   sessionStorage.setItem('cartCount',sum)
                   this.$store.commit('updateCartCount',sessionStorage.getItem('cartCount'))
                   
                })
        }
    }
</script>
<style scoped>

    .getcoupon,.selectAllGoods,.goods,.pay{
          display: flex;
          width: 100%;
        font-size:14px;
        align-items: center;
        border:1px solid #ddd;
        margin-bottom: 10px;
    }
    .getcoupon{
        justify-content: space-between;
        line-height: 40px;
    }
    .getcoupon>div:first-child{
        margin-left: 15px;
    }
    .getcoupon .lookCoupon{
        background: #e36844;
        line-height: 40px;
        width: 120px;
        text-align: center;
    }
    .selectAllGoods{
        padding-top:12px;
        padding-bottom:12px;
        box-sizing:border-box;
        background-color: #ffd9d2;
    }
    .select-1{
        width:139px;
        position: relative;
        display: inline-block;
        height:22px;
        margin-left: 20px;
    }
   
    .goods-2{
        width:300px;
    }
    .price-3{
        width:180px;
    }
    .count-4{
        width:170px;
    }
    .sum-5{
        width:150px;
    }
    .op-6{
        width:129px;
    }
    /*修改商品列格式*/
    .goods .goods-info{
        display: flex;
        /*align-items: center;*/
    }
    .goods .goods-info img{
        height:100px;
        border:1px solid rgb(146, 123, 19);
        margin-right: 12px;
    }
    .goods .count input{
        width:58px;
    }
    .goods .count button{
        width:24px;
    }
    .goods .op>div{
        cursor: pointer;
    }
    /*修改下单列格式*/
    /*.pay{*/
        /*padding-top:6px;*/
        /*padding-bottom:6px;*/
     /*}*/
    .pay .actualPay{
        border-left:2px solid #ddd;
        width:300px;
        padding-left:20px;
    }
    .pay>button{
        background: #b4a078;
        height: 60px;
        border:none;
        outline:none;
        width: 120px;
        margin-left: 29px;
    }

</style>