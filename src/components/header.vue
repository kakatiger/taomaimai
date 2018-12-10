<template>
  <div class="hello">
    <header id="header">
      <div class="he-bg">
        <div class="head-radio">

          <div>
            <div>
              <a href="#">好的生活，没有那么贵</a>
            </div>
            <div  class="guangBo">
            <ul :style="myTop">
              <li><a href="#">【淘购x中行联名卡】达标领80元礼品卡&gt;</a></li>
              <li ><a href="#">【福利】下载淘购APP，抢1元包邮团，领...</a></li>
              <li><a href="#">【淘购x中行联名卡】达标领80元礼品卡&gt;</a></li>
            </ul>
            </div>
          </div>
          <div>
            <ul>
              <li v-show="!hasLogin"><a href="#" @click="loginTo($event)">登录</a></li>
              <li v-show="hasLogin" class="isLogin">  <!--登录后的状态-->
                <a href="#">{{uname}}</a><span><i class="icon iconfont icon-jiantou_liebiaozhankai icon-color-c"></i></span>
                <ul class="pull-down">
                  <li><div></div><a href="#">甄优惠券</a></li>
                  <li><a href="#">优选礼卡</a></li>
                  <li><a href="#">我的积分</a></li>
                  <li><a href="#" @click="loginOut">退出登录</a></li>
                </ul>
              </li>
              <li v-show="!hasLogin"><router-link to="/register">注册</router-link></li>
              <li v-show="hasLogin"><a href="#">消息</a></li>
              <li><router-link to="/address">我的地址</router-link></li>
              <li><a href="#">会员</a></li>
              <li><a href="#">甄选家</a></li>
              <li><a href="#">我的收藏</a></li>
              <li ><a href="#">客户服务<span><i class="icon iconfont icon-jiantou_liebiaozhankai icon-color-c"></i></span></a>
                <ul>
                  <li><div></div><a href="#">在线客服</a></li>
                  <li><a href="#">帮助中心</a></li>
                  <li><a href="#">商务合作</a></li>
                  <li><a href="#">开放平台</a></li>
                </ul>
              </li>
              <li id="b-code" ><i class="icon iconfont icon-shouji_o icon-color-w" ></i><a href="#">APP</a>
                <div>
                  <div></div>
                  <img src="img/index/erweima.png" width="115px">
                  <span>扫码有惊喜</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="logo">
          <a href="#" title="网易严选"><img src="img/index/wangyiyanxuan.png" alt=""></a>
          <div class="searchFloat">
            <input type="text" placeholder="冬夏两用床垫直降240" v-model="kw" @keyup.13="select()" >
            <span @click="select()"><i class="icon iconfont icon-sousuo"></i></span>
            <a href="#" v-show="searchF"><i class="icon iconfont icon-gerentouxiang_o"></i></a>
            <a href="#" @click="goCart($event)"><i class="icon iconfont icon-gouwuche_o"><div class="count">
                {{isNaN($store.getters.getCartCount) ? 0 : $store.getters.getCartCount}}
            </div></i></a>
          </div>
        </div>
        <div class="details" :class="scroll>=160?'sFixed':''">
          <div>
            <ul :class="scroll>=160?'sFixed':''">

              <li v-show="searchF"><img src="img/index/wangyiyanxuan.png" width="100px" alt=""></li>
              <li :style="liPadding"><router-link to="/">首页</router-link></li>
              <li :style="liPadding"><router-link  to="/furnishing">居家</router-link>
                <div class="furnishing drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">床品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing01.png">床品件套</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing02.png">被枕</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">家居家装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing03.png">家居</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing04.png">灯具</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing05.png">布艺软装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing06.png">家饰</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">收纳</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing07.png">收纳</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing08.png">旅行用品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing09.png">晾晒除味</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">医疗宠物</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing10.png">家庭医疗</a></li>
                    <li><a href="#"><img src="img/index/furnishing/furnishing11.png">宠物</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><router-link to="/shoes">鞋包配饰</router-link>
                <div class="shoes drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">箱包</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes1.png">行李箱</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes2.png">女包</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes3.png">男包</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes4.png">钱包</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">鞋袜</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes5.png">女鞋</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes6.png">男鞋</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes7.png">拖鞋</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes8.png">鞋配</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">配饰配件</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes9.png">袜子</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes10.png">丝袜</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes11.png">围巾套件</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes12.png">首饰</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes13.png">配件</a></li>
                    <li><a href="#"><img src="img/index/furnishing/shoes14.png">眼镜</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">服装</a>
                <div class="clothes drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">男装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes1.png">男士外套</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes2.png">男针织/卫衣</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes3.png">男士裤装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes4.png">男士牛仔</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes5.png">男士衬衫</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes6.png">T恤/POLO</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">女装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes7.png">女士外套</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes8.png">女针织/卫衣</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes9.png">女士裤装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes10.png">女士牛仔</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes11.png">女士裙装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes12.png">T恤/POLO</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">运动</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes13.png">男运动上装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes14.png">女运动上装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes15.png">男运动下装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes16.png">女运动下装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes17.png">男士户外</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes18.png">女士户外</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">内衣家居服</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes19.png">男士家居</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes20.png">女士家居</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes21.png">男士内裤</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes22.png">女士内裤</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes23.png">女士内衣</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes24.png">男士内衣</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">Yessing轻运动</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes25.png">Yessing上装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/clothes26.png">Yessing下装</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">电器</a>
                <div class="electrical drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">家用电器</a></li>
                    <li><a href="#"><img src="img/index/furnishing/elec1.png">生活电器</a></li>
                    <li><a href="#"><img src="img/index/furnishing/elec2.png">厨房电器</a></li>
                    <li><a href="#"><img src="img/index/furnishing/elec3.png">个人健康</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">3C数码</a></li>
                    <li><a href="#"><img src="img/index/furnishing/elec4.png">数码</a></li>
                    <li><a href="#"><img src="img/index/furnishing/elec5.png">影音娱乐</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">洗护</a>
                <div class="wash drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">纸品清洁</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash1.png">纸品湿巾</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash2.png">家庭清洁</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash3.png">浴室用品</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">护理彩妆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash4.png">毛巾浴巾</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash5.png">美妆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash6.png">香水香氛</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash7.png">面部口腔护理</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash8.png">身体护理</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash9.png">洗发护发</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">生理用品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash10.png">生理用品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/wash11.png">女性用品</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">饮食</a>
                <div class="food drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">休闲零食</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food1.png">饼干糕点</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food2.png">小食糖巧</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food3.png">坚果炒货</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food4.png">肉类零食</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food5.png">蜜饯果干</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">冲饮茗茶</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food6.png">冲调饮品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food7.png">茶包花茶</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food8.png">传统茗茶</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">粮调速食</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food9.png">方便食品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food10.png">米面粮油</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food11.png">南北干货</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food12.png">调味酱菜</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">酒水饮料</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food13.png">酒类</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food14.png">乳品饮料</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">滋补保健</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food15.png">滋补食材</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food16.png">保健品</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">生鲜甜点</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food17.png">甜品鲜花</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food18.png">果鲜肉蛋</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food19.png">淘购黑猪</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">进口食品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/food20.png">海外美食</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">餐厨</a>
                <div class="kitchen drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">厨房用品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen1.png">锅具</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen2.png">保洁保鲜</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen3.png">厨房配件</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen4.png">刀剪砧板</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">餐厅用品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen5.png">餐具</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen6.png">水具杯壶</a></li>
                    <li><a href="#"><img src="img/index/furnishing/kitchen7.png">茶具酒具</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">婴童</a>
                <div class="baby drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">婴童生活</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby1.png">婴童洗护</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby2.png">婴童床品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby3.png">毛巾口水巾</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby4.png">儿童收纳</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby5.png">喂养用品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby6.png">玩具</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">童鞋童包</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby8.png">童鞋</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby9.png">童包</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">服饰搭配</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby10.png">新生儿服装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby11.png">小童服装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby12.png">大童服装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby13.png">婴童搭配</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">孕产妈咪</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby14.png">孕产内衣</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby15.png">孕妈装</a></li>
                    <li><a href="#"><img src="img/index/furnishing/baby16.png">妈咪用品</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">文体</a>
                <div class="article drop-down">
                  <div></div>
                  <ul>
                    <li><a href="#">文体音像</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article1.png">文具</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article2.png">运动户外</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article3.png">乐器唱片</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">礼品点卡</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article4.png">礼品卡</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article5.png">游戏点卡</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">周边商品</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article6.png">数码</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article7.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article8.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article9.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article10.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article11.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article12.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article13.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article14.png">影音娱乐</a></li>
                    <li><a href="#"><img src="img/index/furnishing/article15.png">影音娱乐</a></li>
                  </ul>
                </div>
              </li>
              <li :style="liPadding"><a href="#">特色区</a>
                <div class="unique drop-down" >
                  <div></div>
                  <ul>
                    <li><a href="#">海外制造馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique1.png">日本馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique2.png">韩国馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique3.png">东南亚馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique4.png">欧美馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique5.png">澳新馆</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">特色品牌馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique6.png">智造馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique7.png">春风馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique8.png">味央馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique9.png">Yessing馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique10.png">国风馆</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">推荐品牌馆</a></li>
                    <li><a href="#"><img src="img/index/furnishing/unique11.png">严选推荐馆</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul v-show="!searchF">
              <li :style="liPadding"><div class="line" ></div><router-link to="/foryou">为你严选</router-link></li>
              <li :style="liPadding"><a href="#">众筹</a></li>
            </ul>

            <div class="searchFloat " :class="scroll>=160?'sFixed':''" v-show="searchF"> <!--下滑时搜索栏要放的位置-->
              <input type="text" placeholder="冬夏两用床垫直降240" v-model="kw" @keyup.13="select()">
              <span @click="select()"><i class="icon iconfont icon-sousuo" @click="scrollShow()"></i></span>
              <a href="#"><i class="icon iconfont icon-gereintouxiang_o"></i></a>
              <a href="#" @click="goCart($event)"><i class="icon iconfont icon-gouwuche_o"><div class="count">
                {{isNaN($store.getters.getCartCount) ? 0 : $store.getters.getCartCount}}
              </div></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data:function(){
      return{myTop:{top:'0px'},
          kh_hide:'hide',
          ew_hide:'hide',
          boolFurn:false,
          scroll:0,
          searchF:false,
          liPadding:{padding:'0 24px'},
          kw:'',
          hasLogin:false,
          uname:'',
      }
  },
    methods:{
       noticeLogin(){
         if(sessionStorage.getItem('uid')==undefined){
          this.$message({
                             message: res.data.msg
                        }); 
         }
       },
        show(){
            this.kh_hide=''
        },
        hide(){
            this.kh_hide='hide'
        },
        showE(){
            this.ew_hide=''
        },
        hideE(){
            this.ew_hide='hide'
        },
        guangBo(){
            var top=0;
            setInterval(()=>{
                top-=36
                if(top<=-108) top=0

                this.myTop.top=top+'px'
            },4000)
        },
        scrollShow(){
            this.scroll=document.documentElement.scrollTop;
            if(this.scroll>=160){
                this.searchF=true;
                this.liPadding.padding='0 20px'
            }
            else {
                this.searchF=false;
                this.liPadding.padding='0 24px'
            }

        },
        loginTo(e){
            e.preventDefault()
          this.$store.commit('openLogin')
                },
        select(){
            this.$router.push('products?kw='+this.kw)
            location.reload();
          },
        goCart(e){
          e.preventDefault()
          if(this.hasLogin){
            this.$router.push('shopcart')
            }else{
              alert('请先登录')
            }
          },
        loginOut(){
          this.$router.push('/')
            this.axios.get('user/signout').then(res=>{
            })
            location.reload(true)
          }
    },
    created(){
    this.guangBo()
    },
    mounted(){
        window.addEventListener('scroll', this.scrollShow);
        this.$store.commit('updateCartCount',sessionStorage.getItem('cartCount'))
        this.axios.get('user/isLogin').then(res=>{
            console.log(res)
            if(res.data.ok===1){
                this.hasLogin=true;
                this.uname=res.data.uname;
                sessionStorage.setItem('uid',res.data.uid)
            }else{
              this.hasLogin=false
              sessionStorage.setItem('uid','')
            }
        }) 
    },
    updated(){//更新阶段，登录状态购物车数量的变化需要放在更新阶段才能实时更新，但是退出登录时会有一些延迟
            //登录时页面就显示购物车数量
            if(sessionStorage.getItem('uid')==undefined){
          console.log('aha1111111')
          this.$store.commit('updateCartCount',0)
        }else{
          this.axios.get('cart/select',{params:{uid:sessionStorage.getItem('uid')}}).then((res)=>{
                   var sum=0
                   for(var i=0;i<res.data.length;i++){
                    sum+=res.data[i].count
                   }
                   console.log(sum)
                   sessionStorage.setItem('cartCount',sum)
                   this.$store.commit('updateCartCount',sessionStorage.getItem('cartCount'))  
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  *{
    text-decoration: none;
    list-style: none;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  #header{
    min-width:1090px;
    position:relative;
  }

  .hide{
    display: none;
  }
  .icon-color-c{
    color:#ccc;
  }
  .icon-color-w{
    color:white;
  }
  /*最上层的导航*/
  .he-bg{
    background-color:#333;
    height:36px;
  }
  .he-bg a{
    color:#ccc;
    font-size:12px;
    font-family:"Microsoft Yahei","微软雅黑";
  }
  /*a标签鼠标悬停时的效果*/
  .he-bg a:hover{
    color:white;
    text-decoration: none;
  }
  .head-radio{
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    width:1130px;
    position:relative;
  }
  .head-radio>div{
    display: flex;
    line-height:36px;
  }
  /*设置顶部广播*/
  .head-radio>div:first-child>div.guangBo{
    height:36px;
    width:400px;
    position: relative;
    overflow: hidden;
  }
  .head-radio>div:first-child>div.guangBo>ul{
    margin-left:30px;
    position:absolute;
    left:30px;
    transition-duration: .2s;
  }
  .head-radio>div:first-child>div.guangBo>ul a{
    color:#b4a078;
    text-decoration: underline;
  }
  .head-radio>div:first-child>div.guangBo>ul a:hover{
    color:white;
    text-decoration: none;
  }
  .head-radio>div:last-child>ul>li{
    float:left;
    margin-left:16px;
  }
  .head-radio>div:last-child>ul>li.isLogin{
    position: relative;
  }
  .head-radio>div:last-child>ul>li.isLogin .pull-down{
    top:-12px;
  }
  #header .head-radio>div:last-child>ul>li.isLogin span{
    position: absolute;
    top:0px;left:50px;
  }
  #header .head-radio>div:last-child>ul>li.isLogin>a{
    display: inline-block;
    white-space: nowrap;
    border:none;
    width:60px;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .head-radio>div:last-child>ul>li+li:not(:last-child)>a{/*边框*/
    border-right:1px solid #ccc;
    padding-right:12px;
  }
  /*设置客户服务下拉菜单*/
  .head-radio>div:last-child>ul>li>ul{
    border:1px solid #dddddd;
    box-shadow:0 0 2px #b4a078;
    text-align:center;
    background: white;
    position:relative;
    display: none;
    z-index: 99;
  }
  .head-radio>div:last-child>ul>li:hover>ul{
    display: block;
  }
  .head-radio>div:last-child>ul>li:hover  span>i{
    display: inline-block;
    color:white;
    -webkit-transform:rotate(180deg);
  }
  .head-radio>div:last-child>ul>li>ul>li{
    position:relative;
    height:36px;
  }
  .head-radio>div:last-child>ul>li>ul>li:not(:last-child)>a{
    border-bottom:1px solid #ccc;
    padding-bottom:9px;
  }
  .head-radio>div:last-child>ul>li>ul>li>a:hover{
    color:#b4a078
  }
  .head-radio>div:last-child>ul>li>ul>li>div{
    float: left;
    margin-top:-4px;
    margin-left:21px;
    width:10px;height:10px;
    background-color:white;
    transform: rotate(45deg);
    position:absolute;top:0;
  }
  /*设置下拉二维码*/
  #b-code{
    position:relative;
  }
  #b-code>div{
    border:1px solid #dddddd;
    box-shadow:0 0 2px #b4a078;
    position: absolute;
    height: 144px;
    display:none;
    z-index: 99;
  }
  #b-code:hover>div{
    display: block;
  }
  #b-code>div>div{
    margin-top:-4px;
    margin-left:22px;
    width:10px;height:10px;
    background-color:white;
    transform: rotate(45deg);
  }
  #b-code span{
    position:absolute;
    color:#b4a078;
    top:110px;left:22px;
  }
  /*搜索行*/
  .nav{
    width:1090px;
    margin:0 auto;
  }
  .nav .logo{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 50px;
  }
  .searchFloat input{  /*搜索的input*/
    width:252px;height:22px;
    border:0;
    border-bottom:1px solid #b4a078;
    padding-left:8px;
    outline: none;
    position:relative;
    z-index: 90;
    background:white;
  }
  .searchFloat{
    position:relative;
    margin-left:135px;
  }
  .searchFloat a:hover{
    text-decoration: none;
  }
  .searchFloat i{
    font-size:30px;
    color:#b4a078;
    position: relative;
  }
  .searchFloat .count{
    position: absolute;
    height:20px;width:20px;
    border-radius: 20px;
    background: #d4282d;
    color:white;
    top:-7px;left:17px;
    text-align:center;
    line-height:20px;
    font-size:12px;
  }
  /*页头导航栏*/
  .nav .details.sFixed{
    width:100%;height:60px;
    background: white;
    position:fixed;
    left:0;top:0;
    z-index:92;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.2);

  }
  .nav .details.sFixed>div{
    width:1090px;
    margin:0 auto;
    position:relative;
  }
  .nav .details ul:first-child.sFixed{  /*添加sFixed*/
    margin-left: 0;
  }

  .nav .details ul{
    position: relative;
  }
  .nav .details>div>ul>li{
    position:relative;
    top:20px;
    float: left;
    height:60px;
    margin:6px 0;
    z-index:94;
  }
  .nav .details>div>ul:first-child>li:nth-child(11), .nav .details>div>ul:first-child>li:nth-child(12){
    z-index:92;
  }
  .nav .details>div>ul>li:hover>.drop-down{
    display: block;
  }
  .nav .details ul li a{
    font-family: "Microsoft Yahei","微软雅黑",verdana;
    font-size:14px;
    font-weight:700;
    color:#000;
    padding-bottom:6px;
  }
  /*下滑时搜索等信息部分*/
  .nav .details .searchFloat.sFixed{
    position:relative;
    left:750px;
    top:-65px;
    width:400px;
    z-index:93;
    margin:0;
    height:60px;
  }
  .nav .details .searchFloat{
    position:absolute;
    right:0px;top:10px;
  }

  /*下拉菜单*/
  .nav .details .drop-down{
    position:absolute;
    display: none;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.1);
    padding:15px;
    background:white;
    top:49px;
  }
  .nav .details>div>ul>li:hover>a{
    color:#b4a078;
    border-bottom: 3px solid #b4a078;
    text-decoration: none;
  }

  /*三角形*/
  .nav .details .drop-down>div{
    position:absolute;
    width:20px;height:20px;
    background-color:white;
    transform: rotate(45deg);
    border-top:1px solid #ddd;
    border-left:1px solid #ddd;
    float:left;
    top:-10px;
  }

  .nav .details .drop-down ul{
    display: flex;
    flex-direction: column;
    float:left;
  }
  .nav .details .drop-down ul li {
    width:140px;height:50px;
    display: inline-block;
    text-align:left;
    line-height: 50px;
    margin:0 10px;
  }
  .nav .details .drop-down ul li:first-child{
    border-bottom:1px solid #ddd;
  }
  .nav .details .drop-down ul li:first-child>a:hover{
    text-decoration: none;
  }
  .nav .details .drop-down ul li a{
    font-size:14px;
    font-weight:400;
  }
  .nav .details .drop-down ul li img{
    vertical-align: middle;
    margin-right:15px;
  }
  .nav .details .drop-down ul li:first-child a{
    font-weight: 800;
  }
  .nav .details .drop-down ul li+li a:hover{
    color:#b4a078;
    text-decoration: none;
  }
  /*单独设置家居下拉菜单的位置*/
  .nav .details .furnishing{
    left:-201px;width:680px;
  }
  /*单独设置三角形的位置*/
  .nav .details .furnishing>div{
    left:227px;
  }

  /*单独设置鞋包*/
  /*单独设置下拉菜单的位置*/
  .nav .details .shoes{
    left:-180px;
    width:514px;
  }
  /*单独设置三角形的位置*/
  .nav .details .shoes>div{
    left:221px;}


  /*单独设置服装*/
  /*单独设置下拉菜单的位置*/
  .nav .details .clothes{
    left:-325px;width:850px;
  }
  /*单独设置三角形的位置*/
  .nav .details .clothes>div{
    left:354px;}

  /*单独设置电器*/
  /*单独设置下拉菜单的位置*/
  .nav .details .electrical{
    left:-130px;width:360px;
  }
  /*单独设置三角形的位置*/
  .nav .details .electrical>div{
    left:158px;top:-10px;}

  /*单独设置洗护*/
  /*单独设置下拉菜单的位置*/
  .nav .details .wash{
    left:-206px;width:520px;
  }
  /*单独设置三角形的位置*/
  .nav .details .wash>div{
    left:235px;}
  /*单独设置食品*/
  /*单独设置下拉菜单的位置*/
  .nav .details .food{
    left:-604px;width:1150px;
  }
  /*单独设置三角形的位置*/
  .nav .details .food>div{
    left:629px;}

  /*单独设置餐厨*/
  /*单独设置下拉菜单的位置*/
  .nav .details .kitchen{
    left:-138px;width:350px;
  }
  /*单独设置三角形的位置*/
  .nav .details .kitchen>div{
    left:166px;}

  /*单独设置婴童*/
  /*单独设置下拉菜单的位置*/
  .nav .details .baby{
    left:-327px;width:674px;
  }
  /*单独设置三角形的位置*/
  .nav .details .baby>div{
    left:351px;}

  /*单独设置文体*/
  /*单独设置下拉菜单的位置*/
  .nav .details .article{
    left:-280px;width:637px;
  }
  /*单独设置三角形的位置*/
  .nav .details .article>div{
    left:304px;}
  .nav .details .article.drop-down ul{
    height:300px;
    flex-wrap: wrap;
  }
  .nav .details .article.drop-down ul:last-child{
    padding-right: 122px;
  }
  .article.drop-down ul:last-child>li:nth-child(7){
    margin-top:48px;
  }
  /*单独设置特色区*/
  /*单独设置下拉菜单的位置*/
  .nav .details .unique{
    left:-245px;width:520px;
  }
  /*单独设置三角形的位置*/
  .nav .details .unique>div{
    left:276px;}

  /*特色区后面的横线*/
  .nav .details{
    position:relative;
  }
  .nav .details div.line{
    height:20px;
    border-right:1px solid #ccc;
    position:absolute;
    right:101px;
    top:1px;
  }
</style>
