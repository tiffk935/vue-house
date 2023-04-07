<template>
  <section class="s9 relative">
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
          <img class="w-full hidden md:block" src="@/section/s9/1.jpg" />
          <img class="w-full block md:hidden" src="@/section/s9/1-m.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s9/2.jpg" />
          <div class="txt">業績作品｜國楊吉麟 接待中心</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s9/3.jpg" />
          <div class="txt">業績作品｜馥華建設 雲鼎</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s9/4.jpg" />
          <div class="txt">業績作品｜華固天鑄 實品屋</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="content absolute text-[#3E3A39]" data-aos="fade-up">
      <div class="t1">
        <span>PUBLIC SPACE DESIGN</span>
        <span>公設美學</span>
      </div>
      <div class="t2">
        <span>王正行總監</span>
        <span>工一設計</span>
      </div>
      <div class="t3">
        工一設計曾囊括TINTA金邸獎、台灣室內設計獎、IF Design Award、金點設計獎、紅點設計獎等多項國內外大獎，該團隊曾幫藝人周杰倫打造頂樓戶豪宅之室內裝潢，此次為【美地莊園】打私家會館豐富的空間表情，篆刻成一部當代建築史詩。
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

.s9 {
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