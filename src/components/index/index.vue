<style lang="css" scoped>
    .g-md{padding: 80px 0;background: url('../../assets/images/banner.png') 0px 0px;}
    .m-md{padding: 64px 48px; width: 1140px;margin: 0 auto; box-shadow: 0px 0px 10px #E0E0E0;background-color: #fff;overflow: hidden;}
    .cont{margin-left: 260px;padding: 0 15px;}
</style>

<template>
  <div class="g-md">
      <div class="m-md">
          <nevleft></nevleft>
          <div class="cont">
              <swipe></swipe>
              <banner></banner>
              <router-view></router-view>
              <imglist></imglist>
          </div>
          <div class="clear"></div>
          <foot></foot>
      </div>
  </div>

</template>

<script>
import foot from '../common/footer.vue'
import nevleft from '../common/nevleft.vue'
import swipe from '../common/swipe.vue'
import banner from '../common/banner.vue'
import imglist from '../common/imglist.vue'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: { foot, nevleft, swipe, banner, imglist }
}
</script>
