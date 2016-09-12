<style lang="css">
  .top{margin: 50px 0;}
  .title{font-size: 28px;color: #E0BD62;margin-bottom: 12px;}
  .photos{overflow: hidden;}
  .img{float: left; width: 33.3%;padding-left: 3px;}
  /*.small{padding-left: 3px;}*/
</style>

<template lang="html">
    <div class="">
        <div class="top">
            <p class="title">Photo Gallery</p>
            <p >But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
        </div>
        <div class="photos">
            <div class="img">
              <img src="../../assets/images/7.jpg" alt="" />
            </div>
            <div class="img">
              <img class="small" src="../../assets/images/4.jpg" alt="" />
              <img class="small" src="../../assets/images/6.jpg" alt="" />
            </div>
            <div class="img">
              <img class="small" src="../../assets/images/5.jpg" alt="" />
              <img class="small" src="../../assets/images/8.jpg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
