<template>
  <section class="s2 relative">
    <div class="rect absolute"></div>
    <div class="map relative">
      <img class="map-text absolute w-full t-0 l-0" src="@/section/s2/map-text.png" />
      <img class="map1" src="@/section/s2/map.jpg" />
      <img class="map-text2 absolute" data-aos="fade-up" src="@/section/s2/map-text2.svg" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="title">
      <img class="en" data-aos="fade-up" src="@/section/s2/en.svg" />
      <div class="t1" data-aos="fade-up">具備核心地段優勢<br class="md:hidden"><span class="hidden md:inline">&nbsp;</span>史博物館特區生活圈</div>
    </div>
    <img class="wave absolute md:hidden" src="@/section/s2/wave-m.svg" />
    <img class="wave absolute hidden md:block" src="@/section/s2/wave.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  overflow: hidden;

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
  height: size-m(862);
  @media screen and (min-width:768px) {
    height: size(2314);
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    @media screen and (min-width:768px) {
      overflow: hidden;
    }

    img {
      width: auto;
      height: size-m(515.63);
      margin-top: size-m(296.44);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
        margin-top: size(966);
      }
    }

    .map-text2 {
      top: size-m(187);
      left: 36vw;
      width: size-m(582);
      max-width: none;
      height: auto;
      margin: 0;
      @media screen and (min-width:768px) {
        top: size(637);
        left: size(320);
        width: size(1280);
      }
    }
  }

  .hand {
    width: size-m(22.34);
    top: size-m(341.5);
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
    top: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }

  .rect {
    width: 100%;
    height: size-m(504);
    top: size-m(-103);
    left: 0;
    background: #0168DE;
    pointer-events: none;
    @media screen and (min-width:768px) {
      height: size(1218);
      top: size(0);
    }
  }

  .title {
    position: absolute;
    top: size-m(50);
    left: 0;
    width: 100%;
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(336);
      left: size(346);
      width: auto;
    }

    .en {
      width: size-m(296);
      margin: 0 auto size-m(14) auto;
      display: block;
      @media screen and (min-width:768px) {
        width: size(1190);
        margin: 0 auto size(46.28) auto;
      }
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 500;
      font-size: size-m(24);
      line-height: size-m(34);
      letter-spacing: 0.08em;
      color: #fff;
      @media screen and (min-width:768px) {
        font-size: size(64);
        line-height: size(92);
      }
    }
  }

  .wave {
    width: 100%;
    bottom: 0;
    left: 0;
  }
}

</style>

<script setup>
</script>