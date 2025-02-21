<template>
  <section class="st3 relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/t3/map.jpg" @load="onImgLoad($event)" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/t3/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/t3/hand.svg" />

    <div class="t1 text-[#78572E] md:hidden">匯七期豐華·禮名人胸襟</div>
    <img class="location w-full block md:hidden" src="@/section/t3/location-m.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.st3 {
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
  background-image: url(@/section/s2/sec2-bg.jpg);
  background-size: auto 100%;
  padding-bottom: sizem(33);
  @media screen and (min-width:768px) {
    height: auto;
    background-size: 100% auto;
    padding-bottom: 0;
  }

  .t1 {
    text-align: center;
    font-size: sizem(25);
    font-weight: 700;
    line-height: sizem(35);
    letter-spacing: .06em;
    margin-bottom: sizem(15);
    white-space: nowrap;
    margin-top: sizem(42);
    @media screen and (min-width: 767px) {
      font-size: size(60);
      line-height: size(72);
      margin-bottom: size(80);
    }
  }

  .location {
    width: sizem(316);
    margin: 0 auto;
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    @media screen and (min-width:768px) {
      overflow: hidden;
    }

    img {
      width: auto;
      height: sizem(667);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
      }
    }
  }

  .hand {
    width: sizem(22.34);
    top: sizem(311.25 + 0);
    left: sizem(169);
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
    top: sizem(0);
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
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
    map.value.scrollLeft = img.clientWidth * 0.55 - window.innerWidth/2;
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