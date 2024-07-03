<template>
  <section class="s8 w-full relative">
    <div class="md:flex md:justify-center md:items-end md:flex-row-reverse md:translate-x-[-5.885vw]">
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="logo" src="@/section/s8/logo.svg" />
        <div class="head">
          <div class="t1">禾鼎設計</div>
          <div class="t2 subtitle">楊豪琳 設計師</div>
          <div class="labell absolute">
            <div class="labell-en">interior design</div>
            <div class="labell-zh">公設設計</div>
          </div>
        </div>
        <div class="t4">
          空間不只是一片場域，更是情感寄託，重新解構塑造風格氛圍，憑藉設計私人精品會館20多年經驗，雕琢機能細節和流暢動線，以空間凝聚感情，分享未來故事，延伸建築多元價值。<br>
          <br><br class="hidden md:block">
          代表作品<br>
          天母自在、豐基皇居、璞知溪、瑞安自在、南京御邸、開璽吾界、林口亞昕天地昕、三輝謙匯、國泰瑞安樸石、國泰層峰
        </div>
      </div>
      <div class="imgs flex justify-between">
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <img class="w-full" src="@/section/s8/1.jpg" />
        </div>
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img class="w-full" src="@/section/s8/2.jpg" />
          <div class="txt">國泰層峰</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  padding-top: size-m(44);
  @media screen and (min-width:768px) {
    padding: size(110) 0 size(90) 0;
  }

  .content {
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(414);
      margin-left: size(154);
      position: relative;
    }
  }

  .logo {
    width: size-m(80);
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      width: size(110);
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      right: size(-65 - 110);
    }
  }

  .head {
    padding-bottom: size-m(16);
    margin-bottom: size-m(18);
    border-bottom: size-m(1) solid #000;
    position: relative;
    @media screen and (min-width:768px) {
      padding-bottom: size(20);
      margin-bottom: size(23);
      border-bottom: size(1) solid #000;
    }

    .labell {
      bottom: size-m(16 + 6);
      right: 0;
      text-align: right;
      @media screen and (min-width:768px) {
        display: flex;
        align-items: flex-start;
        top: 0;
        bottom: auto;
        right: size(-65 - 110);
      }
    }
  }

  .imgs {
    @media screen and (min-width:768px) {
      width: size(849);
    }

    .img {
      width: 48.8%;
    }

    .txt {
      position: absolute;
      bottom: size-m(5);
      right: size-m(6);
      color: #FFF;
      font-family: "Noto Sans TC";
      font-size: size-m(10);
      line-height: 133%;
      @media screen and (min-width:768px) {
        bottom: size(8);
        right: size(14);
        font-size: size(14);
      }
    }
  }
}
</style>

<script setup>
</script>