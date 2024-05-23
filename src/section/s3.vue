<template>
  <section class="s3 relative">
    <div class="content absolute">
      <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">富人水岸，科技新創，價值未來</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">台北市第一個真正回歸水岸生活、融合自然的國際濱水城區</div>
      <div class="t3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">北士科94.38公頃，規劃為城市生活區、主要產業核心區及水岸融合區。新洲美水岸融合區，親水超級堤防、水岸步道、公園綠地、自行車道、遊艇碼頭…，引入水岸商業步行街區，成為台北市第一個真正回歸水岸生活、融合自然的國際化濱水城區。將以國際水岸特區為台北未來城市生活樹立嶄新典範。</div>
    </div>

    <div class="md:hidden">
      <SliderM />
    </div>

    <div class="hidden md:block">
      <Slider />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size-m(867);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .slider-m {
    // background: #ddd;
    position: absolute;
    top: size-m(51);
    left: 0;
    width: 100%;
    height: size-m(469.73);
    overflow: hidden;

    img {
      width: size-m(185);
      position: absolute;
      top: 0;
      left: 100%;

      &.img2 {
        left: size-m(52.5);
      }

      &.img3 {
        width: 100%;
        top: size-m(190);
        left: size-m(0);
      }

      &.img4 {
        width: 100%;
        top: size-m(190);
        left: size-m(-375);
      }
    }
  }

  .slider {
    position: absolute;
    width: 100%;
    top: size(101);
    left: 0;

    img {
      width: size-m(185);
      position: absolute;
      top: 0;
      left: 100%;
      @media screen and (min-width:768px) {
        width: size(556);
      }

      &.img2 {
        @media screen and (min-width:768px) {
          left: size(1220);
        }
      }

      &.img3 {
        @media screen and (min-width:768px) {
          width: size(925);
          left: size(148);
        }
      }

      &.img4 {
        @media screen and (min-width:768px) {
          width: size(556);
          left: size(-556);
        }
      }
    }
  }

  .btn-prev, .btn-next {
    position: absolute;
    top: size-m(160);
    left: size-m(287);
    cursor: pointer;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(606.25);
      left: size(1725.08);
    }

    .arrow-icon {
      width: size-m(35);
      transition: transform ease-in-out 0.2s;
      vertical-align: middle;
      @media screen and (min-width:768px) {
        width: size(59.02);
      }
      .cir {
        stroke-dasharray: 162;
        stroke-dashoffset: 162;
        transition: stroke-dashoffset ease-in-out 0.5s;
        fill: rgba(255, 255, 255, .5);
      }
      .arrow {
        transform: translateX(0%);
        opacity: 1;
      }
      &:hover {
        transform: scale(1);
        .cir {
          stroke-dashoffset: 0;
        }
        .arrow {
          animation: arrow ease-in-out 0.5s;
        }
      }
      @keyframes arrow {
        0% {
          transform: translateX(0%);
          opacity: 1;
        }
        30% {
          transform: translateX(30%);
          opacity: 0;
        }
        31% {
          transform: translateX(-30%);
          opacity: 0;
        }
        100% {
          transform: translateX(0%);
          opacity: 1;
        }
      }
    }
  }

  .btn-prev {
    top: size-m(51);
    transform: rotate(180deg);
    @media screen and (min-width:768px) {
      top: size(606.25);
      left: size(1220);
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: size-m(36.27) size-m(52.5) size-m(38);
    background-image: url(@/section/s3/bg-m.webp);
    background-size: 100% 100%;
    font-weight: 700;
    @media screen and (min-width:768px) {
      width: 100%;
      height: size(640);
      background-image: url(@/section/s3/bg.webp);
      padding: 0;

      &:after {
        content: '';
        position: absolute;
        top: size(402.97);
        left: size(148);
        width: size(1626);
        height: size(0.5);
        background: #666666;
      }
    }

    .t1 {
      color: #002B69;
      font-size: size-m(18);
      line-height: 1.44;
      letter-spacing: .07em;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(2);
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(441);
        left: size(148);
        font-size: size(40);
      }
    }

    .t2 {
      color: #000;
      font-size: size-m(13);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(8);
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(504.5);
        left: size(148);
        font-size: size(23);
      }
    }

    .t3 {
      font-weight: 500;
      color: #333333;
      font-size: size-m(14);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(444);
        left: size(869);
        width: size(905);
        font-size: size(20);
      }
    }
  }
}

</style>

<script setup>
import Slider from "@/section/s3/slider.vue";
import SliderM from "@/section/s3/sliderM.vue"
</script>