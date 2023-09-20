<template>
  <section class="s13 relative">
    
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
          <img class="w-full" src="@/section/s13/1.webp" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="@/section/s13/2.webp" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="note upup absolute">
      <div class="tt">
        *此為廣告效果示意，為單一建築電腦3D透視表現，<br>
        周遭環境係電腦合成，建設公司保有建物外觀修正之權利。
      </div>
    </div>
    <div class="t1 upup absolute">
      <div class="tt">
        德國Red Dot設計大獎團隊創作<br>
        融入磺溪山水地景 天母街角綠逸之丘
      </div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">
        由天母華城心轉入磺溪街88巷，收藏絕對的安靜<br>
        建築立面質樸手感天然石材，與天母山水環境共<br>
        種樹垂直綠化，創造一個個綠意盎然的陽台盒子<br>
        戶戶邊間探光沐陽暖曬，星空花園看星星觀山景
      </div>
    </div>
    <div class="line absolute hidden md:block"></div>

    <div class="line1 absolute md:hidden"></div>
    <div class="line2 absolute md:hidden"></div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
  width: 100%;
  height: size-m(443);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(839);
  }

  .slider {
    left: size-m(36.5);
    top: size-m(36);
    width: size-m(302);
    @media screen and (min-width:768px) {
      left: size(691);
      top: size(96);
      width: size(1145);
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        bottom: 1vw;
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
        width: size(30);
        height: size(8);
        border-radius: size(50);
        margin: 0 size(6.5);
      }

      &.swiper-pagination-bullet-active {
        background: #fff;
      }
    }

    .swiper-slide img {
      height: size-m(170);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(644);
      }
    }
  }

  .note {
    left: size-m(41.5);
    top: size-m(211.5);
    font-size: size-m(9);
    line-height: 150%; /* 13.5px */
    letter-spacing: size-m(0.27);
    @media screen and (min-width:768px) {
      left: size(74);
      top: size(676);
      font-size: size(13);
      letter-spacing: size(0.39);
    }
  }

  .t1 {
    left: size-m(54);
    top: size-m(274);
    text-align: center;
    color: #39684F;
    font-family: 'Noto Serif TC';
    font-size: size-m(15);
    font-weight: 600;
    line-height: 140%;
    letter-spacing: size-m(0.51);
    @media screen and (min-width:768px) {
      left: size(74);
      top: size(88);
      text-align: left;
      font-size: size(34);
      line-height: normal;
      letter-spacing: 0;
    }
  }

  .t2 {
    left: size-m(59);
    top: size-m(333);
    font-family: 'Noto Serif TC';
    font-size: size-m(12);
    font-weight: 600;
    line-height: 160%;
    @media screen and (min-width:768px) {
      left: size(74);
      top: size(259);
      color: #39684F;
      font-size: size(20);
      font-weight: 600;
      line-height: 180%;
      letter-spacing: size(0.6);
    }
  }

  .line {
    @media screen and (min-width:768px) {
      left: size(74);
      top: size(740);
      width: size(540);
      height: size(1);
      background: rgba(0, 0, 0, 0.70);
    }
  }

  .line1 {
      left: size-m(37);
      top: size-m(275);
      width: size-m(1);
      height: size-m(130);
      background: rgba(0, 0, 0, 0.70);
  }
  .line2 {
      right: size-m(37);
      top: size-m(275);
      width: size-m(1);
      height: size-m(130);
      background: rgba(0, 0, 0, 0.70);
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