<template>
  <section class="s4 relative md:flex">
    <div class="slider">
      <swiper 
        :spaceBetween="10"
        :navigation="true" 
        :pagination="{
          clickable: true
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules" 
        class="mySwiper"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/1.jpg" alt="双和心">
            <div class="name absolute">中山路主幹道</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/2.jpg" alt="双和心">
            <div class="name absolute">捷運中和站</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/3.jpg" alt="双和心">
            <div class="name absolute">中和站TOD情境示意</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/4.jpg" alt="双和心">
            <div class="name absolute">捷運局萬大線列車規劃模擬</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/5.jpg" alt="双和心">
            <div class="name absolute">3分鐘南山威力廣場</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/6.jpg" alt="双和心">
            <div class="name absolute">6分鐘比漾廣場</div>
          </div>
        </swiper-slide>
        <img class="cold absolute" src="@/section/s4/cold.svg" alt="双和心">
      </swiper>
    </div>

    <div data-aos="fade-in" data-aos-delay="100" class="content">
      <div class="title text-[#DD1373] text-center">世界軌道經濟顯學<br>三線交會價值鍍金</div>
      <div class="subtitle text-black">萬大線2026即將通車，中和將高達三線交會</div>
      <div class="text text-black">
        双和心位在中永和中點，擁中和新蘆、環狀線雙捷交會，未來加入萬大線，完全對應地產大亨川普致富法則「Location,Location,Location!」
      </div>
      <div class="text text-black">
        捷運決定當代城市發展、經濟版圖、房價漲跌，<span class="bold">捷運宅即趨勢宅</span>，雙線交集雙倍增值，周邊眾多商圈、公園水岸，三線交會的未來發展真實可期
      </div>
      <div class="text text-black">
        新北更推動捷運BOT，中和站已徵得投資人，將規劃商務辦公高樓，總開發效益<span class="bold">高達28.3億元</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {

  img{
    width: 100%;
  }
  @media screen and (min-width:768px) {
    padding: size(187) 0;
    justify-content: space-between;
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
      width: size(1067);
      margin: 0;
      padding-bottom: 2.4vw;
    }
  }

  .swiper-button-next, .swiper-button-prev {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: size-m(12.8 * 1.5);
    height: size-m(22.86 * 1.5);
    top: 36vw;
    @media screen and (min-width:768px) {
      display: none;
    }

    &:after {
      display: none;
    }
  }

  .swiper-button-next {
    background-image: url('@/section/s4/arrow-right.svg');
    right: size-m(7);
  }

  .swiper-button-prev {
    background-image: url('@/section/s4/arrow-left.svg');
    left: size-m(7);
  }

  .swiper-pagination {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      bottom: -2.4vw;
      text-align: right;
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
    border: 1px solid #000;
    width: size(15);
    height: size(15);

    &.swiper-pagination-bullet-active {
      background: #DD1373;
      border-color: #DD1373;
    }
  }

  .name {
    font-weight: 700;
    font-size: size-m(12);
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    right: size-m(10);
    bottom: size-m(5);
    color: #fff;
    @media screen and (min-width:768px) {
      font-size: size(15);
      right: size(20);
      bottom: size(10);
    }
  }

  .cold {
    width: size-m(59);
    top: size-m(2);
    left: size-m(3);
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(158);
      top: size(0.47);
      left: size(0.47);
    }
  }

  .content {
    padding: size-m(20) size-m(32) size-m(30) size-m(32);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(507+180);
      padding: 0 size(180) 0 0;
    }
  }

  .title {
    font-size: size-m(25);
    line-height: size-m(35);
    font-weight: 900;
    margin-bottom: size-m(22);
    @media screen and (min-width:768px) {
      font-size: size(63);
      line-height: size(75);
      margin-bottom: size(42);
    }
  }

  .subtitle {
    font-size: size-m(20);
    line-height: size-m(28);
    font-weight: 700;
    margin-bottom: size-m(26);
    @media screen and (min-width:768px) {
      font-size: size(24);
      line-height: size(35);
      margin-bottom: size(53);
    }
  }

  .text {
    font-size: size-m(14);
    line-height: size-m(24);
    font-weight: 300;
    margin-top: size-m(20);
      margin-bottom: size-m(20);
    
      .bold{
        font-weight: 700;
      }

    @media screen and (min-width:768px) {
      font-size: size(23);
      line-height: size(36);
      letter-spacing: size(1);
      margin-top: size(40);
      margin-bottom: size(40);

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
