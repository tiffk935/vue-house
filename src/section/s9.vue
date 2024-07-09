<template>
  <section class="s9 w-full relative bg-[#EFEFEF]">
    <div class="slider">
      <swiper
        :loop="true"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s9/1.jpg" loading="lazy" />
            <div class="txt">3D外觀示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s9/2.jpg" loading="lazy" />
            <div class="txt">建築實景拍攝圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s9/3.jpg" loading="lazy" />
            <div class="txt">3D外觀示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="content">
      <div class="md:flex md:justify-between">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">白派風尚、光影空間<br>自然系公園藝墅</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">世界建築大師理查．麥爾，以光影幾何美學，打造配合四季變化的白派建築，其作品如羅馬千禧教堂、巴塞隆納當代藝術博物館等，皆是世界級藝術地標。「東泥大賦」承襲白派建美學，以純白立面、光影格柵，結合幾何型語彙，建構出建築的簡潔力道，配合自然光影，共譜出生活的卓然品味。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  .slider {
    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: flex;
        line-height: 1;
        left: size(90);
        bottom: size(40);
      }

      .swiper-pagination-bullet {
        margin: 0;
        border-radius: 0;
        width: size(45.61);
        height: size(8.5);
        background: none;
        border-top: size(1) solid #fff;
        border-bottom: size(1) solid #fff;
        opacity: 1;

        &:first-child {
          border-left: size(1) solid #fff;
          border-top-left-radius: size(10);
          border-bottom-left-radius: size(10);
        }

        &:last-child {
          border-right: size(1) solid #fff;
          border-top-right-radius: size(10);
          border-bottom-right-radius: size(10);
        }

        &.swiper-pagination-bullet-active {
          background: #fff;
          border-radius: size(10);
        }
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(40);
      height: size-m(40);
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        display: none;
      }

      &:after {
        display: none;
      }

      &.swiper-button-prev {
        left: 0;
        background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4594 23.1383C10.9963 23.6753 11.8669 23.6753 12.4039 23.1383C12.9409 22.6013 12.9409 21.7307 12.4039 21.1937L3.32256 12.1124L12.4039 3.03105C12.9409 2.49408 12.9409 1.62348 12.4039 1.08651C11.8669 0.549536 10.9963 0.549536 10.4594 1.08651L0.40575 11.1401C-0.131221 11.6771 -0.131221 12.5477 0.40575 13.0847L10.4594 23.1383Z" fill="white"/></svg>');
        background-position: size-m(7) center;
      }

      &.swiper-button-next {
        right: 0;
        background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54063 1.08681C2.00366 0.549839 1.13306 0.549839 0.596088 1.08681C0.0591166 1.62378 0.0591166 2.49438 0.596088 3.03135L9.67743 12.1127L0.596088 21.194C0.0591166 21.731 0.0591166 22.6016 0.596088 23.1386C1.13306 23.6756 2.00366 23.6756 2.54063 23.1386L12.5943 13.085C13.1312 12.548 13.1312 11.6774 12.5943 11.1404L2.54063 1.08681Z" fill="white"/></svg>');
        background-position: right size-m(7) center;
      }
    }

    img {
      height: size-m(460);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .txt {
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      color: #FFF;
      text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
      font-size: size-m(12);
      font-weight: 600;
      @media screen and (min-width:768px) {
        bottom: size(10);
        right: size(10);
        text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.55);
        font-size: size(15);
      }
    }
  }

  .content {
    padding: size-m(27) size-m(30) size-m(49);
    @media screen and (min-width:768px) {
      padding: size(68) size(170) size(59);
    }

    .t1 {
      font-size: size-m(25);
      font-weight: 700;
      letter-spacing: .02em;
      padding-bottom: size-m(18);
      margin-bottom: size-m(13);
      border-bottom: size-m(1) solid #000;
      @media screen and (min-width:768px) {
        font-size: size(54);
        letter-spacing: .04em;
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: none;
        border-right: size(1) solid #000;
        padding-right: size(42);
        width: size(578);
      }
    }

    .t2 {
      font-size: size-m(12);
      font-weight: 500;
      line-height: 175%;
      @media screen and (min-width:768px) {
        font-size: size(22);
        letter-spacing: .11em;
        width: size(956);
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
</script>