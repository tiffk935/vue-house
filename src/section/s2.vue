<template>
  <section class="s2 relative">
    <div class="map relative" ref="viewbox">
      <img class="map1" src="@/section/s2/map1.webp" ref="viewImg" />
    </div>
    <img :class="['hand-bg', 'absolute', 'md:hidden', {hide: swiped}]" src="@/section/s2/hand-bg.svg" />
    <img :class="['hand', 'absolute', 'md:hidden', {hide: swiped}]" src="@/section/s2/hand.svg" />
    <div class="t1 upup absolute">
      <div class="tt">得天獨厚的天母富境<br>陽明山麓下 磺溪畔閑隱匯粹</div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">中山北路六段寧靜生活圈，無國界的天母慢城<br>鄰磺溪畔使館特區，近北士科園區國際盛世</div>
    </div>
    <div class="info absolute text-white">環境鳥瞰示意圖</div>
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
  height: size-m(587);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  background: #fff;
  @media screen and (min-width:768px) {
    height: size(1580);
    background: #fff;
  }

  .map {
    width: 100vw;
    overflow: hidden;

    .text{
      position: absolute;
    }

    img {
      width: auto;
      height: size-m(587);
      //margin-top: size-m(656 - 487);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
        margin-top: size(0);
      }
    }
  }

  .hand {
    width: size-m(22.34);
    top: size-m(317.22);
    left: size-m(176.33);
    cursor: pointer;
    transition: opacity .5s;
    animation: swing 3s linear 0s infinite;
    pointer-events: none;
    @media screen and (min-width:768px) {
      display: none;
    }

    &.hide {
      opacity: 0;
    }
  }

  .hand-bg {
    width: 100%;
    top: size-m(276);
    left: 0;
    transition: opacity .5s;
    pointer-events: none;

    &.hide {
      opacity: 0;
    }
  }

  .t1 {
    left: size-m(67.5);
    top: size-m(23);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(19);
    line-height: size-m(27);
    letter-spacing: 0.03em;
    color: #39684F;
    text-align: center;
    @media screen and (min-width:768px) {
      left: size(695);
      top: size(96);
      font-size: size(42);
      line-height: size(60);
    }
  }

  .t2 {
    left: size-m(65.5);
    top: size-m(92);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(19);
    text-align: center;
    @media screen and (min-width:768px) {
      left: size(772);
      top: size(244);
      font-size: size(18);
      line-height: size(26);
    }
  }

  .info {
    right: size-m(10);
    bottom: size-m(10);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(12);
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    @media screen and (min-width:768px) {
      right: size(41);
      bottom: size(28);
      font-size: size(15);
      line-height: size(15);
    }
  }
}
</style>
<script setup>
import BScroll from '@better-scroll/core'
import { onMounted, ref, nextTick } from 'vue';

const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 2;

onMounted(() => {
  nextTick(() => {
    viewImg.value.addEventListener('load', () => {

      let scroll = new BScroll(viewbox.value, {
        probeType: 2,
        scrollX: true,
        scrollY: true,
        disableTouch: false,
        disableMouse: false,
        bindToWrapper: true,
        eventPassthrough: "vertical",
        bounce: false,
      });

      scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
      setTimeout(() => {
        scroll.on("scroll", () => {
          swiped.value = true
        });
      }, 1000);
    });
  })
});
</script>