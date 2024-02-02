<template>
  <section class="s6 w-full relative text-[#173868] bg-[#C8D1D5] md:flex md:items-stretch">
    <div class="txt text-center md:flex md:justify-center md:items-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">渴望綠意</div>
        <div class="subtitle">2.1萬坪平實公園 <br>無以撼動的精彩簇擁</div>
        <div class="content text-left">
          <p>平實公園／ 比美紐約中央公園綠海壯闊，2.1萬坪森度綠富，同步國際富金景觀哲學</p>
          <p>明星學區／ 東光國小、復興國中、台南一中、成功大學等一流名校就近讀</p>
          <p>成大醫院／ 近距成大醫院、榮總台南分院等醫療機能，醫生、護理從業人員優質客群</p>
        </div>
        <div class="controls hidden md:flex md:justify-end">
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
      </div>
    </div>
    <div class="pic hidden md:block md:flex-1">
      <div class="w-full">
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
            <div class="md:flex md:flex-wrap">
              <div class="img relative w-full img1">
                <img class="w-full block" src="@/section/s6/1.webp" />
                <div class="info absolute">平實公園實景拍攝</div>
              </div>
              <div class="img relative half-left mb0 img2">
                <img class="w-full block" src="@/section/s6/2.webp" />
                <div class="info absolute">平實公園實景拍攝</div>
              </div>
              <div class="img relative half-right mb0 img3">
                <img class="w-full block" src="@/section/s6/3.webp" />
                <div class="info absolute">平實公園實景拍攝</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="md:flex md:flex-wrap">
              <div class="img relative half-left img4">
                <img class="w-full block" src="@/section/s6/4.webp" />
                <div class="info absolute">成功大學實景拍攝</div>
              </div>
              <div class="img relative half-right img5">
                <img class="w-full block" src="@/section/s6/5.webp" />
                <div class="info absolute">成功大學實景拍攝</div>
              </div>
              <div class="img relative w-full mb0 img6">
                <img class="w-full block" src="@/section/s6/6.webp" />
                <div class="info absolute">成大醫院實景拍攝</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="slider md:hidden">
      <swiper
        :loop="true"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s6/1.webp" />
            <div class="info absolute">平實公園實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s6/2.webp" />
            <div class="info absolute">平實公園實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s6/3.webp" />
            <div class="info absolute">平實公園實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s6/4.webp" />
            <div class="info absolute">成功大學實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s6/5.webp" />
            <div class="info absolute">成功大學實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s6/6.webp" />
            <div class="info absolute">成大醫院實景拍攝</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  font-size: size-m(12);
  font-weight: 500;
  line-height: size-m(20);
  @media (min-width: 768px) {
    font-size: size(19);
    line-height: size(33);
  }

  .txt {
    padding: size-m(50) size-m(33);
    @media (min-width: 768px) {
      width: calc(size(1920 - 1215));
      padding: 0 size(132);
    }

    p {
      line-height: size-m(20);
      margin-bottom: size-m(10);
      @media (min-width: 768px) {
        line-height: size(33);
        margin-bottom: size(0);
      }
    }

    .controls {
      margin-top: size(18);

      svg {
        width: size(40);
        cursor: pointer;
      }
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(9);
      text-indent: size-m(9);
      margin-bottom: size-m(13);
      padding-bottom: size-m(13);
      position: relative;
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(58);
        letter-spacing: size(19.14);
        text-indent: size(19.14);
        margin-bottom: size(24);
        padding-bottom: size(19);
      }
  
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: size-m(115);
        height: size-m(1);
        background: #173868;
        @media (min-width: 768px) {
          width: size(215);
          height: size(1);
        }
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(5);
      text-indent: size-m(5);
      margin-bottom: size-m(26);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        text-indent: size(7.92);
        margin-bottom: size(43);
      }
    }
  }

  .pic {
    @media (min-width: 768px) {
      width: size(1215);
    }

    .img {
      margin-bottom: size(12);

      &.mb0 {
        margin-bottom: 0;
      }

      &.half-left, &.half-right {
        &.half-left {
          width: calc(50% - size(6));
          margin-right: size(6);
        }

        &.half-right {
          width: calc(50% - size(6));
          margin-left: size(6);
        }
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .img1 {
      height: size(666);
    }

    .img2, .img3 {
      height: size(1080 - 666 - 12);
    }

    .img4, .img5 {
      height: size(1080 - 574 - 12);
    }

    .img6 {
      height: size(574);
    }
  }

  .city {
    font-family: "Noto Serif TC";
    color: rgba(255, 255, 255, 0.30);
    font-weight: 700;
    line-height: normal;
    @media (min-width: 768px) {
      top: size(-24);
      right: size(-2 - 13.57);
      font-size: size(59);
      letter-spacing: size(13.57);
    }
  }

  .name {
    font-family: "Noto Serif TC";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (min-width: 768px) {
      top: size(23);
      right: size(27 - 9.18);
      font-size: size(18);
      letter-spacing: size(9.18);
    }
  }

  .info {
    color: #fff;
    @media (min-width: 768px) {
      bottom: size(6);
      right: size(9);
      font-size: size(12);
    }
  }

  .slider {
    .img {
      height: size-m(250);

      .info {
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        font-size: size-m(12);
        line-height: normal;
      }
    }

    .swiper-wrapper {
      align-items: stretch;

      .swiper-slide {
        height: auto;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #fff;
      justify-content: flex-start;

      &:after {
        font-size: 7vw;
      }
    }

    .swiper-button-next {
      justify-content: flex-end;
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