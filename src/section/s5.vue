<template>
  <section class="s5 relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s5/map.webp" @load="onImgLoad($event)" />
    </div>
    <!-- -->
    <img class="rect absolute top-0 left-0 w-full pointer-events-none md:hidden" src="@/section/s5/rect.svg" />
    <!-- <img class="hand-bg absolute md:hidden" src="@/section/s3/hand-bg.svg" /> -->
    <img class="hand absolute md:hidden" src="@/section/s5/hand.svg" />
    <div class="text absolute text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">新時代 Art Deco能量美學</div>
      <div class="t2">全區指標級，大享開闊視野、方正美地，以名門裝飾元素Art Deco工藝御用款，表達建築優雅大器、別具特色的新時代建築風格。</div>
    </div>
    <div class="info absolute text-white pointer-events-none">建築外觀3D情境示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(557);
  background: #E5005C;
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
      height: size-m(400);
      margin-top: size-m(607 - 449);
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
    top: size-m(304);
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
    //padding-top:size-m(20);
    bottom:0;height: 100%;
    object-fit: cover;

    left: 0;
    transition: opacity .5s;
    pointer-events: none;
    background: #005BB866;
  }

  .text {
    width: 100%;
    top: size-m(80);
    left: 0;
    text-align: center;
    padding: 0 size-m(30);z-index: 13;
    @media screen and (min-width:768px) {
      width: size(671);
      top: size(192);
      left: size(960);
      padding: 0;
      text-align: left;
    }

    .t1 {
      font-size: size-m(25);
      line-height: size-m(34);
      margin-bottom: size-m(13);
      font-weight: 700;
      @media screen and (min-width:768px) {
        font-size: size(58);
        line-height: size(79);
        margin-bottom: size(24);
      }
    }

    .t2 {
      font-size: size-m(14);
      line-height: 178%;
      @media screen and (min-width:768px) {
        font-size: size(18);
        letter-spacing: 0.04em;
      }
    }
  }

  .info {
    bottom: size-m(12);
    right: size-m(10);
    font-size: size-m(12);
    @media screen and (min-width:768px) {
      bottom: size(24);
      right: size(39);
      font-size: size(17);
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
    map.value.scrollLeft = img.clientWidth * 0.5 - window.innerWidth/2;
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