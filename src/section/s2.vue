<template>
  <section class="s2 relative">
    <div class="map relative">
      <img class="map1 text" src="@/section/s2/map1.png" />
      <img class="map1" src="@/section/s2/map.jpg" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="title" data-aos="fade-up" data-aos-delay="0">
      <div class="t1">CHOOSE</div>
      <img class="t2" src="@/section/s2/best.svg" />
      <div class="content">揮別高樓大廈、水泥叢林，最佳的蒔築人生，從榮歸故里、開創新局；抑或卸甲歸田換個身分，親近自然樂活自在。</div>
    </div>
    <div class="info absolute text-white">環境空拍示意圖</div>
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

    .text{
      position: absolute;
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
    width: size-m(22.34);
    top: size-m(352.5);
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

  .title{
    position: absolute;
    width: size-m(314);
    left: size-m(30);
    top: size-m(32);
    @media screen and (min-width:768px) {
      top: size(145);
      left: size(1297);
      width: size(476);
    }

    .t1{
      font-weight: 900;
      font-size: size-m(49);
      line-height: size-m(56);
      letter-spacing: -0.05em;
      color: #FFFFFF;
      text-align: center;
      margin-bottom: size-m(7);
      @media screen and (min-width:768px) {
        font-size: size(118);
        line-height: size(56);
        margin-bottom: size(47);
      }
    }

    .t2 {
      width: size-m(190.29);
      margin: 0 auto size-m(22) auto;
      @media screen and (min-width:768px) {
        width: size(464);
        margin: 0 auto size(30) auto;
      }
    }

    .content{
      font-size: size-m(13);
      line-height: size-m(20);
      color: #fff;
      font-weight: 400;
      text-align: justify;
      letter-spacing: 0.15em;
      color: #000;
      @media screen and (min-width:768px) {
        font-size: size(16);
        line-height: size(27);
      }
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
</script>