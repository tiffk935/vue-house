<template>
  <section class="s3 user-n w-full relative">
    <img class="content absolute" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" src="@/section/s3/content.webp" />
    <div class="txt absolute text-white">中山北路二段樹海實景拍攝</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  overflow: hidden;
  height: size-m(380);
  background-image: url(@/section/s3/bg.webp);
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    height: size(900);
  }
  
  .content {
    top: size-m(119);
    left: size-m(28.5);
    width: size-m(318);
    @media (min-width: 768px) {
      top: size(332.39);
      left: size(449.28);
      width: size(1021.86);
    }
  }

  .txt {
    bottom: size-m(12);
    right: size-m(14);
    font-size: size-m(12);
    @media (min-width: 768px) {
      bottom: size(17);
      right: size(15);
      font-size: size(14);
    }
  }
}
</style>

<script setup>
</script>
