<template>
  <section class="s7 w-full relative bg-[#000000] text-white">
    <img class="bg" src="@/section/s7/bg.jpg" loading="lazy" />
    <div class="rect"></div>
    <div class="grid relative" data-aos="fade-up" data-aos-delay="0">
      <div>
        <div class="t1">繁榮新未來</div>
        <div class="t2">燕巢市心商圈<br>食衣住行育樂一次到位</div>
      </div>
      <img class="light" src="@/section/s7/light.svg" loading="lazy" data-aos="fade" duration="3000" />
    </div>
    <div class="t3" data-aos="fade-up" data-aos-delay="200">
      <div data-aos="fade-up" data-aos-delay="400">
        緊鄰公園、近幼兒園、國小國中、市場、農會超市、<br>
        戶政事務所、郵局、交流道、阿公店風景區等。
      </div>
    </div>
    <div class="info">燕巢市中心實景圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(667);
  padding: size-m(80) size-m(30);
  @media screen and (min-width:768px) {
    height: size(801);
    padding: 0;
  }

  .bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(349);
    object-fit: cover;
    object-position: left;
    @media screen and (min-width:768px) {
      height: 100%;
    }
  }

  .rect {
    position: absolute;
    bottom: size-m(99);
    left: 0;
    width: 100%;
    height: size-m(311);
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .grid {
    width: 100%;
    padding: size-m(28) 0;
    background: rgba(255,255,255,0.3);
    text-align: center;
    margin-bottom: size-m(35);
    border-radius: size-m(20);
    position: relative;
    mix-blend-mode: screen;
    @media screen and (min-width:768px) {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: size(183);
      left: size(743);
      margin-bottom: 0;
      width: size(433.82);
      height: size(433.82);
      border-radius: 50%;
    }

    .light {
        position: absolute;
        mix-blend-mode: screen;
        transform: translate(-100%,0%)scale(.3);
        top: size-m(-75);right:size-m(-50);
        width: size-m(150);
      @media screen and (min-width:768px) {
        top: size(-36);
      transform: translate(-100%,-80%)scale(.3);
        right: size(-45.18);
        width: size(210);
      }
    }

    .t1 {
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: .04em;
      margin-bottom: size-m(15);
      @media screen and (min-width:768px) {
        font-size: size(54);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(15);
      font-weight: 600;
      letter-spacing: .02em;
      @media screen and (min-width:768px) {
        font-size: size(24);
      }
    }
  }

  .t3 {
    position: relative;
    border-top: size-m(1) solid #fff;
    border-bottom: size-m(1) solid #fff;
    padding: size-m(18) 0 size-m(24);
    font-size: size-m(13);
    font-weight: 500;
    line-height: 161.538%;
    letter-spacing: .04em;
    @media screen and (min-width:768px) {
      width: size(670);
      position: absolute;
      top: size(184);
      right: 0;
      border-top: size(1) solid #fff;
      border-bottom: size(1) solid #fff;
      padding: size(174) 0 size(182);
      font-size: size(20);
      letter-spacing: .11em;
    }
  }

  .info {
    position: absolute;
    bottom: size-m(10);
    left: size-m(10);
    text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
    font-size: size-m(12);
    font-weight: 600;
    @media screen and (min-width:768px) {
      bottom: size(155);
      left: size(163);
      text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.55);
      font-size: size(15);
    }
  }
}
</style>

<script setup>
</script>