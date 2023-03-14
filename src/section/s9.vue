<template>
  <section class="s9 relative bg-[#EEEEEE]">
    <div class="slider-tabs absolute">
      <div :class="{'slider-tab': true, 'active': currentTab == 25}" @click="clickTab(25)">
        <div><span>25</span>坪</div>
      </div>
      <div :class="{'slider-tab': true, 'active': currentTab == 39}" @click="clickTab(39)">
        <div><span>39</span>坪</div>
      </div>
      <div :class="{'slider-tab': true, 'active': currentTab == 43}" @click="clickTab(43)">
        <div><span>43</span>坪</div>
      </div>
    </div>

    <transition>
      <div class="content absolute" v-if="currentTab == 25">
        <div class="slider">
          <swiper 
            :pagination="{
              clickable: true,
            }"
            :navigation="false"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <img src="@/section/s9/tmp.jpg" />
              <div class="text-white">樣品屋3D模擬圖</div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/section/s9/tmp.jpg" />
              <div class="text-white">樣品屋3D模擬圖</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text md:flex md:justify-between md:items-start" data-aos="fade-up" data-aos-delay="0">
          <div class="title">須等樣品屋再補，25坪假字</div>
          <p>
            須等樣品屋再補，25坪假字須等樣品屋再補，25坪假字須等樣品屋再補，25坪假字須等樣品屋再補，25坪假字須等樣品屋再補，25坪假字須等樣品屋再補，25坪假字須等樣品屋再補，25坪假字
          </p>
        </div>
      </div>
    </transition>

    <transition>
      <div class="content absolute" v-if="currentTab == 39">
        <div class="slider">
          <swiper 
            :pagination="{
              clickable: true,
            }"
            :navigation="false"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <img src="@/section/s9/tmp.jpg" />
              <div class="text-white">樣品屋3D模擬圖</div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/section/s9/tmp.jpg" />
              <div class="text-white">樣品屋3D模擬圖</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text md:flex md:justify-between md:items-start" data-aos="fade-up" data-aos-delay="0">
          <div class="title">須等樣品屋再補，39坪假字</div>
          <p>
            須等樣品屋再補，39坪假字須等樣品屋再補，39坪假字須等樣品屋再補，39坪假字須等樣品屋再補，39坪假字須等樣品屋再補，39坪假字須等樣品屋再補，39坪假字須等樣品屋再補，39坪假字
          </p>
        </div>
      </div>
    </transition>

    <transition>
      <div class="content absolute" v-if="currentTab == 43">
        <div class="slider">
          <swiper 
            :pagination="{
              clickable: true,
            }"
            :navigation="false"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <img src="@/section/s9/tmp.jpg" />
              <div class="text-white">樣品屋3D模擬圖</div>
            </swiper-slide>
            <swiper-slide>
              <img src="@/section/s9/tmp.jpg" />
              <div class="text-white">樣品屋3D模擬圖</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text md:flex md:justify-between md:items-start" data-aos="fade-up" data-aos-delay="0">
          <div class="title">須等樣品屋再補，43坪假字</div>
          <p>
            須等樣品屋再補，43坪假字須等樣品屋再補，43坪假字須等樣品屋再補，43坪假字須等樣品屋再補，43坪假字須等樣品屋再補，43坪假字須等樣品屋再補，43坪假字須等樣品屋再補，43坪假字
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s9 {
  width: 100%;
  height: size-m(684);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .slider-tabs {
    width: size-m(310);
    top: size-m(112);
    left: size-m(32);
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      width: size(300);
      top: size(29);
      left: size(225);
    }

    .slider-tab {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      position: relative;
      width: size-m(80);
      height: size-m(80);
      border: size-m(1) solid #0A534C;
      color: #0A534C;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(14);
      line-height: size-m(20);
      letter-spacing: 0.06em;
      border-radius: 50%;
      cursor: pointer;
      transition: color .35s cubic-bezier(.25,.46,.45,.94) 0s,border-color .35s cubic-bezier(.25,.46,.45,.94) 0s;
      @media screen and (min-width:768px) {
        width: size(80);
        height: size(80);
        border: size(1) solid #0A534C;
        font-size: size(14);
        line-height: size(20);
      }

      &>div {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: flex-end;
        line-height: 1;

        span {
          font-size: size-m(30);
          letter-spacing: 0.06em;
          @media screen and (min-width:768px) {
            font-size: size(30);
          }
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #0A534C;
        transform: scale(0);
        transition: transform .35s cubic-bezier(.25,.46,.45,.94) 0s;
      }

      &:hover {
        color: #fff;
        border-color: #0A534C;

        &:after {
          transform: scale(1);
        }
      }

      &.active {
        background: #0A534C;
        color: #fff;;
      }
    }
  }

  .content {
    top: size-m(227);
    width: 100%;
    @media screen and (min-width:768px) {
      width: size(1476);
      top: size(146);
      left: size(222);
    }
  }

  .slider {
    width: size-m(375);
    margin-bottom: size-m(41);
    @media screen and (min-width:768px) {
      width: 100%;
      margin-bottom: size(61);
    }

    .text-white {
      position: absolute;
      top: size-m(10);
      right: size-m(10);
      font-size: size-m(12);
      line-height: size-m(17);
      text-shadow: size-m(0) size-m(2) size-m(2) rgba(0, 0, 0, 0.8);
      @media screen and (min-width:768px) {
        top: size(10);
        right: size(10);
        font-size: size(22);
        line-height: size(34);
        text-shadow: size(0) size(2) size(2) rgba(0, 0, 0, 0.8);
      }
    }

    .swiper-slide {
      height: size-m(239);
      @media screen and (min-width:768px) {
        height: auto;
      }

      img {
        height: 100%;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: auto;
        }
      }
    }

    .swiper-pagination {
      bottom: 0;
      text-align: left;
      padding: size-m(10);
      line-height: 1;
      @media screen and (min-width:768px) {
        padding: size(30) size(20);
      }
    }

    .swiper-pagination-bullet {
      opacity: 1;
      background: none;
      border: size-m(1) solid #fff;
      width: size-m(10);
      height: size-m(10);
      margin: 0 size-m(4);
      @media screen and (min-width:768px) {
        border: size(1) solid #fff;
        width: size(14);
        height: size(14);
        margin: 0 size(7.5);
      }
    }

    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }

  .text {
    padding: 0 size-m(31);
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    color: #4D4D4D;
    @media screen and (min-width:768px) {
      width: 100%;
      padding: 0 size(0);
      font-size: size(22);
      line-height: size(34);
    }

    p {
      @media screen and (min-width:768px) {
        width: size(859);
      }
    }

    .title {
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(29);
      letter-spacing: 0.06em;
      color: #0A534C;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(39);
        line-height: size(56);
        margin-bottom: size(0);
      }
    }
  }
}

</style>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const modules = ref([Pagination, Navigation, Autoplay]);
const currentTab = ref(25);

function clickTab(tab) {
  console.log('clickTab', tab);
  currentTab.value = tab;
}
</script>
