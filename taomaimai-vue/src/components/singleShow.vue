<template>
    <div class="good-show">
            <img :src="item.show1">
            <div class="salesInfo">
                <div class="s-info">狂欢特惠</div>
                <div class="s-title">{{item.title}}</div>
                <div class="s-price">{{item.price}}</div>
                <div>{{item.subtitle}}</div>
            </div>
    </div>

</template>
<script>
    export default {
        data:function () {
            return{}
        },props:['item']

    }
</script>
<style scoped>
  .good-show{
      width:245px;height:361px;
      text-align:center;
  }
  .good-show>img{
      width:245px;height:245px;
  }
</style>