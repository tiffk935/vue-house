<template>
  <section class="s5 relative">
    <div class="title2" data-aos="fade-up" data-aos-delay="0">
      清景麟<img src="@/section/s5/cross.svg" />隈研吾
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="0">契合了「回歸自然」的設計理念</div>
    <p data-aos="fade-up" data-aos-delay="0">
      「巴克禮ONE PARK」基地在低度城市化的環境內,<br>
      本作品不只創造森林般環境, 也保留森林的記憶與大樹下生活的樹林社區,<br>
      更為台南增添一座樹林地標。<br>
      立面樹紋豐富視覺效果, 溫暖的光影變化創造每戶獨一無二的光影印象,<br>
      也模糊建築與環境的界線。<br>
      立面色調隨外在環境變化且在區域環境內不過於突兀,<br>
      入口概念取自於傳統建築之美麗屋簷, 大屋簷姿態歡迎返家人。
    </p>
    <p class="en" data-aos="fade-up" data-aos-delay="0">
      The Site Is In A Low Urbanized Environment. <br>
      This Project Not Only Creates A Forest-oriented Environment, But Also Reminds The Scene That Living <br>
      In A Community Where Is Under The Tree. <br>
      What Is More, It Would Be Deemed As A Landmark For Tainan City. <br>
      The Rich Expression Of Façade Provides A Unique Impression Of Light And Shadow. <br>
      Additionally, The Boundary Between Architecture And Environment Would Be Blurred. <br>
      The Color Tone Of Façade Would Change According To The Changeable Environment <br>
      And It Would Not Be Dominant In The Site. <br>
      The Concept Of Entrance Derives From The Beauty Of Ancient Architectural Eave. <br>
      The Gesture Of Spreading Out Of Arm Metaphors That It Welcomes To The Home Returner.<br>
    </p>
    <div class="img">
      <img class="w-full" data-aos="zoom-in" data-aos-delay="0" src="@/section/s5/img.jpg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  padding: size-m(65) size-m(23) size-m(0) size-m(23);
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(107) size(0) size(99) size(0);
  }

  .title2 {
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(25);
    line-height: size-m(36);
    margin-bottom: size-m(0);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width:768px) {
      font-size: size(38);
      line-height: size(55);
      margin-bottom: size(0);
    }

    img {
      width: size-m(16);
      margin: 0 size-m(3);
      @media screen and (min-width:768px) {
        width: size(26);
        margin: 0 size(8);
      }
    }
  }

  .title {
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(20);
    line-height: size-m(29);
    margin-bottom: size-m(37);
    @media screen and (min-width:768px) {
      font-size: size(38);
      line-height: size(55);
      margin-bottom: size(62);
    }
  }

  p {
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(22);
    margin-bottom: size-m(40);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(39);
      margin-bottom: size(42);
    }
  }

  .en {
    font-size: size-m(12);
    line-height: size-m(19);
    margin-bottom: size-m(98);
    font-family: 'Noto Serif TC';
    @media screen and (min-width:768px) {
      font-size: size(16);
      line-height: size(38);
      margin-bottom: size(82);
    }
  }

  .img {
    width: calc(100% + size-m(23) + size-m(23));
    margin: 0 size-m(-23);
    @media screen and (min-width:768px) {
      width: size(1050);
      margin: 0 auto;
    }
  }
}
</style>

<script setup>
</script>
