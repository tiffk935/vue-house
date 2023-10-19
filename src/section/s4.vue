<template>
  <section class="s4 relative ">
      <div class="txt absolute">
        <img src="./s4/en.svg" class="en">
        <h2 class="title font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-delay="0" >中央2.0政策 運動藝文園區BOT啟動</h2>
      </div>
      <div class="caption">3D示意圖</div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  height: size-m(500);
  background: url("./s4/bg.jpg") center;
  background-size: cover;
  //background: url("./s4/01.jpg");
  font-size:size-m(13);
  color: #fff;
  @media screen and (min-width:768px) {
    height: size(1387);
  font-size:size(23);
  }

  .txt{
    top: size-m(80);
    left: 0;right: 0;
    text-align: center;
  line-height: 1.5;
  @media screen and (min-width:768px) {    
    top: size(265);
  }
    .en{width: size-m(310);
  @media screen and (min-width:768px) {
    width: size(1387);
  }}
    .title{font-size:1.07em;letter-spacing:0.32em;font-weight: 700;margin: 1em auto 2.5em auto;
    
  @media screen and (min-width:768px) {    
    font-size:2.4em;margin: .8em auto 1.3em auto;letter-spacing:0.41em;
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
/*
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
  }*/
  
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