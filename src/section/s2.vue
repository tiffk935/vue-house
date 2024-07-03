<template>
  <section class="s2 relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s2/map.jpg" @load="onImgLoad($event)" />
      <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s2/map2.svg" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="content absolute">
      <div class="line" data-aos="line" data-aos-duration="1000" data-aos-delay="0"></div>
      <div class="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">涵雍植物園 <br class="md:hidden">蘊綠回家之路</div>
      <div class="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        開窗 俯瞰植物園馥域<br>
        回家 豐迎四季之美<br>
        台北市稀罕的闊綠眼界<br>
        人文馥郁流溢生活動線
      </div>
    </div>
    <div class="info absolute">此為實景與合成示意圖 僅供參考</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  @keyframes swing {
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-15%);
    }
    50% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(15%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  width: 100%;
  height: size-m(1060+0);
  @media screen and (min-width:768px) {
    height: auto;
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    padding: size-m(0) 0 0 0;
    @media screen and (min-width:768px) {
      overflow: hidden;
      padding:0;
    }

    img {
      width: auto;
      height: size-m(1060);
      margin-top: size-m(1060 - 1060);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
        margin-top: 0;
      }
    }
  }

  .hand {
    width: size-m(22.34);
    top: size-m(579.46+0);
    left: size-m(176.33);
    cursor: pointer;
    transition: opacity .5s;
    animation: swing 3s linear 0s infinite;
    pointer-events: none;
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .hand-bg {
    width: 100%;
    padding-top:size-m(0);
    bottom: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
    background: #94003b66;
  }

  .content {
    width: 100%;
    top: size-m(30.81);
    left: 0;
    text-align: center;
    color: #DCDCDC;
    font-weight: 600;
    @media screen and (min-width:768px) {
      top: size(63);
    }

    .line {
      width: size-m(1);
      height: size-m(84.8);
      background: #fff;
      margin: 0 auto size-m(31.4) auto;
      @media screen and (min-width:768px) {
        width: size(1);
        height: size(144.84);
        margin: 0 auto size(34.5) auto;
      }
    }

    .title {
      letter-spacing: 0.18em;
      margin-bottom: size-m(15);
      @media screen and (min-width:768px) {
        margin-bottom: size(30.24);
        position: relative;
        left: -0.18em;
      }
    }

    .desc {
      letter-spacing: 0.09em;
    }
  }

  .info {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      bottom: size(38.47);
      left: size(87.84);
      color: #FFF;
      font-family: "Noto Sans TC";
      font-size: size(14);
      line-height: 170%;
    }
  }
}

</style>

<script setup>
import { ref } from 'vue';

const map = ref();

function onImgLoad(e) {
  const img = e.target;
  if (map.value && img) {
    let status = 0;
    let hideHand = false;
    map.value.scrollLeft = img.clientWidth * 0.473 - window.innerWidth/2;
    map.value.addEventListener("scroll", () => {
      status++;
      if(status > 1 && !hideHand){
        map.value.parentNode.querySelector('.hand').style.opacity = 0;
        map.value.parentNode.querySelector('.hand-bg').style.opacity = 0;
        hideHand = true;
      }
    });
  }
}
</script>