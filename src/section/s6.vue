<template>
  <section class="s6 bg-[#E4E3DB] relative">
    <div class="map relative">
      <img class="map1" src="@/section/s6/map.jpg" />
    </div>
    <img class="circle absolute" src="@/section/s6/circle.svg" />
    <img class="circle-num absolute" data-aos="fade-in" data-aos-delay="0" src="@/section/s6/circle-num.svg" />
    <!-- <div class="rect absolute"></div>
    <img class="hand-bg absolute md:hidden" src="@/section/s6/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s6/hand.svg" />
    <div class="border absolute"></div>
    <img class="text absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s6/text-m.svg" />
    <img class="text absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s6/text.svg" />
    <div class="info absolute text-white">空拍實景輔以電腦美化</div> -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {

  // @keyframes swing {
  //   0% {
  //     transform: translateX(0%);
  //   }
  //   25% {
  //     transform: translateX(-15%);
  //   }
  //   50% {
  //     transform: translateX(0%);
  //   }
  //   75% {
  //     transform: translateX(15%);
  //   }
  //   100% {
  //     transform: translateX(0%);
  //   }
  // }

  width: 100%;
  height: size-m(738);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    @media screen and (min-width:768px) {
      overflow: hidden;
      position: absolute;
      width: size(1710);
      height: size(805);
      top: size(191);
      left: size(105);
      border-radius: size(80);
    }

    img {
      width: auto;
      height: size-m(546);
      margin-top: size-m(738 - 546);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin-top: 0;
        object-fit: cover;
      }
    }
  }

  .circle {
    top: size-m(49);
    left: size-m(96.01);
    width: size-m(183);
    animation: circle 8s infinite linear;
    transform-origin: center center;
    pointer-events: none;
    @media screen and (min-width:768px) {
      top: size(62);
      left: size(1487.01);
      width: size(291.8);
    }
  }

  .circle-num {
    top: size-m(110.26);
    left: size-m(145.8);
    width: size-m(81.1);
    pointer-events: none;
    @media screen and (min-width:768px) {
      top: size(159.69);
      left: size(1566.4);
      width: size(129.31);
    }
  }

  // .hand {
  //   width: size-m(18.32);
  //   top: size-m(717);
  //   left: size-m(178);
  //   cursor: pointer;
  //   transition: opacity .5s;
  //   animation: swing 3s linear 0s infinite;
  //   pointer-events: none;
  //   @media screen and (min-width:768px) {
  //     display: none;
  //   }
  // }

  // .hand-bg {
  //   width: 100%;
  //   bottom: 0;
  //   left: 0;
  //   transition: opacity .5s;
  //   pointer-events: none;
  // }

  // .rect {
  //   background: linear-gradient(180deg, #0361A0 41.67%, rgba(3, 97, 160, 0) 100%);
  //   width: 100%;
  //   height: size-m(402);
  //   top: 0;
  //   left: 0;
  //   pointer-events: none;
  //   @media screen and (min-width:768px) {
  //     display: none;
  //   }
  // }

  // .border {
  //   border: size-m(6) solid #ffffff;
  //   top: size-m(14);
  //   bottom: size-m(12);
  //   left: size-m(10);
  //   right: size-m(10);
  //   pointer-events: none;
  //   @media screen and (min-width:768px) {
  //     border: size(16) solid #ffffff;
  //     top: size(46);
  //     bottom: size(46);
  //     left: size(84);
  //     right: size(90);
  //   }
  // }

  // .text {
  //   top: size-m(43);
  //   left: size-m(30);
  //   width: size-m(326);
  //   @media screen and (min-width:768px) {
  //     top: size(225);
  //     left: size(967);
  //     width: size(754);
  //   }
  // }

  // .info {
  //   top: size-m(788);
  //   left: size-m(235);
  //   font-size: size-m(12);
  //   text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
  //   @media screen and (min-width:768px) {
  //     top: size(1047);
  //     left: size(1739);
  //     font-size: size(16);
  //   }
  // }
}

</style>

<script setup>
</script>