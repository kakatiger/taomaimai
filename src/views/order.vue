<template>
    <div class="order">
        <receiving-info></receiving-info>
        <place-order></place-order>
    </div>
</template>
<script>
    import receivingInfo from '@/components/order/receivingInfo.vue'
    import placeOrder from '@/components/order/placeOder.vue'

    export default {
        components:{
            receivingInfo,placeOrder
        }
    }
</script>
<style scoped>
    .order{
        width:1090px;
        margin:80px auto 0;
    }
</style>