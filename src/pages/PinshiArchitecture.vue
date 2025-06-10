<template>
  <section id="main">
    <img src="@/assets/pinshi-architecture/main.jpg" />
    <div class="content">
      <div class="txt">在府城土地上，國城寳實以平實特區的規劃本意為起點，貫徹「共創社會公共價值」的初心，展開一場從地貌紋理到人文尺度的深度對話。不論是以開放、自然、與社區為概念的建築，還是以國際視野提煉的台南在地文化而構築的室內空間，抑或是深思台南氣候與生活節奏的景觀設計，讓建築、景觀與人產生真實而自在的連結，也是我們獻給台南的一份誠意之作。</div>
    </div>
  </section>

  <section id="architecture" class="items">
    <div class="item-title">建築規劃｜天造地設，為人而生。</div>
    <div class="item">
      <div class="photo">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide><img src="@/assets/pinshi-architecture/1/1.webp" /> <div class="photo-desc">建築量體透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/1/2.webp" /> <div class="photo-desc">建築量體透視圖</div></swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div>
          <div class="t1">國城寳實整體開發 <br class="pc">透視圖</div>
          <div class="t2">有序律動量體 型塑多元生活型態</div>
          <div class="txt">12 棟建築量體依沿路側、公園側及社區內側三種條件各異的環境進行設計思考。沿小東路側 FGHI 棟呼應城市門面意象，利用細部材質差異提升建築自明性與韻律感；公園側 ABE 棟，水平深遮陽台開展朗闊視野，通透屋頂框架創造優雅天際線；CDJK 棟則設定深色系外觀營造沈穩安靜的內斂氛圍</div>
          <div class="bg-text">GEM<br class="pc"> OF<br class="mob"> PINSHI</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="photo">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide><img src="@/assets/pinshi-architecture/1/3.webp" /> <div class="photo-desc">建築立面透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/1/4.webp" /> <div class="photo-desc">建築立面透視圖</div></swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div>
          <div class="t1">國城寳實外觀立面 <br class="pc">透視圖</div>
          <div class="t2">現代簡約的建築語彙 打造渡假村氛圍</div>
          <div class="txt">建築群以低調質樸的現代簡約風為主軸，運用水平陽台、花台與金屬裝飾，展現一致卻富層次的立面語彙，量體高度利用樓層數變化創造律動感；大廳與公設區引入大片綠意與落地窗設計，串聯室內外景觀，彷若度假村般的開放氛圍，打造高綠覆、低建蔽的生活場域，不只是居所，更是現代美學與生活態度的體現。</div>
          <div class="bg-text">GEM<br class="pc"> OF<br class="mob"> PINSHI</div>
        </div>
      </div>
    </div>
  </section>

  <section id="view" class="items">
    <div class="item-title">景觀設計｜自然而然，理所當然。</div>
    <div class="item">
      <div class="photo">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide><img src="@/assets/pinshi-architecture/2/1.webp" /> <div class="photo-desc">建築廊道空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/2/2.webp" /> <div class="photo-desc">建築廊道空間透視圖</div></swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div>
          <div class="t1">國城寳實廊道景觀與空間 <br class="pc">透視圖</div>
          <div class="t2">模糊室內外空間 創造友善開放的場域</div>
          <div class="txt">整體景觀設計以城市氛圍為出發點，透過建築退縮與雙排植栽，舒緩現代都市緊湊感；內部採圍合式社區設計，打開空間界線，營造開放友善的交流場域。景觀串聯各棟與公設，弱化建築量體、模糊室內外界線，讓人在空間中感受流動與曖昧的自然生活感，每一處綠意都是空間過渡的語言，也是日常生活的延伸。</div>
          <div class="bg-text">GEM<br class="pc"> OF<br class="mob"> PINSHI</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="photo">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide><img src="@/assets/pinshi-architecture/2/3.webp" /> <div class="photo-desc">戶外景觀廊道透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/2/4.webp" /> <div class="photo-desc">戶外景觀廊道透視圖</div></swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div>
          <div class="t1">國城寳實戶外庭院 <br class="pc">透視圖</div>
          <div class="t2">用風與綠創造物理降溫 實現舒適戶外空間</div>
          <div class="txt">應對台南炎熱與高溫環境，景觀設計著眼打造自在停留的涼爽戶外空間。綜合運用多種降溫手法，除了創造陰影樹蔭、配置水景之外，讓風透過高低差屏障自由流通，選擇隨風搖曳的植栽樹種，讓通風更加自然，並考量較為冰涼的鋪面與戶外座椅的材質，提供整體宜人體感。</div>
          <div class="bg-text">GEM<br class="pc"> OF<br class="mob"> PINSHI</div>
        </div>
      </div>
    </div>
  </section>

  <section id="public" class="items">
    <div class="item-title">公設美學｜生得漂亮，也要活得漂亮。</div>
    <div class="item">
      <div class="photo">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide><img src="@/assets/pinshi-architecture/3/1.webp" /> <div class="photo-desc">全日餐廳 空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/3/2.webp" /> <div class="photo-desc">全日餐廳 空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/3/3.webp" /> <div class="photo-desc">全日餐廳 空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/3/4.webp" /> <div class="photo-desc">全日餐廳 空間透視圖</div></swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div>
          <div class="t1">國城寳實全日餐廳 <br class="pc">透視圖</div>
          <div class="t2">當代手法詮釋在地空間美學</div>
          <div class="txt">芦沢啓治走訪台南街巷與基地特質，詮釋漫步於古都台南與平實公園的觀察與體驗，轉化爲本案設計靈感，既直接又帶有一絲曖昧。在整體布局上遵循建築結構規線，發展出清晰的動線，運用景觀植栽與蜿蜒的廊道，營造出類似於台南巷弄間漫步的氛圍，使空間在有序之中仍保有靈動與趣味。</div>
          <div class="bg-text">GEM<br class="pc"> OF<br class="mob"> PINSHI</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="photo">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide><img src="@/assets/pinshi-architecture/3/5.webp" /> <div class="photo-desc">度假泳池 空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/3/6.webp" /> <div class="photo-desc">健身房 空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/3/7.webp" /> <div class="photo-desc">公設大廳 空間透視圖</div></swiper-slide>
          <swiper-slide><img src="@/assets/pinshi-architecture/3/8.webp" /> <div class="photo-desc">公設大廳 空間透視圖</div></swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div>
          <div class="t1">國城寳實 大廳空間 <br class="pc">透視圖</div>
          <div class="t2">規律、陣列、延續，創造美感平衡</div>
          <div class="txt">芦沢啓治以整體視角統籌建築、景觀與公設設計，運用迴廊列柱作為有序設計語彙，貫穿室內外空間，並延伸至家具細節，展現材料與比例的連續性。他善用挑高與天花開口創造柔和光感，透過材質與光線搭配，在大廳、餐廳、閱覽室等空間中，形塑靜謐、低奢與溫暖的多重氛圍。</div>
          <div class="bg-text">GEM<br class="pc"> OF<br class="mob"> PINSHI</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

