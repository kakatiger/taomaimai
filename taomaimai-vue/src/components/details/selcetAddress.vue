<template>
    <div class="select">
        <ul>
            <li>{{pro}}</li>
            <li>{{city}}</li>
            <li>{{county}}</li>
            <li>{{town}}</li>
        </ul>
        <div class="area">
            <span v-for="(item,index) in provice" v-show="proviceShow">{{item.name}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{provice:provice,proviceShow:true,pro:'城市',city:'城市',county:'县/区',town:'街道'}
        },
        methods:{

        }
    }
</script>
<style scoped>
    .select{
        width:420px;border:1px solid blue;
    }
    .select ul{
        height: 20px;
    }
    .select ul li{
        float:left;padding:3px 18px;
    }
    .area{
        width:300px;height:150px;
        border:2px solid black;
        overflow-y:auto;
        display: flex;
        flex-wrap: wrap;
    }
    .area span{
        width:60px;font-size:12px;
        margin:10px 15px;

        cursor:pointer;
    }
</style>