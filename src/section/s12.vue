<template>
  <section class="s12 w-full relative bg-[#EFEFEF] text-[#3E3A39]">
    <div class="bg">
      <img src="@/section/s12/bg.jpg" />
      <div class="rect"></div>
      <div class="info">情境示意圖</div>
    </div>

    <div class="content relative">
      <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">上選名品建材 <br class="md:hidden">完美呈現精緻生活感受</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">秉持著東泥建設對於品質的嚴格要求，「東泥大賦」由內到外，全棟採用國內外知名<br class="hidden md:block">建材，以近乎苛求的美學工藝，賦予空間上質品味，細雕琢出新世代別墅的完美典範</div>
      <img class="logo md:hidden" src="@/section/s12/logo-m.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <img class="logo hidden md:block" src="@/section/s12/logo.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  height: size-m(715);
  font-family: "Noto Sans TC";
  @media screen and (min-width:768px) {
    height: size(601);
  }

  .bg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: size-m(438);
    @media screen and (min-width:768px) {
      width: size(1083);
    }

    .rect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: size-m(136);
      background: linear-gradient(180deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%);
      @media screen and (min-width:768px) {
        width: size(343);
        height: 100%;
        background: linear-gradient(90deg, #EFEFEF 13%, rgba(239, 239, 239, 0.00) 100%);
      }
    }

    .info {
      position: absolute;
      top: size-m(-11);
      right: size-m(18);
      color: #727171;
      font-size: size-m(12);
      font-weight: 600;
      @media screen and (min-width:768px) {
        top: size(31);
        right: size(142);
        font-size: size(15);
      }
    }
  }

  .content {
    padding: size-m(24) size-m(30) 0;
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(738.5);
      position: absolute;
      top: size(73);
      left: size(170);
    }

    .t1 {
      font-size: size-m(25);
      letter-spacing: .02em;
      margin-bottom: size-m(15);
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-bottom: size(10);
      }
    }

    .t2 {
      font-size: size-m(12);
      line-height: 175%;
      margin-bottom: size-m(33);
      @media screen and (min-width:768px) {
        font-size: size(18);
        margin-bottom: size(66);
      }
    }

    .logo {
      width: size-m(316.65);
      @media screen and (min-width:768px) {
        width: 100%;
      }
    }
  }
}
</style>

<script setup>
</script>