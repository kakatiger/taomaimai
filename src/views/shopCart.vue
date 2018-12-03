<template>
    <div class="shopCart">
        <shop-cart-main></shop-cart-main>
    </div>
</template>
<script>
    import shopCartMain from '@/components/shopCart/shopCartMain.vue'
    export default {
        components:{
            shopCartMain
        }
    }
</script>
<style scoped>
    .shopCart{
        margin: 100px auto;
        width: 1090px;
    }

</style>