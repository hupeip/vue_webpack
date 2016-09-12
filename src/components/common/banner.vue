<style lang="css" scoped>
    ul{height: 145px;}
    li{padding: 16px;float: left;width: 33.3%;box-shadow: 0px 1px 1px #DFDFDF;}
    .title{ font-family: 'Great Vibes', cursive; font-size: 22px;color: #333;}
    .content{margin-top: 20px;line-height: 25px;}

    .animate{transition: background-color 1s;}
    .animate:hover{background-color: #000;}
    .animate .title, .animate .content{transition: color 1s;}
    .animate:hover .title, .animate:hover .content{color: #fff;}
    .animate .Cupidatat{background: url('../../assets/images/img-sp.png') no-repeat -15px -13px;transition: background 1s ease-in;}
    .animate:hover .Cupidatat{background: url('../../assets/images/img-sp.png') no-repeat -77px -13px;}
</style>
<template>
    <div class="">
        <ul>
            <li class="animate">
                  <div class="title">
                      <i class="icon2 Cupidatat"></i>
                      Cupidatat Proi
                  </div>
                  <div class="content">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                  </div>
            </li>
            <li class="animate">
                <div class="title">
                    <i class="icon2 Cupidatat"></i>
                    Sint Occaecat
                </div>
                <div class="content">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                </div>
            </li>
            <li class="animate">
                <div class="title">
                    <i class="icon2 Cupidatat"></i>
                    Cupida Quisu
                </div>
                <div class="content">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
}
</script>
