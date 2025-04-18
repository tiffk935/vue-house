<template>
  <section class="s2 user-n w-full relative">
    <div class="map user-n relative">
      <div class="scrollable" ref="scrollable">
        <img class="map1" src="@/section/s2/map.jpg" @load="onImgLoad($event)" />
        <!-- <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s2/map2.svg" /> -->
      </div>
      <div class="mask md:hidden">
        <img class="hand-label absolute" src="@/section/s2/hand-label.svg" />
        <img class="hand absolute" src="@/section/s2/hand.svg" />
      </div>
    </div>
    <div class="content">
      <div class="t1 text-[#9F223D]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">靜藏北區富域，該有的，一樣不少。</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">賣場、市場、夜市、百貨自由切換，從日常到精品，盡享豐盛便捷。雙語學區紮根，成大＆奇美醫療雙核心護航，穩握城央地段大優勢。市心建築飽和，擁抱繁華與靜謐兼具的大地坪電梯墅，掌握增資產。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

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

@keyframes ball {
  to {
    transform: translateY(0);
  }
}

.s2 {
  .map {
    width: 100%;
    height: size-m(579);
    @media screen and (min-width:768px) {
      height: auto;
    }

    .scrollable {
      overflow-x: scroll;
      overflow-y: hidden;
      width: 100%;
      height: 100%;
      @media screen and (min-width:768px) {
        height: auto;
        overflow: hidden;
      }

      img {
        width: auto;
        height: 100%;
        max-width: none;
        display: block;
        @media screen and (min-width:768px) {
          width: 100%;
          height: auto;
        }
      }
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(28, 97, 132, .3);
      transition: opacity .5s;
      pointer-events: none;

      .hand {
        width: size-m(22.34);
        top: size-m(310.5 - 130);
        left: size-m(176.33);
        cursor: pointer;
        transition: opacity .5s;
        animation: swing 3s linear 0s infinite;
        pointer-events: none;
        @media screen and (min-width:768px) {
          display: none;
        }
      }

      .hand-label {
        width: size-m(290);
        top: size-m(292 - 130);
        left: size-m(42.5);
      }
    }
  }

  .content {
    padding: size-m(37) size-m(30);
    text-align: justify;
    font-size: size-m(12);
    font-weight: 500;
    line-height: size-m(21);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(144);
      right: size(85);
      width: size(454);
      padding: 0;
      font-size: size(15);
      line-height: size(29);
      color: #fff;
    }

    .t1 {
      text-align: center;
      font-size: size-m(18);
      font-weight: 500;
      line-height: size-m(22);
      padding-bottom: size-m(13);
      border-bottom: size-m(2) solid #9F223D;
      margin-bottom: size-m(10);
      @media screen and (min-width:768px) {
        text-align: left;
        font-size: size(18);
        line-height: size(22);
        padding-bottom: size(19);
        border-bottom: size(2) solid #9F223D;
        margin-bottom: size(16);
        color: #fff;
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue';

const scrollable = ref();

function onImgLoad(e) {
  const img = e.target;
  if (scrollable.value && img) {
    let status = 0;
    let hideHand = false;
    scrollable.value.scrollLeft = img.clientWidth * 0.585 - window.innerWidth/2;
    scrollable.value.addEventListener("scroll", () => {
      status++;
      if(status > 1 && !hideHand){
        scrollable.value.parentNode.querySelector('.mask').style.opacity = 0;
        hideHand = true;
      }
    });
  }
}
</script>