#page-pinshiArchitecture .swiper-pagination {
  bottom: func.size-m(15);
  line-height: 1;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width:768px) {
    bottom: func.size(22);
  }

  .swiper-pagination-bullet {
    width: func.size-m(40);
    height: func.size-m(5);
    opacity: .67;
    background: #000;
    border: none;
    margin: 0 func.size-m(2);
    border-radius: 0;
    @media screen and (min-width:768px) {
      width: func.size(149);
      height: func.size(22);
      margin: 0 func.size(5.5);
    }

    &.swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

.mob {
  display: block;
  @media screen and (min-width:768px) {
    display: none;
  }
}

.pc {
  display: none;
  @media screen and (min-width:768px) {
    display: block;
  }
}

.txt {
  font-size: func.size-m(12);
  line-height: func.size-m(20);
  @media screen and (min-width:768px) {
    font-size: func.size(25);
    line-height: func.size(45);
  }
}

#main {
  img {
    display: block;
    width: 100%;
    height: func.size-m(392);
    object-fit: cover;
    margin-bottom: func.size-m(0);
    @media screen and (min-width:768px) {
      height: auto;
      margin-bottom: func.size(135);
    }
  }

  .content {
    padding: func.size-m(31) func.size-m(30) func.size-m(21) func.size-m(30);
    @media screen and (min-width:768px) {
      padding: 0 func.size(435);
    }
  }

  .txt {
    @media screen and (min-width:768px) {
      line-height: func.size(67);
    }
  }
}

