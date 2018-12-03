<template>
    <div class="select" v-show="$store.getters.isAllshow">
        <ul>
            <li @click="clickTitlePro()">{{pro}}</li>
            <li @click="clickTitleCity()">{{city}}</li>
            <li>{{county}}</li>
        </ul>
        <div class="area">
            <span v-for="(item,index) in sprovice" v-show="proviceShow" @click="clickPro(item)">{{item.name}}</span>
            <span v-for="(item,index) in scity" v-show="cityShow" @click="clickCity(item)">{{item.name}}</span>
            <span v-for="(item,index) in scounty" v-show="countyShow" @click="clickCounty(item)">{{item}}</span>
        </div>
    </div>
</template>
<script>
    //需用到子向父传递参数
    export default {
        data:function(){
            return{
                sprovice:provice,pro:'省份',city:'城市',county:'县/区',
                proviceShow:true,cityShow:false,countyShow:false,
                scity:[],scounty:[],address:'',allshow:true,
            }
        },
        methods:{
            clickTitlePro(){ //点击省份标题
                this.proviceShow=true;
                this.cityShow= false;
                this.countyShow=false;
            },
            clickTitleCity(){
                this.proviceShow=false;
                this.cityShow= true;
                this.countyShow=false;
            },
            clickPro(p){//点击省份
                this.proviceShow=false;
                this.cityShow= true;
                this.countyShow=false;
                this.pro=p.name;
                this.city='城市';//点击标题时
                this.county='县/区';
                this.scity=p.city;
            },
            clickCity(c){ //点击城市
                this.proviceShow=false;
                this.cityShow= false;
                this.countyShow=true;
                this.city=c.name;
                this.county='县/区';
                this.scounty=c.districtAndCounty;
            },
            clickCounty(d){ //点击县区
                this.county=d;
                this.address=this.pro+this.city+this.county
                this.$emit('selec',this.address)
                this.$store.commit("hiddenArea")
            }
        }
    }
</script>
<style scoped>
    .select{
        width:420px;border:1px solid #ccc;
    }
    .select ul{
        height: 20px;
    }
    .select ul li{
        float:left;padding:0 18px;
        border:1px solid #ccc;
        height:28px;width:100px;
        text-align: center;
        margin-right: 8px;
    }
    .area{
        width:380px;height:150px;
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