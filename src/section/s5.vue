<template>
  <section class="s5 bg-[#E4E3DB] relative">
    <video class="md:hidden" src="https://h35.banner.tw/zongda/aota_m.mp4" playsinline autoplay muted loop></video>
    <video class="hidden md:block" src="https://h35.banner.tw/zongda/aota_pc.mp4" playsinline autoplay muted loop></video>
    <img class="circle absolute" src="@/section/s5/circle.svg" />
    <img class="circle-num absolute" data-aos="fade-in" data-aos-delay="0" src="@/section/s5/circle-num.svg" />
    <img class="title absolute md:hidden" src="@/section/s5/title-m.svg" />
    <img class="title absolute hidden md:block" data-aos="fade-in" data-aos-delay="0" src="@/section/s5/title.svg" />
    <!-- <img class="text absolute md:hidden" data-aos="fade-in" data-aos-delay="0" src="@/section/s5/text-m.svg" /> -->
    <!-- <img class="text absolute hidden md:block" data-aos="fade-in" data-aos-delay="0" src="@/section/s5/text.svg" /> -->
    <div class="text absolute" data-aos="fade-in" data-aos-delay="0">唯有自造好環境，才能誘發生活可能性。順接東區繁華軸線，宗大整合仁德核心素地，以造鎮規格開闢道路，以有機景觀線條勾勒基地，讓光影流瀉、使微風穿梭，擬態自然的純粹，觸發感官的覺醒。這一次，建築的主體，是生活。</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  height: size-m(770);
  @media screen and (min-width:768px) {
    height: size(932);
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width:768px) {
      height: size-m(558);
    }
  }

  .circle {
    top: size-m(235);
    left: size-m(96);
    width: size-m(183);
    animation: circle 8s infinite linear;
    transform-origin: center center;
    @media screen and (min-width:768px) {
      top: size(190);
      left: size(814.02);
      width: size(291.79);
    }
  }

  .circle-num {
    top: size-m(296.35);
    left: size-m(145.31);
    width: size-m(81.19);
    @media screen and (min-width:768px) {
      top: size(287.83);
      left: size(891.22);
      width: size(129.45);
    }
  }

  .title {
    top: size-m(456);
    left: size-m(106);
    width: size-m(163.13);
    @media screen and (min-width:768px) {
      top: size(575);
      left: size(573);
      width: size(774.1);
    }
  }

  .text {
    top: size-m(585);
    left: size-m(40);
    width: size-m(295);
    font-size: size-m(12);
    line-height: size-m(27);
    letter-spacing: 0.16em;
    @media screen and (min-width:768px) {
      top: size(667);
      left: size(455);
      width: size(1016);
      font-size: size(17);
      line-height: size(41);
      letter-spacing: 0.08em;
      color: #fff;
      text-align: center;
    }
  }

}

</style>

<script setup>
</script>
