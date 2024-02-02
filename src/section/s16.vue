<template>
  <section class="s16 w-full relative text-[#173868]">
    <img class="bg absolute" src="@/section/s16/bg.webp" />
    <div class="rect absolute"></div>
    <img class="style absolute" src="@/section/s16/style.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <div class="txt text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">領先同業 感心守護</div>
        <div class="subtitle">CING JING LIN GROUP</div>
      </div>
    </div>
    <div class="info absolute">情境示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s16 {
  height: size-m(667);
  @media (min-width: 768px) {
    height: size(1080);
  }

  .bg {
    max-width: none;
    width: size-m(644);
    bottom: 0;
    right: 0;
    @media (min-width: 768px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .rect {
    width: size-m(375);
    height: size-m(268);
    top: size-m(184);
    left: size-m(0);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, #FFF 54.72%);
    @media (min-width: 768px) {
      display: none;
    }
  }

  .style {
    width: size-m(291.33);
    top: size-m(138);
    left: size-m(41.67);
    @media (min-width: 768px) {
      width: size(494.67);
      top: size(433);
      left: size(174.5);
    }
  }

  .txt {
    position: absolute;
    top: size-m(35);
    left: size-m(45);
    @media (min-width: 768px) {
      top: size(282);
      left: size(161);
      padding: 0;
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(5);
      margin-bottom: size-m(5);
      line-height: normal;
      text-align: center;
      margin:  size-m(5) 0;
      @media (min-width: 768px) {
        font-size: size(48);
        letter-spacing: size(15.84);
        margin-bottom: size(9);
        padding-bottom: 0;
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(2.25);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
      }
    }
  }
  
  .info {
    bottom: size-m(4);
    right: size-m(4);
    color: #fff;
    font-size: size-m(12);
    line-height: normal;
    @media (min-width: 768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(12);
    }
  }
}
</style>

<script setup>
</script>