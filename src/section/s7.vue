<template>
  <section class="s7 relative">
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
          <img class="w-full object-center" src="@/section/s7/1.jpg" />
          <div class="txt absolute">榮總醫院</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full object-center" src="@/section/s7/1.jpg" />
          <div class="txt absolute">榮總醫院</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full object-center" src="@/section/s7/1.jpg" />
          <div class="txt absolute">榮總醫院</div>
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
      <div class="tt">天母養生綠活<br>頂級醫療資源匯聚</div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">
        陽明山麓下的天母桃花源，依山傍水、空氣清新<br>
        榮總醫院、振興醫院、新光醫院、北醫陽明院區<br>
        好山、好水、好環境，聚集北市高端醫療資源
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s7 {
  width: 100%;
  height: size-m(509);
  background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
    background-image: url(@/section/s1/bg.jpg);
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
        right: size(10);
        bottom: size(10);
        font-size: size(14);
        line-height: size(20);
        text-shadow: size(0) size(4) size(4) rgba(0, 0, 0, 0.25);
      }
    }
  }

  .en {
    width: size-m(4.59);
    left: size-m(352.98);
    top: size-m(46);
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
    height: size-m(57);
    left: size-m(43.500244140625);
    top: size-m(451.5);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(19);
    color: #526760;
    @media screen and (min-width:768px) {
      height: size(78);
      left: size(99);
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