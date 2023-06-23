<template>
  <section class="s6 relative">
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
          <img class="w-full object-center" src="@/section/s6/1.jpg" />
          <div class="txt absolute">美國學校</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full object-center" src="@/section/s6/1.jpg" />
          <div class="txt absolute">美國學校</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full object-center" src="@/section/s6/1.jpg" />
          <div class="txt absolute">美國學校</div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="en absolute md:hidden" src="@/section/s3/en-m.svg" />
    <img class="en absolute hidden md:block" src="@/section/s3/en.svg" />
    <img class="lines absolute md:hidden" src="@/section/s4/lines-m.svg" />
    <img class="lines absolute hidden md:block" src="@/section/s3/lines.svg" />
    <div class="style upup absolute">
      <div class="tt"></div>
    </div>
    <div class="t1 upup absolute">
      <div class="tt">美日歐國際學校<br>從小培育寰宇眼界</div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">
        天母國際學籍，台北市新富家庭的置產選學<br>
        美國學校、日僑學校和歐洲學校，<br>
        從小培育寰宇DNA，接軌國際與未來
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s6 {
  width: 100%;
  height: size-m(529);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
    // background-image: url(@/section/s1/bg.jpg);
  }

  .slider {
    position: absolute;
    top: size-m(46);
    left: size-m(40);
    width: size-m(335);
    height: size-m(305);
    overflow: hidden;
    @media screen and (min-width:768px) {
      top: size(152);
      left: size(97);
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
        width: size-m(18.9);
        height: size-m(3.44);
        border-radius: size-m(20);
        @media screen and (min-width:768px) {
          border: size(1) solid #fff;
          width: size(49);
          height: size(10);
          border-radius: size(50);
          margin: 0 size(7.5);
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
        right: auto;
        left: size(10);
        bottom: size(10);
        font-size: size(14);
        line-height: size(20);
        text-shadow: size(0) size(4) size(4) rgba(0, 0, 0, 0.25);
      }
    }
  }

  .en {
    width: size-m(4.59);
    left: size-m(16.61);
    top: size-m(46);
    @media screen and (min-width:768px) {
      width: size(351.61);
      left: size(1335);
      top: size(153);
    }
  }

  .lines {
    width: size-m(290);
    left: size-m(42.5);
    top: size-m(378);
    @media screen and (min-width:768px) {
      width: size(490);
      height: size(775);
      left: size(1335);
      top: size(153);
    }
  }

  .style {
    height: size-m(71.80388641357422);
    width: size-m(85.38134765625);
    left: size-m(339 - 85.38);
    top: size-m(377.59814453125);
    @media screen and (min-width:768px) {
      height: size(275);
      width: size(327);
      left: size(1335);
      top: size(252);
    }

    .tt {
      background-image: url(@/section/s4/style-m.png);
      mix-blend-mode: multiply;
      @media screen and (min-width:768px) {
        background-image: url(@/section/s3/style.png);
      }
    }
  }

  .t1 {
    height: size-m(54);
    left: size-m(40);
    top: size-m(390);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(19);
    line-height: size-m(27);
    letter-spacing: 0.03em;
    color: #39684F;
    @media screen and (min-width:768px) {
      height: size(104);
      left: size(1335);
      top: size(669);
      font-size: size(36);
      line-height: size(52);
    }
  }

  .t2 {
    height: size-m(60);
    left: size-m(41.000244140625);
    top: size-m(468.5);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(19);
    color: #526760;
    @media screen and (min-width:768px) {
      height: size(78);
      left: size(1335);
      top: size(845);
      font-size: size(18);
      line-height: size(26);
      color: #39684F;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
</script>