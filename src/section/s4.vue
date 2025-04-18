<template>
  <section class="s4 user-n w-full relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s4/map.jpg" @load="onImgLoad($event)" />
      <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s4/map2.svg" />
    </div>
    
    <img class="hand-bg absolute md:hidden" src="@/section/s4/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s4/hand.svg" />

    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>

    <div class="content absolute">
      <div class="title" data-aos="fade-up" data-aos-delay="0">新蘆特區正核心 <br class="md:hidden">洲子洋天選地標</div>
    </div>
    <div class="info absolute">日進學外觀3D鳥瞰示意圖</div>
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

.s4 {
  overflow: hidden;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: auto;
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
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
      }
    }
  }

  .hand {
    width: size-m(22.34);
    top: size-m(310.5);
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
    padding-top:size-m(0);
    bottom: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }

  .content {
    width: 100%;
    top: size-m(60);
    left: 0;
    color: #FFF;
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(77);
    }

    .title {
      font-size: size-m(28);
      font-weight: 700;
      line-height: 123%;
      letter-spacing: .05em;
      @media screen and (min-width:768px) {
        font-size: size(78);
      }
    }
  }

  .info {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      bottom: size(10);
      left: size(20);
      color: #FFF;
      text-shadow: 0px 0px size(3) rgba(0, 0, 0, 0.50);
      font-family: "Noto Sans TC";
      font-size: size(15);
      font-weight: 700;
      line-height: 160%;
      letter-spacing: .05em;
    }
  }

  .cir1 {
    top: size-m(-80);
    right: size-m(9);
    width: size-m(149);
    height: size-m(149);
    border-radius: 50%;
    background: linear-gradient(135deg, #E50012 14.65%, #7E151A 85.36%);
    transform: translateY(-50%);
    animation: ball 10s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(-180);
      right: size(721);
      width: size(266);
      height: size(266);
      transform: translateY(-50%);
    }
  }

  .cir2 {
    top: size-m(89);
    left: size-m(-11.5);
    width: size-m(36);
    height: size-m(36);
    border-radius: 50%;
    background: linear-gradient(135deg, #E50012 14.65%, #7E151A 85.36%);
    transform: translateY(15vw);
    animation: ball 7s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(196);
      left: size(151);
      width: size(63);
      height: size(63);
      transform: translateY(5vw);
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
    map.value.scrollLeft = img.clientWidth * 0.51 - window.innerWidth/2;
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