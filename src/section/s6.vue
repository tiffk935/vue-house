<template>
  <section class="s6 relative">
    <div class="bg absolute"></div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">一棟一王國</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">
      <div class="title">太陽能電梯別墅</div>
      <div class="txt">體貼行動不便、銀髮族等，讓全家老小，愜意上下樓或搬重物；戶戶頂樓配置太陽能，隔熱遮雨防漏水，一邊使用綠電，一邊愛護地球。</div>  
      <div class="title">社區公園生機農夫</div>
      <div class="txt">出門先到中庭長廊，再到綠意公園，石材鋪地休憩步道，層層過場，轉換好心情返家；限定席次更專屬規劃田地，一圓田園夢。</div>  
      <div class="title">一墅多用置產傳富</div>
      <div class="txt">約2000坪稀有環閉式方正基地，禮獻非凡53席，優質社區管理，出入單純隱私高；室內無虛坪規劃，闊綽使用空間，自用渡假置產皆宜，更是增值保證。</div>  
    </div>
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
          <img class="w-full block" src="@/section/s6/1.jpg" />
          <div class="txt">建築外觀3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s6/2.jpg" />
          <div class="txt">建築外觀3D透視情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s6/3.jpg" />
          <div class="txt">建築外觀3D透視情境示意圖</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slide-prev absolute" @click="slidePrev"></div>
    <div class="slide-next absolute" @click="slideNext"></div>
    <img class="style absolute md:hidden" src="@/section/s6/style-m.svg" />
    <img class="style absolute hidden md:block" src="@/section/s6/style.svg" />
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">IDEAL ARCHITECT</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size-m(879);
  @media screen and (min-width:768px) {
    height: size(1080);
    background: none;
  }

  .bg {
    width: size-m(375);
    height: size-m(538);
    left: 0;
    top: 0;
    background: #4C6830;
    @media screen and (min-width:768px) {
      width: size(556);
      height: size(785);
      left: auto;
      right: 0;
      top: size(139);
    }
  }

  .t1 {
    left: size-m(46);
    top: size-m(14);
    font-weight: 500;
    font-size: size-m(30);
    line-height: size-m(56);
    letter-spacing: 0.1em;
    color: #fff;
    @media screen and (min-width:768px) {
      left: size(1450);
      top: size(211);
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

  .t2 {
    width: size-m(314);
    left: size-m(30);
    top: size-m(80);
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    letter-spacing: 0.15em;
    color: #fff;
    @media screen and (min-width:768px) {
      width: size(386);
      left: size(1426);
      top: size(280);
      font-size: size(16);
      line-height: size(27);
    }

    .title {
      font-weight: 700;
      font-size: size-m(18);
      line-height: size-m(26);
      color: #AFC177;
      margin-bottom: size-m(6);
      @media screen and (min-width:768px) {
        font-size: size(24);
        line-height: size(56);
        margin-bottom: size(0);
      }
    }

    .txt {
      margin-bottom: size-m(20);
      @media screen and (min-width:768px) {
        margin-bottom: size(11);
      }
    }
  }

  .slider {
    width: 100%;
    left: 0;
    top: size-m(538);
    @media screen and (min-width:768px) {
      width: size(1341);
      left: size(0);
      top: size(139);
    }

    img {
      width: 100%;
      height: size-m(283.91);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(785);
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
        left: size(21);
        bottom: size(21);
        font-size: size(15);
        line-height: size(15);
      }
    }
  }

  .slide-prev, .slide-next {
    width: size-m(28.35);
    height: size-m(28.35);
    left: size-m(262);
    top: size-m(832);
    background-image: url(@/section/s3/arrow-prev.svg);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    cursor: pointer;
    @media screen and (min-width:768px) {
      width: size(37);
      height: size(37);
      left: size(87);
      top: size(946);
    }
  }

  .slide-next {
    left: size-m(315.65);
    background-image: url(@/section/s3/arrow-next.svg);
    @media screen and (min-width:768px) {
      left: size(174);
    }
  }

  .style {
    left: 0;
    top: size-m(417.63);
    width: 100%;
    z-index: 1;
    @media screen and (min-width:768px) {
      left: auto;
      right: size(-100);
      bottom: size(50);
      top:auto;
      width: size(580);
    }
  }

  .t3 {
    left: size-m(110);
    top: size-m(554);
    font-weight: 900;
    font-size: size-m(23);
    line-height: size-m(56);
    letter-spacing: 0.075em;
    color: #FFFFFF;
    z-index: 1;
    @media screen and (min-width:768px) {
      left: size(647);
      top: size(945);
      font-size: size(48);
      line-height: size(56);
      letter-spacing: 0.395em;
      color: #CFD9D0;
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