<template>
  <section class="s3 w-full relative">
    <img class="style absolute" src="@/section/s3/style.png" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
    <div class="en relative">
      <div class="line absolute" data-aos="line-left" data-aos-duration="1000" data-aos-delay="0"></div>
      <div class="en1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">EDUCATION</div>
      <div class="en2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">Create a Bright Future for Your Children</div>
    </div>
    <div class="md:flex md:justify-between md:items-end">
      <div class="zh md:flex md:justify-between md:items-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="zh1">生活機能</div>
        <div>
          <div class="zh2">孕育雍和<br>成就 孩子的未來</div>
          <div class="zh3">
            百年悠久歷史<br>
            見證著南海特區人文風骨<br>
            始終名列台北優質學區排行榜<br>
            百年建中、南門國中、國語實小<br>
            重視教育的家庭，<br>
            選擇啟發思考的成長環境<br>
            氣質從小蘊養，教育傳承雍雅文化精髓
          </div>
        </div>
      </div>
      <div class="slider">
        <swiper
          :loop="true"
          :navigation="false"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          @init="init"
        >
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s3/1.jpg" />
              <div class="txt">國語實驗國民小學</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s3/2.jpg" />
              <div class="txt">建國中學</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s3/3.jpg" />
              <div class="txt">南海藝廊</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s3/4.jpg" />
              <div class="txt">南門國中雙語教育學校</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s3/5.jpg" />
              <div class="txt">臺灣博物館南門園區</div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="slide-prev" @click="slidePrev"></div>
        <div class="slide-next" @click="slideNext"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  padding: size-m(173) size-m(30) size-m(58) size-m(30);
  font-family: "Noto Serif TC";
  @media screen and (min-width:768px) {
    padding: size(266.44) size(163) size(174) size(163);
  }

  .style {
    top: size-m(70.76);
    left: size-m(193.5);
    width: size-m(161.63);
    @media screen and (min-width:768px) {
      top: size(230.42);
      left: size(245.63);
      width: size(344.37);
    }
  }

  .en {
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      width: size(1157 - 30);
      margin: 0 0 size(35) auto;
      text-align: right;
    }

    .line {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        width: size(884 - 30);
        height: size(1);
        background: #BBA693;
        left: 0;
        top: 50%;
      }
    }

    .en1 {
      color: #BBA693;
      font-size: size-m(24);
      line-height: 160%;
      @media screen and (min-width:768px) {
        font-size: size(36);
        letter-spacing: .1em;
      }
    }

    .en2 {
      font-size: size-m(12);
      line-height: 170%;
      @media screen and (min-width:768px) {
        font-size: size(13);
        letter-spacing: .13em;
      }
    }
  }

  .zh {
    padding-left: size-m(21.42);
    border-left: size-m(1) solid #BBA693;
    @media screen and (min-width:768px) {
      padding: 0;
      border: none;
      width: size(485.22);
    }

    .zh1 {
      color: #C1AD8F;
      font-size: size-m(25);
      font-weight: 700;
      line-height: 120%;
      letter-spacing: .13em;
      margin-bottom: size-m(26.63);
      @media screen and (min-width:768px) {
        padding: 0;
        font-size: size(51);
        margin-bottom: 0;
        writing-mode: vertical-lr;
      }
    }

    .zh2 {
      font-size: size-m(20);
      font-weight: 700;
      line-height: 140%;
      letter-spacing: .13em;
      margin-bottom: size-m(21.28);
      @media screen and (min-width:768px) {
        font-size: size(41);
        margin-bottom: size(33.28);
      }
    }

    .zh3 {
      font-size: size-m(14);
      font-weight: 600;
      line-height: 205%;
      letter-spacing: .06em;
      margin-bottom: size-m(21.28);
      @media screen and (min-width:768px) {
        font-size: size(20);
        margin-bottom: 0;
      }
    }
  }

  .slider {
    margin: 0 size-m(-30);
    position: relative;
    @media screen and (min-width:768px) {
      margin: 0;
      width: size(950);
      padding-bottom: size(50);
      transform: translateY(size(50));
      overflow: hidden;
    }

    .slide-prev, .slide-next {
      width: size-m(30);
      height: size-m(30);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background-size: size-m(12.8) auto;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        display: none;
      }
    }

    .slide-prev {
      left: 0;
      background-image: url(@/section/s3/arrow-prev.svg);
      background-position: size-m(7) center;
    }

    .slide-next {
      right: 0;
      background-image: url(@/section/s3/arrow-next.svg);
      background-position: right size-m(7) center;
    }

    .swiper {
      width: size-m(315);
      margin: 0 auto;
      @media screen and (min-width:768px) {
        width: 100%;
        overflow: visible;
      }

      .swiper-pagination {
        display: none;
        @media screen and (min-width:768px) {
          display: block;
          line-height: 1;
          margin: 0;
          bottom: -2vw;
          display: flex;
          justify-content: flex-end;

          .swiper-pagination-bullet {
            width: size(20);
            height: size(20);
            margin: 0 0 0 size(10);
            background: none;
            opacity: 1;
            border: size(4) solid rgba(0,0,0,0.2);

            &.swiper-pagination-bullet-active {
              border-color: #C1AD8F;
            }
          }
        }
      }
    }

    .txt {
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      background: rgba(0,0,0,0.7);
      padding: 0 size-m(10);
      line-height: size-m(20);
      font-size: size-m(12);
      color: #fff;
      font-family: "Noto Sans TC";
      @media screen and (min-width:768px) {
        bottom: size(10);
        right: size(20);
        padding: 0 size(10);
        line-height: size(24);
        font-size: size(14);
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
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
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