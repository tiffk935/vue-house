<template>
  <section class="s5 user-n relative">
    <div class="bg1 absolute"></div>
    <div class="bg2 absolute"></div>
    <div class="line-top absolute"></div>
    <div class="line-left absolute"></div>
    <div class="line-bottom absolute"></div>
    <img class="txt absolute" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" src="@/section/s5/txt.svg" />
    <img class="en absolute" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0" src="@/section/s5/en.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(375);
  background-image: url(@/section/s5/bg.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg1 {
    top: 0;
    right: 0;
    width: size-m(231);
    height: 100%;
    background: linear-gradient(270deg, #000 2%, rgba(0, 0, 0, 0.00) 100%);
    opacity: 0.46;
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: size(1248);
    }
  }

  .bg2 {
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(332.33);
    background: linear-gradient(0deg, #5DAED1 4.52%, rgba(87, 163, 196, 0.94) 7.24%, rgba(64, 120, 145, 0.69) 19.05%, rgba(44, 83, 100, 0.48) 31.76%, rgba(28, 53, 64, 0.31) 44.48%, rgba(16, 30, 36, 0.17) 56.28%, rgba(7, 13, 16, 0.08) 69%, rgba(1, 3, 3, 0.02) 80.8%, rgba(0, 0, 0, 0.00) 93.52%);
    opacity: 0.2;
    mix-blend-mode: color;
    @media screen and (min-width:768px) {
      height: size(957.11);
    }
  }
  
  .line-top {
    top: size-m(31);
    left: size-m(23.35);
    width: size-m(283);
    height: size-m(2);
    background: #fff;
    @media screen and (min-width:768px) {
      top: size(92.28);
      left: size(92);
      width: size(1640 - 30);
      height: size(3);
    }
  }

  .line-left {
    top: size-m(31);
    left: size-m(23.35);
    width: size-m(2);
    height: size-m(318);
    background: #fff;
    @media screen and (min-width:768px) {
      top: size(92.28);
      left: size(92);
      width: size(3);
      height: size(908.74);
    }
  }

  .line-bottom {
    top: size-m(31 + 318 - 2);
    left: size-m(23.35);
    width: size-m(121);
    height: size-m(2);
    background: #fff;
    @media screen and (min-width:768px) {
      top: size(92.28 + 908.74 - 3);
      left: size(92);
      width: size(1180 - 30);
      height: size(3);
      background: #fff;
    }
  }

  .txt {
    top: size-m(276.45);
    left: size-m(82.91);
    width: size-m(223.22);
    @media (min-width: 768px) {
      top: size(792.2);
      left: size(1060);
      width: size(639.46);
    }
  }

  .en {
    top: size-m(12.5);
    left: size-m(322);
    width: size-m(40.67);
    @media (min-width: 768px) {
      top: size(58);
      left: auto;
      right: size(29);
      width: size(114);
    }
  }
}

</style>

<script setup>
</script>