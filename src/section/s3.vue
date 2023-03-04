<template>
  <section class="s3 relative">
    <img class="en" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/en.svg" />
    <div class="title" data-aos="fade-up" data-aos-delay="0">全世界最具影響力的建築師  隈研吾</div>
    <p data-aos="fade-up" data-aos-delay="0">
      隈研吾，著名日本建築師，<br class="md:hidden">1990年設立隈研吾建築都市設計事務所（KKAA）。<br>
      <br class="md:hidden">
      至今，<br class="md:hidden">隈研吾（Kengo Kuma）的作品已遍佈全球多個國家，<br class="md:hidden">並獲得了眾多權威獎項的認可。<br>
      隈研吾對日本傳統建築元素的重新詮釋，<br class="md:hidden">以及對天然材料的運用，<br>
      試圖採用傳統元素讓建築仍然聯繫到其所在的地域中，<br>
      使得他的建築與多數日本當代作品不同。<br>
      <br>
      建築作品散發日式和風與東方禪意，<br class="md:hidden">在業界被稱為「負建築」、「隈研吾流」， <br>
      被美國時代雜誌譽為2021全球百大影響人物。<br>
      <br class="md:hidden">
      2015年以明治神宮為靈感設計<br class="md:hidden">拿下2020年東京奧運主場館「新國立競技場」設計案。<br>
      以建築美學跨越東西方文化差異，<br class="md:hidden">展現出對當代建築的影響力。
    </p>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s3 {
  padding: size-m(75.5) size-m(23);
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(71) size(0) size(92) size(0);
  }

  .en {
    width: size-m(328);
    margin: 0 auto size-m(8.86) auto;
    @media screen and (min-width:768px) {
      width: size(786.41);
      margin: 0 auto size(27.71) auto;
    }
  }

  .title {
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(20);
    line-height: size-m(29);
    margin-bottom: size-m(29);
    @media screen and (min-width:768px) {
      font-size: size(38);
      line-height: size(55);
      margin-bottom: size(52);
    }
  }

  p {
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(22);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(39);
    }
  }
}
</style>

<script setup>
</script>
