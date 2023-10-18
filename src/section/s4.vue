<template>
  <section class="s4 relative bg-[#EDEDED] text-[#231815]">
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">百億建設湧進 匯聚百億建設紅利</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">匯聚300億未來建設紅利，南紡購物中心二期、文化中心、台南國際機場、長榮桂冠酒店、崇明中小學區、 仁和國小、運動藝文休閒園區、台南市立醫院等利基發展條件及台糖公司亦根留府城並積極推動轉型與升級。</div>
    <div class="slider absolute">
      <swiper
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init"
      >
        <swiper-slide>
          <img class="w-full block" src="@/section/s4/1.jpg" />
          <div class="txt">購物商場示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s4/2.jpg" />
          <div class="txt">車站示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s4/3.jpg" />
          <div class="txt">巴克禮公園實景圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s4/4.jpg" />
          <div class="txt">文化公園實景圖</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slide-prev absolute" @click="slidePrev"></div>
    <div class="slide-next absolute" @click="slideNext"></div>
    <div class="img1 absolute" data-aos="fade" data-aos-delay="0">
      <img src="@/section/s4/img1.jpg" />
      <div class="txt">基地旁公園實景圖</div>
    </div>
    <div class="img2 absolute" data-aos="fade" data-aos-delay="0">
      <img src="@/section/s4/img2.jpg" />
      <div class="txt">86快速道路實景圖</div>
    </div>
    <div class="img3 absolute" data-aos="fade" data-aos-delay="0">
      <img src="@/section/s4/img3.jpg" />
      <div class="txt">崇明國小實景圖</div>
    </div>
    <div class="text2">TRAFFIC</div>
    <div class="text3">SCHOOL</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  height: size-m(894);
  @media screen and (min-width:768px) {
    height: size(960);
  }

  .t1 {
    width: size-m(375 - 30 - 30);
    left: size-m(30);
    top: size-m(21.72);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(22);
    line-height: size-m(32);
    color: #BD9562;
    white-space:nowrap;
    @media screen and (min-width:768px) {
      width: auto;
      left: size(95);
      top: size(123.72);
      font-size: size(45);
      line-height: size(65);
    }
  }

  .t2 {
    width: size-m(375 - 30 - 30);
    left: size-m(30);
    top: size-m(59.72);
    font-weight: 400;
    font-size: size-m(12);
    line-height: size-m(17);
    @media screen and (min-width:768px) {
      width: size(900);
      left: size(95);
      top: size(215.72);
      font-size: size(20);
      line-height: size(30);
    }
  }

  .slider {
    width: size-m(275);
    left: 0;
    top: size-m(148.72);
    @media screen and (min-width:768px) {
      width: size(900);
      left: size(95);
      top: size(344.72);
    }

    img {
      height: size-m(155);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(507.27);
      }
    }

    .swiper {
      z-index: 0;
    }
  }

  .txt {
    position: absolute;
    bottom: size-m(2);
    left: size-m(5);
    font-weight: 500;
    font-size: size-m(12);
    line-height: size-m(17);
    color: #fff;
    @media screen and (min-width:768px) {
      bottom: size(10);
      left: size(16);
      font-size: size(15);
      line-height: size(22);
    }
  }
  
  .slide-prev, .slide-next {
    width: size-m(32.76);
    height: size-m(32.76);
    left: size-m(293);
    top: size-m(270.72);
    background-image: url(@/section/s4/left.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    @media screen and (min-width:768px) {
      width: size(53.83);
      height: size(53.83);
      left: size(859);
      top: size(788);
    }
  }

  .slide-next {
    left: size-m(336.76);
    background-image: url(@/section/s4/right.svg);
    @media screen and (min-width:768px) {
      left: size(930.9);
    }
  }

  .img1 {
    width: size-m(375);
    height: size-m(220);
    left: size-m(0);
    top: size-m(333.72);
    position: absolute;
    @media screen and (min-width:768px) {
      width: size(838);
      height: size(377.14);
      left: size(1082);
      top: size(0);
    }
  }

  .img2 {
    width: size-m(220);
    height: size-m(170);
    left: size-m(155);
    top: size-m(553.72);
    position: absolute;
    @media screen and (min-width:768px) {
      width: size(491.63);
      height: size(291.43);
      left: size(1428.37);
      top: size(377.14);
    }
  }

  .img3 {
    width: size-m(220);
    height: size-m(170);
    left: size-m(0);
    top: size-m(723.72);
    position: absolute;
    @media screen and (min-width:768px) {
      width: size(491.63);
      height: size(291.43);
      left: size(1082);
      top: size(668.57);
    }
  }

  .img1, .img2, .img3 {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text2 {
    width: size-m(375 - 220);
    height: size-m(170);
    position: absolute;
    top: size-m(553.72);
    left: 0;
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(15);
    line-height: size-m(22);
    color: #BD9562;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF66;
    @media screen and (min-width:768px) {
      width: size(838 - 491.63);
      height: size(291.43);
      top: size(377.14);
      left: size(1082);
      font-size: size(26);
      line-height: size(37);
    }
  }

  .text3 {
    width: size-m(375 - 220);
    height: size-m(170);
    position: absolute;
    top: size-m(723.72);
    left: size-m(220);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(15);
    line-height: size-m(22);
    color: #BD9562;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF66;
    @media screen and (min-width:768px) {
      width: size(838 - 491.63);
      height: size(291.43);
      top: size(668.57);
      left: size(1082 + 491.63);
      font-size: size(26);
      line-height: size(37);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper";
const modules = ref([Autoplay]);
const swiperRef = ref(null);

const init = swiper => {
  swiperRef.value = swiper;
}

const slidePrev = () => {
  if(swiperRef.value){
    swiperRef.value.slidePrev();
  }
}

const slideNext = () => {
  if(swiperRef.value){
    swiperRef.value.slideNext();
  }
}
</script>