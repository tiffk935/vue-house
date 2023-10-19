<template>
  <section class="s5 relative ">
      <div class="txt absolute">
        <img src="./s5/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0" >
        <h2 class="title font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-delay="200" >延續寧靜的力量「研森」最美生活</h2>
        <p class="desc" data-aos="zoom-in" data-aos-delay="400">層峰人仕與企業CEO鍾情的生活聚落「研森」選址環境馥雅、視野開闊，綠林聚落為鄰，精品中的精品！</p>
      </div>
      <div class="caption">3D示意圖</div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(667);
  background: url("./s5/bg.jpg") center;
  background-size: cover;
  //background: url("./s5/01.jpg");
  font-size:size-m(13);
  color: #fff;
  @media screen and (min-width:768px) {
    height: size(2158);
  font-size:size(23);
  }

  .txt{
    top: size-m(53);
    left: 0;right: 0;
    text-align: center;
  line-height: 1.5;
  @media screen and (min-width:768px) {    
    top: size(350);
  }
    .en{width: size-m(285);
  @media screen and (min-width:768px) {
    width: size(1090);
  }}
    .title{font-size:1.07em;letter-spacing:0.4em;font-weight: 700;text-indent: .4em;margin: 1em auto 2.5em auto;
    
  @media screen and (min-width:768px) {    
    font-size:2.3em;margin: .3em auto 1.3em auto;
  }
    }
    .desc{font-weight: 300;letter-spacing:0.03em;
    text-align: justify;
    width: size-m(285);margin: auto;
  @media screen and (min-width:768px) {    
    width: auto;
    text-align: center;
  }}
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