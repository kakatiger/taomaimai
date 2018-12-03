<template>
    <div class="bg">
        <div class="container">
            <div class="top">
                <router-link to="/" class="goHome">去首页</router-link>
                <p>已有账号？去 <a>登录</a></p>
            </div>
            <div class="register">
                <div class="main">
                    <div class="account">
                        <span>账号：</span><input type="text" name="uname" placeholder="请输入邮箱账号"  v-model="uname" @blur=" notice($event)"><span v-show="unameShow" class="warning">
                        <div class="success" v-show="unameS">√</div>
                        <span class="fail" v-show="!unameS" :class="{move:isMove==true}" ><span class="ff">×</span>{{unameNotice}}</span><!--提示信息-->
                    </span>
                    </div>
                    <div class="upwd">
                       <span>密码：</span> <input type="password" placeholder="密码6-16位，不能为纯数字" name="upwd" v-model="upwd" @blur=" notice($event)"><span v-show="upwdShow" class="warning">
                        <div class="success" v-show="upwdS">√</div><span class="fail" :class="{move:isMove==true}" v-show="!upwdS"><span class="ff">×</span>密码须由6-16个字符组成，区分大小写</span> <!--提示信息-->
                    </span>
                    </div>
                    <div class="upwd2">
                        <span>确认密码：</span><input type="password" v-model="upwd1" placeholder="请确认密码" name="upwd1" @blur=" notice($event)"><span v-show="upwd1Show" class="warning">
                        <div class="success" v-show="upwd1S">√</div><span class="fail" :class="{move:isMove==true}" v-show="!upwd1S"><span class="ff">×</span>两次密码输入不一致</span> <!--提示信息-->
                    </span>
                    </div>
                    <div class="ident">
                        <span>验证码：</span><div>滑动验证</div>
                    </div>
                    <div class="tel">
                        <span>手机号：</span><input type="text" name="tel" placeholder="请输入手机号" v-model="tel" @blur=" notice($event)"><span v-show="telShow" class="warning">
                        <div class="success" v-show="telS">√</div><span class="fail" :class="{move:isMove==true}" v-show="!telS"><span class="ff">×</span>手机号格式有误，请重新输入</span> <!--提示信息-->
                    </span>
                    </div>
                    <div class="message">
                        <span>短信验证码：</span><div><input type="text"><button>获取验证码</button></div>
                    </div>
                    <div class="register-btn">
                        <span></span><button @click=" register()">注&nbsp;册</button>
                    </div>
                    <div class="clause">
                        <span></span><p><input type="checkbox" v-model="checkState"><span>用户勾选即代表同意 <a href="#">网易邮箱服务条款</a>和 <a
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
        data:function () {
            return{
                uname:'',unameShow:false,unameS:false,
                upwd:'',upwdShow:false,upwdS:false,
                upwd1:'', upwd1Show:false,upwd1S:false,
                tel:'',telShow:false,telS:false,
                checkState:false,
                isMove:0,

                unameNotice:'请输入正确的邮箱'
            }
        },
        methods:{
            notice(e){
                var that=e.target.name
                if(that == 'tel'){
                    var reg=/^1[34578]\d{9}$/
                    var b=reg.test(this.tel)
                    if(this.tel==''){
                        this.telShow=false
                        }else if(b){
                            this.telShow=true;this.telS=true;

                         } else{
                            this.telShow=true;this.telS=false
                            this.isMove=1
                            var th=this
                            console.log(this.isMove)
                            setTimeout(function () {
                                th.isMove=0
                                },1500)
                            }
                }
                if(that == 'uname'){
                    var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                    var b=reg.test(this.uname)
                    if(this.uname==''){
                        this.unameShow=false
                    }else if(b){
                        this.unameShow=true;this.unameS=true;

                    } else{
                        this.unameShow=true;this.unameS=false
                        this.isMove=1
                        var th=this
                        console.log(this.isMove)
                        setTimeout(function () {
                            th.isMove=0
                        },1500)
                    }
                }
                if(that == 'upwd'){
                    var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
                    var b=reg.test(this.upwd)
                    if(this.upwd==''){
                        this.upwdShow=false
                    }else if(b){
                        this.upwdShow=true;this.upwdS=true;

                    } else{
                        this.upwdShow=true;this.upwdS=false
                        this.isMove=1
                        var th=this
                        console.log(this.isMove)
                        setTimeout(function () {
                            th.isMove=0
                        },1500)
                    }
                }
                if(that == 'upwd1'){
                    var b=this.upwd1==this.upwd
                    if(this.upwd1==''){
                        this.upwd1Show=false
                    }else if(b){
                        this.upwd1Show=true;this.upwd1S=true;

                    } else{
                        this.upwd1Show=true;this.upwd1S=false
                        this.isMove=1
                        var th=this
                        console.log(this.isMove)
                        setTimeout(function () {
                            th.isMove=0
                        },1500)
                    }
                }
            },
            register(){
                if(this.unameS && this.upwdS && this.upwd1S && this.telS){
                    if(this.checkState) {
                        this.axios.post('user/register',Qs.stringify({
                            uname:this.uname,upwd:this.upwd,tel:this.tel
                        })).then( (res)=> {
                            if(res.data.code==1){
                                alert(`尊敬的${this.uname}，您已是淘购购的会员`)
                            }else if(res.data.code==0){
                                alert(`您的邮箱已注册，若忘记密码，请点击找回密码`)
                            }
                        })
                    }else{
                        alert('请同意相关条款')
                    }
                }

            }
        }
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
    .goHome{
        float: left;
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
      width:100%;
      margin:0;padding:60px 0 0 0;


  }
    .main>div{
        display: flex;
        justify-content: flex-start;
        width:100%;height: 72px;
    }
    .main>div>span{
        width: 320px;
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
        font-size: 16px;
        padding-left: 5px;
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
       cursor: pointer;
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
        width:240px;
        margin-left:15px;
    }
    .main .warning .success{
        background: #71c86f;
        width:14px;height:14px;
        line-height: 12px;
        text-align: center;
        border-radius: 50%;
        color:white;
        position: relative;
        top:13px;
    }
    .main .warning .fail{
        color:#fa5b5b;
        font-size: 12px;
        position: relative;
    }
    .main .warning .fail.move{
        -webkit-animation: rightAndLeft 0.2s linear infinite;
        -o-animation: rightAndLeft 0.2s linear infinite;
        animation: rightAndLeft 0.2s linear infinite;
    }
    .main .warning .fail .ff{
        display: inline-block;
        background: #fa5b5b;
        width:14px;height:14px;
        line-height: 12px;
        text-align: center;
        border-radius: 50%;
        color:white;
        margin-right: 3px;
    }
    @keyframes rightAndLeft  {
        0%{lelt:8px}
        100% {left:-8px}
    }
</style>