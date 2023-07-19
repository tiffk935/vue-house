<template>
  <section class="s3 relative">
    <div class="slider absolute">
      <swiper
        :pagination="{
          clickable: true
        }"
        :navigation="false"
        :loop="true"
        :speed="1000"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/1_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/1.webp" />
          <div class="txt absolute">磺溪河畔綠帶</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/2_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/2.webp" />
          <div class="txt absolute">磺溪河畔步道</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/3_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/3.webp" />
          <div class="txt absolute">磺溪河畔</div>
        </swiper-slide>
         <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/4_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/4.webp" />
          <div class="txt absolute">磺溪河畔</div>
        </swiper-slide>
         <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/5_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/5.webp" />
          <div class="txt absolute">天母公園 </div>
        </swiper-slide>
         <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/6_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/6.webp" />
          <div class="txt absolute">天和公園</div>
        </swiper-slide>
         <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/7_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/7.webp" />
          <div class="txt absolute">外雙溪河濱公園 </div>
        </swiper-slide>
         <swiper-slide>
          <img class="w-full object-right"  v-if="$isMobile()" src="@/section/s3/8_m.webp" />
          <img class="w-full object-right"  v-else src="@/section/s3/2.webp" />
          <div class="txt absolute">東和公園</div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="en absolute md:hidden" src="@/section/s3/en-m.svg" />
    <img class="en absolute hidden md:block" src="@/section/s3/en.svg" />
    <img class="lines absolute md:hidden" src="@/section/s3/lines-m.svg" />
    <img class="lines absolute hidden md:block" src="@/section/s3/lines.svg" />
    <div class="style upup absolute">
      <div class="tt"></div>
    </div>
    <div class="t1 upup absolute">
      <div class="tt">磺溪畔使館特區隱富聚落<br>觀山聽水自然閑適</div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">閑靜的天母磺溪街88巷，克強公園和磺溪綠帶環繞<br>清晨小徑散策，山水間綠蔭漫步，靜享無價悠閑</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s3 {
  width: 100%;
  height: size-m(490);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
    
  }

  .slider {
    position: absolute;
    top: size-m(46);
    left: 0;
    width: size-m(335);
    height: size-m(305);
    overflow: hidden;
    @media screen and (min-width:768px) {
      top: size(152);
      left: size(663);
      width: size(1165);
      height: size(776);
    }

    .swiper {
      overflow: visible;

      .swiper-pagination {
        line-height: 1;
        bottom: size-m(7.55);
        @media screen and (min-width:768px) {
          bottom: size(15);
        }
      }

      .swiper-pagination-bullet {
        opacity: 1;
        background: none;
        border: size-m(1) solid #fff;
        width: size-m(6);
        height: size-m(6);
        border-radius: size-m(20);
        margin: 0 size-m(2);
        @media screen and (min-width:768px) {
          border: size(1) solid #fff;
          width: size(30);
          height: size(8);
          border-radius: size(50);
          margin: 0 size(6.5);
        }

        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }

    img {
      width: 100%;
      height: size-m(305);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(776);
      }
    }

    .txt {
      right: size-m(5);
      bottom: size-m(5);
      font-weight: 700;
      font-size: size-m(12);
      line-height: size-m(17);
      letter-spacing: 0.03em;
      color: #FFFFFF;
      text-shadow: size-m(0) size-m(4) size-m(4) rgba(0, 0, 0, 0.25);
      @media screen and (min-width:768px) {
        right: size(10);
        bottom: size(10);
        font-size: size(14);
        line-height: size(20);
        text-shadow: size(0) size(4) size(4) rgba(0, 0, 0, 0.25);
      }
    }
  }

  .en {
    width: size-m(6.59);
    left: size-m(352.98);
    top: size-m(35);
    @media screen and (min-width:768px) {
      width: size(351.61);
      left: size(99);
      top: size(153);
    }
  }

  .lines {
    width: size-m(290);
    left: size-m(42.5);
    top: size-m(361);
    @media screen and (min-width:768px) {
      width: size(490);
      height: size(775);
      left: size(99);
      top: size(153);
    }
  }

  .style {
    height: size-m(61.5);
    width: size-m(73.12908935546875);
    left: size-m(14.919189453125);
    top: size-m(369.5);
    @media screen and (min-width:768px) {
      height: size(275);
      width: size(327);
      left: size(99);
      top: size(252);
    }

    .tt {
      background-image: url(@/section/s3/style.png);
      mix-blend-mode: multiply;
    }
  }

  .t1 {
    height: size-m(54);
    left: size-m(120.000244140625);
    top: size-m(373);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(19);
    line-height: size-m(27);
    letter-spacing: 0.03em;
    color: #39684F;
    @media screen and (min-width:768px) {
      height: size(104);
      left: size(99);
      top: size(669);
      font-size: size(36);
      line-height: size(52);
    }
  }

  .t2 {
    height: size-m(38);
    left: size-m(43.500244140625);
    top: size-m(451.5);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(19);
    color: #526760;
    @media screen and (min-width:768px) {
      height: size(52);
      left: size(99);
      top: size(871);
      font-size: size(18);
      line-height: size(26);
      color: #39684F;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>