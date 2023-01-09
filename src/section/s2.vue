<template>
  <section class="s2 relative text-white">
    <div class="map relative">
      <img loading="lazy" class="map1" src="@/section/s2/map.jpg" />
    </div>
    <div class="rect absolute"></div>
    <img loading="lazy" class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img loading="lazy" class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="title" data-aos="fade-up" data-aos-delay="0">
      <div class="t1 text-white">淡北快通車價值無限</div>
      <div class="t2">北士科優質生活腹地</div>
      <div class="content">
        基地緊鄰未來淡北快速道路入口，速抵北市區域；淡江大橋、輕軌藍海第二期等建設完工後，將大幅解決區域交通問題。坐擁豐富生活機能、珍稀山水綠意、捷運及快速道路，紅樹林已成北士科菁英優質生活首選
      </div>
    </div>
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
      height: size-m(451);
      margin-top: size-m(667 - 451);
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
    background: linear-gradient(180deg, rgba(15, 107, 182, 0) 9.67%, #0F6BB6 43.77%);
    transform: rotate(-180deg);
    transform-origin: center;
    width: 100%;
    height: size-m(336);
    top: 0;
    left: 0;
    pointer-events: none;
    @media screen and (min-width:768px) {
      height: size(714);
      opacity: 0;
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
      top: size(100);
      padding: 0 0 0 size(170);
      text-align: left;
    }
    
    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(48);
        margin-bottom: size(12);
      }
    }

    .t2 {
      font-size: size-m(20);
      font-weight: 700;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(36);
        margin-bottom: size(28);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: 1.7;
      @media screen and (min-width:768px) {
        font-size: size(18);
        width: size(650);
      }
    }
  }
}
</style>

<script setup>
</script>