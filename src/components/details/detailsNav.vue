<template>
    <div class="detailsNav">
        <ul>
            <li><a href="#">首页</a><i class="icon iconfont icon-jiantou_liebiaoxiangyou"></i></li>
            <li><a href="#">{{nav_obj.big_famliy_name}}</a><i class="icon iconfont icon-jiantou_liebiaoxiangyou"></i></li>
            <li><a href="#">{{nav_obj.famliy_name}}</a><i class="icon iconfont icon-jiantou_liebiaoxiangyou"></i></li>
            <li>{{nav_obj.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{}
        },props:['nav_obj']
    }
</script>
<style scoped>
   .detailsNav{
       width:100%;height: 35px;
       margin:0 auto;
   }
   .detailsNav ul li{
       float:left;
       line-height: 35px;
   }
    .detailsNav a{
        font-size: 12px;
        color:#333;
    }
   .detailsNav i{
       font-size: 16px;
       color:#333;

   }

</style>