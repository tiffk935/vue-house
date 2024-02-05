<template>
  <section class="s4 w-full relative text-center text-white bg-[#173868]">
    <div class="txt">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">渴望熱鬧</div>
        <div class="subtitle">
          熱烈之巔 繁華眼見為憑<br>
          無以追逐的驚艷成熟
        </div>
        <div class="content text-left md:text-center">
          <p>南紡購物中心／領銜台南時尚之趨，世界精品大牌，誠品生活、老爺行旅都在此</p>
          <p>小東商圈／質感文青餐廳、小吃美食店家共存，晝夜無間斷的熱鬧精彩</p>
          <p>國賓商圈／台南影城規模最大的國賓影城、World Gym、連鎖咖啡為您補給</p>
          <p>後甲黃昏市場／車行3分鐘採購足家庭所需，恰恰好的輕盈豐盛</p>
        </div>
      </div>
    </div>
    <div class="pic hidden md:block relative">
      <div class="img">
        <img class="block w-full" src="@/section/s4/1.webp" />
        <div class="info">東寧運動公園實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/2.webp" />
        <div class="info">南紡置地廣場實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/3.webp" />
        <div class="info">東寧路商圈實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/4.webp" />
        <div class="info">情境示意圖</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/5.webp" />
        <div class="info">平實公園實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/6.webp" />
        <div class="info">南紡置地廣場實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/7.webp" />
        <div class="info">情境示意圖</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/8.webp" />
        <div class="info">國賓影城實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/9.webp" />
        <div class="info">南紡置地廣場實景拍攝</div>
      </div>
      <div class="img">
        <img class="block w-full" src="@/section/s4/10.webp" />
        <div class="info">南紡置地廣場實景拍攝</div>
      </div>
    </div>
    <div class="slider md:hidden">
      <swiper
        :loop="true"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s4/3.webp" />
            <div class="info">東寧路商圈實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s4/6.webp" />
            <div class="info">南紡夢時代實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s4/8.webp" />
            <div class="info">國賓影城實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s4/10.webp" />
            <div class="info">南紡置地廣場實景拍攝</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  font-size: size-m(12);
  font-weight: 500;
  line-height: size-m(20);
  @media (min-width: 768px) {
    font-size: size(19);
    line-height: 190%;
    padding-bottom: size(198);
  }

  p {
    margin-bottom: size-m(10);
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .txt {
    padding: size-m(50) size-m(33);
    @media (min-width: 768px) {
      padding: size(193) 0 size(151) 0;
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(9);
      text-indent: size-m(9);
      margin-bottom: size-m(13);
      padding-bottom: size-m(13);
      position: relative;
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(58);
        letter-spacing: size(19.14);
        text-indent: size(19.14);
        margin-bottom: size(24);
        padding-bottom: size(19);
      }
  
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: size-m(115);
        height: size-m(1);
        background: #fff;
        @media (min-width: 768px) {
          width: size(215);
          height: size(1);
        }
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(5);
      text-indent: size-m(5);
      margin-bottom: size-m(26);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        text-indent: size(7.92);
        margin-bottom: size(43);
      }
    }
  }

  .pic {
    width: size(1490);
    height: size(1246);
    margin: 0 auto;

    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: size(362);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:nth-child(1) {
        height: size(720);

        img {
          object-position: -2vw;
          transform: scale(1.15);
        }
      }

      &:nth-child(2) {
        height: size(517);
        top: size(720 + 14);
        left: 0;

        img {
          object-position: -17vw;
        }
      }

      &:nth-child(3) {
        height: size(399);
        top: 0;
        left: size(1 * (362 + 14));

        img {
          object-position: -3vw;
          transform: scale(1.15);
        }
      }

      &:nth-child(4) {
        height: size(397);
        top: size(399 + 14);
        left: size(1 * (362 + 14));

        img {
          transform: scale(1.15);
        }
      }

      &:nth-child(5) {
        height: size(424);
        top: size(399 + 14 + 397 + 14);
        left: size(1 * (362 + 14));

        img {
          object-position: -1.5vw;
          transform: scale(1.15);
        }
      }

      &:nth-child(6) {
        height: size(720);
        top: 0;
        left: size(2 * (362 + 14));

        img {
          transform: scale(1.15);
        }
      }

      &:nth-child(7) {
        height: size(512);
        top: size(720 + 14);
        left: size(2 * (362 + 14));
      }

      &:nth-child(8) {
        height: size(427);
        top: 0;
        left: size(3 * (362 + 14));

        img {
          object-position: -1.5vw;
          transform: scale(1.15);
        }
      }

      &:nth-child(9) {
        height: size(362);
        top: size(427 + 14);
        left: size(3 * (362 + 14));

        img {
          object-position: -5.7vw;
          transform: scale(1.15);
        }
      }

      &:nth-child(10) {
        height: size(437);
        top: size(427 + 14 + 362 + 14);
        left: size(3 * (362 + 14));

        img {
          object-position: -7vw;
          transform: scale(1.15);
        }
      }

      &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(8) {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          opacity: 0.5;
          transition: opacity .3s;
        }

        &:hover:after {
          opacity: 0;
        }
      }

      .info {
        position: absolute;
        bottom: size(10);
        right: size(10);
        font-size: size(12);
        line-height: normal;
      }
    }
  }

  .slider {
    .img {
      height: size-m(250);

      .info {
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        font-size: size-m(12);
        line-height: normal;
      }
    }

    .swiper-wrapper {
      align-items: stretch;

      .swiper-slide {
        height: auto;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #fff;
      justify-content: flex-start;

      &:after {
        font-size: 7vw;
      }
    }

    .swiper-button-next {
      justify-content: flex-end;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
const modules = ref([Autoplay, Navigation]);
</script>