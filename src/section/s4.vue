<template>
  <section class="s4 user-n w-full relative">
    <div class="title" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">Luxurious City Center</div>
      <div class="t2">台北市心的中心 <br class="md:hidden">奢華雙綠軸核心</div>
      <img src="@/section/s4/title-style.svg" />
    </div>
    <div class="content">
      <div class="item">
        <div class="img">
          <swiper
            :loop="false"
            :navigation="false"
            :modules="modules"
          >
            <swiper-slide>
              <div class="relative h-full">
                <img src="@/section/s4/img1.jpg" />
                <div class="txt">中山北路夜景實景拍攝</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="info relative">
          <div class="t1">Financial hub</div>
          <div class="t2">千億資金規模  <br class="md:hidden">國際鍍金優勢</div>
          <div class="t3">中山北路大道不僅坐擁西區大國門台北雙星，更匯聚上海商銀╳陽信銀行雙金融總部等各大金融銀行機構、國賓皇宮酒店及嘉新大樓改建案等重磅投資。</div>
          <img class="leaf1" src="@/section/s4/leaf1.svg" />
        </div>
      </div>

      <div class="item">
        <div class="img">
          <swiper
            :loop="false"
            :navigation="false"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="modules"
            @init="init2"
            @slideChange="slideChange2"
          >
            <swiper-slide>
              <div class="relative h-full">
                <img src="@/section/s4/img2-1.jpg" />
                <div class="txt">晶華酒店實景拍攝</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative h-full">
                <img src="@/section/s4/img2-2.jpg" />
                <div class="txt">台北老爺酒店實景</div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="slide-prev" v-if="slider2Idx === 1" @click="slidePrev2">
            <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15.3071" r="14" transform="rotate(-180 15 15.3071)" fill="white" stroke="#4C6145" stroke-width="2"/>
              <path d="M21.2495 15.458L9.80718 15.458" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1567 21.185L9.43557 15.4638L15.1567 9.74268" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="slide-next" v-else @click="slideNext2">
            <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.5" cy="15.3071" r="14" fill="white" stroke="#4C6145" stroke-width="2"/>
              <path d="M9.25049 15.1562H20.6928" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.3433 9.42925L21.0644 15.1504L15.3433 20.8716" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="info relative">
          <div class="t1">Classic Elegance</div>
          <div class="t2">中山北路二段 <br class="md:hidden">締造經典風華</div>
          <div class="t3">40米寬裕的中山北路二段匯聚了各大五星級風華；晶華酒店、台北老爺酒店、大倉久和大飯店、LV旗艦店展現優雅氣韻以及獨特品味象徵。</div>
          <img class="leaf2" src="@/section/s4/leaf2.svg" />
        </div>
      </div>

      <div class="item">
        <div class="img">
          <swiper
            :loop="false"
            :navigation="false"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="modules"
            @init="init3"
            @slideChange="slideChange3"
          >
            <swiper-slide>
              <div class="relative h-full">
                <img src="@/section/s4/img3-1.jpg" />
                <div class="txt">心中山線形公園實景</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative h-full">
                <img src="@/section/s4/img3-2.jpg" />
                <div class="txt">誠品南西實景</div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="slide-prev" v-if="slider3Idx === 1" @click="slidePrev3">
            <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15.3071" r="14" transform="rotate(-180 15 15.3071)" fill="white" stroke="#4C6145" stroke-width="2"/>
              <path d="M21.2495 15.458L9.80718 15.458" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1567 21.185L9.43557 15.4638L15.1567 9.74268" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="slide-next" v-else @click="slideNext3">
            <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.5" cy="15.3071" r="14" fill="white" stroke="#4C6145" stroke-width="2"/>
              <path d="M9.25049 15.1562H20.6928" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.3433 9.42925L21.0644 15.1504L15.3433 20.8716" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="info relative">
          <div class="t1">Cultural life</div>
          <div class="t2">心中山線形公園 <br class="md:hidden">誠品南西風情</div>
          <div class="t3">500米的心中山線形公園廊帶，聚合文青風尚與異國風情休閒場域。新光三越、誠品書店、赤峰街文創商圈等，呈現出獨有的跨文化生活聚落感。</div>
          <img class="leaf3" src="@/section/s4/leaf3.svg" />
        </div>
      </div>
    </div>
    <img class="style1 absolute" src="@/section/s4/style1.svg" />
    <img class="style2 absolute" src="@/section/s4/style2.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {

  @keyframes style1 {
    from { transform: rotate(14deg) skew(0deg); }
    to {transform: translateX(19deg) skew(4deg);}
  }

  @keyframes style2 {
    from { transform: rotate(4deg) skew(3deg); }
    to { transform: rotate(7deg) skew(0deg); }
  }

  padding: size-m(60) 0 size-m(122.29) 0;
  background-image: url(@/section/s4/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    padding: size(169) 0 size(375) 0;
    background-image: url(@/section/s4/bg.jpg);
  }

  .slide-prev, .slide-next {
    position: absolute;
    top: size-m(90);
    left: size-m(-15);
    width: size-m(30);
    cursor: pointer;
    z-index: 11;
    @media (min-width: 768px) {
      top: size(239);
      left: size(918);
      width: size(52);
    }
  }

  .swiper {
    height: 100%;
  }

  .title {
    font-family: "Noto Serif TC";
    font-weight: 700;
    text-align: center;
    margin-bottom: size-m(15.66);
    @media (min-width: 768px) {
      margin-bottom: size(169);
    }

    .t1 {
      font-size: size-m(14);
      line-height: normal;
      background: linear-gradient(90deg, rgba(249, 225, 176, 0.50) 0%, rgba(156, 199, 142, 0.50) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: size-m(3);
      @media (min-width: 768px) {
        font-size: size(45);
        margin-bottom: size(18);
      }
    }

    .t2 {
      color: #F7E0B3;
      font-size: size-m(25);
      line-height: 150%; /* 37.5px */
      letter-spacing: size-m(1.5);
      margin-bottom: size-m(10);
      @media (min-width: 768px) {
        font-size: size(45);
        letter-spacing: size(2.7);
        margin-bottom: size(31);
      }
    }

    img {
      width: size-m(134);
      margin: 0 auto;
      @media (min-width: 768px) {
        width: size(299);
      }
    }
  }

  .content {
    .item {
      margin: 0 0 size-m(80) auto;
      width: size-m(340);
      @media (min-width: 768px) {
        margin: 0 auto size(127) auto;
        width: size(1648);
        display: flex;
        border-top-left-radius: size(80);
        overflow: hidden;
      }

      &:nth-child(even) {
        margin: 0 auto size-m(80) 0;
        @media (min-width: 768px) {
          margin: 0 auto size(127) auto;
          flex-direction: row-reverse;
          border-top-left-radius: size(0);
          border-top-right-radius: size(80);
        }

        .slide-prev, .slide-next {
          left: auto;
          right: size-m(-15);
          @media (min-width: 768px) {
            right: size(916);
          }
        }

        .img img {
          border-top-left-radius: size-m(0);
          border-top-right-radius: size-m(40);
          @media (min-width: 768px) {
            border-top-right-radius: size(0);
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      .img {
        position: relative;
        @media (min-width: 768px) {
          width: size(942);
        }

        img {
          border-top-left-radius: size-m(40);
          @media (min-width: 768px) {
            border-top-left-radius: size(0);
            height: 100%;
            width: size(942);
            object-fit: cover;
          }
        }

        .txt {
          position: absolute;
          bottom: size-m(10);
          right: size-m(10);
          font-size: size-m(12);
          letter-spacing: size-m(1.2);
          color: #fff;
          @media (min-width: 768px) {
            bottom: size(10);
            right: size(10);
            font-size: size(14);
            letter-spacing: size(1.2);
          }
        }
      }

      .info {
        background: #fff;
        padding: size-m(45) size-m(35) size-m(22);
        @media (min-width: 768px) {
          padding: size(119) size(127) size(96) size(116);
          width: size(706);
        }

        .t1 {
          color: rgba(76, 97, 69, 0.50);
          font-family: "Noto Serif TC";
          font-size: size-m(14);
          font-weight: 700;
          line-height: normal;
          margin-bottom: size-m(5);
          @media (min-width: 768px) {
            font-size: size(40);
            margin-bottom: size(57);
          }
        }

        .t2 {
          color: #4C6145;
          font-family: "Noto Serif TC";
          font-size: size-m(22);
          font-weight: 700;
          line-height: normal;
          padding-bottom: size-m(21);
          margin-bottom: size-m(17);
          border-bottom: size-m(2) solid #4C6145;
          @media (min-width: 768px) {
            font-size: size(34);
            padding-bottom: size(22);
            margin-bottom: size(22);
            border-bottom: size(2) solid #4C6145;
          }
        }

        .t3 {
          color: #1F1F1F;
          text-align: justify;
          font-size: size-m(14);
          font-style: normal;
          line-height: 170%;
          @media (min-width: 768px) {
            font-size: size(16);
            line-height: normal;
          }
        }

        .leaf1 {
          position: absolute;
          top: size-m(12.8);
          left: size-m(182.6);
          width: size-m(158);
          @media (min-width: 768px) {
            top: size(-5);
            left: size(411);
            width: size(259.36);
          }
        }

        .leaf2 {
          position: absolute;
          top: size-m(49.4);
          left: size-m(210.98);
          width: size-m(92.83);
          @media (min-width: 768px) {
            top: size(52);
            left: size(500);
            width: size(160.3);
          }
        }

        .leaf3 {
          position: absolute;
          top: size-m(48.29);
          left: size-m(34);
          width: size-m(118.5);
          @media (min-width: 768px) {
            top: size(40);
            left: size(116);
            width: size(211.19);
          }
        }
      }

      &:last-child .info {
        .t1, .t2 {
          text-align: right;
        }
      }
    }
  }

  .style1 {
    top: size-m(50);
    left: size-m(-80);
    width: size-m(204.17);
    // transform: rotate(27deg);
    transform: rotate(10deg) skew(6deg);
    transform-origin: 0 0;
    animation: style1 3s linear infinite alternate;
    @media (min-width: 768px) {
      top: size(-42);
      left: size(-92);
      width: size(590);
      transform: rotate(0deg);
      animation-duration: 7s;
    }
  }

  .style2 {
    bottom: size-m(-30);
    right: size-m(-45);
    width: size-m(245);
    transform: rotate(7deg);
    transform-origin: 100% 100%;
    animation: style2 4s linear infinite alternate;
    @media (min-width: 768px) {
      bottom: size(-34.2);
      right: size(-106.21);
      width: size(616.22);
      transform: rotate(0deg);
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
const swiperRef2 = ref();
const swiperRef3 = ref();
const slider2Idx = ref(0);
const slider3Idx = ref(0);

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

const slideChange2 = () => {
  slider2Idx.value = swiperRef2.value.realIndex;
}

const init3 = swiper => {
  swiperRef3.value = swiper;
}

const slidePrev3 = () => {
  if(swiperRef3.value){
    swiperRef3.value.slidePrev();
  }
}

const slideNext3 = () => {
  if(swiperRef3.value){
    swiperRef3.value.slideNext();
  }
}

const slideChange3 = () => {
  slider3Idx.value = swiperRef3.value.realIndex;
}
</script>