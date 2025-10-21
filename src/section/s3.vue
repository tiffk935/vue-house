<template>
  <section class="s3 user-n w-full relative">
    <img class="title block" src="@/section/s3/title.png" data-aos="zoom-in" data-aos-duration="1000"
      data-aos-delay="0" />

    <div class="slider">
      <swiper :spaceBetween="30" :pagination="{
        clickable: true
      }" :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
      }" :loop="true" :modules="modules">
        <swiper-slide v-for="(slide, idx) in slides">
          <div class="img relative">
            <img class="w-full md:hidden" :src="getImg(`./s3/${(idx + 1)}-m.png`)" />
            <img class="w-full hidden md:block" :src="getImg(`./s3/${(idx + 1)}.png`)" />
            <div class="info">{{ slide.label }}</div>
          </div>

          <div class="content">
            <img class="slide-title md:hidden" :src="getImg(`./s3/title${(idx + 1)}-m.png`)" />
            <img class="slide-title hidden md:block" :src="getImg(`./s3/title${(idx + 1)}.png`)" />

            <div class="desc" v-html="slide.desc"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  padding: size-m(60) size-m(22) size-m(56) size-m(22);

  @media screen and (min-width:768px) {
    padding: size(140) size(185) size(129) size(185);
  }

  .title {
    width: size-m(225);
    margin: 0 auto size-m(32) auto;

    @media screen and (min-width:768px) {
      width: size(399);
      margin: 0 auto size(99) auto;
    }
  }

  .slider {
    .img {
      margin-bottom: size-m(50);

      @media screen and (min-width:768px) {
        margin-bottom: size(137);
      }

      .info {
        position: absolute;
        bottom: size-m(5);
        right: size-m(5);
        color: #fff;
        font-size: size-m(6);

        @media screen and (min-width:768px) {
          bottom: size(12);
          right: size(19);
          font-size: size(10);
        }
      }
    }

    .content {
      font-weight: 300;
      font-size: size-m(14);
      line-height: size-m(24);

      @media screen and (min-width:768px) {
        font-size: size(24);
        line-height: size(40);
        display: flex;
        align-items: center;
      }

      .slide-title {
        width: auto;
        height: size-m(79);
        margin: 0 auto size-m(30) auto;

        @media screen and (min-width:768px) {
          height: size(93);
          margin: 0 size(40) 0 0;
        }
      }

      .desc {
        padding: 0 size-m(3);

        @media screen and (min-width:768px) {
          padding: 0;
          max-width: size(900);
        }
      }
    }

    .swiper {
      .swiper-pagination {
        bottom: auto;
        top: size-m(227 + 20);
        transform: none;
        line-height: 0;
        font-size: 0;
        margin: 0;

        @media screen and (min-width:768px) {
          top: size(429 + 35);
        }

        .swiper-pagination-bullet {
          width: size-m(116);
          height: size-m(3);
          border: none;
          border-radius: 0;
          opacity: 1;
          background: #C7C8C8;
          margin: 0;

          @media screen and (min-width:768px) {
            width: size(365);
            height: size(3);
          }

          &.swiper-pagination-bullet-active {
            background: #6D4D30;
          }
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
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
const modules = ref([Autoplay, Pagination]);
const images = import.meta.globEager('./s3/*.*');

const getImg = path => images[path]?.default || '';
const slides = ref([
  {
    label: '實景拍攝',
    desc: '從碼頭興建與營運、船艇銷售，到台灣唯一結合遊艇俱樂部與濱海社區的綜合體驗，<br>亞果遊艇會構築出一座完整而極致的濱海生活場域。<br>亞果遊艇會，不僅是選擇，更是層峰身份的象徵。<br>在這裡，日常即度假，量身訂製的款待，成就不凡生活。'
  },
  {
    label: '實景拍攝',
    desc: '集團以海洋休閒為事業根基，延伸發展多元觸角，涵蓋會所經營、星級餐飲、旅宿度假與精緻活動，以台南為起點，串聯台中、高雄與澎湖黃金據點，建構完整居遊生態圈，開創台灣層峰與國際接軌的新格局。'
  }
]);
</script>