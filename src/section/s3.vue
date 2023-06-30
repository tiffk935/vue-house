<template>
  <section class="s3 relative">
    <div class="map relative">
      <img class="map1" src="@/section/s3/map.jpg" />
    </div>
    <div class="rect absolute"></div>
    <div class="info absolute text-white">區域空拍實景修飾</div>
    <img class="hand-bg absolute md:hidden" src="@/section/s3/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s3/hand.svg" />
    <div class="title" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#E2C46C]">土城 新矽谷</div>
      <div class="t2">重大建設齊發</div>
      <div class="content">
        偉大始於細節，點滴匯聚成形。萬大線串起雙北科技金軸，三大智慧園區以土城為中心，司法特區啟動，注入區域建設動能，我們這一代人正看著土城崛起。
      </div>
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
  background: #0579cf;
  width: 100%;
  height: size-m(667);
  color: #fff;
  @media screen and (min-width:768px) {
    height: size(1080);
    background: linear-gradient(180deg, #55B1FF 0%, rgba(140, 201, 255, 0) 44.27%);
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
      height: size-m(580.54);
      margin-top: size-m(667 - 580.54);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: size(1920);
        height: auto;
        margin-top: size(0);
        margin-left: size(0);
      }
    }
  }
  .hand {
    width: size-m(18.32);
    top: size-m(600);
    left: size-m(178);
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
  .rect {
    background: linear-gradient(180deg, rgba(39, 149, 245, 0) 12.66%, rgba(69, 164, 246, 0.365079) 49.75%, #1B92F7 85.64%);
    transform: rotate(-180deg);
    width: 100%;
    height: size-m(300);
    top: 0;
    left: 0;
    pointer-events: none;
    @media screen and (min-width:768px) {
      height: size(714);
      opacity: 0;
      // background: linear-gradient(180deg, #55B1FF 0%, rgba(140, 201, 255, 0) 44.27%);
      //background: linear-gradient(180deg, rgba(39, 149, 245, 0) 12.66%, rgba(69, 164, 246, 0.365079) 38.98%, #1B92F7 100%);
      // transform: rotate(0deg);
    }
  }
  
  .title {
    position: absolute;
    top: size-m(43);
    left: 0;
    width: 100%;
    text-align: center;
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      top: size(70);
      padding: 0 size(450) 0 size(538);
    }
    
    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(20);
      font-weight: 700;
      line-height: 1;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(30);
        margin-bottom: size(50);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: 1.7;
      @media screen and (min-width:768px) {
        font-size: size(20);
        width: size(780);
        margin: 0pc auto;
      }
    }
  }

  .info {
    bottom: size-m(10);
    right: size-m(10);
    font-size: size-m(12);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
    @media screen and (min-width:768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(12);
    }
  }
}
</style>

<script setup>
</script>