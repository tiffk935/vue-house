<template>
  <section class="s10 text-white relative">
    <div class="slider absolute">
      <swiper 
        :pagination="false"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :speed="600"
        :breakpoints="{
          '768': {
            centeredSlides: false,
          }
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @init="setSlider"
        @slideChange="slideChange"
      >
        
        <swiper-slide>
          <div class="p1 parallax">
            <div class="txt">呂佳隆 建築師</div>
            <div class="mask">
              <!-- <img class="zoom-icon absolute" src="@/section/s10/zoom-icon.svg" /> -->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p2 parallax">
            <div class="txt">陳昫吟 總監</div>
            <div class="mask">
              <!-- <img class="zoom-icon absolute" src="@/section/s10/zoom-icon.svg" /> -->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p3 parallax">
            <div class="txt">呂佳隆 建築師</div>
            <div class="mask">
              <!-- <img class="zoom-icon absolute" src="@/section/s10/zoom-icon.svg" /> -->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p4 parallax">
            <div class="txt">輝達營造有限公司</div>
            <div class="mask">
              <!-- <img class="zoom-icon absolute" src="@/section/s10/zoom-icon.svg" /> -->
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="line"></div>
    </div>

    <Transition>
      <div v-if="realIndex === 0" class="content absolute fade">
        <div class="title">建築規劃 <br class="md:hidden">呂佳隆建築師事務所</div>
        <div class="t1">素雅侘寂旅日流派，大阪大學建築碩士。</div>
        <div class="txt">
          呂佳隆建築師畢業於成大建築系，旅日多年取得日本大阪大學建築碩士，美學風格深得日本傳統意識底蘊；尤以日系嚴謹的建築態度為依歸，按步就班循序漸進、理性務實面對建築需求，體會人居意識於建築構體，寄望以百年永續的態度構築溫暖人性的都會居所。建築作品橫跨多層次面向，前端建築眼界寄情都會風貌與城市地景。<br>
          <br>
          知名建築作品如下：磐琚天母 / 閱禾琚 / 瑞安薈
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-if="realIndex === 1" class="content absolute fade">
        <div class="title">公設景觀 <br class="md:hidden">如榆建築設計事務所</div>
        <div class="t1">如榆建築設計事務所</div>
        <div class="txt">
          如榆建築設計事務所由建築、室內、景觀與藝術等四位來自不同領域的設計師交融而成，以驚人的創作力締造多處充滿創意的佳績，經歷芝加哥、中國等地事務所的多年琢磨，於2009年在台北及上海成立「BASS Design如榆建築及設計事務所」，期許為都市創造更理想的環境品質。陳昫吟總監作品榮獲德國柏林設計獎、英國倫敦設計獎、美國IDA獎項、義大利Design Award等殊榮，凝煉人文藝術與空間美學，展演溫雅格調形塑嶄新建築風情。<br>
          <br>
          知名建築作品如下：東騰越 / 異雲書屋 / 張家港溫泉酒店 / 白天鵝采奕酒店
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-if="realIndex === 2" class="content absolute fade">
        <div class="title">結構工程 <br class="md:hidden">桁城工程顧問股份有限公司</div>
        <div class="t1">專精建築結構領域，深入地層細膩質地。</div>
        <div class="txt">
          桁城工程顧問以建築師後盾為根本，以建築安全守門員自居，堅持以實務狀況與建築開發單位溝通，戮力於解決建築結構問題並保障建築安全；不畏成本衝突，敢言直接面對問題，發揮建築最後防線的良善本質，以務實、理性、專業的特性活躍於台北都會的建築領域裡，善盡職責以安全為第一優先。<br>
          <br>
          知名建築作品如下：太平洋盛宴 / 瑞安薈 / 中研I-PARK / 太平洋麗緻
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-if="realIndex === 3" class="content absolute fade">
        <div class="title">營建工程 <br class="md:hidden">輝達營造有限公司</div>
        <div class="t1">視客戶為一生的夥伴，營造為堅實的盟友。</div>
        <div class="txt">
          當其他建設公司紛紛標榜售後服務的同時，德林建設機構認為「不需要服務，才是最好的售後服務」。其根本來自於開發、營造、服務一條龍的脈絡思維，不假他人之手的細心守護關照建築施工細節，以專業、創新、效能等標準專注成就建築美學，除了以精緻營造精品住宅之外，並藉由跨域專業改寫都會未來建築。<br>
          <br>
          知名建築作品如下：青田 / 國家藝術賞 / 林与堂 / 青田主人 / 泰安觀止 / 台灣科技廣場 / 台灣科技公園 / A3台灣智匯總部
        </div>
      </div>
    </Transition>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  width: 100%;
  height: size-m(1060);
  font-family: 'Noto Serif TC';
  background: linear-gradient(188.05deg, #0C6B63 8.3%, #209286 86.01%);
  @media screen and (min-width:768px) {
    height: size(1080);
    background: linear-gradient(284.83deg, #004B47 -0.68%, #11A196 97.62%);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .slider {
    width: 100%;
    top: size-m(55);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(497 + 505.21);
      top: size(219);
      left: size(917.79);
      padding-bottom: size(120);
      // background: orange;
      overflow: hidden;
    }

    .line {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        width: size(979 - 38);
        position: absolute;
        right: 0;
        bottom: size(60);
        height: size(1);
        background: rgba(255, 255, 255, 0.2);
      }
    }

    .swiper {
      @media screen and (min-width:768px) {
        overflow: visible;
      }
    }

    .swiper-slide {
      width: size-m(290 + 20);
      padding: 0 size-m(10);
      @media screen and (min-width:768px) {
        width: size(497 + 56);
        padding: 0 size(28);
      }

      .parallax {
        width: 100%;
        height: size-m(341.56);
        background-size: 100% auto;
        border-radius: 48% 48% 0px 0px;
        opacity: 0.5;
        transition: all .4s, opacity .7s;
        @media screen and (min-width:768px) {
          height: size(585);
        }

        .txt {
          font-weight: 500;
          font-size: size-m(13);
          line-height: size-m(18.68);
          position: absolute;
          bottom:0;
          left:size-m(10);
          text-shadow: 0px size-m(1) size-m(10) rgba(0, 0, 0, 1);
          padding: 1em 1em size-m(8.92) size-m(16.5);
          width: calc(100% - #{size-m(20)});
          box-sizing: border-box;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 70%,rgba(0,0,0,0.6) 100%);

          @media screen and (min-width:768px) {
          width: calc(100% - #{size(28 * 2)});
          left:size(28);
            font-size: size(16);
            line-height: size(20.05);
          padding: 1em 1em size(22) size(28.21);
            text-shadow: 0px size(1) size(20) rgba(0, 0, 0, 1);
          }

          span {
            display: block;
            font-size: size-m(18);
            line-height: size-m(25.87);
            @media screen and (min-width:768px) {
              font-size: size(18);
              line-height: size(30.24);
            }
          }
        }
      }

      .mask {
        position: absolute;
        top: 0;
        left: size-m(10);
        right: size-m(10);
        height: 100%;
        border-radius: 48% 48% 0px 0px;
        // cursor: pointer;
        opacity: 0;
        transition: opacity .7s;
        @media screen and (min-width:768px) {
          left: size(28);
          right: size(28);
        }

        .zoom-icon {
          width: size-m(26.52);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          @media screen and (min-width:768px) {
            width: size(26.52);
          }
        }
      }

      &.swiper-slide-active {
        .parallax, .mask {
          opacity: 1;
        }
      }

      .p1 {
        background-image: url(@/section/s10/1.jpg);
      }
      .p2 {
        background-image: url(@/section/s10/2.jpg);
      }
      .p3 {
        background-image: url(@/section/s10/3.jpg);
      }
      .p4 {
        background-image: url(@/section/s10/4.jpg);
      }
    }

    .swiper-button-prev, .swiper-button-next {
      // background: rgba(255,0,0,0.5);
      margin: 0;
      top: 0;
      width: size-m(42.5);
      height: 100%;
      @media screen and (min-width:768px) {
        width: size(30);
        height: size(30);
      }

      &:after {
        display: none;
        // @media screen and (min-width:768px) {
        //   display: block;
        // }
      }
    }
    .swiper-button-next {
      left: 0;
      @media screen and (min-width:768px) {
        top: auto;
        bottom: size(-60 - 15);
        left: size(28);
        // background: red;
        background-image: url(@/section/s10/arrow-prev.svg);
        background-size: size(12.5) auto;
        background-position: left center;
        background-repeat: no-repeat;
      }
    }
    .swiper-button-prev {
      right: 0;
      @media screen and (min-width:768px) {
        display: none;
      }
    }
  }

  .content {
    width: size-m(290);
    top: size-m(451.92);
    left: size-m(42.5);
    z-index: 1;
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(650);
      top: size(360);
      left: size(189);
    }

    .title {
      font-weight: 700;
      font-size: size-m(24);
      line-height: size-m(32);
      margin-bottom: size-m(9);
      color: #5CBD9E;
      @media screen and (min-width:768px) {
        font-size: size(38);
        line-height: size(59);
        margin-bottom: size(9);
      }
    }

    .t1 {
      font-size: size-m(21);
      line-height:1.34;
      font-weight: 700;
      margin-bottom: size-m(9.5);
      letter-spacing: .03em;
      @media screen and (min-width:768px) {
        font-size: size(28);
        margin-bottom: size(26.5);
      }
    }

    .txt {
      font-size: size-m(15);
      line-height:1.5;
      margin-bottom: size-m(24.5);
      font-weight: 300;
    letter-spacing: 0em;
    font-family: 'Noto sans TC';
      @media screen and (min-width:768px) {
        font-size: size(19);
        margin-bottom: size(70);
      font-weight: 200;
      letter-spacing: .1em;
        line-height:1.7;
      }
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  props: ['setFsLightbox'],
  data() {
    return {
      sliderRef: null,
      realIndex: 0,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  methods: {
    setSlider: function(swiper) {
      this.sliderRef = swiper;
    },
    slideChange: function(slide) {
      if(this.sliderRef) {
        this.realIndex = this.sliderRef.realIndex;
      }
    }
  }
};
</script>
