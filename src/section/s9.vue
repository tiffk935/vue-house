<template>
  <section class="s9 text-[#333333] bg-[#EBEBEB] relative">
    <img class="img absolute" src="@/section/s9/img.png" />
    <div class="deco absolute">
      <img class="md:hidden" src="@/section/s9/deco-m.png" />
      <img class="hidden md:block" src="@/section/s9/deco.png" />
    </div>
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="title-en">ARCHITECTURE FACE</div>
      <div class="title">壯闊1950坪基地</div>
      <div class="subtitle">森綠環抱 繁華偕行</div>
    </div>
    <div class="txt absolute">外觀3D合成示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes snow1 {
  75% {
    width: size-m(370);
    border-radius: 0 0 0 0%;
    opacity: 1;
  }
  80% {
    width: size-m(370);
    opacity: 0;
    border-radius: 0 100% 0 0%;
  }
  100% {
    width: size-m(370);
    opacity: 0;
    border-radius: 0 100% 0 0%;
  }
}

@keyframes snow2 {
  75% {
    width: size(1035);
    border-radius: 0 0 0 0%;
    opacity: 1;
  }
  80% {
    width: size(1035);
    opacity: 0;
    border-radius: 0 100% 0 0%;
  }
  100% {
    width: size(1035);
    opacity: 0;
    border-radius: 0 100% 0 0%;
  }
}

.s9 {
  width: 100%;
  height: size-m(534.21);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(960);
  }

  // .deco {
  //   top: size-m(71.6);
  //   left: size-m(-8.56);
  //   width: size-m(370);
  //   @media screen and (min-width:768px) {
  //     top: size(-641.13);
  //     left: size(598);
  //     width: size(1035);
  //     transform: rotate(-76.96deg);
  //   }
  // }

  
  .deco {
    top: size-m(71.6);
    left: size-m(-8.56);
    width: 0;
    height: size-m(570);
    border-radius: 0 0 0 100%;
    animation: snow1 8s infinite;
    overflow: hidden;
    @media screen and (min-width:768px) {
      top: size(-500);
      left: size(253);
      // width: size(1035);
      height: size(1671);
      // transform: rotate(-76.96deg);
      animation: snow2 8s infinite;
    }

    img {
      width: size-m(370);
      height: 100%;
      max-width: none;
      @media screen and (min-width:768px) {
        width: size(1035);
      }
    }
  }

  


  .text {
    top: size-m(47.1);
    left: size-m(0);
    width: size-m(375);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(374.51);
      left: size(274);
      width: auto;
    }

    .title-en {
      font-family: 'Cormorant Garamond';
      font-size: size-m(25);
      line-height: size-m(22);
      color: #A98162;
      margin-bottom: size-m(10);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(49);
        line-height: size(54);
        margin-bottom: size(16.87);
      }
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(27);
      line-height: size-m(46);
      letter-spacing: 0.17em;
      @media screen and (min-width:768px) {
        font-size: size(53);
        line-height: size(90);
      }
    }

    .subtitle {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(25);
      line-height: size-m(43);
      transform: translateY(-4vw);
      @media screen and (min-width:768px) {
        font-size: size(47);
        line-height: size(80);
        transform: translateY(-1.5vw);
      }
    }
  }

  .img {
    top: size-m(148.6);
    left: size-m(-177.06);
    width: size-m(709);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-11.98);
      left: size(424);
      width: size(1782);
    }
  }

  .txt {
    color: #fff;
    font-size: size-m(12);
    line-height: size-m(12);
    position: absolute;
    bottom: size-m(7.21);
    right: size-m(11.4);
    text-shadow: size-m(1) size-m(1) size-m(2) rgba(0, 0, 0, 0.5);
    @media screen and (min-width:768px) {
      font-size: size(15);
      line-height: size(12);
      bottom: size(15.21);
      right: size(110.4);
      text-shadow: size(1) size(1) size(2) rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

<script setup>
</script>
