<template>
  <section class="s8 relative">
    <div class="slider absolute">
      <swiper
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init"
        @transitionStart="transitionStart"
      >
        <swiper-slide>
          <img class="w-full block" src="@/section/s8/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s8/2.jpg" />
          <div class="txt">業績作品｜台北車站特定區</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s8/3.jpg" />
          <div class="txt">業績作品｜台北 AI智慧園區</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s8/4.jpg" />
          <div class="txt">業績作品｜ATT台中  ECOMALL</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="content absolute text-[#3E3A39]" data-aos="fade-up">
      <div class="t1">
        <span>LANDSCAPE DESIGN</span>
        <span>景觀美學</span>
      </div>
      <div class="t2">
        <span>柯宏宗</span>
        <span>形意生態建築設計集團</span>
      </div>
      <div class="t3">
        「形意生建築設計集圈」，業績遍及台灣、中國、馬來西亞、新加坡、越南等國家。團隊擁有累積逾30年的經驗，並與日本加藤隆久都市理築事務所及ARK CREW景觀設計公司策略聯盟，在景觀公設以人的生活健康及生態共生為設計宗旨。
      </div>
      <div class="pagination hidden md:flex">
        <div :class="{item: true, active: curr === 0}" @click="onClick(0)"></div>
        <div :class="{item: true, active: curr === 1}" @click="onClick(1)"></div>
        <div :class="{item: true, active: curr === 2}" @click="onClick(2)"></div>
        <div :class="{item: true, active: curr === 3}" @click="onClick(3)"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size-m(566);
  @media screen and (min-width:768px) {
    height: size(1106);
  }

  .slider {
    width: 100%;
    left: 0;
    top: size-m(247);
    @media screen and (min-width:768px) {
      width: size(1534);
      top: 0;
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(26);
      height: size-m(26);
      background-repeat: no-repeat;
      background-size: size-m(13.58) auto;
      opacity: 1;
      @media screen and (min-width:768px) {
        display: none;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: size-m(9);
      background-image: url(@/section/s8/arrow-prev.svg);
      background-position: left center;
    }

    .swiper-button-next {
      right: size-m(9);
      background-image: url(@/section/s8/arrow-next.svg);
      background-position: right center;
    }

    img {
      height: size-m(319);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .txt {
      position: absolute;
      bottom: size-m(6);
      left: size-m(10);
      font-weight: 500;
      font-size: size-m(12);
      line-height: size-m(17);
      text-align: justify;
      letter-spacing: -0.03em;
      color: #fff;
      @media screen and (min-width:768px) {
        bottom: size(10);
        left: size(10);
        font-size: size(13);
        line-height: size(19);
      }
    }
  }

  .content {
    width: size-m(350);
    left: size-m(0);
    top: size-m(21);
    padding: size-m(24) size-m(25) size-m(25) size-m(20);
    background: linear-gradient(90deg, #CDB69C 18%, #BB9E7F 100%);
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(610.73);
      left: auto;
      right: 0;
      top: size(187);
      padding: size(122) size(71.73) size(71.67) size(75);
    }

    .t1 {
      font-weight: 500;
      font-size: size-m(18);
      line-height: size-m(26);
      letter-spacing: 0.16em;
      color: #fff;
      margin-bottom: size-m(8);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(43);
        margin-bottom: size(55);
      }

      span {
        display: inline-block;

        &:nth-child(1) {
          letter-spacing: 0.04em;
          margin-right: size-m(11);
          @media screen and (min-width:768px) {
            margin-right: size(22);
          }
        }
      }
    }

    .t2 {
      font-weight: 500;
      font-size: size-m(16);
      line-height: size-m(23);
      margin-bottom: size-m(8);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(43);
        margin-bottom: size(35);
      }

      span {
        display: inline-block;
        vertical-align: middle;

        &:nth-child(1) {
          font-size: size-m(20);
          line-height: size-m(29);
          padding-right: size-m(13);
          margin-right: size-m(13);
          position: relative;
          @media screen and (min-width:768px) {
            font-size: size(45);
            line-height: size(65);
            padding-right: size(15);
            margin-right: size(16);
          }

          &:after {
            content: "";
            position: absolute;
            top: size-m(6);
            right: 0;
            width: size-m(2);
            height: size-m(18);
            background: #000;
            @media screen and (min-width:768px) {
              top: size(18);
              width: size(2);
              height: size(36);
            }
          }
        }
      }
    }

    .t3 {
      font-weight: 500;
      font-size: size-m(13);
      line-height: size-m(25);
      @media screen and (min-width:768px) {
        font-size: size(25);
        line-height: size(55);
        text-align: justify;
        letter-spacing: -0.03em;
        margin-bottom: size(41);
      }
    }

    .pagination {
      .item {
        width: size(53.45);
        height: size(9.4);
        margin-right: size(5.27);
        border: size(1) solid #fff;
        border-radius: size(53.45);
        cursor: pointer;
        
        &.active {
          background: #fff;
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
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay } from "swiper";
const modules = ref([Navigation, Autoplay]);
const swiperRef = ref(null);
const curr = ref(0);

const init = swiper => {
  swiperRef.value = swiper;
}

const transitionStart = swiper => {
  if(swiperRef.value){
    curr.value = swiperRef.value.realIndex;
  }
}

const onClick = idx => {
  if(swiperRef.value){
    swiperRef.value.slideTo(idx+1);
  }
}
</script>