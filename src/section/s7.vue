<template>
  <section class="s7 relative">
    <img class="style absolute" src="@/section/s7/style.png" />
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">東奧主場館設計師<br>隈研吾限量打造獨一無二精品藝術</div>
    <div class="t2 absolute">清景麟建築團隊跨海邀請日本知名建築大師隈研吾建築都市設計事務所（Kengo Kuma and Associates）操刀，為公共區域量身打造專屬藝術品，呈現大師的美學理念，打造比肩國際水準的高質感建案。</div>
    <img class="img1 absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s7/img1.jpg" />
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">Copyright © kengo kuma & associates. All rights reserved.版權所有© 隈研吾建築都市設計事務所 提供</div>
    <div class="t4 absolute" data-aos="fade-up" data-aos-delay="200">隈研吾，著名日本建築師，曾獲日本、義大利、芬蘭等國之建築獎。建築作品散發日式和風與東方禪意，在業界被稱為「負建築」、「隈研吾流」；又以自然景觀的融合為特色，運用木材、泥磚、竹子、石板、紙或玻璃等天然建材，結合水、光線與空氣，創造外表看似柔弱，卻更耐震、且讓人感覺到傳統建築的溫馨與美的「負建築」。</div>
    <img class="img2 absolute" data-aos="fade-up" data-aos-delay="200" src="@/section/s7/img2.jpg" />
    <div class="t5 absolute" data-aos="fade-up" data-aos-delay="200">Kuma portrait_©嶌村 吉祥丸 ©Kisshomaru Shimamura</div>
    <div class="t6 absolute" data-aos="fade-up" data-aos-delay="200">
      隈研吾 (けんご　くま)  Kengo Kuma<br>
      出生 1954年8月8日（68歲） 日本神奈川縣橫濱市<br>
      國籍 日本<br>
      職業 建築師<br>
      <br>
      獎項<br>
      日本建築學會賞（1997年）<br>
      日本村野藤吾賞（2001年）<br>
      The LEAF Awards（2008年）<br>
      日本每日藝術獎（2009年）<br>
      日本藝術選獎（2011年）
    </div>
    <img class="en absolute" src="@/section/s7/en.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s7 {
  width: 100%;
  height: size-m(920);
  background: #fff;
  @media screen and (min-width:768px) {
    height: size(920);
  }

  .style {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      width: size(856);
      right: 0;
      top: size(-110.29);
      mix-blend-mode: overlay;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }

  .t1 {
    left: size-m(17.5);
    top: size-m(26.05);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(22);
    line-height: size-m(26);
    color: #B68C67;
    @media screen and (min-width:768px) {
      left: size(95);
      top: size(64.63);
      font-size: size(45);
      line-height: size(54);
    }
  }

  .t2 {
    width: size-m(340);
    left: size-m(17.5);
    top: size-m(88.05);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(18);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(680);
      left: size(95);
      top: size(207.69);
      font-size: size(20);
      line-height: size(30);
    }
  }

  .img1 {
    width: size-m(375);
    height: size-m(270);
    left: size-m(0);
    top: size-m(186.05);
    object-fit: cover;
    @media screen and (min-width:768px) {
      width: size(680);
      height: size(490);
      left: size(95);
      top: size(336.97);
    }
  }

  .t3 {
    width: size-m(368);
    left: size-m(3.5);
    top: size-m(460.05);
    font-weight: 400;
    font-size: size-m(8);
    line-height: size-m(14);
    @media screen and (min-width:768px) {
      width: size(681);
      left: size(95);
      top: size(834.37);
      font-size: size(12);
      line-height: size(20);
    }
  }

  .t4 {
    width: size-m(340);
    left: size-m(17.5);
    top: size-m(504.52);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(18);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(624.5);
      left: size(1200.5);
      top: size(336.97);
      font-size: size(20);
      line-height: size(30);
    }
  }

  .img2 {
    width: size-m(110);
    height: size-m(170);
    left: size-m(17.5);
    top: size-m(635.05);
    object-fit: cover;
    @media screen and (min-width:768px) {
      width: size(320);
      height: size(490);
      left: size(842);
      top: size(336.97);
    }
  }

  .t5 {
    width: size-m(107);
    left: size-m(20.3);
    top: size-m(811);
    font-weight: 400;
    font-size: size-m(8);
    line-height: size-m(14);
    @media screen and (min-width:768px) {
      width: size(321);
      left: size(842);
      top: size(834.37);
      font-size: size(12);
      line-height: size(20);
    }
  }
  
  .t6 {
    width: size-m(214.2);
    left: size-m(143.3);
    top: size-m(632.52);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(18);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(458.7);
      left: size(1200.5);
      top: size(525.37);
      font-size: size(20);
      line-height: size(30);
    }
  }

  .en {
    width: size-m(188.29);
    left: size-m(138.71);
    top: size-m(853.08);
    @media screen and (min-width:768px) {
      width: size(314.19);
      left: size(1502.66);
      top: size(784.46);
    }
  }
}
</style>

<script setup>
</script>
