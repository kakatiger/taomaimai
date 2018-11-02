var vm=new Vue({
    el:'#header',
    data:{myTop:{top:'0px'},
        kh_hide:'hide',
        ew_hide:'hide',
    },
    methods:{
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
        }
    },
    mounted(){
        var top=0;
        setInterval(function(){
            top-=36
            if(top<=-108) top=0

            vm.myTop.top=top+'px'
        },4000)
    }
})