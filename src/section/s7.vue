<template>
  <section class="s7 user-n relative bg-[#509CE3]">
    <div class="bg1 absolute"></div>
    <div class="bg2 absolute md:hidden"></div>
    <img class="content absolute md:hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" src="@/section/s7/content-m.svg" />
    <img class="content absolute hidden md:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" src="@/section/s7/content.svg" />
    <div class="txt absolute hidden md:block">恆河中山 建築3D示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(604);
  background-image: url(@/section/s7/bg.jpg);
  background-size: auto size-m(494.38);
  background-position: center bottom;
  background-repeat: no-repeat;
  @media screen and (min-width:768px) {
    height: size(1013);
  }

  .bg1 {
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(109.62);
    background: linear-gradient(180deg, #006FD7 0%, rgba(0, 111, 215, 0.00) 100%);
    @media screen and (min-width:768px) {
      height: size(957.11);
      top: auto;
      bottom: 0;
      background: linear-gradient(0deg, #000 4.52%, rgba(0, 0, 0, 0.00) 93.52%);
      opacity: 0.4;
      mix-blend-mode: multiply;
    }
  }

  .bg2 {
    top: size-m(109.62);
    left: 0;
    width: 100%;
    height: size-m(35);
    background: linear-gradient(180deg, #509CE3 0%, rgba(80, 155, 227, 0.00) 100%);
  }

  .content {
    top: size-m(51.8);
    left: size-m(49.05);
    width: size-m(276.9);
    @media (min-width: 768px) {
      top: size(357.25);
      left: size(303.25);
      width: size(1299.65);
    }
  }

  .txt {
    @media (min-width: 768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(15);
      color: #fff;
    }
  }
}

</style>

<script setup>
</script>