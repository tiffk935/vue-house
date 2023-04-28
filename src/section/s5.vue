<template>
  <section class="s5 relative text-white">
    <div class="rect absolute"></div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">延續寧靜的力量「研森」最美生活</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">
      層峰人仕與企業CEO鍾情的生活聚落<br>
      「研森」選址環境馥雅、視野開闊，綠林聚落為鄰<br>
      精品中的精品!
    </div>
    <img class="img1 absolute" src="@/section/s5/img1.jpg" />
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">建築團隊 大磊聯合建築師事務所</div>
    <img class="img2 absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s5/img2.jpg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  height: size-m(660);
  background-image: url(@/section/s5/bg.jpg);
  background-position: center center;
  background-size: cover;
  @media screen and (min-width:768px) {
    height: size(960);
  }

  .rect {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #006934;
    mix-blend-mode: multiply;
    opacity: 0.6;
  }

  .t1 {
    left: size-m(22);
    top: size-m(34);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(22);
    line-height: size-m(32);
    white-space:nowrap;
    @media screen and (min-width:768px) {
      left: size(1038.58);
      top: size(113);
      font-size: size(45);
      line-height: size(65);
    }
  }

  .t2 {
    left: size-m(22);
    top: size-m(70);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(17);
    @media screen and (min-width:768px) {
      left: size(1038.58);
      top: size(196.36);
      font-size: size(20);
      line-height: size(30);
    }
  }

  .img1 {
    width: size-m(325);
    height: size-m(265);
    left: size-m(25);
    top: size-m(144);
    object-fit: cover;
    @media screen and (min-width:768px) {
      width: size(900.18);
      height: size(733.99);
      left: size(95);
      top: size(113);
    }
  }

  .t3 {
    left: size-m(22);
    top: size-m(444);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(15);
    line-height: size-m(22);
    @media screen and (min-width:768px) {
      left: size(1038.58);
      top: size(480);
      font-size: size(20);
      line-height: size(29);
    }
  }

  .img2 {
    width: size-m(328);
    height: size-m(132);
    left: size-m(22);
    top: size-m(476);
    object-fit: cover;
    @media screen and (min-width:768px) {
      width: size(786.42);
      height: size(316.49);
      left: size(1038.58);
      top: size(530.51);
    }
  }
}
</style>

<script setup>
</script>
