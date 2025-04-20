<template>
  <section class="s9 user-n w-full relative md:flex md:justify-between">
    <div class="content relative">
      <img class="logo absolute" src="@/section/s9/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <img class="main absolute" src="@/section/s9/main.png" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
      <img class="t1 absolute" src="@/section/s9/t1.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <img class="title absolute" src="@/section/s1/title.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    </div>
    <div class="gmap relative z-10">
      <iframe :src="info.googleSrc" frameborder="0"></iframe>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  background: #9F223D;

  .content {
    height: size-m(579);
    @media screen and (min-width:768px) {
      width: size(960);
      height: size(1080);
    }

    .logo {
      top: size-m(30);
      left: size-m(86);
      width: size-m(203);
      @media screen and (min-width:768px) {
        top: size(72);
        left: size(253);
        width: size(454.17);
      }
    }

    .main {
      top: size-m(136);
      left: size-m(115);
      width: size-m(144);
      @media screen and (min-width:768px) {
        top: size(312);
        left: size(362);
        width: size(236);
      }
    }

    .t1 {
      top: size-m(296);
      left: size-m(134);
      width: size-m(106.47);
      @media screen and (min-width:768px) {
        top: size(604);
        left: size(412);
        width: size(137);
      }
    }

    .title {
      top: size-m(417.45);
      left: size-m(60);
      width: size-m(255.22);
      @media screen and (min-width:768px) {
        top: size(780);
        left: size(215);
        width: size(529.1);
      }
    }
  }

  .gmap {
  width: 100%;
  height: size-m(288);
  @media screen and (min-width:768px) {
    width: calc(100% - size(960));
    height: size(1080);
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}
}
</style>

<script setup>
import info from '@/info';
</script>