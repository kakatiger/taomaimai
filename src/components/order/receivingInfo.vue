<template>
    <div class="receiving">
        <el-container>
            <el-header>收货信息</el-header>
            <el-main>
                <el-row>
                    <el-col :span="18"><div>
                        <div class="defaultAdd"><i class="icon iconfont icon-ditu_dingwei"></i><span>默认地址</span></div>
                        <div class="subTitle">收货人：<span>lyyy</span></div>
                        <div class="subTitle">联系方式：<span>182****7050</span></div>
                        <div class="subTitle">收货地址：<span>北京市北京市西城区西长安街街道在这里在这里</span></div>
                    </div></el-col>
                    <el-col :span="6"><div>
                        <div class="changeAdd">
                            <p>切换地址</p>
                            <el-button>新建地址</el-button>
                        </div>
                    </div></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .el-header{
        background-color: #f5f5f5;
        color: #999;
        text-align: left;
        line-height: 42px;
        height: 42px !important;
        border:1px solid #e8e8e8;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: left;
        line-height:40px;
    }
    .changeAdd{
        border-left:1px solid #e8e8e8;
        text-align: center;
        margin-top:40px;
        padding: 12px;
    }
    .changeAdd p{
        color:dodgerblue;
    }
    .changeAdd .el-button{
        width:96px;
        height:28px;
        line-height: 28px;
        padding: 0;
    }
    .el-col-18 .defaultAdd i{
        font-size:30px;
        color:#c0ae8a;
    }
    .el-col-18 .defaultAdd span{
        font-size: 16px;
    }
    .el-col-18 .subTitle{
        color:#999;
    }
    .el-col-18 .subTitle span{
        color:black;
    }
</style>