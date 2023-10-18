<template>
  <section class="s6 relative text-[#B68C67]">
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">家的延伸 Life is a journey<br>公設旅程藝境 飯店美好之域</div>
    <div class="img1 absolute">
      <img src="@/section/s6/img1.jpg" />
      <div class="txt">大廳3D合成示意圖</div>
    </div>
    <div class="img2 absolute" data-aos="fade-up" data-aos-delay="0">
      <img src="@/section/s6/img2.jpg" />
      <div class="txt">食堂3D合成示意圖</div>
    </div>
    <div class="t2 absolute">
      Life finds its wealth by the claims of the world, and its worth by the claims of love.
    </div>
    <div class="img3 absolute" data-aos="fade-up" data-aos-delay="200">
      <img src="@/section/s6/img3.jpg" />
      <div class="txt">健身房3D合成示意圖</div>
    </div>
    <div class="t3 absolute">公設設計 常季設計-張立人</div>
    <div class="img4 absolute" data-aos="fade-up" data-aos-delay="400">
      <img src="@/section/s6/img4.jpg" />
    </div>
    <img class="style absolute" src="@/section/s6/style.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s6 {
  width: 100%;
  height: size-m(1073);
  z-index: 1;
  background: #FFFFFF;
  @media screen and (min-width:768px) {
    height: size(1566);
  }

  .t1 {
    left: size-m(48.5);
    top: size-m(31.17);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(22);
    line-height: size-m(26);
    white-space:nowrap;
    @media screen and (min-width:768px) {
      left: size(58.25);
      top: size(53.17);
      font-size: size(45);
      line-height: size(54);
    }
  }

  .img1, .img2, .img3, .img4 {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .txt {
    position: absolute;
    left: size-m(5);
    bottom: size-m(5);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(14);
    letter-spacing: 0.05em;
    color: #FFFFFF;
    text-shadow: size-m(0) size-m(2) size-m(3) rgba(0, 0, 0, 0.8);
    @media screen and (min-width:768px) {
      left: size(10);
      bottom: size(10);
      font-size: size(15);
      line-height: size(18);
      text-shadow: size(0) size(2) size(3) rgba(0, 0, 0, 0.8);
    }
  }

  .img1 {
    width: size-m(375);
    height: size-m(170);
    left: size-m(0);
    top: size-m(111.11);
    @media screen and (min-width:768px) {
      width: size(1920);
      height: size(870.4);
      left: size(0);
      top: size(213.11);
    }
  }

  .img2 {
    width: size-m(300);
    height: size-m(190);
    left: size-m(37.5);
    top: size-m(301.11);
    @media screen and (min-width:768px) {
      width: size(570);
      height: size(361);
      left: size(95);
      top: size(1134.41);
    }
  }

  .t2 {
    left: size-m(22.5);
    top: size-m(516.11);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(14);
    @media screen and (min-width:768px) {
      left: size(1034.75);
      top: size(167.17);
      font-size: size(20);
      line-height: size(24);
    }
  }

  .img3 {
    width: size-m(300);
    height: size-m(190);
    left: size-m(37.5);
    top: size-m(628.33);
    @media screen and (min-width:768px) {
      width: size(570);
      height: size(361);
      left: size(685);
      top: size(1134.41);
    }
  }

  .t3 {
    left: size-m(22.5);
    top: size-m(860.33);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(14);
    @media screen and (min-width:768px) {
      left: size(1275);
      top: size(1231.33);
      font-size: size(20);
      line-height: size(24);
    }
  }

  .img4 {
    width: size-m(330);
    height: size-m(135);
    left: size-m(22.5);
    top: size-m(888.33);
    @media screen and (min-width:768px) {
      width: size(550);
      height: size(225);
      left: size(1275);
      top: size(1270.41);
    }
  }

  .style {
    width: size-m(107);
    left: size-m(230.5);
    top: size-m(539.82);
    transform: skewX(7deg);
    transform-origin: bottom left;
    animation: skew 5s linear infinite alternate;
    @media screen and (min-width:768px) {
      width: size(203.5);
      left: size(1658.25);
      top: size(1093.31);
    }
  }
}
</style>

<script setup>
</script>
