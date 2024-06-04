<template>
  <section class="s2 user-n relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s2/map.jpg" @load="onImgLoad($event)" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="content absolute">
      <div>
        <div class="title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">盛世北士科，新洲美元年</div>
        <div class="line" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"></div>
      </div>
      <div class="txt" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">串連內科2.0計劃、南港生技聚落計劃，台北立足國際最重要城市戰略，下一輪繁榮盛世就看北士科。300億金仁寶總部、中鼎集團第二總部、新光雙塔一一就位，十兆產值蓄勢待發，超過30家一線建商投入建設，國際北士科超速啟動，軟橋段先發，新洲美劇力萬鈞隆重壓軸，達麗建設「新洲美元年」啟動。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  z-index: 1;
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
  height: size-m(720);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    padding: size-m(0) 0 0 0;
    @media screen and (min-width:768px) {
      overflow: hidden;
      padding:0;
    }

    img {
      width: auto;
      height: size-m(430);
      margin-top: size-m(430 - 430);
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
    top: size-m(203.5);
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
    padding-top: size-m(0);
    top: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }

  .content {
    width: size-m(270);
    top: size-m(467);
    left: size-m(52.5);
    font-size: size-m(14);
    font-weight: 500;
    color: #333333;
    font-family: 'Noto Serif TC';
    line-height: 1.7;
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(1628);
      top: size(910);
      left: size(148);
      font-size: size(20);
      display: flex;
      justify-content: space-between;
    }

    .title {
      color: #002B69;
      line-height: 1.2;
      font-weight: 700;
      font-size: size-m(18);
      letter-spacing: .06em;
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-bottom: size(39);
      }
    }

    .line {
      width: size-m(220);
      height: size-m(1);
      background: #666666;
      margin-bottom: size-m(13);
      @media screen and (min-width:768px) {
        width: size(461);
        height: size(1);
        background: #666666;
        margin-bottom: size(0);
      }
    }

    .txt {
      @media screen and (min-width:768px) {
        width: size(1036);
      }
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
    map.value.scrollLeft = img.clientWidth * 0.444 - window.innerWidth/2;
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