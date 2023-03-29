<template>
  <section class="s2 text-[#333333] bg-[#C4C3C0] relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="title-en">WONDERFUL AREA</div>
      <div class="title">蛋黃中的蛋黃</div>
      <div class="subtitle">南紡驕傲齊放 精彩盛宴狂歡</div>
      <div class="desc">名符其實！台南市中心的心臟，站上國際舞台的平實特區，繁華正茂，鋒頭正盛。【艾美新時代】坐落平實路上，落點市中心蛋黃中的蛋黃！坐享所有熱鬧矚目豐盛而至，擁抱強勢便捷之最，翻轉房價規則，第一次就住進台南正核心！</div>
    </div>
    <div class="img relative">
      <img class="w-full block" src="@/section/s2/img.jpg" />
      <div class="txt">南紡購物中心實景拍攝</div>
    </div>
    <img class="en absolute" src="@/section/s2/en.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  width: 100%;
  padding: size-m(49.14) 0 size-m(35.86) 0;
  @media screen and (min-width:768px) {
    padding: size(74) 0 size(77) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    padding: 0 size-m(40);
    margin-bottom: size-m(26.14);
    @media screen and (min-width:768px) {
      width: size(463 + 92 + 105);
      padding: 0 size(92) 0 size(105);
      margin-bottom: 0;
    }

    .title-en {
      font-family: 'Cormorant Garamond';
      font-size: size-m(33);
      line-height: size-m(30);
      text-align: center;
      color: #A98162;
      margin-bottom: size-m(19.5);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(52);
        line-height: size(57);
        margin-bottom: size(24.24);
      }
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(24);
      line-height: size-m(41);
      letter-spacing: 0.14em;
      margin-bottom: size-m(8.36);
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(68);
        margin-bottom: size(9.87);
      }
    }

    .subtitle {
      font-weight: 700;
      font-size: size-m(14);
      line-height: size-m(24);
      margin-bottom: size-m(1);
      @media screen and (min-width:768px) {
        font-size: size(25);
        line-height: size(43);
        margin-bottom: size(6.44);
      }
    }

    .desc {
      font-size: size-m(12);
      line-height: size-m(20);
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(31);
      }
    }
  }

  .img {
    width: size-m(350);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(1260);
      margin: 0;
    }

    .txt {
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(20);
      position: absolute;
      bottom: size-m(1);
      right: size-m(4.5);
      text-shadow: size-m(0) size-m(2) size-m(3) rgba(0, 0, 0, 0.7);
      @media screen and (min-width:768px) {
        font-size: size(15);
        line-height: size(26);
        bottom: size(9.79);
        right: size(10);
        text-shadow: size(0) size(2) size(3) rgba(0, 0, 0, 0.7);
      }
    }
  }

  .en {
    bottom: size-m(25.18);
    left: size-m(146);
    width: size-m(201.17);
    @media screen and (min-width:768px) {
      bottom: size(77);
      left: size(108);
      width: size(485);
    }
  }
}
</style>

<script setup>
</script>
