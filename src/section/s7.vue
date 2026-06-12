<template>
  <section class="s7 user-n w-full relative">
    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>
    <div class="img1 absolute" data-aos="fade-up" data-aos-delay="0">
      <img class="w-full block" src="@/section/s7/img1.jpg" />
      <div class="txt absolute">校園情境圖</div>
    </div>
    <div class="en absolute">BILINGUAL CAMPUS</div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">雙語校園第一排<br>輕鬆贏在起跑點</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">下樓就到校，上學免煩惱！</div>
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">「日進學」正面樹人百年文風鬱鬱的「成州國小」，面對全球化趨勢積極推動雙語校園計畫，讓孩童在學習中自然而然與世界接軌，沐浴知識同時涵養世界，愛子心切家庭首選！</div>
    <div class="img2 absolute" data-aos="fade-up" data-aos-delay="0">
      <img class="w-full block" src="@/section/s7/img2.jpg" />
      <div class="txt absolute">成州國小實景圖</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  height: size-m(723);
  @media screen and (min-width:768px) {
    height: size(822);
  }

  .img1, .img2 {
    .txt {
      bottom: size-m(2);
      left: size-m(10);
      color: #FFF;
      text-shadow: 0px 0px size-m(3) rgba(0, 0, 0, 0.50);
      font-family: "Noto Sans TC";
      font-size: size-m(12);
      line-height: 180%;
      @media screen and (min-width:768px) {
        bottom: .3em;
        left: .7em;
        text-shadow: 0px 0px size(3) rgba(0, 0, 0, 0.50);
        font-size: size(15);
        line-height: 180%;
      }
    }
  }

  .img1 {
    top: size-m(-24);
    left: size-m(32);
    width: size-m(200);
    @media screen and (min-width:768px) {
      top: size(-35);
      left: size(193);
      width: size(460);
    }
  }

  .img2 {
    top: size-m(515);
    left: size-m(32);
    width: size-m(310);
    @media screen and (min-width:768px) {
      top: size(307);
      left: size(193);
      width: size(767);
    }
  }

  .en {
    top: size-m(171);
    left: size-m(38);
    font-size: size-m(12);
    font-weight: 300;
    line-height: 180%;
    letter-spacing: .19em;
    @media screen and (min-width:768px) {
      top: size(305);
      left: size(1170);
      font-size: size(25);

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: calc(size(-8) + .19em);
        transform: translate(100%, -50%);
        width: size(110);
        height: size(1);
        background: #514E4E;
      }
    }
  }

  .t1 {
    top: size-m(193);
    left: size-m(32);
    font-size: size-m(28);
    font-weight: 700;
    line-height: 123%;
    letter-spacing: .05em;
    text-align: justify;
    @media screen and (min-width:768px) {
      top: size(345);
      left: size(1164);
      font-size: size(62);
    }
  }

  .t2 {
    width: size-m(310);
    top: size-m(301);
    left: size-m(32);
    font-size: size-m(18);
    color: #6a1684;
    font-family: "Noto Sans TC";
    font-weight: 700;
    line-height: 160%;
    @media screen and (min-width:768px) {
      width: size(555);
      top: size(571);
      left: size(1164);
      font-size: size(38);
    }
  }

  .t3 {
    width: size-m(310);
    top: size-m(340);
    left: size-m(32);
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: size-m(14);
    line-height: 180%;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      width: size(555);
      top: size(660);
      left: size(1164);
      font-size: size(16);
    }
  }

  .cir1 {
    top: size-m(54);
    right: size-m(-119);
    width: size-m(200);
    height: size-m(200);
    border-radius: 50%;
    background: linear-gradient(135deg, #953bb1 28.79%, #450957 85.35%);
    opacity: 0.4;
    transform: translateY(-15vw);
    animation: ball 7s ease-in-out -3s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(184);
      right: size(820);
      width: size(246);
      height: size(246);
      transform: translateY(5vw);
      z-index: 1;
    }
  }

  .cir2 {
    top: size-m(666);
    right: size-m(-42);
    width: size-m(85);
    height: size-m(85);
    border-radius: 50%;
    background: linear-gradient(135deg, #6a1684 14.65%, #450957 85.36%);
    transform: translateY(10vw);
    animation: ball 7s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(707);
      right: size(-193);
      width: size(438);
      height: size(438);
      transform: translateY(5vw);
    }
  }
}
</style>

<script setup>
</script>