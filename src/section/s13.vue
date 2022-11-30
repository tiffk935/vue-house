<template>
  <section class="s13 relative">
    <img class="bg absolute md:hidden" src="@/section/s13/bg-m.png" />
    <img class="bg absolute hidden md:block" src="@/section/s13/bg.png" />
    <div class="text absolute">
      <div class="title text-[#CFA123]">邂逅 迷人生活</div>
      <div class="t1">值得期待 回家這件事</div>
      <div class="t2">涵仰迎賓大廳</div>
      <div class="t3">木質書架搭配木質地板，溫潤舒適的空間氛<br>圍，讓親子都能安心放鬆，共享溫馨時光。</div>
    </div>
    <div class="text-white">3D示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
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

  .text {
    top: size-m(38);
    width: 100%;
    padding: 0 size-m(30);
    text-align: center;
    font-family: 'Noto Serif TC';
    color: #fff;
    @media screen and (min-width:768px) {
      top: size(62);
      padding: 0 size(560);
    }
  }

  .title {
    font-size: size-m(25);
    font-weight: 800;
    line-height: 1;
    border-bottom: 1px solid #CFA123;
    padding-bottom: size-m(10);
    margin-bottom: size-m(14);
    @media screen and (min-width:768px) {
      font-size: size(40);
      padding-bottom: size(30);
      margin-bottom: size(30);
    }
  }

  .t1, .t2 {
    font-size: size-m(20);
    font-weight: 700;
    line-height: 1;
    margin-bottom: size-m(29);
    @media screen and (min-width:768px) {
      font-size: size(30);
      margin-bottom: size(50);
    }
  }

  .t2 {
    margin-bottom: size-m(17);
    @media screen and (min-width:768px) {
      margin-bottom: size(20);
    }
  }

  .t3 {
    font-size: size-m(13);
    line-height: size-m(20);
    font-weight: 600;
    letter-spacing: 0.2em;
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: size(30);
    }
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
      right: size(10);
    }
  }
}

</style>

<script setup>
</script>