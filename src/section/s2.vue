<template>
  <section class="s2 relative">
    <div class="map relative">
      <img class="map1 absolute" src="@/section/s2/map1.png" />
      <img class="map1" src="@/section/s2/map.jpg" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="info absolute text-white">3D合成示意圖</div>
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
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
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
      height: size-m(667);
      margin-top: size-m(667 - 667);
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
    width: size-m(18.32);
    top: size-m(324.5);
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
    bottom: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }

  .text {
    top: size-m(43);
    left: size-m(30);
    width: size-m(326);
    @media screen and (min-width:768px) {
      top: size(225);
      left: size(967);
      width: size(754);
    }
  }

  .info {
    bottom: size-m(10);
    left: size-m(10);
    font-size: size-m(12);
    font-weight: 500;
    @media screen and (min-width:768px) {
      bottom: size(10);
      left: size(10);
      font-size: size(15);
    }
  }
}

</style>

<script setup>
</script>