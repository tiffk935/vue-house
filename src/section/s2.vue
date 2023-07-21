<template>
  <section class="s2 relative text-white">
    <div class="map relative">
      <img class="map1 absolute" src="@/section/s2/map1.png" />
      <img class="map1" src="@/section/s2/map.jpg" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="title absolute"  data-aos="fade-up" data-aos-delay="0">
      <div class="t1">台南東區新都心 國際生活在此</div>
      <div class="t2">開啟南台灣建築新高度，複製北台灣台北信義計畫區，中台灣台中市政七期的開發模式，台南東區「新都心重劃區」 限量登場!</div>
    </div>
    <div class="name">※捷運路線審核中，僅供參考示意，<br>　若有修正依台南市捷運工程處為主</div>
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
    width: size-m(22.34);
    top: size-m(337.22);
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
    top: size-m(24);
    left:size-m(41);
    width: size-m(292);
    @media screen and (min-width:768px) {
      top: size(73);
      left:size(265);
      width: size(1389);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &:after {
      display: none;
      @media screen and (min-width:768px) {
        content: "";
        display: block;
        position: absolute;
        top: size(33);
        left:size(597+36);
        width: size(126);
        height: size(1);
        background: #fff;
      }
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(22);
      line-height: size-m(32);
      margin-bottom: size-m(6);
      white-space:nowrap;
      @media screen and (min-width:768px) {
        font-size: size(45);
        line-height: size(65);
        margin-bottom: 0;
      }
    }

    .t2 {
      font-weight: 400;
      font-size: size-m(12);
      line-height: size-m(17);
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(29);
        width: size(594);
      }
    }

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
  .name{
    position: absolute;
    font-size: 12px;
    bottom: 1em;
    left:1em;
    text-shadow: 0 0 3px #000;
    @media screen and (min-width:768px) {
      font-size: size(15);
      bottom: 1.5em;
    }
  }
}

</style>

<script setup>
</script>