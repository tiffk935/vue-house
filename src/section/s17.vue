<template>
  <section class="s17 w-full relative text-[#173868] bg-[#C8D1D5]">
    <div class="txt text-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">造夢者 清景麟建築</div>
        <div class="subtitle">CING JING LIN GROUP</div>
        <div class="content">
          專業實力，用心累積，成就您嚮往的家<br>
          突破格局，為住戶追求更好的路上永不止息
        </div>
      </div>
    </div>
    <img class="style" src="@/section/s17/style.png" />
    <div class="slider">
      <swiper
        :loop="true"
        :navigation="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init"
      >
        <swiper-slide>
          <div class="img relative">
            <img class="hidden md:block" src="@/section/s17/1.webp" />
            <img class="md:hidden" src="@/section/s17/1-m.webp" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img relative">
            <img class="hidden md:block" src="@/section/s17/2.webp" />
            <img class="md:hidden" src="@/section/s17/2-m.webp" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="controls absolute flex justify-between">
      <svg class="slide-prev block" @click="slidePrev" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_14_56466)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4594 31.1329C17.9963 31.6699 18.8669 31.6699 19.4039 31.1329C19.9409 30.5959 19.9409 29.7253 19.4039 29.1884L10.3226 20.107L19.4039 11.0257C19.9409 10.4887 19.9409 9.61811 19.4039 9.08114C18.8669 8.54417 17.9963 8.54417 17.4594 9.08114L7.40575 19.1348C6.86878 19.6717 6.86878 20.5423 7.40575 21.0793L17.4594 31.1329Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_14_56466" x="3.00305" y="8.67822" width="20.8036" height="30.8574" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_56466"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_56466" result="shape"/>
        </filter>
        </defs>
      </svg>
      <svg class="slide-next block" @click="slideNext" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_14_56465)">
        <g filter="url(#filter0_d_14_56465)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7551 9.08144C22.2181 8.54447 21.3475 8.54447 20.8106 9.08144C20.2736 9.61841 20.2736 10.489 20.8106 11.026L29.8919 20.1073L20.8106 29.1887C20.2736 29.7256 20.2736 30.5963 20.8106 31.1332C21.3475 31.6702 22.2181 31.6702 22.7551 31.1332L32.8087 21.0796C33.3457 20.5426 33.3457 19.672 32.8087 19.1351L22.7551 9.08144Z" fill="white"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_d_14_56465" x="16.4078" y="8.67871" width="20.8036" height="30.8574" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_56465"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_56465" result="shape"/>
        </filter>
        <clipPath id="clip0_14_56465">
        <rect width="40.2145" height="40.2145" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s17 {
  font-size: size-m(13);
  font-weight: 500;
  line-height: size-m(20);
  @media (min-width: 768px) {
    font-size: size(19);
    line-height: size(36);
    height: size(1080);
    letter-spacing: size(7.26);
  }

  .txt {
    padding: size-m(35) size-m(26) size-m(17) size-m(26);
    @media (min-width: 768px) {
      position: absolute;
      top: size(265);
      left: size(153);
      width: size(550);
      padding: 0;
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(6.9);
      margin-bottom: size-m(5);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(48);
        letter-spacing: size(15.84);
        margin-bottom: size(9);
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(4.95);
      margin-bottom: size-m(15);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        margin-bottom: size(60);
      }
    }
  }

  .style {
    width: size-m(307);
    margin: 0 auto;
    @media (min-width: 768px) {
      position: absolute;
      top: size(700);
      left: size(162);
      width: size(532);
    }
  }

  .img {
    width: 100%;
    @media (min-width: 768px) {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (min-width: 768px) {
        width: auto;
        object-fit: contain;
        margin: 0 auto;
      }
    }
  }

  .slider {
    padding-top: size-m(50);
    @media (min-width: 768px) {
      position: absolute;
      padding-top: 0;
      top: size(191);
      left: size(849);
      width: size(946);
      height: size(698);
    }

    .swiper {
      overflow: visible;
      @media (min-width: 768px) {
        overflow: hidden;
        height: 100%;
      }
    }

    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #fff;
      justify-content: flex-start;
      text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.60);
      top: size-m(-50);
      margin: 0;

      &:after {
        font-size: 7vw;
        @media (min-width: 768px) {
          font-size: 1.4vw;
        }
      }
    }

    .swiper-button-next {
      justify-content: flex-end;
    }
  }

  .controls {
    top: size-m(270);
    left: size-m(10);
    width: size-m(375 - 20);
    @media (min-width: 768px) {
      top: size(540);
      left: size(369);
      width: size(116);
    }

    svg {
      width: size-m(40);
      cursor: pointer;
      @media (min-width: 768px) {
        width: size(40);
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
import { Autoplay, Navigation } from "swiper";
const modules = ref([Autoplay, Navigation]);
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