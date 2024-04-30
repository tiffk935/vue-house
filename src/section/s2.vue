<template>
  <section class="s2 relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s2/map.jpg" @load="onImgLoad($event)" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <!-- <div class="title absolute text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">黃金雙軸串連核心<br class="md:hidden"><span class="hidden md:inline">&nbsp;&nbsp;</span>環扣科技產業聚落</div> -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  z-index: 1;
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
  height: size-m(604+0);
  @media screen and (min-width:768px) {
    height: auto;
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
      padding:size-m(0) 0 0 0;
      background:#4FC9FC;
    @media screen and (min-width:768px) {
      overflow: hidden;
      padding:0;
    }

    img {
      width: auto;
      height: size-m(604);
      margin-top: size-m(604 - 604);
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
    top: size-m(289.75);
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
    padding-top:size-m(50);
    bottom: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
    background: #94003b66;
  }

  .title {
    width: 100%;
    top: size-m(15);
    left: 0;
    font-size: size-m(35);
    font-weight: 700;
    text-align: center;
    text-shadow: 0 .1em .1em #059c;
    @media screen and (min-width:768px) {
      top: size(92.78);
      left: size(0);
      font-size: size(100);
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
    map.value.scrollLeft = img.clientWidth * 0.475 - window.innerWidth/2;
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