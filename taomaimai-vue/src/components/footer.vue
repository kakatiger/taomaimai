<template>
    <div class="footer">
        <div class="white">
                <div class="server">
                    <div class="title">
                        客户服务
                    </div>
                    <div class="touch">
                        <a href="#"><i class="icon iconfont icon-kefu"></i><br>客户服务</a>
                        <a href="#"><i class="icon iconfont icon-wangwanglikai"></i><br>用户反馈</a>
                    </div>
                </div>
                <div class="choice">
                    <div class="title">
                        何为严选
                    </div>
                    <p>网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到优质的商品</p>
                    <ul>
                        <li>关注我们：</li>
                        <li><img width="32px" src="img/index/qq.png" alt=""></li>
                        <li><img width="32px" src="img/index/weixintubiao.png" alt=""></li>
                        <li><a href="#"><img width="32px" src="img/index/weibo.png" alt=""></a></li>
                    </ul>
                </div>
                <div class="code">
                        <div>扫码下载淘购APP</div>
                        <div><img width="104px" src="img/index/erweima.png" alt=""></div>
                        <div>下载有惊喜哦</div>
                </div>
        </div>
        <div class="black">
            <div class="top">
                <ul>
                    <li><span><i class="icon iconfont icon-dunpaibaowei"></i></span>30天无忧退换货</li>
                    <li><span><i class="icon iconfont icon-paijian"></i></span>满88元免邮费</li>
                    <li><span><i>购</i></span>淘购品质保证</li>
                </ul>
            </div>
            <div class="bottom">
                <ul>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">帮助中心</a></li>
                    <li><a href="#">售后服务</a></li>
                    <li><a href="#">配送与验收</a></li>
                    <li><a href="#">上午合作</a></li>
                    <li><a href="#">企业采购</a></li>
                    <li><a href="#">开放平台</a></li>
                    <li><a href="#">搜索推荐</a></li>
                    <li><a href="#">友情链接</a></li>
                </ul>
                <div>
                    <a href="#">公司版权所有 ©1997-2018   食品经营许可证：JY13301080111719 出版物经营许可证：新出发滨字第0132号 单用途商业预付卡备案证：330100AAC0024<img src="img/index/gongshang.gif" alt="" width="36px"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .black .bottom{
        padding-top:20px;
    }
    .black .top{
        padding-bottom:20px;
        border-bottom:1px solid #999;
    }
    .black{
        width:100%;height:204px;
        background-color: #414141;
        text-align: center;
        padding-top:43px;
    }
    .black>div{
        width:1090px;
        margin:0 auto;
    }
    .black ul{
        display: flex;
        justify-content: space-around;
    }
    .black .top ul li {
        color:#fff;
        font-size: 18px;
        font-weight: lighter;
    }
    .black ul span{
        display: inline-block;
        border:2px solid white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 8px;
    }
    .black ul i{font-size:40px;color:white;}
    .black ul li:last-child i:last-child{font-size:30px}

    .black .bottom ul{
        justify-content: center;
        margin-bottom:-22px;
    }
    .black .bottom ul li{
        margin:0 12px;
        line-height:18px;
    }
    .black .bottom a{
        color:#999;
        font-size:12px;
    }/*****************************/
    a:hover{
        text-decoration: none;
        color:#D0C4AF;
    }
    .footer{
        width:100%;height:300px;
        border-top:1px solid #e8e8e8;
        margin-bottom: 100px;
        color:#333;

    }
    .white{
        width:1090px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        padding-top:50px;
    }
    .white>div{
        width:362px;
        text-align:center;
        padding-left:35px;
        padding-right:35px;
    }
    .white>div>div:first-child{
        margin-bottom: 20px;
        font-size:16px;
    }
   .choice p,.choice ul{
       font-size:13px;
       line-height: 26px;
       text-align: left;
   }
    .choice ul{
        margin-top:20px;
    }
    .touch a{
        font-size:14px;
        display:inline-block;
        border:1px solid lightgrey;
        padding:8px;margin:8px;
    }
    .choice{
        border-left:1px solid #e8e8e8;
        border-right:1px solid #e8e8e8;
    }
    .touch i{
        font-size:32px;
    }
    ul>li{
        float:left;line-height: 40px;
    }
    ul>li+li{
        margin:0 5px;
    }
</style>