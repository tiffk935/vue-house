<template>
  <section class="s9 relative">
    <!-- <div class="rect absolute"></div> -->
    <div class="img-wrapper">
      <img class="img absolute md:hidden" src="@/section/s9/img-m.jpg" />
      <img class="img absolute hidden md:block" src="@/section/s9/img.jpg" />
      <div class="text-white">建築立面實景圖</div>
    </div>
    <div class="text absolute">
      <div class="t1 text-[#CFA123]">純粹 建築本色</div>
      <div class="t2">融入自然 與環境共奏</div>
      <div class="content">映照周圍豐富綠意，採以低彩度建材構築和諧居住環境，使用深淺色階、木紋與石材等外飾增加都市景觀層次，賦予建築濃厚人文風格與自然和諧共存。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  width: 100%;
  height: size-m(667);
  background: linear-gradient(180deg, #55B1FF 0%, rgba(140, 201, 255, 0) 100%);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .text {
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(228);
    text-align: center;
    color: #fff;
    padding: size-m(50) size-m(19) 0 size-m(19);
    @media screen and (min-width:768px) {
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid #CFA123;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      top: size(770);
      left: size(339);
      right: size(339);
      height: auto;
      width: auto;
      padding: size(40) size(278);
    }

    .t1 {
      font-family: 'Noto Serif TC';
      color: #CFA123;
      font-weight: 800;
      font-size: size-m(25);
      line-height: size-m(17);
      margin-bottom: size-m(18);
      position: relative;
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(28);
        display: block;
        margin: 0 auto;
        margin-bottom: size(20);
        max-width: size(630);
      }
    }

    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(20);
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(30);
        margin-bottom: size(20);
      }
    }

    .content {
      letter-spacing: 0.1em;
      font-size: size-m(13);
      line-height: size-m(20);
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(30);
        max-width: size(795);
      }
    }
  }

  .img {
    width: size-m(375);
    object-fit: cover;
    bottom: size-m(0);
    left: size-m(0);
    @media screen and (min-width:768px) {
      width: size(1920);
      height: 100%;
      bottom: size(0);
      left: size(0);
    }
  }

  .img-wrapper .text-white {
    font-size: size-m(12);
    text-shadow: 0px 0px size-m(5) rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: size-m(10);
    right: size-m(10);
    line-height: 1;
    @media screen and (min-width:768px) {
      font-size: size(12);
      text-shadow: 0px 0px size(5) rgba(0, 0, 0, 0.8);
      bottom: size(10);
      right: size(10);
    }
  }
}

</style>

<script setup>
</script>