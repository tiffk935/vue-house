<template>
  <section class="s7 bg-[#0080D9] text-white relative">
    <img class="img absolute" src="@/section/s7/img.png" />
    <img class="title absolute" data-aos="fade-up" src="@/section/s7/title.svg" />
    <div class="line absolute"></div>
    <img class="icon absolute hidden md:block" data-aos="fade-up" src="@/section/s7/icon.svg" />
    <img class="icon absolute md:hidden" data-aos="fade-up" src="@/section/s7/icon-m.svg" />
    <div class="t1 absolute" data-aos="fade-up">半世紀匠心建築<br class="md:hidden"><span class="hidden md:inline">&nbsp;</span>國揚序寫傳家新章</div>
    <div class="t2 absolute md:hidden" data-aos="fade-up">
      國揚地產開發集團是台灣唯一同時跨界經營<br>
      【不動產建築營造+頂級百貨商場+五星級觀光飯店+美食餐飲+綜合體育館+職業籃球隊】的專業開發商<br>
      服務規模涵蓋民生、時尚、餐飲、休閒、展場、保全、育樂、職籃以及建築。<br>
      以半世紀的熱情與堅持，引領美學走入生活，讓生活融入美學，「活力．生活．新建築」是國揚一路走來的企業初衷。
    </div>
    <div class="t2 absolute hidden md:block" data-aos="fade-up">
      國揚地產開發集團是台灣唯一同時跨界經營【不動產建築營造+頂級百貨商場+五星級觀光飯店+<br>
      美食餐飲+綜合體育館+職業籃球隊】的專業開發商，服務規模涵蓋民生、時尚、餐飲、休閒、展場、保全、<br>
      育樂、職籃以及建築。以半世紀的熱情與堅持，引領美學走入生活，讓生活融入美學，<br>
      「活力．生活．新建築」是國揚一路走來的企業初衷。
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(793);
  @media screen and (min-width:768px) {
    height: size(2180);
  }

  .title {
    width: size-m(154);
    left: size-m(110);
    top: size-m(60);
    @media screen and (min-width:768px) {
      width: size(501.6);
      left: size(698);
      top: size(367);
    }
  }

  .line {
    width: size-m(325);
    height: size-m(1);
    left: size-m(25);
    top: size-m(127);
    background: #fff;
    @media screen and (min-width:768px) {
      width: size(1208);
      height: size(1);
      left: size(354);
      top: size(581);
    }
  }

  .icon {
    width: size-m(244.25);
    left: size-m(65);
    top: size-m(150);
    @media screen and (min-width:768px) {
      width: size(1186.64);
      left: size(353.06);
      top: size(648.22);
    }
  }

  .img {
    width: 100%;
    left: 0;
    bottom: 0;
  }

  .t1 {
    left: size-m(84);
    top: size-m(327);
    font-family: 'Noto Serif TC';
    font-weight: 500;
    font-size: size-m(24);
    line-height: size-m(34);
    text-align: center;
    letter-spacing: 0.08em;
    @media screen and (min-width:768px) {
      left: size(433);
      top: size(959);
      font-size: size(64);
      line-height: size(92);
    }
  }

  .t2 {
    width: size-m(325);
    left: size-m(25);
    top: size-m(405);
    font-weight: 500;
    font-size: 3.5vw; //size-m(13)
    line-height: size-m(25);
    text-align: center;
    @media screen and (min-width:768px) {
      width: size(1150);
      left: size(385);
      top: size(1118);
      font-size: size(25);
      line-height: size(55);
      letter-spacing: -0.03em;
    }
  }
}
</style>

<script setup>
</script>
