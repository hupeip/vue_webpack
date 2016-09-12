<style lang="css" scoped>
    .nev-left{width: 230px;padding: 0 15px;}
    .logo{width: 200px;
          height: 200px;
          background-color: #E0BD62;
          border-radius: 200px;
          text-align: center;
          font-size: 28px;
          margin-bottom: 40px;
    }
    .logo h1{  color: #fff;padding-top: 25px;line-height: 65px;}
    .logo h1, .logo p{ font-family: 'Great Vibes', cursive; }
    .menu li{ margin:15px 0 15px 10px; }
    .menu li a{font-size: 18px;color: #212121;display: block;padding: 10px 0;border-bottom: 1px solid #fff;}
    .home{background: url('../../assets/images/img-sp.png') no-repeat -20px -240px;}
    .photos{background: url('../../assets/images/img-sp.png') no-repeat -97px -240px;}
    .blog{background: url('../../assets/images/img-sp.png') no-repeat -182px -240px;}
    .codes{background: url('../../assets/images/img-sp.png') no-repeat -274px -239px;}
    .mail{background: url('../../assets/images/img-sp.png') no-repeat -356px -240px;}

    .home1{background: url('../../assets/images/img-sp.png') no-repeat -20px -282px;}
    .photos1{background: url('../../assets/images/img-sp.png') no-repeat -97px -287px;}
    .blog1{background: url('../../assets/images/img-sp.png') no-repeat -182px -287px;}
    .codes1{background: url('../../assets/images/img-sp.png') no-repeat -274px -288px;}
    .mail1{background: url('../../assets/images/img-sp.png') no-repeat -356px -287px;}
    .menu .active{color: #D57D39;border-bottom: 1px solid #D57D39;}

    .title{color: #E0BD62;font-size: 24px;margin: 40px 0 20px; padding-bottom:8px; border-bottom: 1px solid #E0BD62;font-family: 'Great Vibes', cursive;}
    .tigger{background: url('../../assets/images/img-sp.png') no-repeat -25px -192px;}
    .news a{display: block;background-color: #f5f5f5;padding: 8px 4px;width: 100%;font-family: 'Great Vibes', cursive;color: #333;}
    .content{padding: 15px;line-height: 23px;}
    .news li{margin-bottom: 5px;}
    .text{line-height: 23px;}
</style>

<template>
      <div class="f-fl nev-left">
            <div class="logo">
                <h1>Great<p>Taste</p></h1>
            </div>
            <div class="menu">
                <ul>
                    <li @mouseover="mouseover(1)"  @mouseout="mouseout" @click="click(1)">
                        <a v-link="{path : 'home'}" :class="{ active: over == 1 || index == 1 }">
                          <i class="icon1 home" v-if="over != 1 && index != 1"></i><i class="icon1 home1" v-if="over == 1 || index == 1 "></i>
                            Home
                        </a>
                    </li>
                    <li @mouseover="mouseover(2)" @mouseout="mouseout" @click="click(2)">
                        <a v-link="{path : 'photos'}" :class="{ active: over==2 || index == 2 }">
                            <i class="icon1 photos" v-if="over != 2 && index !=2"></i><i class="icon1 photos1" v-if="over == 2 || index == 2"></i>
                            Photos
                        </a>
                    </li>
                    <li @mouseover="mouseover(3)" @mouseout="mouseout" @click="click(3)">
                        <a href="#" :class="{ active: over==3  || index == 3}">
                            <i class="icon1 blog" v-if="over != 3 && over != 3"></i><i class="icon1 blog1" v-if="over == 3 || index == 3"></i>
                            Blog
                        </a>
                    </li>
                    <li @mouseover="mouseover(4)" @mouseout="mouseout" @click="click(4)">
                        <a href="#" :class="{ active: over==4  || index == 4}">
                            <i class="icon1 codes" v-if="over != 4 && index != 4"></i><i class="icon1 codes1" v-if="over == 4 || index == 4"></i>
                            Short Codes
                        </a>
                    </li>
                    <li @mouseover="mouseover(5)" @mouseout="mouseout" @click="click(5)">
                        <a href="#" :class="{ active: over==5  || index == 5}">
                            <i class="icon1 mail" v-if="over != 5 && index != 5"></i><i class="icon1 mail1" v-if="over == 5 || index == 5"></i>
                            Mail Us
                        </a>
                    </li>
                </ul>
            </div>
            <div class="news">
                <div class="title">Latest News</div>
                <ul v-for="item in 3">
                   <li @click="show($index)">
                       <a href="##"><i class="icon1 tigger"></i>Michael Vol</a>
                       <div class="content" v-if="toggle == $index">
                          <ul>
                              <li>Anim pariatur cliche</li>
                              <li>reprehenderit, enim eiusmod</li>
                              <li>high life accusamus terry.</li>
                          </ul>
                       </div>
                   </li>
                </ul>
            </div>
            <div class="Benefits">
                <div class="title">Benefits</div>
                <div class="text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </div>
            </div>
      </div>
</template>

<script>
export default {
  data: function () {
    return {
        over: 1,
        index: 1,
        toggle: 0,
    }
  },
  methods: {
      mouseover(index){
          this.over = index;
      },
      mouseout(){
          this.over = 0;
      },
      click(index){
          this.index = index;
      },
      show(index){
          this.toggle = index;
      }
  },
  components: {}
}
</script>
