<template>
  <article class="st7 relative">
    <img class="bg" src="@/section/t7/bg.jpg" />
    <div class="rect"></div>
    <img class="txt" src="@/section/t7/txt.svg" data-aos="fade-up" data-aos-delay="0" />
    <div class="info">中庭花園景觀3D模擬圖</div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.st7 {
  width: 100%;
  height: sizem(402);
  @media screen and (min-width: 767px) {
    height: size(1080);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: sizem(358);
    object-fit: cover;
    @media screen and (min-width: 767px) {
      height: 100%;
    }
  }

  .rect {
    position: absolute;
    top: sizem(188);
    left: 0;
    width: 100%;
    height: sizem(440);
    background: linear-gradient(0deg, #000 61%, rgba(0, 0, 0, 0.00) 100%);
    @media screen and (min-width: 767px) {
      display: none;
    }
  }

  .txt {
    position: absolute;
    bottom: sizem(20);
    left: sizem(54);
    width: sizem(260);
    @media screen and (min-width: 767px) {
      bottom: size(53);
      left: size(104);
      width: size(514.23);
    }
  }

  .info {
    display: none;
    @media screen and (min-width: 767px) {
      display: block;
      position: absolute;
      bottom: size(28);
      right: size(47);
      color: #000;
      font-size: size(14);
      font-weight: 400;
      letter-spacing: .06em;
    }
  }
}
</style>