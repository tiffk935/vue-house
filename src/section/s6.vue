<template>
  <section class="s6 relative">
    <div class="slider">
      <swiper 
        :spaceBetween="10"
        :pagination="{
          clickable: true
        }"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules" 
        class="mySwiper"
      >
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/1.jpg" alt="雙和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">龍瑩建設 精工匠作</div>
              <div class="subtitle text-black"><b>李建瑩 總經理</b>潤泰血統 精實品質</div>
              <div class="text text-black">
                李建瑩總經理出身品質嚴密的潤泰集團，傳承精實實力，以高規選材與重視地方的胸懷，小宅大作、精質薈萃，實踐龍瑩「瑩建築」細雕琢磨的堅持，重量級兌現對每位客戶與地主的終生信諾。
              </div>
              <div class="mark text-right">
                <img src="@/section/s6/mark1.png" alt="雙和心">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/2.jpg" alt="雙和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">豪邸名師 城市綠川</div>
              <div class="subtitle text-black"><b>大漢設計 景觀規劃</b></div>
              <div class="text text-black">
                由陶朱隱園景觀規劃的大漢設計提煉綠色饗宴，將長型頂層轉化為流線型綠川，天地間，漫步享受左右伴生的綠色大道。植栽並運用複層手法堆疊豐富層次，香氛花園規劃更以自然香氣開啟靜思慢活，釋放辛勞壓力。
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/3.jpg" alt="雙和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">飯店公設 時尚型格</div>
              <div class="subtitle text-black"><b>尚文禾竹×新霖廣告 公設規劃</b></div>
              <div class="text text-black">
                公設同為雙團隊擘劃，小坪數也豪享輕奢優雅的生活風景！空間由溫潤木質建構穩重基調，以大面積純白注入年輕時尚氣息，並善用自然光與人造光點亮視覺焦點，展現星級飯店洗鍊細緻的頂級品味。
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/4.jpg" alt="雙和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">現代俐落 線性演繹</div>
              <div class="subtitle text-black"><b>楊明山郭書杰雙建築師×尚文禾竹</b></div>
              <div class="text text-black">
                雙建築師與尚文禾竹跨界激盪，在垂直與水平之間淬煉極簡線性，以簡約色調搭配精緻材質，縱橫交錯出挺拔現代的視覺節奏。側邊並規劃大宅格局的錯層陽台，極大化市中心的生活質感。
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="logo absolute" src="@/section/s6/logo.svg" alt="雙和心">
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @media screen and (min-width:768px) {
    padding: size(136) 0 size(50) size(180);
  }
    
  .swiper {
    @media screen and (min-width:768px) {
      // width: size(1067);
      // margin: 0;
      overflow: visible;
    }
  }

  .slider {
    @media screen and (min-width:768px) {
      overflow: hidden;
      width: size(1406);
      margin: 0;
      padding-bottom: 2.4vw;
    }
  }

  .swiper-pagination {
    // bottom: -2.4vw;
    // text-align: right;
    @media screen and (min-width:768px) {
      bottom: -2.4vw;
      text-align: left;
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
    border: 1px solid #000;
    width: size-m(10);
    height: size-m(10);
    @media screen and (min-width:768px) {
      width: size(15);
      height: size(15);
    }

    &.swiper-pagination-bullet-active {
      background: #DD1373;
      border-color: #DD1373;
    }
  }

  .logo {
    width: size-m(23);
    top: 0;
    right: 0;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(98);
    }
  }

  .content {
    padding: size-m(20) size-m(30) size-m(29) size-m(30);
    text-align: justify;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      // width: size(507+180);
      padding: 0;
    }

    &>img {
      @media screen and (min-width:768px) {
        width: size(722);
      }
    }
    
    .inner {
      @media screen and (min-width:768px) {
        width: size(535);
      }
    }
  }

  .title {
    font-size: size-m(25);
    line-height: size-m(35);
    font-weight: 900;
    margin-bottom: size-m(6);
    margin-top: size-m(12);
    @media screen and (min-width:768px) {
      font-size: size(63);
      line-height: size(75);
      margin-bottom: size(42);
      margin-top: size(12);
    }
  }

  .title2 {
    font-weight: 300;
    font-size: size-m(20);
    line-height: size-m(29);
    @media screen and (min-width:768px) {
      font-size: size(59);
      line-height: size(75);
      margin-bottom: size(43);
    }
  }

  .subtitle {
    font-size: size-m(15);
    line-height: size-m(21);
    // font-weight: 500;
    margin-bottom: size-m(12);
    @media screen and (min-width:768px) {
      font-size: size(35);
      line-height: size(50);
      margin-bottom: size(51);
    }

    b {
      font-weight: 500;
      margin-right: size-m(8);
      @media screen and (min-width:768px) {
        display: block;
      }
    }
  }

  .text {
    font-size: size-m(15);
    line-height: size-m(24);
    @media screen and (min-width:768px) {
      font-size: size(23);
      line-height: size(40);
    }
  }

  .mark {
    width: size-m(69);
    margin: 0 0 0 auto;
    // transform: translate();
    @media screen and (min-width:768px) {
      width: size(148);
      margin-top: size(117);
    }
  }

}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
