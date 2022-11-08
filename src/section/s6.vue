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
            <img src="@/section/s6/1.jpg" alt="双和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">龍瑩建設 精工匠作</div>
              <div class="subtitle text-black"><b>李建瑩 總經理</b><span>品牌血統 匠心精工</span></div>

              <div class="hidden md:block">
              <div class="text text-black">
                龍瑩傳承嚴謹建築的精實實力,更敢於創新，於市中心重要地段超乎規格擘劃，小宅大作、精質薈萃。「瑩建築」細雕琢磨,一屋機能美學俱足,更主動承諾更高標準的防水保固,長久守護
              </div>
              <div class="text text-black border-top">
                全案量身訂製極致規格，精準實踐「功能與美感」兼具，真正適合當代人「生活居住」的完善建築
              </div>
              </div>

              <div class="md:hidden">
              <div class="text text-black">
                傳承嚴謹建築精實實力，於市心重要地段超乎規格擘劃。「瑩建築」一屋機能美學齊，適生活居住，更主動承諾更高標準的防水保固，長久守護
              </div>
              </div>

              <div class="mark text-right">
                <img src="@/section/s6/mark1.png" alt="双和心">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/3.jpg" alt="双和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">現代俐落 線性演繹</div>
              <div class="subtitle text-black">楊明山郭書杰 X 尚文禾竹吳孟音</div>

              <div class="hidden md:block">
              <div class="text text-black">
                雙建築師與尚文禾竹跨界激盪，楊明山、郭書杰建築師精於構建機能，與吳孟音建築師擅長形隨機能、化理性為大美，強勢組合共話傳奇
              </div>
              <div class="text text-black border-top">
                Design Concept<br>双和心建築外觀為水平垂直交會的俐落線性，以年輕思維構思，打破傳統對稱而以白磚跳色，增添活潑更展現不同凡響的姿態；並以細膩的立面質感和錯層陽台，與人文與生活深度對話
              </div>
              </div>

              <div class="md:hidden">
              <div class="text text-black">
                大師聯手構建機能、化理性為大美！双和心外觀水平垂直俐落線性，創意白磚跳色、錯層陽台等，活潑並深度對話人文、生活
              </div>
              
              </div>

            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/2.jpg" alt="双和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">豪邸名師 城市綠川</div>
              <div class="subtitle text-black">大漢設計 景觀規劃</div>

              <div class="hidden md:block">
              <div class="text text-black">
                頂級豪宅陶朱隱園、及各大豪邸飯店欽點設計,景觀擅長融會文化、展現溫度,榮獲建築園冶獎殊榮,設計語彙自然實用、機能完善品味細緻
              </div>
              <div class="text text-black border-top">
                Design Concept<br>双和心頂層擘劃空中花園，設有繽紛綠川、跳島花廊、觀星平台、香氛療癒花園，更運用複層式手法堆疊豐富綠帶、流線燈光串連遼闊夜景，構建首善城市中珍稀無價的專屬高空綠洲
              </div>
              </div>

              <div class="md:hidden">
              <div class="text text-black">
                建築園冶獎殊榮肯定，豪宅陶朱隱園欽點設計師，打造双和心頂層空中花園，複層式綠川、跳島花廊、觀星平台等，構建城市稀珍高空綠洲
              </div>
              </div>


            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="content md:flex">
            <img src="@/section/s6/4.jpg" alt="双和心">
            <div class="inner">
              <div class="title text-[#DD1373] text-center">團隊升級 重磅來襲<br>五大團隊 超乎規格</div>
              <div class="title2">飯店公設 時尚型格</div>
              <div class="subtitle text-black">尚文禾竹 X 新霖廣告 公設規劃</div>

              <div class="hidden md:block">
              <div class="text text-black">
                公設同為雙團隊擘劃，薈萃尚文禾竹擅長的低調新穎、與新霖廣告精煉的大器知性，小坪數亦值得品味一場精緻內斂的美學生活！
              </div>
              <div class="text text-black border-top">
                Design Concept<br>双和心公設層以藝術廊道開場，匯集當代機能：健身房、瑜伽室、Relax Bar、兒童遊戲室等，整體透過木質建構穩重基調，以純白注入現代氣息，並巧用光點亮焦點，展現飯店級的精品體驗
              </div>
              </div>

              <div class="md:hidden">
              <div class="text text-black">
                公設層以藝術廊道開場，匯集瑜珈室、Relax Bar、兒童遊戲室等，木質穩重基調，現代純白色與巧用光點，展現飯店級精品體驗
              </div>
              </div>


            </div>
          </div>
        </swiper-slide>
        
      </swiper>
    </div>
    <img class="logo absolute" src="@/section/s6/logo.svg" alt="双和心">
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
    padding: size-m(20) size-m(30) size-m(50) size-m(30);
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
      line-height: size(40);
      margin-bottom: size(30);

       span{
        font-size: size(26.5);
      }
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
    font-weight: 300;
    @media screen and (min-width:768px) {
      font-size: size(23);
      line-height: size(40);
    }
  }
  .border-top{
    border-top:1px solid #000;
    padding-top: size-m(20);
    margin-top: size-m(20);

    @media screen and (min-width:768px) {
    padding-top: size(20);
    margin-top: size(20);
    }
  }

  .mark {
    width: size-m(69);
    margin: 0 0 0 auto;
    margin-top: size-m(10);
    // transform: translate();
    @media screen and (min-width:768px) {
      width: size(130);
      margin-top: size(20);
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
