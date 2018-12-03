<template>
    <div class="address">
        <el-row>
            <el-col :span="18"> <div>已保存收货地址(最多20条，还能保存(<span>18</span>条)</div></el-col>
            <el-col :span="6"> <div class="text-right"><a href="#" @click="controlNewAddState($event,1)">+新建地址</a></div></el-col>
        </el-row>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4"><div>收货人</div></el-col>
                    <el-col :span="8"><div>地址</div></el-col>
                    <el-col :span="5"><div>联系方式</div></el-col>
                    <el-col :span="7"><div class="text-left">操作</div></el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row class="addRow">
                    <el-col :span="4"><div>收货人</div></el-col>
                    <el-col :span="8"><div>北京市北京市西城区西长安街街道在这里在这里</div></el-col>
                    <el-col :span="5"><div>12345611111</div></el-col>
                    <el-col :span="7">
                        <div>
                            <el-row>
                                <el-col :span="2"><div></div></el-col>
                                <el-col :span="3"><div>编辑</div></el-col>
                                <el-col :span="3"><div>删除</div></el-col>
                                <el-col :span="12"><div><el-button type="warning">默认地址</el-button></div></el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <div class="newAddress" v-show="newAddState">
            <div class="content">
                <el-row>
                    <el-col :span="12"> <div class="title"><span>新建地址</span></div></el-col>
                    <el-col :span="12"> <div class="text-right"><i class="el-icon-close" @click="controlNewAddState($event,0)"></i></div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"> <div>所在地区：</div></el-col>
                    <el-col :span="6">
                        <div class="text-right">
                            <el-select v-model="pro" placeholder="请选择"  @change="slecP($event,index)">
                                <el-option
                                        v-for="(item,index) in sprovice"
                                        :value="item.name"
                                        :key="index"

                                >
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="text-right">
                            <el-select v-model="city" placeholder="请选择">
                                <el-option
                                        v-for="item in scity"
                                        :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="text-right">
                            <el-select v-model="county" placeholder="请选择">
                                <el-option
                                        v-for="item in scounty"
                                        :value="item.name">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"> <div>详细地址：</div></el-col>
                    <el-col :span="18"><div>
                        <el-input v-model="details" placeholder="详细地址，街道，门牌号"></el-input>
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"> <div>收货人：</div></el-col>
                    <el-col :span="7"><div>
                        <el-input ></el-input>
                    </div></el-col>
                    <el-col :span="4" class="text-right"> <div>手机号码：&nbsp;</div></el-col>
                    <el-col :span="7"><div>
                        <el-input></el-input>
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="18"> <div class="text-right"><el-button type="warning">确定</el-button></div></el-col>
                    <el-col :span="4"><div>
                        <el-button plain>取消</el-button>
                    </div></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                newAddState: false, value: '',
                sprovice: provice,scity:[],scounty:[],
                pro:'省份',city:'城市',county:'县/区',details:''
            }
        },
        methods:{
            controlNewAddState(e,val){
                e.preventDefault()
                this.newAddState=val
            },
            slecP(p,i){
                console.log(p,i)
               this.scity=p.city
            }
        }

    }
</script>
<style>
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
    .address{
        width: 1090px;
        margin: 100px auto;
    }
    .text-left{
        text-align: left;
    }
    .text-right{
        text-align: right;
    }
    .addRow{
        line-height: 80px;
    }
    .newAddress{
        position: fixed;
        width: 100%;
        height:100%;
        background-color: rgba(0,0,0,.6);
        z-index: 101;
        top:0px;
        left:0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .newAddress .content{
        position: absolute;
        width:700px;
        height: 420px;
        background-color: white;
        z-index: 102;
    }
    .newAddress .content>.el-row{
        line-height: 60px;
    }
    .newAddress .content>.el-row:not(:first-child)>.el-col:first-child{
        text-align: right;
        padding-right: 5px;
    }
    .newAddress .content>.el-row:first-child .title{
        font-size: 18px;
        font-weight: lighter;
        padding-left: 30px;
    }
    .newAddress .content>.el-row:first-child .el-icon-close{
        font-size:40px;
        color:#a7a7a7;
    }
</style>