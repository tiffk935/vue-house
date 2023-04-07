<template>
  <section class="s10 relative">
    <div class="rect absolute md:hidden"></div>
    <img class="img absolute" src="@/section/s10/img.jpg" />
    <div class="title absolute" data-aos="fade-up">住一棟雙會館別墅<br class="md:hidden"><span class="hidden md:inline">&nbsp;</span>滿足您的全方位需求</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  width: 100%;
  height: size-m(547);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .rect {
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(182);
    // background: linear-gradient(180deg, #049CE0 82.29%, rgba(4, 156, 224, 0) 100%);
  }

  .img {
    width: size-m(708);
    left: size-m(-256);
    top: size-m(149);
    display: block;
    max-width: none;
    @media screen and (min-width:768px) {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
    }
  }

  .title {
    left: size-m(71);
    top: size-m(64);
    font-family: 'Noto Serif TC';
    font-weight: 500;
    font-size: size-m(24);
    line-height: size-m(34);
    text-align: center;
    letter-spacing: 0.08em;
    color: #fff;
    @media screen and (min-width:768px) {
      left: size(364);
      top: size(179);
      font-size: size(64);
      line-height: size(92);
    }
  }
}
</style>

<script setup>
</script>