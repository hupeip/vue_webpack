<style lang="css">
    .my-swipe {
    height: 400px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    }
    .swipe-indicators{ left:87%; }
    .swipe-indicator{ width: 15px; height: 15px;background: #D57D39; opacity: 1;margin: 0 4px;}
    img{ width: 100%; }
</style>

<template>
    <div class="">
        <swipe class="my-swipe">
            <swipe-item class="slide1"><img src="../../assets/images/1.jpg" alt="" /></swipe-item>
            <swipe-item class="slide2"><img src="../../assets/images/2.jpg" alt="" /></swipe-item>
            <swipe-item class="slide3"><img src="../../assets/images/3.jpg" alt="" /></swipe-item>
        </swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
export default {
    data () {
        return {
        }
    },
    computed: {},
    ready: function () {},
    attached: function () {},
    methods: {},
    components: {
        'swipe': Swipe,
        'swipe-item': SwipeItem
    }
}
</script>
