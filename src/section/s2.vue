<template>
  <section class="s2 relative">
    <div class="map relative">
      <img loading="lazy" class="map1" src="@/section/s2/map.jpg" />
    </div>
    <div class="rect absolute"></div>
    <img loading="lazy" class="hand-bg absolute md:hidden" src="@/section/s2/hand-bg.svg" />
    <img loading="lazy" class="hand absolute md:hidden" src="@/section/s2/hand.svg" />
    <div class="title">
      <div class="t1" data-aos="fade-down" data-aos-delay="0">青埔指標地段　<br class="md:hidden">京硯繁華眼界</div>
      <div class="content" data-aos="fade-down" data-aos-delay="100">
        一步A18，走進A19，獨擁青塘園、美術館藝文核心，串聯高鐵、機捷，四通八達的交通織網，繁華都心與優質生活同時擁有！
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
      transform: translateX(-20%);
    }
    50% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(30%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  background: #F5F5F5;
  width: 100%;
  height: size-m(800);
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
      height: size-m(550);
      margin-top: size-m(800 - 550);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: size(1620);
        height: auto;
        margin-top: size(260.08);
        margin-left: size(150);
      }
    }
  }
  .hand {
    width: size-m(22.36);
    top: size-m(537.99);
    left: size-m(175);
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
    // background: linear-gradient(180deg, rgba(15, 107, 182, 0) 9.67%, #0F6BB6 43.77%);
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
    top: size-m(44.5);
    left: size-m(32);
    width: 100%;
    padding: 0 size-m(32);
    @media screen and (min-width:768px) {
      top: size(138.92);
      left: size(299);
      padding: 0 0 0 size(27.57);
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: size-m(2);
      height: 100%;
      background: linear-gradient(0.72deg, #896532 0%, #A27C47 11%, #B8915B 24%, #C09962 32%, #C39E68 39%, #CEAD7B 48%, #DFC59A 58%, #EFDCB6 66%, #DABC8D 74%, #C9A36B 81.01%, #BD9152 88.01%, #B58544 94.01%, #B3823F 99.01%);
      @media screen and (min-width:768px) {
        width: size(2);
        height: size(200);
        top: auto;
        bottom: -1vw;
      }
    }
    
    .t1 {
      font-size: size-m(25);
      line-height: size-m(35);
      font-weight: 600;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(11);
      @media screen and (min-width:768px) {
        font-size: size(44);
        line-height: size(62);
        margin-bottom: size(5.5);
      }
    }

    .content {
      font-size: size-m(14);
      line-height: size-m(25.2);
      width: size-m(220);
      letter-spacing: 0.01em;
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(36);
        width: auto;
      }
    }
  }
}
</style>

<script setup>
</script>