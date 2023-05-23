<template>
  <div class="s3s4 relative">
    <img class="bg absolute hidden md:block" src="@/section/s3/bg.svg" />

    <section class="s3 relative">
      <div class="t1 absolute text-white" data-aos="fade-up" data-aos-delay="0">THE NATURE LIFE</div>
      <img class="line absolute" src="@/section/s3/line.svg" />
      <img class="style1 absolute md:hidden" src="@/section/s3/style1-m.svg" />
      <img class="style1 absolute hidden md:block" src="@/section/s3/style1.svg" />
      <img class="style2 absolute" src="@/section/s3/style2.svg" />
      <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">宅‧森活</div>
      <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">5分鐘梅花湖，著名國家級風景區，得天獨厚生態環境，風光媲美日月潭，鮮氧負離子環繞，頂著藍天白雲，輕鬆在生活與人與家之間，成就自在和諧關係。</div>
      <div class="slider absolute">
        <swiper
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          @init="init1"
        >
          <swiper-slide>
            <img class="w-full block" src="@/section/s3/1.jpg" />
            <div class="txt">圖片皆為梅花湖實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s3/2.jpg" />
            <div class="txt">圖片皆為梅花湖實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s3/3.jpg" />
            <div class="txt">圖片皆為梅花湖實景拍攝</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="slide-prev absolute" @click="slidePrev1"></div>
      <div class="slide-next absolute" @click="slideNext1"></div>
      <img class="grid grid1 absolute" src="@/section/s3/1.jpg" />
      <img class="grid grid2 absolute" src="@/section/s3/2.jpg" />
      <img class="grid grid3 absolute" src="@/section/s3/3.jpg" />
    </section>
    <section class="s4 relative">
      <div class="style1 absolute">
        <img src="@/section/s4/style1.svg" />
      </div>
      <!-- <img class="style1 absolute" src="@/section/s4/style1.svg" /> -->
      <img class="style2 absolute" src="@/section/s4/style2.svg" />
      <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">掌‧世界</div>
      <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">擁宜蘭高鐵預定地、國道5號、羅東火車站、羅東轉運站，一高二站直抵雙北市心國際享受；更鄰羅東後站、廣興商圈，12年優質學區，立豐盛生機之地。</div>
      <div class="slider absolute">
        <swiper
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          @init="init2"
        >
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/1.jpg" />
            <div class="txt">國道5號/實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/2.jpg" />
            <div class="txt">高鐵情境示意圖</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/3.jpg" />
            <div class="txt">羅東火車站/實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/4.jpg" />
            <div class="txt">羅東轉運站/實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/5.jpg" />
            <div class="txt">羅東後站商圈/實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/6.jpg" />
            <div class="txt">羅東夜市/實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/7.jpg" />
            <div class="txt">國華國中/實景拍攝</div>
          </swiper-slide>
          <swiper-slide>
            <img class="w-full block" src="@/section/s4/8.jpg" />
            <div class="txt">羅東高商/實景拍攝</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="slide-prev absolute" @click="slidePrev2"></div>
      <div class="slide-next absolute" @click="slideNext2"></div>
      <div class="grids absolute hidden md:flex">
        <div class="grid">
          <img class="w-full block" src="@/section/s4/1.jpg" />
          <div class="txt">國道5號/實景拍攝</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/2.jpg" />
          <div class="txt">高鐵情境示意圖</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/3.jpg" />
          <div class="txt">羅東火車站/實景拍攝</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/4.jpg" />
          <div class="txt">羅東轉運站/實景拍攝</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/5.jpg" />
          <div class="txt">羅東後站商圈/實景拍攝</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/6.jpg" />
          <div class="txt">羅東夜市/實景拍攝</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/7.jpg" />
          <div class="txt">國華國中/實景拍攝</div>
        </div>
        <div class="grid">
          <img class="w-full block" src="@/section/s4/8.jpg" />
          <div class="txt">羅東高商/實景拍攝</div>
        </div>
      </div>
      <div class="t1 absolute text-[#CFD9D0]" data-aos="fade-up" data-aos-delay="0">CONVENIENCES OF LIFE</div>
      <img class="line absolute" src="@/section/s4/line.svg" />
      <img class="style3 absolute hidden md:block" src="@/section/s4/style3.svg" />
    </section>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3s4 {

  .bg {
    top: 0;
    left: 0;
  }
  
  .t2 {
    left: size-m(197);
    top: size-m(161);
    font-weight: 500;
    font-size: size-m(30);
    line-height: size-m(56);
    letter-spacing: 0.1em;
    color: #7EAA46;
    @media screen and (min-width:768px) {
      left: size(510);
      top: size(578);
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
    top: size-m(232);
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    letter-spacing: 0.15em;
    @media screen and (min-width:768px) {
      width: size(590);
      left: size(157);
      top: size(649);
      font-size: size(16);
      line-height: size(27);
    }
  }

  .slider {
    width: 100%;
    left: 0;
    top: size-m(336);
    @media screen and (min-width:768px) {
      width: size(1038);
      left: size(779);
      top: size(207);
    }

    img {
      width: 100%;
      height: size-m(270.59);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(751);
      }
    }

    .txt {
      margin-left: size-m(10);
      margin-top: size-m(12.41);
      font-weight: 400;
      font-size: size-m(12);
      line-height: size-m(12);
      letter-spacing: 0.01em;
      color: #514D4D;
      @media screen and (min-width:768px) {
        margin-left: size(0);
        margin-top: size(13);
        font-size: size(15);
        line-height: size(15);
      }
    }
  }

  .slide-prev, .slide-next {
    width: size-m(28.35);
    height: size-m(28.35);
    left: size-m(264);
    top: size-m(612);
    background-image: url(@/section/s3/arrow-prev.svg);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    cursor: pointer;
    @media screen and (min-width:768px) {
      width: size(37);
      height: size(37);
      left: size(1692);
      top: size(971);
    }
  }

  .slide-next {
    left: size-m(315.65);
    background-image: url(@/section/s3/arrow-next.svg);
    @media screen and (min-width:768px) {
      left: size(1779);
    }
  }
}

