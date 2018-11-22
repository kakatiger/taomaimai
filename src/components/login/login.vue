<template>
    <div class="login" v-show="$store.getters.isCloseLogin">
        <div class="loginTo">
            <i class="icon iconfont icon-guanbi close" @click="closelogin()"></i>
            <div class="method">
                <p class="phone">手机号登录</p>
                <p class="mail">邮箱登录</p>
            </div>
            <div class="center-email">
                <div class="uname"><span><i class="icon iconfont icon-people_fill"></i></span><input type="text" placeholder="邮箱账号"></div>
                <div class="upwd"><span><i class="icon iconfont icon-unlock_fill"></i></span><input type="text" placeholder="请输入密码"></div>
                <button>登&nbsp;录</button>
            </div>
            <div class="center-phone">
                <div class="uname"><span><i class="icon iconfont icon-shouji"></i></span><input type="text" placeholder="请输入手机号码"></div>
                <div class="slider"><div class="block"></div></div>
                <div class="ident"><input type="text" placeholder="请输入验证码"><div>获取验证码</div></div>

                <button>登&nbsp;录</button>
            </div>
            <div class="forget">忘记密码?</div>
        </div>
    </div>
</template>
<script>
    export default {
        data:function () {
            return{
            }
        },
        methods:{
            closelogin(){
                this.$store.commit('closeLogin')
            },
        }
    }
</script>
<style scoped>
    *{
        margin:0;padding:0;
    }
    .login{
        position: fixed;
        width: 100%;
        height:100%;
        background-color: rgba(0,0,0,.6);
        z-index: 101;
        top:0px;
        left:0px;
    }
    .loginTo{
        width:384px;
        /*height: 400px;*/
        background-color:#fff ;
        position: absolute;
        left: 50%;top: 40%;
        margin-top: -200px;
        margin-left: -192px;
    }
    .close{
        position: absolute;
        font-size: 30px;
        color: #cccccc;
        font-weight: lighter;
        cursor: pointer;
        right: 6px;
        top:0px;
    }
    .close:hover{
        color:#999;
    }
    .method{
        width: 306px;
        height: 20px;
        margin:40px auto 40px;
    }
    .method p{
        float:left;
        width:150px;
        text-align: center;
        font-size: 18px;
        line-height: 20px;
        color:#999;
    }
    .method p+p{
        border-left:1px solid #ddd;
    }
    .center-email,.center-phone{
        width:304px;
        height:259px;
        margin:0 auto;
        text-align: center;
    }
    .center-email>div{
        height: 38px;
        width:300px;
        border:1px solid #e8e8e8;
        display: flex;
    }
    .center-email .upwd{
        margin-top: 16px;
        margin-bottom:55px;
    }
    .center-email>div i{
        font-size:24px;
        margin-left: 6px;
        padding-right: 6px;
        color:#ccc;
        border-right:1px solid #e8e8e8;
    }
    .center-email>div input{
        margin-left: 10px;
        width: 100%;
        border: none;
        outline: none;
        font-size:14px;
    }
    .center-email>div input::-webkit-input-placeholder{
        color: #ccc;
    }
    .center-email button{
        width:98%;
        height: 48px;
        color:white;
        background-color: #b4a078;
        border:none;
        outline: none;
        font-size: 20px;
        border-radius: 3px;
        cursor: pointer;
    }
    .forget{
        position: absolute;bottom: 6px;
        right: 5px;
        cursor: pointer;
    }

</style>