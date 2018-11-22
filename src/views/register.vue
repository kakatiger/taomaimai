<template>
    <div class="bg">
        <div class="container">
            <div class="top">
                <p>已有账号？去 <a>登录</a></p>
            </div>
            <div class="register">
                <div class="main">
                    <div class="account">
                        <span>账号：</span><input type="text"><span class="warning">12</span>
                    </div>
                    <div class="upwd">
                       <span>密码：</span> <input type="password"><span class="warning">12</span>
                    </div>
                    <div class="upwd2">
                        <span>确认密码：</span><input type="password"><span class="warning">12</span>
                    </div>
                    <div class="ident">
                        <span>验证码：</span><div>滑动验证</div>
                    </div>
                    <div class="tel">
                        <span>手机号：</span><input type="tel"><span class="warning">12</span>
                    </div>
                    <div class="message">
                        <span>短信验证码：</span><div><input type="text"><button>获取验证码</button></div>
                    </div>
                    <div class="register-btn">
                        <span></span><button>注&nbsp;册</button>
                    </div>
                    <div class="clause">
                        <span></span><p><input type="checkbox"><span>用户勾选即代表同意 <a href="#">网易邮箱服务条款</a>和 <a
                            href="#">网易隐私政策</a></span></p>
                    </div>
                </div>
                <div class="erweima">
                    <a href="https://id.163.com/gj/?from=webzj_zc"><img src="img/login/reg.png" alt=""></a>
                </div>
            </div>
            <div class="bottom">
                <p>About NetEase-公司简介-联系方式-OAuth2.0认证-招聘信息-客户服务-相关法律-网络营销</p><p>网易公司版权所有 ©1997-2018</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    body{
        text-align: center;
    }
    .bg{
        background-color: #efefef;
        padding:40px;
    }
    button{
        border:none;
        outline: none;
        color:#fff;
    }
  .container{
      width:1000px;
      margin: 0 auto;
  }
  .top{
      text-align: right;
      font-size:18px;
      margin:0px 12px 20px 0;
  }
  .top a{
      color: #ca5252;
  }
  .register{
      background: #fff;
      border-radius: 6px;
      padding-bottom: 120px;
  }
  .main{
      display: flex;
      flex-direction: column;

  }
    .main>div{
        display: flex;
        width:100%;height: 72px;
    }
    .main>div>span{
        width: 260px;
        height:44px;
        text-align:right;
        font-size: 16px;
        color: #333;
        line-height: 44px;
    }
    .main>div>input{
        width: 320px;
        height:44px;
        border:1px solid #ccc;
    }
    .main .message input{
        height: 44px;
        width: 190px;
    }
    .main .message button{
        height: 44px;
        width: 120px;
        background-color: #2c82ff;
    }
   .main .register-btn button{
       width: 320px;
       height:44px;
       background-color: #ca5252;
   }
    .main .clause input{
        width:18px;height:18px;
    }
    .erweima{
        text-align: center;
    }
    .bottom{
        margin-top: 40px;
        text-align: center;
    }
    .main .warning{
        text-align: left;
        width:200px;
    }

</style>