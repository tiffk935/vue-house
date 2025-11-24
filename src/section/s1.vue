<template>
  <section class="s1 user-n w-full relative text-white text-center">
    <div class="inner">
      <img class="logo block" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="t1 font-['Noto_Serif_TC'] font-bold relative">跟著富旺去渡假</div>
        <div class="line"></div>
        <div class="t2 font-medium">富旺國際  矽品金馬商圈</div>
      </div>
      <img class="star block md:hidden" src="@/section/s1/star.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
      <img class="people block" src="@/section/s1/people.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <div class="t3 font-bold text-[#C59B6D]">開啟大台中+北彰化雙城跳島人生</div>
        <img class="en block" src="@/section/s1/en.svg" />
      </div>
    </div>
    <div class="line-block bg-[#E3750F]">
      <div class="line-block-inner bg-[#796A56] h-full"></div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  .inner {
    padding: size-m(85) 0 size-m(102) 0;
    background-image: url(@/section/s1/bg.jpg);
    background-size: size-m(1913) auto;
    background-position: size-m(-672) size-m(-123);
    background-repeat: no-repeat;
    @media screen and (min-width:768px) {
      padding: size(35) 0 size(32) 0;
      background-size: size(2006) auto;
      background-position: size(-185.68) size(-316.3);
    }
  }

  .line-block {
    width: 100%;
    height: size-m(26);
    @media screen and (min-width:768px) {
      height: size(28);
    }

    .line-block-inner {
      width: size-m(58);
      @media screen and (min-width:768px) {
        width: size(254.55);
      }
    }
  }

  .logo {
    width: size-m(239);
    margin: 0 auto size-m(44) auto;
    @media screen and (min-width:768px) {
      width: size(212);
      margin: 0 auto size(28) auto;
    }
  }

  .t1 {
    display: inline-block;
    font-size: size-m(38);
    line-height: size-m(46);
    padding: 0 size-m(10);
    margin: 0 auto size-m(8) auto;
    @media screen and (min-width:768px) {
      font-size: size(41);
      line-height: size(46);
      padding: 0 size(12);
      margin: 0 auto size(13) auto;
    }

    &:before, &:after {
      content: '';
      width: size-m(1.17);
      height: size-m(19.4);
      background: #fff;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      @media screen and (min-width:768px) {
        width: size(1.17);
        height: size(19.4);
      }
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  }

  .line {
    width: size-m(67);
    height: size-m(1);
    background: #F5F5F5;
    margin: 0 auto size-m(11) auto;
    @media screen and (min-width:768px) {
      width: size(65);
      height: size(1);
      margin: 0 auto size(13) auto;
    }
  }

  .t2 {
    font-size: size-m(23);
    line-height: size-m(28);
    margin: 0 auto size-m(26) auto;
    @media screen and (min-width:768px) {
      font-size: size(23);
      line-height: size(28);
      margin: 0 auto size(10) auto;
    }
  }

  .star {
    width: size-m(26);
    margin: 0 auto size-m(30) auto;
  }

  .people {
    width: size-m(303);
    margin: 0 auto size-m(12) auto;
    @media screen and (min-width:768px) {
      width: size(977.62);
      margin: 0 auto size(17) auto;
    }
  }

  .t3 {
    width: calc(100% - size-m(50));
    padding: size-m(7) 0;
    font-size: size-m(22);
    line-height: size-m(27);
    border-top: size-m(0.62) solid #C59B6D;
    border-bottom: size-m(0.62) solid #C59B6D;
    margin: 0 auto size-m(16) auto;
    white-space: nowrap;
    @media screen and (min-width:768px) {
      width: size(974);
      padding: size(13) 0;
      font-size: size(23);
      line-height: size(28);
      border-top: size(0.64) solid #C59B6D;
      border-bottom: size(0.64) solid #C59B6D;
      margin: 0 auto size(11) auto;
    }
  }

  .en {
    width: calc(100% - size-m(50));
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(348.77);
    }
  }
}
</style>

<script setup>
</script>
