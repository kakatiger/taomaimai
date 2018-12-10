<template>
    <div class="foryou">
<el-row :gutter="20">
  <el-col :span="24"><div class="grid-content">
        <el-carousel height="450px">
            <el-carousel-item v-for="item in list_carousel" :key="item.id">
                <img :src="item.src" width="100%" height="100%">
            </el-carousel-item>
         </el-carousel>
      </div></el-col>
</el-row>
<h1>严选推荐</h1>
<el-row :gutter="10">
  <el-col :xs="24" :md="12"><div class="grid-content">
        <img src="https://yanxuan.nosdn.127.net/06e317290bcff1fae8c643a556fbe10d.jpg?imageView&quality=95&thumbnail=535y315" width="100%">
        <p class="desc">冬季如何穿出惊艳感？来看看这些搭配和单品，获得冬季穿搭新灵感！</p>
      </div></el-col>
  <el-col :xs="24" :md="12"><div class="grid-content">
        <img src="https://yanxuan.nosdn.127.net/52a00d9bbff2602e0a355b76442d0370.jpg?imageView&quality=95&thumbnail=535y315" width="100%">
        <p class="desc">这样穿衣才算有品位！这份男士秋冬衣品提升指南，帮你摆脱撞衫困扰</p>
      </div></el-col>
 
</el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list_carousel:[{id:1,src:'https://yanxuan.nosdn.127.net/f7f405bd35e6fd263ecda7624d193f38.jpg?imageView&quality=95&thumbnail=1090y450'},
                {id:2,src:'https://yanxuan.nosdn.127.net/298d9d2ef3b00dc3f9895f7f583b4462.jpg?imageView&quality=95&thumbnail=1090y450'},
                {id:3,src:'https://yanxuan.nosdn.127.net/4b15d5918381ea7350c526d7286523e1.jpg?imageView&quality=95&thumbnail=1090y450'},
            ]
        }
    }
}
</script>
<style scoped>
    .foryou{
        max-width:1090px;
        margin:90px auto;
    }
    h1{
        font-size: 28px;
        margin:20px;
    }
    p.desc{
        font-size: 18px;
        line-height: 30px;
        color:#333;margin-bottom:20px;
    }

</style>


