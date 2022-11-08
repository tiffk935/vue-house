<template>
  <section class="s2 relative">
    <div class="map relative">
      <img class="map1 absolute" src="@/section/s2/map1.png" />
      <img class="map1" src="@/section/s2/map.jpg" />
    </div>
    <div class="rect absolute"></div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="border absolute"></div>

    <div class="title">
    <div class="t1" data-aos="fade-up" data-aos-delay="200">航空城發展能量</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="300">重劃新星-大園新都心 「客運園區」未來看好！</div>
    <div class="content" data-aos="fade-up" data-aos-delay="300">
      桃園航空城佔地面積廣達4564公頃，不僅是台灣與國際接軌的最重要門戶，更是北台灣產業發展的重中之重，未來將結合周邊各大工業與物流園區，以及重金打造的亞洲矽谷計劃與5G創新等高科技產業，推估經濟效益上看2.8兆元。<br>
其中客運園區  占地約197.5公頃，主要道路包括大觀路、環區東路、環區北路和環區西路，區內規劃多座公園、籃球場、活動中心、棒球場等，也有學校預定地，目前已有多家物流公司、民航局等企業進駐。
      </div>
    </div>

    <div class="info absolute text-white">空拍實景輔以電腦美化</div>
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
  height: size-m(828);
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
      margin-top: size-m(828 - 667);
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
    top: size-m(717);
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
    background: linear-gradient(180deg, #0361A0 41.67%, rgba(3, 97, 160, 0) 100%);
    width: 100%;
    height: size-m(402);
    top: 0;
    left: 0;
    pointer-events: none;
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .border {
    border: size-m(6) solid #ffffff;
    top: size-m(14);
    bottom: size-m(12);
    left: size-m(10);
    right: size-m(10);
    pointer-events: none;
    @media screen and (min-width:768px) {
      border: size(16) solid #ffffff;
      top: size(46);
      bottom: size(46);
      left: size(84);
      right: size(90);
    }
  }




    .title{
    position: absolute;
    top: size(220);
    right:size(260);
    width: size(676);

    @media screen and (max-width:768px) {
      text-align: center;
      top: size-m(60);
      right:size-m(30);
      width: size-m(315);
    }

    .t1{
      font-size: size(58);
      color: #fff;
      font-weight: 900;

      @media screen and (max-width:768px) {
        font-size: size-m(25);
        margin-bottom: size-m(15);
      }
    }

    .t2{
      font-size: size(30);
      color: #fff;
      font-weight:500;

      @media screen and (max-width:768px) {
        font-size: size-m(15);
      }
    }

    .content{
      font-size: size(16);
      color: #fff;
      font-weight:300;
      margin-top: size(25);
      text-align: left;
      text-align: justify;
      @media screen and (max-width:768px) {
        font-size: size-m(13);
        margin-top: size-m(10);
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

  .info {
    top: size-m(788);
    left: size-m(235);
    font-size: size-m(12);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
    @media screen and (min-width:768px) {
      top: size(1047);
      left: size(1739);
      font-size: size(16);
    }
  }
}

</style>

<script setup>
</script>