.items {
  @media screen and (min-width:768px) {
    padding-top: func.size(148);
  }

  .item-title {
    font-size: func.size-m(14);
    line-height: func.size-m(34);
    font-weight: 700;
    letter-spacing: .02em;
    margin: 0 func.size-m(30);
    margin-bottom: func.size-m(38);
    border-top: func.size-m(1) solid #000;
    border-bottom: func.size-m(1) solid #000;
    text-align: center;
    @media screen and (min-width:768px) {
      font-size: func.size(40);
      line-height: func.size(100);
      margin: 0 func.size(160);
      margin-bottom: func.size(106);
      border-width: func.size(1);
    }
  }

  .photo {
    position: relative;
    margin-bottom: func.size-m(22);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      width: func.size(1920);
    }

    img {
      display: block;
      width: 100%;
      height: func.size-m(280);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .photo-desc {
      position: absolute;
      top: func.size-m(14);
      left: func.size-m(30);
      color: #FFF;
      text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(58);
        right: func.size(151);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(22);
        font-weight: 400;
        letter-spacing: .05em;
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: func.size-m(412);
    object-fit: cover;
    @media screen and (min-width:768px) {
      height: auto;
    }
  }

  .content {
    margin: func.size-m(34) func.size-m(30);
    background: #fff;
    padding: func.size-m(26);
    position: relative;
    @media screen and (min-width:768px) {
      margin: func.size(105) func.size(258);
      padding: func.size(50) func.size(59) func.size(56) func.size(59);

      &:after {
        content: '';
        position: absolute;
        top: func.size(50);
        bottom: func.size(56);
        left: func.size(952);
        width: func.size(1);
        background: #000;
      }

      & > div {
        width: func.size(817);
      }
    }
  }

  .item:nth-child(odd) {
    @media screen and (min-width:768px) {
      .content {
        & > div {
          margin: 0 0 0 auto;
        }

        &:after {
          left: func.size(414);
        }
      }

      .t1 {
        right: auto;
        left: func.size(61);
        text-align: left;
      }

      .bg-text {
        right: auto;
        left: func.size(62);
        text-align: left;
      }
    }
  }

  .t1 {
    font-size: func.size-m(12);
    font-weight: 700;
    margin-bottom: func.size-m(39);
    @media screen and (min-width:768px) {
      position: absolute;
      top: func.size(50);
      right: func.size(61);
      font-size: func.size(21);
      line-height: func.size(47);
      margin-bottom: 0;
      text-align: right;
    }
  }

  .t2 {
    font-size: func.size-m(14);
    font-weight: 700;
    margin-bottom: func.size-m(20);
    @media screen and (min-width:768px) {
      font-size: func.size(40);
      margin-bottom: func.size(40);
    }
  }

  .txt {
    @media screen and (min-width:768px) {
      letter-spacing: .05em;
    }
  }

  .bg-text {
    position: absolute;
    top: func.size-m(23);
    right: func.size-m(28);
    text-align: right;
    color: #E6E6E6;
    font-size: func.size-m(12);
    font-weight: 700;
    @media screen and (min-width:768px) {
      top: auto;
      bottom: func.size(51);
      right: func.size(62);
      font-size: func.size(45);
    }
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = ref([Autoplay, Pagination]);
</script>