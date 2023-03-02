<template>
  <section class="s8 relative">
    <div class="bg absolute"><img class="hidden md:block" src="./s8/bg.png" alt=""><img class="md:hidden" src="./s8/bg-m.png" alt=""></div>
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="name absolute" data-aos="fade-down" data-aos-delay="300">Best Selection</div>
      <div class="t1" data-aos="fade-down" data-aos-delay="100">世界名品打造<br>生活極致美學</div>
      <div class="content" data-aos="fade-down" data-aos-delay="200">精挑德、日、韓、台國際精品建材，以世界精工極致展現，A19區內唯一堅持日本東和林專利中空樓板，確保寧靜舒適的居住環境，讓生活自然而美！</div>
    </div>
    <img class="rect1" src="@/section/s8/rect.svg" data-aos="fade-down" data-aos-delay="300" />
    <img class="rect2" src="@/section/s8/rect.svg" data-aos="fade-down" data-aos-delay="400" />
    <img class="img" src="@/section/s8/img.png" data-aos="fade-down" data-aos-delay="500" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size-m(735);
  background-image: url(@/section/s8/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  color: #fff;
  @media screen and (min-width:768px) {
    height: size(1080);
    background-image: url(@/section/s8/bg.jpg);
  }
  .bg{
    width: 100%;height: 100%;top: 0;left: 0;mix-blend-mode: overlay;
    img{width: 100%;height: 100%;object-fit: cover;opacity: .8;
    animation: bg 5s linear infinite alternate;}
  }

  @keyframes bg {
    40% {
      opacity: 0;
    }
  }
  .text {
    position: absolute;
    top: size-m(43);
    left: size-m(62);
    width: size-m(276);
    padding: size-m(86.5) size-m(0) 0 size-m(0);
    @media screen and (min-width:768px) {
      top: size(120);
      left: size(409);
      width: size(308);
      padding: size(211.52) size(0) 0 size(0);
    }

    &:after {
      content: "";
      position: absolute;
      top: size-m(0);
      left: size-m(0);
      width: size-m(2);
      height: size-m(80);
      background: linear-gradient(0.72deg, #896532 0%, #A27C47 11%, #B8915B 24%, #C09962 32%, #C39E68 39%, #CEAD7B 48%, #DFC59A 58%, #EFDCB6 66%, #DABC8D 74%, #C9A36B 81.01%, #BD9152 88.01%, #B58544 94.01%, #B3823F 99.01%);
      @media screen and (min-width:768px) {
        top: size(0);
        left: size(0);
        width: size(2.5);
        height: size(200);
      }
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 600;
      font-size: size-m(25);
      line-height: size-m(35);
      margin-bottom: size-m(11);
      @media screen and (min-width:768px) {
        font-size: size(44);
        line-height: size(62);
        margin-bottom: size(25.5);
      }
    }

    .content {
      letter-spacing: 0.1em;
      font-size: size-m(14);
      line-height: size-m(25);
      text-align: justify;
      letter-spacing: 0.01em;
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(36);
        width: size(314);
      }
    }
  }

  .name {
    top: size-m(0);
    left: size-m(-62);
    width: size-m(45);
    height: size-m(154);
    line-height: 1;
    background: #DE5513;
    color: #fff;
    font-size: size-m(12);
    font-weight: 300;
    white-space: nowrap;
    writing-mode: vertical-lr;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width:768px) {
      top: size(0);
      left: size(-27.28 - 81.44);
      width: size(81.44);
      height: size(325.2);
      font-size: size(19);
    }
  }

.rect1 {
  position: absolute;
  top: size-m(370);
  left: size-m(20);
  width: size-m(120);
  filter: hue-rotate(170deg)brightness(40%);mix-blend-mode: screen;
  @media screen and (min-width:768px) {
    top: size(549);
    left: size(689);
    width: size(313);
  }
}

.rect2 {
  position: absolute;
  top: size-m(526.14);
  left: size-m(159.13);
  width: size-m(155.87); filter: brightness(90%);mix-blend-mode: screen;
  @media screen and (min-width:768px) {
    top: size(582);
    left: size(1220);
    width: size(398);
  }
}

  .img {
    position: absolute;
    top: size-m(321.3);
    left: size-m(0.98);
    width: size-m(373.26);
    @media screen and (min-width:768px) {
      top: size(339);
      left: size(729);
      width: size(767);
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      modules: [Pagination, Navigation, Autoplay],
    }
  },
  methods: {
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    slideTo(to) {
      if(to == 'prev') {
        this.swiper.slidePrev();
      } else if(to == 'next') {
        this.swiper.slideNext();
      }
    },
  }
};
</script>