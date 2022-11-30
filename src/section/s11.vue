<template>
  <section class="s11 relative">
    <img class="bg absolute hidden md:block" src="@/section/s11/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s11/bg-m.png" />
    <img class="tree absolute hidden md:block" src="@/section/s11/tree.svg" />
    <div class="slider absolute">
      <swiper 
        :spaceBetween="10"
        :pagination="{
          clickable: true
        }"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s11/slide1-m.png" />
          <img class="photo hidden md:block" src="@/section/s11/slide1.png" />
          <div class="text">
            <div class="t1">建築規劃</div>
            <div class="t2">A8建築師事務所 陳朝雄建築師</div>
            <div class="content">設計風格千變萬化，從新古典到現代皆能信手捻來。從半山豪華別墅到傲視水岸景觀宅皆能輕鬆駕馭，並與茂德建設一同打造三重行政特區，實力不可忽視。</div>
            <div class="md:flex">
              <div class="sec">
                <div class="title">獲獎資訊:</div>
                <div class="content">
                  2020台灣十大建築師
                </div>
              </div>
              <div class="sec">
                <div class="title">作品實績:</div>
                <div class="content">
                  新莊副都心：青青<br />
                  板橋：高妍植、江南STAR<br />
                  三重：米蘭花園、繽麗<br />
                  土城：金城舞-世界花園<br />
                  五股：天空之邑、芳洲漾、伴月灣
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s11/slide2-m.png" />
          <img class="photo hidden md:block" src="@/section/s11/slide2.png" />
          <div class="text">
            <div class="t1">公設規劃</div>
            <div class="t2">呈境設計 袁世賢總監</div>
            <div class="content">設計沒有停止的時候，設計必須不斷的開始，在不斷的開始中找尋各種可能性。以「人」為空間主體，賦予生活場域兼具美學與實用，讓家的尺度超脫日常。</div>
            <div class="md:flex">
              <div class="sec">
                <div class="title">獲獎資訊:</div>
                <div class="content">
                  IF DESIGN AWARD 最佳餐飲空間<br />
                  IF DESIGN AWARD 最佳住宅空間<br />
                  IF DESIGN AWARD 最佳旅宿空間<br />
                  IF DESIGN AWARD 室內空間設計
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s11/slide3-m.png" />
          <img class="photo hidden md:block" src="@/section/s11/slide3.png" />
          <div class="text">
            <div class="t1">景觀規劃</div>
            <div class="t2">大漢景觀 徐世萃總監</div>
            <div class="content">藉由設計的力量，增添大眾對生活場域的想像空間。從規劃、設計到施工，擁有豐富經歷於一身，讓景觀園藝不僅僅是美化，更呈現出嶄新生活型態，與自然合而為一。</div>
            <div class="md:flex">
              <div class="sec">
                <div class="title">獲獎資訊:</div>
                <div class="content">
                  建築園冶獎 (建築中庭景觀類)<br />
                  建築園冶獎 (大樓建築景觀類)<br />
                  倫敦設計獎 銀獎
                </div>
              </div>
              <div class="sec">
                <div class="title">作品實績:</div>
                <div class="content">
                  台北：大直 ATT<br /><span>　　　</span>維多麗亞酒店<br />
                  新店：碧波白<br />
                  中和：太陽帝國<br />
                  新泰：青青、文華閱<br />
                  高雄：寶家大謙、寶家澄峰<br />
                  屏東：墾丁凱撒大飯店
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .slider {
    top: size-m(0);
    left: size-m(0);
    width: 100%;

    .swiper-slide {
      width: 100%;
      height: size-m(667);
      @media screen and (min-width:768px) {
        height: size(1080);
      }
    }
    
    .swiper-pagination {
      width: auto;
    }

    .swiper-pagination-bullets {
      bottom: 6vw;
      left: 16vw;
      @media screen and (min-width:768px) {
        bottom: 38vw;
        left: 88vw;
      }

      .swiper-pagination-bullet {
        width: size-m(10);
        height: size-m(10);
        background: #000;
        opacity: 0.1;
        margin: 0 size-m(5);
        @media screen and (min-width:768px) {
          width: size(15);
          height: size(15);
          margin: 0 size(15);
        }

        &.swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      }
    }

    .photo {
      width: 100%;
      position: absolute;
      width: size-m(239.86);
      bottom: 0;
      right: 0;
      @media screen and (min-width:768px) {
        right: auto;
        left: 0;
        height: 100%;
        width: auto;
      }
    }

    .text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: size-m(40) size-m(30);
      @media screen and (min-width:768px) {
        top: size(271);
        left: size(940);
        right: 0; //size(270);
        width: auto;
        height: auto;
        padding: 0;
      }

      .t1 {
        font-family: 'Noto Serif TC';
        color: #C2465A;
        font-weight: 800;
        font-size: size-m(25);
        line-height: size-m(17);
        margin-bottom: size-m(18);
        position: relative;
        @media screen and (min-width:768px) {
          font-size: size(40);
          line-height: size(28);
          margin-bottom: size(20);
        }

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0, -50%);
          width: size-m(141);
          height: size-m(1);
          background: #000;
          @media screen and (min-width:768px) {
            width: size(730);
            height: size(1);
          }
        }
      }

      .t2 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size-m(20);
        line-height: size-m(20);
        margin-bottom: size-m(18);
        @media screen and (min-width:768px) {
          font-size: size(30);
          line-height: size(30);
          margin-bottom: size(60);
        }
      }

      .content {
        letter-spacing: 0.1em;
        font-size: size-m(13);
        line-height: size-m(20);
        @media screen and (min-width:768px) {
          font-size: size(20);
          line-height: size(30);
          max-width: size(710);
        }
      }

      .sec {
        margin-top: size-m(37);
        @media screen and (min-width:768px) {
          margin-top: size(130);
          margin-right: size(106);
        }

        .title {
          font-family: 'Noto Serif TC';
          font-weight: 700;
          font-size: size-m(15);
          line-height: size-m(15);
          margin-bottom: size-m(9);
          @media screen and (min-width:768px) {
            font-size: size(30);
            line-height: size(30);
            margin-bottom: size(30);
          }
        }

        .content {
          font-size: size-m(12);
          line-height: size-m(18);
          letter-spacing: 0.1em;
          @media screen and (min-width:768px) {
            font-size: size(20);
            line-height: size(30);
          }
        }
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(30);
      height: size-m(30);
      background-size: contain;
      top: auto;
      bottom: size-m(16);
      margin: 0;
      z-index: 11;
      @media screen and (min-width:768px) {
        width: size(60);
        height: size(60);
        bottom: 37.4vw;
      }
      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: size-m(27);
      background-image: url(@/section/s11/arrow-prev.svg);
      @media screen and (min-width:768px) {
        left: 85vw;
      }
    }

    .swiper-button-next {
      right: auto;
      left: size-m(122);
      background-image: url(@/section/s11/arrow-next.svg);
      @media screen and (min-width:768px) {
        left: 95vw;
      }
    }
  }

  .tree {
    @media screen and (min-width:768px) {
      position: absolute;
      width: size(292);
      right: 0;
      bottom: 0;
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
  // methods: {
  //   setSwiper(swiper) {
  //     this.swiper = swiper;
  //   },
  //   slideTo(num) {
  //     this.swiper.update();
  //     this.swiper.slideTo(num);
  //   },
  // }
};

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [Navigation, Autoplay],
//     };
//   },
  
// };
</script>