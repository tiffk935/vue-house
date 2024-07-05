<template>
  <section class="s2 relative bg-[#0072EF] text-white">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s2/map.jpg" @load="onImgLoad($event)" />
      <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s2/map2.svg" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="content absolute">
      <div class="t1 md:hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">「燕巢市中心」橋科前哨站<br>五大發展領航新未來</div>
      <div class="t1 hidden md:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">「燕巢市中心」橋科前哨站，五大發展領航新未來</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        立足南部S廊帶軸心點 — 橋科特區前，<br class="md:hidden">
        匯集科技、捷運、文教、醫療、市心商圈五大發展，<br>
        不僅是高雄新宜居城市，更是北高飛漲蛋黃區。
      </div>
    </div>
    <div class="info absolute">空拍實景攝影圖</div>
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
  height: size-m(759);
  @media screen and (min-width:768px) {
    height: auto;
    padding-top: size(1115 - 1080);
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    @media screen and (min-width:768px) {
      overflow: hidden;
      padding:0;
    }

    img {
      width: auto;
      height: size-m(667);
      margin-top: size-m(759 - 667);
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
    width: size-m(25);
    top: size-m(365.96);
    left: size-m(175.98);
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
    padding-top:size-m(0);
    bottom: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }

  .content {
    width: 100%;
    top: size-m(24);
    left: 0;
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(17);
    }

    .t1 {
      font-size: size-m(25);
      line-height: 144%;
      letter-spacing: 0.02em;
      margin-bottom: size-m(19);
      font-weight: 700;
      @media screen and (min-width:768px) {
        font-size: size(54);
        margin-bottom: size(34);
      }
    }

    .t2 {
      font-size: size-m(13);
      line-height: 162%;
      font-weight: 600;
      @media screen and (min-width:768px) {
        font-size: size(24);
      }
    }
  }

  .info {
    bottom: size-m(10);
    right: size-m(10);
    text-shadow: 0px size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
    font-size: size-m(12);
    font-weight: 600;
    @media screen and (min-width:768px) {
      bottom: size(14);
      right: size(30);
      text-shadow: 0px size(4) size(4) rgba(0, 0, 0, 0.55);
      font-size: size(20);
    }
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
    map.value.scrollLeft = img.clientWidth * 0.39 - window.innerWidth/2;
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