.s3 {
  width: 100%;
  height: size-m(667);
  background: #CFD9D0;
  @media screen and (min-width:768px) {
    height: size(1080);
    background: none;
  }

  .t1 {
    top: size-m(15);
    left: size-m(74);
    font-weight: 900;
    font-size: size-m(23);
    line-height: size-m(56);
    letter-spacing: 0.075em;
    @media screen and (min-width:768px) {
      top: size(103);
      left: size(446);
      font-size: size(71);
      line-height: size(56);
      letter-spacing: 0.395em;
    }
  }

  .line {
    top: size-m(51);
    left: size-m(-405);
    width: size-m(1005);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(142);
      left: size(-81);
      width: size(2187);
    }
  }

  .style1 {
    width: size-m(203);
    left: size-m(63);
    top: size-m(99);
    @media screen and (min-width:768px) {
      width: size(375);
      left: size(299);
      top: size(406);
    }
  }

  .style2 {
    width: size-m(120);
    left: size-m(-24);
    top: size-m(109);
    transform: skewX(-6deg);
    transform-origin: 50% 100%;
    animation: sakura 4s ease-in-out infinite alternate-reverse;
    @media screen and (min-width:768px) {
      width: size(242);
      left: size(122);
      top: size(414);
    }
  }

  .grid {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      width: size(199);
      height: size(199);
      left: size(122);
      top: size(759);
      object-fit: cover;
      border: size(1) solid #7EAA46;
    }
  }

  .grid2 {
    left: size(340);
  }

  .grid3 {
    left: size(559);
  }
}

.s4 {
  width: 100%;
  height: size-m(753);
  background-image: url(@/section/s4/bg.svg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  @media screen and (min-width:768px) {
    height: size(1080);
    background: none;
  }

  .style1 {
    left: size-m(8.31);
    top: size-m(30.76);
    width: 0%;
    border-radius: 0 0 0 100%;
    animation: sakura3 8s infinite;
    opacity: 1;
    overflow: hidden;
    @media screen and (min-width:768px) {
      left: size(50.33);
      top: size(26.8);
      // width: size(444.67);
    }

    img {
      width: size-m(170.69);
      max-width: none;
      @media screen and (min-width:768px) {
        width: size(444.67);
      }
    }
  }

  .style2 {
    left: size-m(-16);
    top: size-m(-31.72);
    width: size-m(120.93);
    transform: skewY(3deg);
    transform-origin: 0% 100%;
    animation: sakura 2s ease-in-out infinite alternate-reverse;
    @media screen and (min-width:768px) {
      left: size(-13);
      top: size(-149);
      width: size(315.05);
    }
  }

  .t2 {
    left: size-m(181);
    top: size-m(52);
    @media screen and (min-width:768px) {
      left: size(510);
      top: size(146);
    }
  }

  .t3 {
    top: size-m(125);
    @media screen and (min-width:768px) {
      width: size(795);
      left: size(763);
      top: size(149);
    }
  }

  .slider {
    top: size-m(236 - 4);
    @media screen and (min-width:768px) {
      display: none;
    }

    img {
      height: size-m(375);
      border-top: size-m(4) solid #7EAA46;
    }

    .txt {
      color: #7EAA46;
    }
  }

  .slide-prev, .slide-next {
    top: size-m(616);
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .grids {
    width: size(1236);
    left: size(337);
    top: size(260);
    flex-wrap: wrap;
    justify-content: space-between;

    .grid {
      width: size(286);
      margin-bottom: size(16);

      .txt {
        margin-top: size(3);
        font-weight: 400;
        font-size: size(15);
        line-height: size(15);
        letter-spacing: 0.01em;
        color: #7EAA46;
      }
    }
  }

  .t1 {
    top: size-m(667);
    left: size-m(34);
    font-weight: 900;
    font-size: size-m(23);
    line-height: size-m(56);
    letter-spacing: 0.075em;
    @media screen and (min-width:768px) {
      left: size(265);
      top: size(911);
      font-size: size(71);
      line-height: size(56);
      letter-spacing: 0.395em;
    }
  }

  .line {
    left: size-m(-405);
    top: size-m(711);
    width: size-m(1005);
    max-width: none;
    @media screen and (min-width:768px) {
      left: size(0.2);
      top: size(938.8);
      width: size(2241);
    }
  }

  .style3 {
    width: size(338);
    left: size(1650);
    top: size(646);
    transform: skewX(6deg);
    transform-origin: 100% 100%;
    animation: sakura 4s ease-in-out infinite alternate-reverse;
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
const swiperRef1 = ref(null);
const swiperRef2 = ref(null);

const init1 = swiper => {
  swiperRef1.value = swiper;
}

const slidePrev1 = () => {
  if(swiperRef1.value){
    swiperRef1.value.slidePrev();
  }
}

const slideNext1 = () => {
  if(swiperRef1.value){
    swiperRef1.value.slideNext();
  }
}

const init2 = swiper => {
  swiperRef2.value = swiper;
}

const slidePrev2 = () => {
  if(swiperRef2.value){
    swiperRef2.value.slidePrev();
  }
}

const slideNext2 = () => {
  if(swiperRef2.value){
    swiperRef2.value.slideNext();
  }
}
</script>