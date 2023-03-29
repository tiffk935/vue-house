<template>
  <section class="s4 text-[#333333] bg-[#C4C3C0] relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="title">澎湃新平實 繁華夢時代</div>
      <div class="subtitle">休閒娛樂×公園綠海×交通轉運×醫療機能<br>面面俱到 頂規到位</div>
    </div>
    <div class="img relative">
      <img class="w-full hidden md:block" src="@/section/s4/img.jpg" />
      <img class="w-full md:hidden" src="@/section/s4/img-m.jpg" />
      <div class="txt">南紡購物中心實景拍攝</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  padding: size-m(31.64) 0 0 0;
  @media screen and (min-width:768px) {
    padding: size(91.64) 0 0 0;
  }

  .text {
    text-align: center;
    margin-bottom: size-m(28);
    @media screen and (min-width:768px) {
      margin-bottom: size(55);
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
        margin-bottom: size(11.36);
      }
    }

    .subtitle {
      font-weight: 700;
      font-size: size-m(14);
      line-height: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(25);
        line-height: size(32);
      }
    }
  }

  .img {
    width: 100%;
    position: relative;

    .txt {
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(12);
      position: absolute;
      bottom: size-m(10.5);
      right: size-m(11.65);
      text-shadow: size-m(1) size-m(1) size-m(2) rgba(0, 0, 0, 0.5);
      @media screen and (min-width:768px) {
        font-size: size(15);
        line-height: size(12);
        bottom: size(17.5);
        right: size(12.9);
        text-shadow: size(1) size(1) size(2) rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>

<script setup>
</script>
