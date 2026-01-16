<template>
  <section class="s3 user-n w-full relative bg-[#3265AB] text-white text-center">
    <div class="inner">
      <div class="t1">汐·港·湖  超完美崛起共榮</div>
      <div class="t2">奔赴幸福</div>
      <div class="line"></div>
      <div class="t3 text-[#59CCFF]">TOWARD A BETTER LIFE</div>
      <div class="t4 text-[#59CCFF]">Rising Together in Perfect Harmony</div>
      <div class="slider">
        <swiper
          :spaceBetween="10"
          :navigation="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :modules="modules"
        >
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s3/1.jpg" alt="">
              <div class="info">汐止環境實景拍攝</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s3/2.jpg" alt="">
              <div class="info">捷運交通實景拍攝</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s3/3.jpg" alt="">
              <div class="info">中信金融園區實景拍攝</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s3 {
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: 0;
  }

  .inner {
    padding-top: size-m(41);
  }

  .t1 {
    font-size: size-m(13);
    line-height: size-m(16);
    font-weight: 700;
    letter-spacing: .12em;
    text-indent: .12em;
    margin-bottom: size-m(6.6);
  }

  .t2 {
    font-size: size-m(42);
    line-height: size-m(50);
    font-weight: 900;
    letter-spacing: .25em;
    text-indent: .25em;
    margin-bottom: size-m(6.6);
  }

  .line {
    width: size-m(198);
    height: size-m(1);
    background: #fff;
    margin: 0 auto size-m(13);
  }

  .t3 {
    font-size: size-m(11);
    line-height: size-m(13);
    letter-spacing: .04em;
    margin-bottom: size-m(6);
  }

  .t4 {
    font-size: size-m(7);
    line-height: size-m(9);
    letter-spacing: -0.04em;
  }

  .slider {
    margin-top: size-m(27);

    &:deep() {
      .swiper {
        --swiper-navigation-sides-offset: #{size-m(16)};

        .swiper-button-prev, .swiper-button-next {
          width: size-m(34);
          height: size-m(34);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;

          &:after {
            display: none;
          }
        }

        .swiper-button-prev {
          background-image: url(@/section/s3/arrow-prev.png);
        }

        .swiper-button-next {
          background-image: url(@/section/s3/arrow-next.png);
        }
      }

      .info {
        position: absolute;
        left: size-m(8);
        bottom: size-m(1.7);
        font-size: size-m(8);
        line-height: size-m(12);
        font-weight: 700;
        filter: drop-shadow(0 0 size-m(5) #000);
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Navigation]);
</script>