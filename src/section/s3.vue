<template>
  <section class="s3 relative text-white bg-[#066C5C]">
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">臨繁華而居 與綠意共存</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">
      2.7萬坪巴克禮生態公園 ，都市之肺!<br>
      巴克禮生態公園都會綠帶，<br class="md:hidden">
      輕享商圈、休閒、美食、藝文<br class="md:hidden">
      各式日常豐美，更具未來增值潛力。
    </div>
    <img class="img absolute" src="@/section/s3/img.jpg" />
    <div class="style1 absolute">
      <img class="block w-full" src="@/section/s3/style1.png" />
    </div>
    <div class="style2 absolute">
      <img class="block w-full" src="@/section/s3/style2.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s3 {

  @keyframes skew {
    to {
      transform: skewX(0deg);
    }
  }

  width: 100%;
  height: size-m(510);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .style1 {
    width: size-m(203);
    left: size-m(222);
    top: size-m(-1.17);
    @media screen and (min-width:768px) {
      width: size(453);
      left: size(-94);
      top: size(-210);
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    img {
      transform: skewX(15deg);
      animation: skew 5s linear infinite alternate;
    }
  }

  .style2 {
    width: size-m(141.42);
    left: size-m(239.34);
    top: size-m(322.6);
    @media screen and (min-width:768px) {
      width: size(285);
      left: size(1679);
      top: size(-18);
    }

    img {
      transform: skewX(5deg);
      transform-origin: bottom center;
      animation: skew 4s linear infinite alternate;
    }
  }

  .t1 {
    left: size-m(29);
    top: size-m(24.83);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(22);
    line-height: size-m(32);
    @media screen and (min-width:768px) {
      left: size(277);
      top: size(109);
      font-size: size(45);
      line-height: size(65);
    }
  }

  .t2 {
    width: size-m(196);
    left: size-m(31);
    top: size-m(62.83);
    font-family: 'Noto Sans TC';
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(17);
    @media screen and (min-width:768px) {
      left: size(802);
      top: size(113);
      font-size: size(20);
      line-height: size(29);
    }
  }

  .img {
    width: size-m(375);
    height: size-m(250.03);
    left: size-m(0);
    top: size-m(165);
    object-fit: cover;
    @media screen and (min-width:768px) {
      width: size(1920);
      height: size(840);
      left: size(0);
      top: size(240);
    }
  }
}

</style>

<script setup>
</script>
