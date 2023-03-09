<template>
  <section class="s5 relative">
    <div class="title2" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400">
      清景麟<img src="@/section/s5/cross.svg" />隈研吾
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">契合了「回歸自然」的設計理念</div>
    <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
      「巴克禮ONE PARK」基地位在低度城市化的環境內，<br>
      本作品不只創造森林般環境，<br class="md:hidden">也保留森林的記憶與大樹下生活的樹林社區，<br>
      更為台南增添一座樹林地標。<br><br class="md:hidden">
      立面樹紋豐富視覺效果，<br class="md:hidden">溫暖的光影變化創造每戶獨一無二的光影體驗，<br>
      也模糊建築與環境的界線。<br><br class="md:hidden">
      立面色調隨外在環境變化並與環境共存，<br>
      入口概念取自於傳統建築之美麗屋簷，<br class="md:hidden">以展臂姿態歡迎返家人。
    </p>
    <p class="en" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
      Located in an underdeveloped urban area,<br>
      this project not only aims to create a forest-oriented environment but also to evoke a sense of community living among trees.<br><br class="md:hidden">
      Furthermore, it will serve as a landmark for Tainan city.<br>
      The unique expression of the building's façade creates a striking interplay of light and shadow.<br><br class="md:hidden">
      The color tone of the façade changes according to th e environment,<br>
      blending in seamlessly with its surroundings and blurring the boundary between architecture and nature.<br><br class="md:hidden">
      The concept of the entrance is inspired by the beauty of ancient architectural eaves,<br>
      with the gesture of the outstretched arm symbolizing a warm welcome home. <br>
    </p>
    <div class="img">
      <img class="w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" src="@/section/s5/img.jpg" />
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
