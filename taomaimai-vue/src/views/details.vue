<template>
    <div class="details">
        <de-nav :nav_obj="obj"></de-nav>
        <de-Main :main_obj="obj" :arr="arr" :spec="spec"></de-Main>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>
    import Vue from 'vue'
    import deNav from '@/components/details/detailsNav.vue'
    import deMain from '@/components/details/detailsMain.vue'
    export default {
        components:{deNav,deMain},
        data:function () {
            return{obj:{},arr:[],spec:[]}
        },
        mounted(){
            this.axios.get('http://localhost:4000/furnishing/details',{params:{
                nid:16
            }
            }).then(res=>{
                console.log(res.data[0])
                this.obj=res.data[0]
                this.arr=[this.obj.show1,this.obj.show2,this.obj.show3,this.obj.show4,this.obj.show5]
                this.spec = this.obj.spec.split('/')
                console.log(this.spec)
            })
        }
    }
</script>
<style scoped>
    .details{
        width:1090px;
        margin:220px auto 0;
    }
</style>
