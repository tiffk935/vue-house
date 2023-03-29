<template>
  <section class="s3 relative">
    <div class="map relative">
      <img class="map1 text" src="@/section/s3/text.png" />
      <img class="map1" src="@/section/s3/map.jpg" />
      
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s3/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s3/hand.svg" />
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="title">南紡核心 平實公園 箇中強手</div>
      <div class="desc">以南紡購物中心時尚領首，天選壯闊1950坪基地，以世界級平實公園的超高綠覆之名，一場專為年輕的心、夢想的家，新鮮誕生！</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
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
    height: size(1010);
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
      z-index: 1;
      top: 0;
      left: 0;
      bottom:0;
      right: 0;
    }

    img {
      width: auto;
      height: size-m(667);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
        margin-top: 0;
        transform: translateY(size(1010 - 1137.02));
      }
    }
  }

  .hand {
    width: size-m(22.34);
    top: size-m(337.22);
    left: size-m(176.33);
    cursor: pointer;
    transform-origin: center center;
    transition: opacity .5s;
    animation: swing 3s linear 0s infinite;
    pointer-events: none;
    z-index: 12;
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
    z-index: 10;
  }

  .text {
    top: size-m(31.45);
    left: 0;
    font-size: size-m(12);
    line-height: size-m(20);
    margin: 0 auto;
    text-align: justify;
    color: #fff;
    pointer-events: none;
    @media screen and (min-width:768px) {
      width: size(573);
      top: size(71.45);
      left: size(673);
      font-size: size(18);
      line-height: size(31);
      margin: 0;
      text-align: center;
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(24);
      line-height: size-m(41);
      letter-spacing: 0.09em;
      margin-bottom: size-m(10.36);
      text-align: center;
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(68);
        margin-bottom: size(19.36);
      }
    }

    .desc {
      padding: 0 size-m(32.5);
      @media screen and (min-width:768px) {
        padding: 0;
      }
    }
  }
}
</style>

<script setup>
</script>