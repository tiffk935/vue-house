<template>
  <section class="s12 relative">
    <img class="bg absolute md:hidden" src="@/section/s12/bg-m.png" />
    <img class="bg absolute hidden md:block" src="@/section/s12/bg.png" />
    <img class="tree absolute" src="@/section/s12/tree.png" />
    <div class="img-wrapper absolute">
      <img class="img" src="@/section/s12/img.png" />
      <div class="text-white">情境示意圖</div>
    </div>
    <img class="logo absolute" data-aos="fade-down" data-aos-delay="0" src="@/section/s12/logo.svg" />
    <div class="line absolute bg-[#000000] hidden md:block"></div>
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#005d43]">全國首創 全齡共學場域</div>
      <div class="t2">友善 共融 共好 0-99歲都可以</div>
      <div class="content">當社區完工交屋後，公共設施的經營與服務將更多元和靈活，不只舉辦社區節慶活動，更以加強居民之間的交流為目的。同時打造成適合所有年齡層都能安心、放心使用的全齡場域。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .tree {
    width: size-m(180);
    bottom: size-m(253);
    left: size-m(-10);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(313);
      bottom: size(-78);
      left: size(-74);
    }
  }

  .man {
    width: size-m(165.19);
    bottom: size-m(185);
    left: size-m(196);
    @media screen and (min-width:768px) {
      width: size(350.24);
      bottom: size(-222.37);
      left: size(156);
    }
  }

  .img-wrapper {
    width: size-m(375);
    height: size-m(299);
    bottom: size-m(0);
    left: size-m(0);
    @media screen and (min-width:768px) {
      width: size(1200);
      height: 100%;
      bottom: size(0);
      left: size(720);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .text-white {
      font-size: size-m(12);
      text-shadow: 0px 0px size-m(5) rgba(0, 0, 0, 0.8);
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      line-height: 1;
      @media screen and (min-width:768px) {
        font-size: size(12);
        text-shadow: 0px 0px size(5) rgba(0, 0, 0, 0.8);
        bottom: size(10);
        right: size(25);
      }
    }
  }

  // .img {
  //   width: size-m(375);
  //   height: size-m(299);
  //   object-fit: cover;
  //   bottom: size-m(0);
  //   left: size-m(0);
  //   @media screen and (min-width:768px) {
  //     width: size(1200);
  //     height: 100%;
  //     bottom: size(0);
  //     left: size(720);
  //   }
  // }

  .logo {
    width: size-m(151);
    top: size-m(34.54);
    left: size-m(30);
    @media screen and (min-width:768px) {
      width: size(302.67);
      top: size(300.99);
      left: size(197);
    }
  }

  .line {
    @media screen and (min-width:768px) {
      width: size(1);
      height: size(730);
      top: size(0);
      left: size(155);
    }
  }

  .text {
    padding: 0 size-m(30);
    top: size-m(85);
    left: 0;
    width: 100%;
    @media screen and (min-width:768px) {
      padding: 0 size(1300) 0 size(190);
      top: size(401);
    }

    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(12);
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(20);
      font-weight: 700;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(12);
      @media screen and (min-width:768px) {
        font-size: size(30);
        margin-bottom: size(60);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: 1.7;
      @media screen and (min-width:768px) {
        font-size: size(20);
      }
    }
  }
}

</style>

<script setup>
</script>