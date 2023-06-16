<template>
  <section class="s7 relative bg-[#CFD9D0]">
    <div class="t1 absolute text-white" data-aos="fade-up" data-aos-delay="0">INTERIOR <br class="hidden md:block">DESIGN</div>
    <img class="line absolute" src="@/section/s3/line.svg" />
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">蒔築美好大四房</div>
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">60-67坪闊綽大空間，有天有地質感生活，豪宅級空間感，一樓玄關與客餐廳，氣派接待親友。除了舒適大主臥，依不同需求可規劃子女房、孝親房、客房，享受快樂歡聚！</div>
    <div class="t4 absolute"><span>A1戶</span>室內配置參考示意圖</div>
    <div class="tk-btns absolute">
      <div :class="{'tk-btn': true, active: currIdx === 0}" @click="goto(1)">玄關</div>
      <div :class="{'tk-btn': true, active: currIdx === 1}" @click="goto(2)">玄關+客餐廳</div>
      <div :class="{'tk-btn': true, active: currIdx === 2}" @click="goto(3)">客餐廳</div>
      <div :class="{'tk-btn': true, active: currIdx === 3}" @click="goto(4)">廚房</div>
      <div :class="{'tk-btn': true, active: currIdx === 4}" @click="goto(5)">次臥</div>
      <div :class="{'tk-btn': true, active: currIdx === 5}" @click="goto(6)">主臥</div>
    </div>
    <div class="slider absolute">
      <swiper
        :loop="true"
        :autoplay="false"
        :modules="modules"
        @init="init"
        @slideChange="slideChange"
      >
        <swiper-slide>
          <img class="w-full block" src="@/section/s7/1.jpg" />
          <div class="txt">玄關3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s7/2.jpg" />
          <div class="txt">玄關+客餐廳3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s7/3.jpg" />
          <div class="txt">客餐廳3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s7/4.jpg" />
          <div class="txt">廚房3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s7/5.jpg" />
          <div class="txt">次臥3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s7/6.jpg" />
          <div class="txt">主臥3D透視情境示意圖</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slide-prev absolute" @click="slidePrev"></div>
    <div class="slide-next absolute" @click="slideNext"></div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s7 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .t1 {
    top: size-m(16);
    left: size-m(71);
    font-weight: 900;
    font-size: size-m(23);
    line-height: size-m(33);
    letter-spacing: 0.075em;
    @media screen and (min-width:768px) {
      top: size(115);
      left: size(102);
      font-size: size(71);
      line-height: size(80);
      letter-spacing: 0.395em;
    }
  }

  .t2 {
    left: size-m(70);
    top: size-m(71);
    font-weight: 500;
    font-size: size-m(30);
    line-height: size-m(56);
    letter-spacing: 0.1em;
    color: #4B6730;
    @media screen and (min-width:768px) {
      left: size(155);
      top: size(558);
      font-size: size(48);
      line-height: size(56);
    }

    &:before, &:after {
      content: '';
      position: absolute;
      width: size-m(3);
      height: size-m(27);
      background: #7EAA46;
      top: size-m(17);
      @media screen and (min-width:768px) {
        width: size(3);
        height: size(45);
        top: size(8);
      }
    }

    &:before {
      left: size-m(-16);
      @media screen and (min-width:768px) {
        left: size(-21);
      }
    }

    &:after {
      right: size-m(-16);
      @media screen and (min-width:768px) {
        right: size(-21);
      }
    }
  }

  .t3 {
    width: size-m(314);
    left: size-m(30);
    top: size-m(127);
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    letter-spacing: 0.15em;
    @media screen and (min-width:768px) {
      width: size(405);
      left: size(138);
      top: size(634);
      font-size: size(16);
      line-height: size(27);
    }
  }

  .slider {
    width: 100%;
    left: 0;
    top: size-m(381);
    @media screen and (min-width:768px) {
      width: size(1200);
      left: size(602);
      top: size(237);
    }

    img {
      width: 100%;
      height: size-m(285.76);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(675);
      }
    }

    .txt {
      position: absolute;
      left: size-m(10);
      bottom: size-m(10);
      font-weight: 400;
      font-size: size-m(12);
      line-height: size-m(12);
      letter-spacing: 0.01em;
      color: #fff;
      @media screen and (min-width:768px) {
        left: auto;
        right: size(22);
        bottom: size(16);
        font-size: size(15);
        line-height: size(15);
      }
    }
  }

  .slide-prev, .slide-next {
    width: size-m(28.35);
    height: size-m(28.35);
    left: size-m(262);
    top: size-m(343);
    background-image: url(@/section/s3/arrow-prev.svg);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    cursor: pointer;
    @media screen and (min-width:768px) {
      width: size(37);
      height: size(37);
      left: size(602);
      top: size(935);
    }
  }

  .slide-next {
    left: size-m(313.65);
    background-image: url(@/section/s3/arrow-next.svg);
    @media screen and (min-width:768px) {
      left: size(689);
    }
  }

  .line {
    top: size-m(43);
    left: size-m(-405);
    width: size-m(1005);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(147.82);
      left: size(102);
      width: size(1811.97);
    }
  }

  .t4 {
    left: size-m(31);
    top: size-m(210);
    font-weight: 400;
    font-size: size-m(16);
    line-height: size-m(46);
    letter-spacing: -0.02em;
    color: #FFFFFF;
    @media screen and (min-width:768px) {
      left: size(138);
      top: size(776);
      font-size: size(20.83);
      line-height: size(45.6);
      letter-spacing: -0.055em;
    }

    &:before {
      content: '';
      position: absolute;
      top: size-m(27);
      left: size-m(57);
      width: size-m(22.47);
      height: size-m(1);
      background: #fff;
      transform: rotate(122.28deg);
      @media screen and (min-width:768px) {
        top: size(32);
        left: size(67);
        width: size(22.47);
        height: size(1);
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: size-m(30);
      right: size-m(-100);
      width: size-m(100);
      height: size-m(1);
      background: #fff;
      @media screen and (min-width:768px) {
        top: size(30);
        right: size(-125 - 7);
        width: size(125);
        height: size(1);
      }
    }

    span {
      display: inline-block;
      font-size: size-m(30);
      line-height: size-m(45);
      letter-spacing: -0.055em;
      margin-right: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(36);
        line-height: size(45.6);
        margin-right: size(17);
      }
    }
  }

  .tk-btns {
    top: size-m(266);
    left: size-m(31);
    width: size-m(313);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      top: size(840);
      left: size(138);
      width: size(405);
    }

    .tk-btn {
      width: size-m(95);
      height: size-m(25.41);
      display: flex;
      justify-content: center;
      align-items: center;
      border: size-m(1) solid #fff;
      color: #fff;
      margin-bottom: size-m(12.59);
      cursor: pointer;
      transition: all .2s;
      font-weight: 500;
      font-size: size-m(14);
      line-height: size-m(20);
      @media screen and (min-width:768px) {
        width: size(126);
        height: size(28);
        border: size(1) solid #fff;
        margin-bottom: size(15);
        font-size: size(16);
        line-height: size(20);
      }

      &:hover, &.active {
        background: #fff;
        color: #CFD9D0;
      }
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
const currIdx = ref(0);

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

const goto = num => {
  if(swiperRef.value){
    swiperRef.value.slideTo(num);
  }
}

const slideChange = swiper => {
  if(swiperRef.value){
    currIdx.value = swiperRef.value.realIndex; 
  }
}
</script>