<template>
  <section class="s13 text-[#333333] bg-[#C4C3C0] relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="title-en">BRAND POWER</div>
      <div class="title">三地集團 九大事業<br>企業厚實力 最強大靠山</div>
      <div class="desc">由高雄發跡的三地集團，建築業績遍布台南、高雄！集團版圖擁九大事業群、四家上市公司（三地開發地產、北基國際、南仁湖育樂、高福化工），員工總數超過5000名，包含乖乖食品、高雄客運、北基加油站、南仁湖鼓山漁市場等，深厚實力眼見為憑！</div>
    </div>
    <div class="slider">
      <img class="img1 md:hidden" src="@/section/s13/img1-m.svg" />
      <img class="img1 hidden md:block" src="@/section/s13/img1.png" />
      <img class="img2" src="@/section/s13/img2.png" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
  width: 100%;
  padding: size-m(38.59) 0 size-m(46.5) 0;
  @media screen and (min-width:768px) {
    padding: size(100) size(227) size(100) size(270);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    padding: 0 size-m(35) 0 size-m(30);
    margin-bottom: size-m(24.54);
    @media screen and (min-width:768px) {
      width: size(480);
      padding: 0;
      margin-bottom: 0;
    }

    .title-en {
      font-family: 'Cormorant Garamond';
      font-size: size-m(33);
      line-height: size-m(30);
      color: #A98162;
      margin-bottom: size-m(5.5);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(52);
        line-height: size(57);
        margin-bottom: size(13.87);
      }
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(24);
      line-height: size-m(31);
      letter-spacing: 0.14em;
      margin-bottom: size-m(12.41);
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(68);
        margin-bottom: size(20.62);
      }
    }

    .desc {
      font-size: size-m(12);
      line-height: size-m(18);
      text-align: justify;
      margin-bottom: size-m(10);
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(27);
        margin-bottom: size(10);
      }
    }
  }

  .slider {
    padding: 0 size-m(12.5);
    @media screen and (min-width:768px) {
      width: size(770);
      margin: 0;
    }

    img {
      width: 100%;
    }

    .img1 {
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        margin-bottom: size(8.21);
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay } from "swiper";
const modules = ref([Navigation, Autoplay]);
</script>