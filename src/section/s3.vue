<template>
  <section class="s3 text-white bg-[#D9374B] relative">

    <div class="title">
    <div class="t1 hidden md:block" data-aos="fade-up" data-aos-delay="200">國門心地標<br>綠景城中城</div>
    <div class="t1 md:hidden" data-aos="fade-up" data-aos-delay="200">國門心地標 綠景城中城</div>

    <div class="t2" data-aos="fade-up" data-aos-delay="300">三座埤塘生態、多座公園 Chill樂活<br>千塘之鄉馥郁芬芳  城市稀有慢步調</div>

    <div class="content" data-aos="fade-up" data-aos-delay="300">
     大園客運特區以符合未來趨勢的綠色城市為概念，除了融入河流、埤塘、綠地等當地特色景觀，保留區內三處較大埤塘及施作灌溉溝渠以塑造親水景觀環境，創造獨特都市風貌與提供高品質之生活空間。<br>
其中店子埤占地面積約5.5公頃，環埤步道長度超過千米，改造過程中，市府特意保留歷史與人文特色，採用舊地名為埤塘生態公園命名，也保留180公尺自然生態樹林，成了埤塘賞鳥秘境。
      </div>
    </div>


    <div class="slider slider1 absolute">
      <swiper 
        :pagination="{
          clickable: true,
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
          <img src="@/section/s3/slide1-1.jpg" />
          <div class="text-white">埤塘代圖，實際以現場為準</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide1-2.jpg" />
          <div class="text-white md:text-[#727171]">埤塘代圖，實際以現場為準</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-bg bg-white absolute"></div>
    <img class="map absolute" src="@/section/s3/map.jpg" />

    <div class="title2">
    <div class="t1" data-aos="fade-up" data-aos-delay="200">機場城市 發展告捷</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="300">園區發展ing 利多進形式<br>⼯作就學 ⾃住好樂</div>
    <div class="content" data-aos="fade-up" data-aos-delay="300">
     新市鎮共享新舊城區教育資源，同步將歷史悠久、採雙語教學的名校大園國中搬遷至特區內，加上潮音國小完整的九年一貫學研文教，學區免煩惱，迎向未來進行式。生活機能集中在中正東路、大觀路，有寶雅、小北百貨、肯德基、星巴克等。<br>
    交通動能方面，除了便利的國道2、61快速道路，開車5分鐘可以抵達機捷A15大園站，周邊大園市場、全聯、屈臣氏等商店，滿足日常生活採買。近幾年則是積極拓建多條聯外動線，月桃路拓寬工程，以及機場聯外道路等利多建設進行式，大幅提升當地交通便利性。
      </div>
    </div>

    <div class="slider slider2 absolute">
      <swiper 
        :pagination="{
          clickable: true,
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
          <img src="@/section/s3/slide2-1.jpg" />
          <div class="text-white">大園國中現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-2.jpg" />
          <div class="text-white">國道二號現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-3.jpg" />
          <div class="text-white">台61現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-4.jpg" />
          <div class="text-white md:text-[#727171]">捷運A15大園站現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-5.jpg" />
          <div class="text-white">高鐵桃園站現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-6.jpg" />
          <div class="text-white">月桃路拓寬現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-7.jpg" />
          <div class="text-white">桃園機場現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-8.jpg" />
          <div class="text-white">桃園喜來登酒店現場實景</div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="tree1 absolute hidden md:block" src="@/section/s3/tree1.png" />
    <img class="tree2 absolute hidden md:block" src="@/section/s3/tree2.png" />
    <img class="tree3 absolute hidden md:block" src="@/section/s3/tree3.png" />
    <img class="style1 absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/style1.png" />
    <img class="style2 absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/style2.png" />
    <img class="style3 absolute" data-aos="fade-right" data-aos-delay="0" src="@/section/s3/style3.png" />
    <img class="style4 absolute hidden md:block" src="@/section/s3/style4.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  
  @keyframes skew {
    to {
      transform: skewX(0deg);
    }
  }

  width: 100%;
  height: size-m(1484);
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(2155);
  }

  .text1 {
    top: size-m(36);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(280);
      left: size(155);
      width: size(604);
    }
  }
 


  .title{
    position: absolute;
    top: size(280);
    left:size(150);
    width: size(559);
    z-index: 5;
    text-align: right;

    @media screen and (max-width:768px) {
      text-align: left;
      top: size-m(45);
      right:size-m(30);
      width: size-m(315);
    }

    .t1{
      font-size: size(58);
      line-height: size(70);
      margin-bottom: size(15);
      color: #fff;
      font-weight: 900;

      @media screen and (max-width:768px) {
        font-size: size-m(25);
        margin-bottom: size-m(20);
      }
    }

    .t2{
      font-size: size(30);
      color: #fff;
      font-weight:500;
      line-height: size(40);

      @media screen and (max-width:768px) {
        font-size: size-m(16);
        line-height: size-m(25);
      }
    }

    .content{
      font-size: size(16);
      color: #fff;
      font-weight:300;
      margin-top: size(45);
      text-align: left;
      text-align: justify;
      @media screen and (max-width:768px) {
        font-size: size-m(13);
        margin-top: size-m(10);
      }
    }

  }

  .title2{
    position: absolute;
    bottom: size(120);
    right:size(370);
    width: size(559);
    z-index: 5;
    text-align: left;

    @media screen and (max-width:768px) {
      text-align: left;
      bottom: size-m(365);
      right:size-m(30);
      width: size-m(315);
    }

    .t1{
      font-size: size(58);
      line-height: size(70);
      margin-bottom: size(5);
      color: #D9374B;
      font-weight: 900;

      @media screen and (max-width:768px) {
        font-size: size-m(25);
        margin-bottom: size-m(20);
      }
    }

    .t2{
      font-size: size(30);
      color: #727171;
      font-weight:500;
      line-height: size(40);

      @media screen and (max-width:768px) {
        font-size: size-m(16);
        line-height: size-m(25);
      }
    }

    .content{
      font-size: size(16);
      color: #727171;
      font-weight:300;
      margin-top: size(35);
      text-align: left;
      text-align: justify;
      @media screen and (max-width:768px) {
        font-size: size-m(13);
        margin-top: size-m(10);
      }
    }

  }




  .slider {
    width: 100%;
    height: size-m(200.07 + 34);
    padding-bottom: size-m(34);
    top: size-m(316);
    left: 0;
    overflow: hidden;
    // background: yellow;
    box-sizing: content-box;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(1134);
      height: size(605 + 55);
      padding-bottom: size(55);
      top: size(223);
      left: size(786);
    }

    .swiper {
      overflow: visible;

      .swiper-slide div {
        font-size: size-m(14);
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
        font-weight: 500;
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        @media screen and (min-width:768px) {
          font-size: size(19);
          text-shadow: none;
          bottom: size(10);
          right: size(30);
          left: auto;
        }
      }

      .swiper-pagination {
        bottom: -7vw;
        z-index: 0;
        @media screen and (min-width:768px) {
          bottom: -2.38vw;
        }
      }

      .swiper-pagination-bullet {
        width: size-m(6.44);
        height: size-m(6.44);
        background: #d9d9d9;
        opacity: 1;
        margin: 0 size-m(6.445);
        @media screen and (min-width:768px) {
          width: size(10);
          height: size(10);
          margin: 0 size(10);
        }

        &.swiper-pagination-bullet-active {
          background: #D9374B;
        }
      }

      .swiper-button-next, .swiper-button-prev {
        width: size-m(29);
        height: size-m(29);
        top: auto;
        bottom: 0;
        margin: 0;
        background-size: contain;
        background-position: center center;
        z-index: 1;
        @media screen and (min-width:768px) {
          width: size(45);
          height: size(45);
        }

        &:after {
          display: none;
        }
      }

      .swiper-button-next {
        right: 50%;
        transform: translate(19vw, size-m(29 + 5));
        background-image: url(@/section/s3/arrow-right-circle.svg);
        @media screen and (min-width:768px) {
          transform: translate(5vw, size(45 + 10));
        }
      }

      .swiper-button-prev {
        left: 50%;
        transform: translate(-19vw, size-m(29 + 5));
        background-image: url(@/section/s3/arrow-left-circle.svg);
        @media screen and (min-width:768px) {
          transform: translate(-5vw, size(45 + 10));
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .slider2 {
    height: size-m(234 + 34);
    top: size-m(1156);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(706.93);
      height: size(442.33 + 55);
      top: size(1601);
      left: size(162);
    }

    .swiper {

      .swiper-button-next {
        transform: translate(30vw, size-m(29 + 5));
        @media screen and (min-width:768px) {
          transform: translate(9vw, size(45 + 10));
        }
      }

      .swiper-button-prev {
        transform: translate(-30vw, size-m(29 + 5));
        @media screen and (min-width:768px) {
          transform: translate(-9vw, size(45 + 10));
        }
      }

    }
  }

  .w-bg {
    width: 100%;
    height: size-m(932);
    top: size-m(516);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(1818);
      height: size(1314);
      top: size(794);
      left: size(51);
    }
  }

  .map {
    width: 100%;
    top: size-m(578);
    left: 0;
    @media screen and (min-width:768px) {
      top: size(874);
      left: size(311);
      width: size(1196);
    }
  }

  .text2 {
    top: size-m(828);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(1655);
      left: size(971);
      width: size(807);
    }
  }

  .tree1 {
    @media screen and (min-width:768px) {
      top: size(-180);
      left: size(13);
      width: size(182);
      transform: skewX(6deg);
      transform-origin: 50% 100%;
      animation: skew 6s linear infinite alternate;
    }
  }

  .tree2 {
    @media screen and (min-width:768px) {
      top: size(-87);
      left: size(202);
      width: size(101.22);
      transform: skewX(4deg);
      transform-origin: 50% 100%;
      animation: skew 6s linear infinite alternate;
    }
  }

  .tree3 {
    @media screen and (min-width:768px) {
      top: size(-37);
      left: size(253);
      width: size(189);
      transform: skewX(5deg);
      transform-origin: 50% 100%;
      animation: skew 6s linear infinite alternate;
    }
  }

  .style1 {
    @media screen and (min-width:768px) {
      top: size(-180);
      left: size(1399);
      width: size(323);
      z-index: 2;
    }
  }

  .style2 {
    top: size-m(461);
    left: size-m(2);
    width: size-m(113);
    z-index: 2;
    @media screen and (min-width:768px) {
      top: size(626.16);
      left: size(579.16);
      width: size(323.49);
    }
  }

  .style3 {
    top: size-m(814);
    left: size-m(259);
    width: size-m(108);
    @media screen and (min-width:768px) {
      top: size(1326);
      left: size(155);
      width: size(311);
    }
  }
  
  .style4 {
    @media screen and (min-width:768px) {
      top: size(1833);
      left: size(1534);
      width: size(344);
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
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>
