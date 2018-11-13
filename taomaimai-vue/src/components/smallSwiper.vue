<template>
    <div class="smallSlide">
        <div class="title">
            <div class="title-left">
                <span>新品首发</span>
                <span>为你寻觅世间好物</span>
            </div>
            <div class="title-right">
                <span>更多新品&gt;</span>
            </div>
        </div>
        <div class="swiper">
            <div v-for="img in list">
                <img :src="img.home" v-show="isShow"><img :src="img.show1" v-show="!isShow">
                <div class="salesInfo">
                    <div class="s-info">狂欢特惠</div>
                    <div class="s-title">{{img.title}}</div>
                    <div class="s-price">{{img.price}}</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data:function(){return{
            list:[],
            isShow:true,
        }
            },
        mounted(){
            this.axios.get('http://localhost:4000/newImage/newImages').then(res=>{
                console.log(res)
                this.list=res.data
                console.log(this.list)
            })
        }
    }
</script>
<style scoped>
    .smallSlide{
        width:1090px;height:370px;
        margin: 0 auto;
    }
    .smallSlide .swiper{
        height:344px;
        display:flex;
        justify-content:space-between;
    }
    .smallSlide .swiper>div{
        border:1px solid lightblue;
    }
    .smallSlide .swiper img{
        width:265px;height:265px;
    }
    .smallSlide .swiper .salesInfo{
        text-align:center;
    }

</style>