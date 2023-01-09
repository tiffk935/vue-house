<template>
  <section class="s9 relative">
    <img loading="lazy" class="bg absolute hidden md:block" src="@/section/s9/bg.jpg" />
    <img loading="lazy" class="bg absolute md:hidden" src="@/section/s9/bg-m.jpg" />
    <div class="leaf1 absolute">
      <img loading="lazy" class="w-full block" src="@/section/s9/leaf.png" />
    </div>
    <div class="leaf2 absolute">
      <img loading="lazy" class="w-full block" src="@/section/s9/leaf.png" />
    </div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">紅樹林生活圈</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">高坪效1-4房</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  width: 100%;
  height: size-m(263);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(476);
  }

  .bg {
    width: 100%;
    height: 100%;
  }

  .t1 {
    // width: size-m(210);
    top: size-m(90);
    // left: size-m(82);
    width: 100%;
    left: 0;
    font-family: 'Noto Serif TC';
    font-weight: 800;
    font-size: size-m(35);
    line-height: size-m(24);
    text-align: center;
    color: #fff;
    @media screen and (min-width:768px) {
      font-weight: 700;
      width: size(480);
      top: size(156);
      left: size(720);
      font-size: size(80);
      line-height: size(94);
    }
  }

  .t2 {
    width: size-m(210);
    top: size-m(135);
    left: size-m(82);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(25);
    line-height: size-m(38);
    text-align: center;
    color: #000;
    border-top: size-m(1) solid #000;
    border-bottom: size-m(1) solid #000;
    @media screen and (min-width:768px) {
      width: size(352);
      top: size(272);
      left: size(780);
      font-size: size(48);
      line-height: size(56.64);
      border-top: size(1) solid #000;
      border-bottom: size(1) solid #000;
    }
  }

  .leaf1 {
    top: -32.5vw;
    left: -28.5vw;
    animation: tree1 5s ease-in-out alternate infinite;
    transform-origin: 0% 0%;
    @media screen and (min-width:768px) {
      top: -11.5vw;
      left: -6.5vw;
    }

    img {
      max-width: none;
      width: size-m(261.19);
      transform: matrix(-0.63, -0.78, -0.78, 0.63, 0, 0);
      @media screen and (min-width:768px) {
        width: size(755);
      }
    }
  }

  .leaf2 {
    left: 37.907vw;
    top: 10.413vw;
    animation: tree1 5s ease-in-out alternate infinite;
    transform-origin: 0% 100%;
    @media screen and (min-width:768px) {
      left: 54.907vw;
      top: 7.413vw;
    }

    img {
      max-width: none;
      width: size-m(274.17);
      transform: rotate(61.11deg);
      @media screen and (min-width:768px) {
        width: size(755);
        transform: rotate(23.7deg);
      }
    }
  }
}

</style>

<script setup>
</script>