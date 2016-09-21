<style lang="css">
    img{width: 200px;}
    .car{
        animation-name: drive;
        animation-duration: 2s;
        animation-timing-function: ease-in;
        animation-iteration-count: 1;
    }
    @keyframes drive {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(600px);
        }
    }
    .ball{
        width: 100px;
        /*animation-name: ballmove;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 4;
        animation-delay: 2s;*/
        animation: ballmove 2s ease-in-out 2s 4;
        /*animation-fill-mode: forwards; 停留在结束位置*/
        /*animation-fill-mode: backwards; 动画从0%开始，结束后回到原点*/
        animation-fill-mode: both;
        animation-direction: alternate;
    }
    @keyframes ballmove {
        0% {
            transform: translateX(0) rotate(0);
        }
        /*20% {
            transform: translateX(-10px) rotate(-180deg);
        }*/
        100% {
            transform: translateX(600px) rotate(270deg);
        }
    }
    .test{
        width: 200px;
        height: 200px;
        background-color: #ddd;
        animation: test 2s ease-in-out 1s 1;
        animation-fill-mode: both;
        animation-direction: alternate;
    }
    @keyframes test {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
            animation-timing-function: linear;
        }
        100% {
            opacity: 1;
        }
    }
    .sky{
        width: 1200px;
        height: 400px;
        overflow: hidden;
        background: transparent url(http://www.w3cplus.com/sites/default/files/blogs/2015/1506/sky.jpg) top left no-repeat;
        background-size: 100% 100%;
        position:relative;
    }
    .cloud {
    		width: 248px;
    		height:131px;
        position: absolute;
    		background:transparent url(http://www.w3cplus.com/sites/default/files/blogs/2015/1506/cloud.png) 0 0 no-repeat;
        background-size: cover;
        position:absolute;
    }
    .cloud1 {
        margin-top: 20px;
        animation: cloud 25s linear infinite;
    }
    .cloud2 {
        margin-top: 110px;
        animation: cloud 35s linear 3s infinite both;
    }
    @keyframes cloud {
        0% {
            transform: translateX(-250px);
        }
        100% {
            transform: translateX(1200px);
        }
    }
    .sprite{
        width: 245px;
        height: 400px;
        background:transparent url(http://www.w3cplus.com/sites/default/files/blogs/2015/1506/walker.png) 0 0 no-repeat;
        animation: walker 1s steps(5) infinite;
    }
    @keyframes walker {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 0 -4000px;
        }
    }

    .cube {
        position: relative;
        top: 200px;
        left: 20px;
    }

    .rightFace,
    .leftFace,
    .topFace div {
        padding: 10px;
        width: 180px;
        height: 180px;
    }

    .rightFace,
    .leftFace,
    .topFace {
        position: absolute;
    }

    .leftFace {
        -webkit-transform: skewY(30deg);
        -moz-transform: skewY(30deg);
        background-color: #ccc;
    }

    .rightFace {
        -webkit-transform: skewY(-30deg);
        -moz-transform: skewY(-30deg);
        background-color: #ddd;
        left: 200px;
    }

    .topFace div {
        -webkit-transform: skewY(-30deg) scaleY(1.16);
        -moz-transform: skewY(-30deg) scaleY(1.16);
        background-color: #eee;
        font-size: 0.862em;
    }

    .topFace {
        -webkit-transform: rotate(60deg);
        -moz-transform: rotate(60deg);
        top: -158px;
        left: 100px;
    }

    .accordion h3 + div {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 0.3s ease-in;
        -moz-transition: height 0.3s ease-in;
        -o-transition: height 0.3s ease-in;
        -ms-transition: height 0.3s ease-in;
        transition: height 0.3s ease-in;
    }

    .accordion :target h3 + div {
        height: 100px;
    }

    .accordion .section.large:target h3 + div {
        overflow: auto;
    }
</style>

<template>
  <div class="">
        <!-- <button type="button" name="button" @click="loginClick">login</button> -->
        <!-- <img src="http://www.w3cplus.com/sites/default/files/blogs/2015/1506/car.png"  class="car" /><br>
        <img class="ball" src="http://www.w3cplus.com/sites/default/files/blogs/2015/1506/ball.png" alt="ball" />
        <div class="test">

        </div> -->
        <div class="sky">
            <div class="cloud cloud1"></div>
            <div class="cloud cloud2"></div>
        </div>
        <div class="sprite"></div>
        <!-- <div class="cube">
            <div class="topFace">
                <div>
                  Content
                  <p>
                    Similar to my previous experiments, the HTML markup is very simple. Each of the faces has its own DIV, class and content. The top face requires some extra markup to aid the transformation, more on that shortly.
                  </p>
                </div>
            </div>
            <div class="leftFace">
                Content
            </div>
            <div class="rightFace">
                Content
            </div>
      </div> -->

      <div class="accordion">
          <h2>Accordion Demo</h2>
          <div id="one" class="section">
              <h3>
                  <a href="#one">Heading 1</a>
              </h3>
              <div>
                  <p>Content</p>
              </div>
          </div>
          <div id="two" class="section">
              <h3>
                  <a href="#two">Heading 2</a>
              </h3>
              <div>
                  <p>Content</p>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    //  loginClick(){
    //    api.login({'phoneNum': '13800000001','psw': '123456'}).then(response =>{
    //      console.log(response.data);
    //        },
    //        response =>{
    //            console.log("error");
    //        })
    //  }
  },
  components: {}
}
</script>
