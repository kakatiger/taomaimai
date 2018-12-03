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
                 <input id="selectAll" type="checkbox">
                 <label for="selectAll"></label>
                 <span>全部</span>
             </div>
              <div class="goods-2">商品信息</div>
              <div class="price-3">单价</div>
              <div class="count-4">数量</div>
              <div class="sum-5">小计</div>
              <div class="op-6">操作</div>
          </li>
          <li class="goods">
              <div class="select-1"><input type="checkbox" id="selectsingle-01"><label for="selectsingle-01"></label></div>
              <div class="goods-2 goods-info" >
                  <img src="img/index/furnishing/furnishing03.png" >
                  <div>
                      <div class="title">高弹力女士过膝靴</div>
                      <div class="spec">黑色 39</div>
                  </div>
              </div>
              <div class="price-3">
                  ￥449.20
              </div>
              <div class="count count-4">
                  <button>-</button>
                  <input type="text">
                  <button>+</button>
              </div>
              <div class="sum sum-5">
                  ￥449.20
              </div>
              <div class="op op-6">
                  <div class="goToStore">移入收藏夹</div>
                  <div class="delete">删除</div>
              </div>
          </li>
          <li class="pay">
              <div class="select-1 select-11">
                  <input id="selectAll1" type="checkbox">
                  <label for="selectAll1"></label>
                  <span>全部</span>
              </div>
              <div class="deleteAll goods-2">
                  <span>批量删除</span>
              </div>
              <div class="coupon price-3">
                  <p><span>商品合计：</span> <span>¥276.00</span></p>
                  <p><span>活动优惠：</span> <span>-¥0.00</span></p>
              </div>
              <div class="actualPay">
                  <p><span>应付总额</span> <span>¥276.00</span></p>
                  <p>再购¥19.00免邮 , 去凑单></p>
              </div>
              <el-button type="primary">下单</el-button>
          </li>
      </ul>


    </div>
</template>
<script>
    export default {

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
    .select-1 input{
        width:18px;height: 18px;
        position: absolute;visibility: hidden;
    }
    .select-1>span{
        padding-left:6px;
    }
    .select-1 input+label{
        display: inline-block;width: 16px;height: 16px;border: 1px solid #fd8845;
    }
    .select-1 input:checked+label:after{
        content: "";position: absolute;left: 2px;bottom: 12px;width: 9px;height: 4px;
        border: 2px solid #fd8845;
        border-top-color: transparent;
        border-right-color: transparent;
        -ms-transform: rotate(-60deg);
        -moz-transform: rotate(-60deg);
        -webkit-transform: rotate(-60deg);
        transform: rotate(-45deg);
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
        width:100px;height:100px;
        border:1px solid black;
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