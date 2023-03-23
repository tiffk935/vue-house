<template>
  <section class="s7 relative bg-[#EEEEEE]">
    <div class="bg absolute"></div>
    <div class="slider absolute" data-aos="fade-up" data-aos-delay="0">
      <swiper 
        :slidesPerView="'auto'"
        :pagination="false"
        :navigation="false"
        :modules="modules"
      >
        <swiper-slide>
          <div class="item">
            <div class="img"><img src="@/section/s7/1.jpg" /></div>
            <div class="t1">KODA ON 5TH AVE</div>
            <div class="t2">450 S Main St, Seattle, WA 98104 USA</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="img"><img src="@/section/s7/2.jpg" /></div>
            <div class="t1">陽明大苑</div>
            <div class="t2">台北市士林區</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="img"><img src="@/section/s7/3.jpg" /></div>
            <div class="t1">達麗101</div>
            <div class="t2">台北市信義區</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="img"><img src="@/section/s7/4.jpg" /></div>
            <div class="t1">世界灣</div>
            <div class="t2">新北市淡水區</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="img"><img src="@/section/s7/5.jpg" /></div>
            <div class="t1">達麗冶翠</div>
            <div class="t2">台中市北區</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="text absolute md:flex md:justify-between md:items-start">
      <div class="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">全球視野<br>世界建築</div>
      <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <span class="subtitle">達麗建設（6177），股票上市優質團隊</span><br><br>
        從台灣到西雅圖，從建設到營建、商場，早已邁向全球化、國際化，每一座達麗建築都以與世界各大城市新建築比肩的標準檢視，跨國際推案、跨國團隊合作，不只成就達麗建築成為世界級建築，國際視野與世界觀更讓達麗跳脫單一建築個案思維，從環境與城市發展宏觀角度定位建築。
      </p>
    </div>
  </section>

  <div class="circle-wrapper">
    <div class="circle"></div>  
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s7 {
  width: 100%;
  height: size-m(763);
  @media screen and (min-width:768px) {
    height: size(1220);
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/section/s7/bg-m.jpg);
    background-size: cover;
    @media screen and (min-width:768px) {
      left: size(91);
      width: size(1829);
      height: 100%;
      background-image: url(@/section/s7/bg.jpg);
    }
  }

  .slider {
    width: 100%;
    top: size-m(389);
    left: 0;
    padding: 0 size-m(58);
    @media screen and (min-width:768px) {
      width: size(1920 - 91);
      top: size(444);
      left: size(91);
      padding: 0 size(200);
      overflow: hidden;
    }

    .swiper {
      overflow: visible;
    }

    .swiper-slide {
      width: size-m(253 + 5);
      padding-right: size-m(5);
      transition: all 1s;
      @media screen and (min-width:768px) {
        width: size(496 + 10);
        padding-right: size(10);
      }

      .item {
        width: size-m(253);
        background: #fff;
        padding: size-m(5) size-m(6) size-m(16.24) size-m(6);
        cursor: grab;
        @media screen and (min-width:768px) {
          width: size(496);
          padding: size(8) size(11) size(44) size(11);
        }

        &:hover img {
          filter: grayscale(0.1);
          transform: scale(1.3);
        transition: filter .3s,transform 8s;
        }
      }
      .img{overflow: hidden;
        margin-bottom: size-m(13.87);
        @media screen and (min-width:768px) {
        margin-bottom: size(21);
        }
      }
      img {
        width: 100%;
        margin-bottom:0;
       // margin-bottom: size-m(13.87);
        filter: grayscale(1);
        transition: filter 1s,transform 3s;
      }

      .t1 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size-m(14);
        line-height: size-m(20);
        padding: 0 size-m(14);
        @media screen and (min-width:768px) {
          font-size: size(30);
          line-height: size(43);
          padding: 0 size(38);
        }
      }

      .t2 {
        font-weight: 400;
        font-size: size-m(12);
        line-height: size-m(17);
        padding: 0 size-m(14);
        color: #4D4D4D;
        @media screen and (min-width:768px) {
          font-size: size(20);
          line-height: size(29);
          padding: 0 size(38);
        }
      }
    }
    .swiper-slide-prev{opacity: 0.3;filter: blur(1px);}
    .swiper-slide-active img {
      filter: grayscale(0);
      @media screen and (min-width:768px) {
        filter: grayscale(1);
      }
    }
  }

  .text {
    top: size-m(35);
    left: 0;
    padding: 0 size-m(58);
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    color: #fff;
    @media screen and (min-width:768px) {
      top: size(91);
      left: size(293);
      width: size(1357);
      padding: 0 size(0);
      font-size: size(22);
      line-height: size(34);
    }

    .title {
      font-weight: 700;
      font-size: size-m(43);
      line-height: size-m(62);
      letter-spacing: 0.06em;
      color: #E3B15F;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(36);
      @media screen and (min-width:768px) {
        font-size: size(78);
        line-height: size(98);
        margin-bottom: size(0);
      }
    }

    p {
      @media screen and (min-width:768px) {
        width: size(732);
        
      }

      .subtitle{
          font-size: size-m(14);
        @media screen and (min-width:768px) {
          font-size: size(28); 
        }
      }
    }
  }
}

.circle-wrapper {
  position: absolute;
}

.circle {
  position: absolute;
  transform: translate(-50%, -50%);
  border: 0px solid #d7d7d7;
  width: 0px;
  height: 0px;
  border-radius: 100%;
  opacity: 0;
  pointer-events: none;
  z-index: 99;
  transition: all ease .5s;

  &.active {
    border: 1px solid #e3e3e3;
    width: 93px;
    height: 93px;
    opacity: 0.8;

    &:before {
      content: "";
      position: absolute;
      top: 49%;
      right: 27%;
      width: 6px;
      height: 6px;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      -webkit-transform: rotate(45deg) translateY(-50%);
      transform: rotate(45deg) translateY(-50%);
      opacity: 0.8;
    }

    &:after {
      content: "";
      position: absolute;
      top: 44.6%;
      left: 28%;
      width: 6px;
      height: 6px;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      -webkit-transform: rotate(-135deg) translateY(-50%);
      transform: rotate(-135deg) translateY(-50%);
      opacity: 0.8;
    }
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const modules = ref([Pagination, Navigation, Autoplay]);

onMounted(() => {
  nextTick(() => {
    const slides = document.querySelectorAll('.s7 .slider .swiper-slide .item');
    const circle = document.querySelector('.circle');
    slides.forEach(slide => {
      slide.addEventListener('mouseenter', function(){
        circle.classList.add('active');
      });
      slide.addEventListener('mouseleave', function(){
        circle.classList.remove('active');
      });
      slide.addEventListener('mousemove', function(e){
        gsap.to('.circle-wrapper', {
          left: e.pageX,
          top: e.pageY,
          duration: 0.3,
          ease: "none"
        });
      });
    });
  });
});
</script>
