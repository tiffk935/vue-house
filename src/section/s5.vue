<template>
  <section class="s5 relative">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1 text-[#6E4D3B] font-['Noto_Serif_TC']">國際頂規精品建材<br>工藝美學生活饗宴</div>
      <div class="t2">媲美精品豪宅規格，精選國際指標建材，兼具專業<br class="hidden md:block">工藝與品味美學，讓生活的每一個角落都無懈可擊。</div>
    </div>
    <div class="marquee">
      <Splide
        :options="{
          autoWidth: true,
          arrows: false,
          autoplay: true,
          pagination: false,
          drag: true,
          interval: 5000,
          speed: 5000,
          snap: false,
          easing: 'linear',
          gap: 0,
          type: 'loop',
          perMove: 1
        }"
      >
        <SplideSlide><img src="@/section/s5/logo/01.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/02.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/03.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/04.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/05.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/06.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/07.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/09.svg" /></SplideSlide>
        <SplideSlide><img src="@/section/s5/logo/10.svg" /></SplideSlide>
      </Splide>
    </div>
    <div class="img"></div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  background: #E3DCCC;
  padding: size-m(90) 0 0 0;
  @media screen and (min-width:768px) {
    padding: size(97) 0 0 0;
  }

  .t1 {
    font-size: size-m(24);
    line-height: size-m(38);
    text-align: center;
    font-weight: 500;
    letter-spacing: .18em;
    margin: 0 0 size-m(10) 0;
    text-align: center;
    @media screen and (min-width:768px) {
      font-size: size(52);
      line-height: size(85);
      margin: 0 0 size(70) 0;
      letter-spacing: .2em;
    }
  }

  .t2 {
    padding: 0 size-m(30);
    font-size: size-m(13);
    line-height: size-m(26);
    letter-spacing: .03em;
    text-align: justify;
    margin-bottom: size-m(79);
    @media screen and (min-width:768px) {
      padding: 0;
      font-size: size(23);
      line-height: size(41);
      width: size(545);
      margin: 0 auto size(116) auto;
    }
  }

  .marquee {
    padding: size-m(16) 0;
    background: #BB8A5A;
    position: relative;
    @media screen and (min-width:768px) {
      padding: size(42) 0;
    }

    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      width: size-m(38);
      height: 100%;
      mix-blend-mode: multiply;
      @media screen and (min-width:768px) {
        width: size(194);
      }
    }

    &:before {
      left: 0;
      background: linear-gradient(270deg, rgba(187,131,98,0) 0%, rgba(186,130,97,0.03) 14%, rgba(185,128,96,0.11) 29%, rgba(183,125,94,0.24) 45%, rgba(180,122,92,0.42) 62%, rgba(176,117,88,0.66) 80%, rgba(171,111,84,0.95) 97%, rgba(171,110,84,1) 100%);
    }

    &:after {
      right: 0;
      background: linear-gradient(90deg, rgba(187,131,98,0) 0%, rgba(186,130,97,0.03) 14%, rgba(185,128,96,0.11) 29%, rgba(183,125,94,0.24) 45%, rgba(180,122,92,0.42) 62%, rgba(176,117,88,0.66) 80%, rgba(171,111,84,0.95) 97%, rgba(171,110,84,1) 100%);
    }

    .splide__slide {
      height: size-m(19);
      margin-right: size-m(50);
      @media screen and (min-width:768px) {
        height: size(42);
        margin-right: size(100);
      }

      img {
        display: block;
        width: auto;
        height: 100%;
      }
    }
  }

  .img {
    width: 100%;
    height: size-m(305);
    background-image: url(@/section/s5/img-m.webp);
    background-size: cover;
    background-position: bottom center;
    @media screen and (min-width:768px) {
      height: size(485);
      background-image: url(@/section/s5/img.webp);
    }
  }
}
</style>

<script setup>
// import {computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue"
// const globals = getCurrentInstance().appContext.config.globalProperties;
// const isMobile = computed(() => globals.$isMobile());
</script>