<template>
  <section class="s10 relative">
    <div class="logo upup absolute">
      <div class="tt"></div>
    </div>
    <div class="t1 upup absolute">
      <div class="tt">台北市心精品建築職人<br>天母靜奢手製</div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">
        <div class="md:hidden">
          全台首獲德國RedDotAward金獎建築團隊<br>
          從訂製豪宅到微型小宅，十八年專注美學始終如一<br>
          磺溪畔邊間採光好所在，回家入巷看見陽台的綠意<br>
          獨立建築設計，品味很國際，謹獻給懂得天母的您
        </div>
        <div class="hidden md:block">
          全台首獲德國RedDotAward金獎建築團隊　 從訂製豪宅到微型小宅，十八年專注美學始終如一<br>
          磺溪畔邊間採光好所在，回家入巷看見陽台的綠意　 獨立建築設計，品味很國際，謹獻給懂得天母的您
        </div>
      </div>
    </div>
    <div class="slider absolute">
      <swiper
        :slidesPerView="'auto'"
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
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/1_m.webp" />
          <img class="w-full" v-else src="@/section/s10/1.webp" />
          <div class="txt absolute">展宜 詠喆</div>
          <div @click="showLightbox(0)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/2_m.webp" />
          <img class="w-full" v-else src="@/section/s10/2.webp" />
          <div class="txt absolute">展宜 拾秋</div>
          <div @click="showLightbox(1)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/3_m.webp" />
          <img class="w-full" v-else src="@/section/s10/3.webp" />
          <div class="txt absolute">展宜 摘月</div>
          <div @click="showLightbox(2)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/4_m.webp" />
          <img class="w-full" v-else src="@/section/s10/4.webp" />
          <div class="txt absolute">展宜 阿都蘭</div>
          <div @click="showLightbox(3)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/5_m.webp" />
          <img class="w-full" v-else src="@/section/s10/5.webp" />
          <div class="txt absolute">展宜 時間之外</div>
          <div @click="showLightbox(4)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/6_m.webp" />
          <img class="w-full" v-else src="@/section/s10/6.webp" />
          <div class="txt absolute">展宜 拿雲</div>
          <div @click="showLightbox(5)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/7_m.webp" />
          <img class="w-full" v-else src="@/section/s10/7.webp" />
          <div class="txt absolute">展宜 有一個園</div>
          <div @click="showLightbox(6)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full"  v-if="$isMobile()" src="@/section/s10/8_m.webp" />
          <img class="w-full" v-else src="@/section/s10/8.webp" />
          <div class="txt absolute">展宜 仁愛</div>
          <div @click="showLightbox(7)" class="mask absolute top-0 left-0 w-full h-full"></div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  width: 100%;
  height: size-m(443);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .logo {
    height: size-m(50.01192092895508);
    width: size-m(91);
    left: size-m(142);
    top: size-m(26);
    @media screen and (min-width:768px) {
      height: size(138.91000366210938);
      width: size(226.22000122070312);
      left: size(847);
      top: size(74);
    }

    .tt {
      background-image: url(@/section/s10/logo.svg);
    }
  }

  .t1 {
    height: size-m(54);
    width: size-m(201);
    left: size-m(88);
    top: size-m(94);
    font-family: 'Noto Serif TC';
    font-style: normal;
    font-weight: 600;
    font-size: size-m(19);
    line-height: size-m(27);
    text-align: center;
    letter-spacing: 0.03em;
    @media screen and (min-width:768px) {
      height: size(104);
      width: size(381);
      left: size(770);
      top: size(281);
      font-size: size(36);
      line-height: size(52);
    }
  }

  .t2 {
    height: size-m(76);
    width: size-m(283);
    left: size-m(47);
    top: size-m(163);
    font-family: 'Noto Serif TC';
    font-style: normal;
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(19);
    text-align: center;
    color: #39684F;
    @media screen and (min-width:768px) {
      height: size(52);
      width: size(846);
      left: size(537);
      top: size(425);
      font-size: size(18);
      line-height: size(26);
    }
  }

  .slider {
    position: absolute;
    top: size-m(270);
    left: 0;
    width: 100%;
    height: size-m(139.45);
    overflow: hidden;
    @media screen and (min-width:768px) {
      top: size(556);
      left: size(97);
      width: size(1725);
      height: size(456);
    }

    .swiper {
      overflow: visible;

      .swiper-slide {
        width: size-m(122.09);
        margin-right: size-m(4.365);
        @media screen and (min-width:768px) {
          width: size(420);
          margin-right: size(15);
        }

        .mask {
          background-color: rgba(0, 0, 0, 0.3);
          background-image: url(@/section/s10/zoom.svg);
          background-size: size-m(20) auto;
          background-position: center center;
          background-repeat: no-repeat;
          transition: all .2s;
          opacity: 0;
          cursor: pointer;
          @media screen and (min-width:768px) {
            background-size: size(40) auto;
          }

          &:hover {
            opacity: 1;
          }
        }
      }

      .swiper-pagination {
        line-height: 1;
        bottom: -4.5vw;
        @media screen and (min-width:768px) {
          bottom: -1.8vw;
        }
      }

      .swiper-pagination-bullet {
        opacity: 1;
        background: none;
        border: size-m(1) solid #000;
        width: size-m(18.9);
        height: size-m(3.44);
        border-radius: size-m(20);
        @media screen and (min-width:768px) {
          border: size(1) solid #000;
          width: size(30);
          height: size(8);
          border-radius: size(50);
          margin: 0 size(6.5);
        }

        &.swiper-pagination-bullet-active {
          background: #000;
        }
      }
    }

    img {
      width: 100%;
      height: size-m(122.09);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(420);
      }

      &.ver {
        object-position: top;
      }
    }

    .txt {
      left: size-m(3);
      bottom: size-m(3);
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(12);
      line-height: size-m(17);
      letter-spacing: 0.03em;
      color: #FFFFFF;
      text-shadow: size-m(0) size-m(4) size-m(4) rgba(0, 0, 0, 0.25);
      @media screen and (min-width:768px) {
        left: size(10);
        bottom: size(10);
        font-size: size(14);
        line-height: size(20);
        text-shadow: size(0) size(4) size(4) rgba(0, 0, 0, 0.25);
      }
    }
  }

}
</style>

<script setup>
import { ref,getCurrentInstance,computed,defineProps } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper";
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
const modules = ref([Pagination, Navigation, Autoplay]);
const props = defineProps(['showLightbox']);
const showLightbox = (idx) => {
  props.showLightbox(idx);
}
</script>