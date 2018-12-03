<template>
    <div class="placeOder">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="8"><div>
                        <span>商品信息</span>
                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>单价</span>
                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>数量</span>

                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>小计</span>

                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>实付</span>

                    </div></el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row >
                    <el-col :span="8"><div>
                        <el-row class="goodsShow">
                            <el-col :span="8"><div>
                                <img src="img/index/erweima.png" width="115px">
                            </div></el-col>
                            <el-col :span="15" :center="true"><div>
                                <h3>欧式精铸多用锅 24cm</h3>
                                <p>
                                    24cm/防烫手柄/电磁炉直火通用/煎锅汤锅小炒锅一体
                                </p>
                            </div></el-col>
                        </el-row>
                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>￥199.8</span>
                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>1</span>

                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>199.8</span>

                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>199.8</span>
                    </div></el-col>
                </el-row>
                <el-row >
                    <el-col :span="8"><div>
                        <el-row class="goodsShow">
                            <el-col :span="8"><div>
                                <img src="img/index/erweima.png" width="115px">
                            </div></el-col>
                            <el-col :span="15" :center="true"><div>
                                <h3>欧式精铸多用锅 24cm</h3>
                                <p>
                                    24cm/防烫手柄/电磁炉直火通用/煎锅汤锅小炒锅一体
                                </p>
                            </div></el-col>
                        </el-row>
                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>￥199.8</span>
                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>1</span>

                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>199.8</span>

                    </div></el-col>
                    <el-col :span="4"><div>
                        <span>199.8</span>
                    </div></el-col>
                </el-row>
            </el-main>
            <el-footer>
                <el-row>
                    <el-col :span="8" :offset="16"><div>
                        <span class="moneyT">应付总额：</span><span class="money">¥199.8</span>
                        <p class="goOrder"><el-button>去付款</el-button></p>
                    </div></el-col>
                </el-row>
            </el-footer>

        </el-container>
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .placeOder{
        margin-top: 20px;
    }
    .el-container{
        border:1px solid #e8e8e8;
    }
    .el-header{
        background-color: #f5f5f5;
        color: #999;
        text-align: center;
        line-height: 42px;
        height: 42px !important;
        border:1px solid #e8e8e8;
    }
    .el-footer {
        background-color: #f5f5f5;
        color: #333;
        text-align: center;
        line-height: 30px;
        height:120px !important;
        border-top:1px solid #e8e8e8;
    }
    .el-main {
        background-color: #fff;
        color: #333;
        text-align: center;
        line-height:20px;
    }
    .el-main>.el-row{
        border-bottom:2px dashed #e8e8e8;
        display: flex;
        align-items: center;
    }
    .el-main>.el-row .goodsShow{
        display: flex;
        align-items: center;
        text-align: left;
    }
    .el-main>.el-row .goodsShow p{
        width:230px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
    .el-footer .el-row .el-col{
        line-height: 40px;
    }
    .el-footer .el-row .moneyT{
        font-size:14px;
    }
    .el-footer .el-row .money{
        font-size:22px;
        display: inline-block;
        width:100px;
        color:#d4282d;
        text-align: right;
    }
    .el-footer .el-row .goOrder button{
        background-color: #c0ae8a;
        border:1px solid #c0ae8a;
        width:168px;
        height:50px;
        font-size:18px;
        /*font-weight: 800;*/
        color:#fff;
    }

</style>