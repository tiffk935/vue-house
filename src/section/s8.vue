<template>
  <section class="s8 w-full relative text-[#040000]">
    <img class="line" src="@/section/s8/line.svg" />
    <img class="balls user-n absolute hidden md:block" src="@/section/s8/balls.webp" />
    <div class="md:flex title" v-if="room === 2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">當代輕盈 美好隨心所欲</div>
      <div class="t2">有溫度的機能空間，收藏小家庭甜蜜時光，隨心展開美好生活的無限想像。</div>
    </div>
    <div class="md:flex title" v-if="room === 3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">經典大器 輕奢美感質地</div>
      <div class="t2">寬敞沈靜空間，優渥人文氛圍，在家的各個角落都能感受美感細節。</div>
    </div>

    <div class="md:flex md:justify-between md:items-end">
      <div class="slider relative">
        <Transition>
          <div v-if="room === 2">
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
              @init="init1"
            >
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/2/1.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/2/2.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/2/3.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/2/4.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/2/5.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/2/6.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="slide-prev" @click="slidePrev1">
          <svg viewBox="0 0 8 8" fill="#EC6300" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4.8,1.5L2.2,3.8l2.7,2.5"/></svg>
            </div>
            <div class="slide-next" @click="slideNext1">
          <svg viewBox="0 0 8 8" fill="#EC6300" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M3.2,6.5l2.7-2.3L3.2,1.7"/></svg>
            </div>
          </div>
          <div v-else>
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
              @init="init2"
            >
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/1.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/2.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/3.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/4.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/5.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/6.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="@/section/s8/3/7.webp" />
                  <div class="txt">實品屋實景</div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="slide-prev" @click="slidePrev2">
          <svg viewBox="0 0 8 8" fill="#EC6300" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4.8,1.5L2.2,3.8l2.7,2.5"/></svg>
            </div>
            <div class="slide-next" @click="slideNext2">
          <svg viewBox="0 0 8 8" fill="#EC6300" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M3.2,6.5l2.7-2.3L3.2,1.7"/></svg>
            </div>
          </div>
        </Transition>
      </div>
      <div class="content md:flex md:flex-col-reverse">
        <div class="room-btns flex justify-between items-start">
          <div :class="{'room-btn': true, 'active': room === 2}" @click="room = 2"><span>2</span>房</div>
          <div :class="{'room-btn': true, 'active': room === 3}" @click="room = 3"><span>3</span>房</div>
        </div>
        <div data-aos="fade-up" v-if="room === 2" data-aos-duration="1000" data-aos-delay="0">
          <div class="t1">北歐風優雅2房</div>
          <div class="t2">
            高坪效空間規劃，動線流暢<br>
客廳通透採光，可容納Ｌ型沙發<br>
餐廚空間區分，溫馨機能好運用<br>
舒心主臥室，採光豐沛充足
          </div>
        </div>
        <div data-aos="fade-up" v-if="room === 3" data-aos-duration="1000" data-aos-delay="0">
          <div class="t1">人文風品味3房</div>
          <div class="t2">
            大面寬客廳，尺度氣派大方<br>
一字型廚房，收納功能完整<br>
規劃主人獨立書房，尊榮禮遇<br>
主臥獨立更衣空間，奢華收納<br>
次臥雙人床大空間，採光明亮
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  padding: size-m(24) 0;
 // background-image: url(@/section/s7/bg-m.webp);
 // background-size: cover;
  @media (min-width: 768px) {
    padding: size(90) size(250);
    background: none;
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity .4s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }

  .line {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: size(1390);
    }
  }

  .balls {
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(-97);
      left: size(1125);
      width: size(646);
    }
  }

  .t1 {
    font-size: size-m(25);
    line-height: size-m(34);
    color: #EC6300;
    font-weight: 700;
    padding: 0 size-m(30);
    margin-bottom: size-m(20);
    @media (min-width: 768px) {
      font-size: size(31);
      line-height: size(42);
      padding: 0;
      margin-bottom: size(19);
    }
  }

  .t2 {
    font-size: size-m(14);
    line-height: 178%;
    color: #040000;
    padding: 0 size-m(30);
    margin-bottom: size-m(13);
    @media (min-width: 768px) {
      font-size: size(18);
      padding: 0;
      margin-bottom: size(93);
    }
  }

  .title {
    @media (min-width: 768px) {
      margin: 0 0 size(32) 0;
      align-items: center;

      .t1 {
        font-size: size(58);
        line-height: size(79);
        margin: 0 size(48) 0 0;
      }

      .t2 {
        margin: 0;
        width: size(405);
      }
    }
  }

  .slider {
    overflow: hidden;
    position: relative;
    height: size-m(210);
    @media (min-width: 768px) {
      width: size(991);
      height: size(660 + 52);
      padding-bottom: size(52);
    }

    .swiper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: visible;
    }

    .swiper-slide {
      img {
        display: block;
        width: 100%;
        height: size-m(210);
        object-fit: cover;
        @media (min-width: 768px) {
          height: size(660);
        }
      }

      .txt {
        position: absolute;
        bottom: size-m(6);
        left: size-m(10);
        color: #fff;
        font-size: size-m(12);
        @media (min-width: 768px) {
          bottom: size(15);
          left: size(25);
          font-size: size(16);
        }
      }
    }

    .slide-prev, .slide-next {
      width: size-m(31);
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: size-m(14);
      transform: translate(0, -50%);
      z-index: 1;
      @media (min-width: 768px) {
        width: size(31);
        top: auto;
        bottom: 0;
        left: 0;
        transform: translate(0, 0);
      }
      
      svg {
        display: block;
        width: 100%;

        @media (min-width: 768px) {
          circle {
            fill: #EC6300;
          }

          path {
            stroke: #fff;
          }
        }
      }
    }

    .slide-next {
      left: auto;
      right: size-m(14);
      @media (min-width: 768px) {
        right: auto;
        left: 8.3vw;
      }
    }

    .swiper-pagination {
      display: none;
      @media (min-width: 768px) {
        display: block;
        width: 6vw;
        bottom: -2.5vw;
        margin-left: 2vw;
      }

      .swiper-pagination-bullet {
        width: size(8);
        height: size(8);
        margin: 0 size(5) !important;
        background: #EC6300;
      }
    }
  }

  .content {
    @media (min-width: 768px) {
      width: size(356);
      padding-bottom: size(52);
    }
  }
  
  .room-btns {
    width: size-m(281);
    margin: size-m(26) auto;
    @media (min-width: 768px) {
      width: size(356);
      margin: 0;
    }

    .room-btn {
      width: size-m(124);
      border: size-m(1) solid #EC6300;
      color: #EC6300;
      font-size: size-m(16);
      line-height: size-m(38);
      text-align: center;
      cursor: pointer;
      transition: all .2s;
      @media (min-width: 768px) {
        width: size(170);
        border: size(1) solid #EC6300;
        font-size: size(28);
        line-height: size(50);
      }

      &:hover, &.active {
        background: #EC6300;
        color: #fff;
      }

      span {
        font-size: size-m(28);
        @media (min-width: 768px) {
          font-size: size(32);
        }
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
const swiperRef1 = ref(null);
const swiperRef2 = ref(null);
const room = ref(2);

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