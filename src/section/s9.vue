<template>
  <section class="s9 bg-[#e4e3db] relative">
    <img class="circle absolute" src="@/section/s9/circle.svg" />
    <img class="circle-num absolute" data-aos="fade-in" data-aos-delay="0" src="@/section/s9/circle-num.svg" />
    <img class="title absolute md:hidden" src="@/section/s9/title-m.svg" />
    <img class="title absolute hidden md:block" src="@/section/s9/title.svg" />
    <div class="content absolute" data-aos="fade-in" data-aos-delay="0">四棟量體、二塊基地、一片連結你我的心田，開放式的穿透設計，以微風與陽光為養分，讓日常與綠意相遇，是如此不經意。以友善共融、自由曲徑、光合生態概念，勾勒一座未來社區，豐藏難得遼闊領地，迎接仁德美好新未來。</div>
    <div class="slider absolute md:hidden">
      <swiper 
        :allowTouchMove="true"
        slidesPerView="auto"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
        }"
        @swiper="setSwiperRef"
        :modules="modules"
      >
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/1.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/1-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/2.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/2-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/3.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/3-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/4.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/4-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/5.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/5-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/6.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/6-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full relative">
            <img class="photo w-full hidden md:block" src="@/section/s9/7.png" />
            <img class="photo w-full md:hidden" src="@/section/s9/7-m.jpg" />
            <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="wline md:hidden"></div>

      <div class="slideToPrev absolute" @click="slideToPrev">
        <img class="w-full hidden md:block" src="@/section/s9/prev.svg" />
      </div>
      <div class="slideToNext absolute" @click="slideToNext">
        <img class="w-full hidden md:block" src="@/section/s9/next.svg" />
      </div>
    </div>
    <div class="slider2 absolute hidden md:block">
      <div class="slider2-prev">
        <transition> 
          <div v-if="(currImg-1) == 1" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/1.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg-1) == 2" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/2.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg-1) == 3" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/3.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg-1) == 4" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/4.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg-1) == 5" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/5.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg-1) == 6" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/6.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg-1) == 7 || currImg == 1" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/7.png" />
          </div>
        </transition>
      </div>
      <div class="slider2-active">
        <transition>
          <div v-if="currImg == 1" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/1.png" />
          </div>
        </transition>
        <transition>
          <div v-if="currImg == 2" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/2.png" />
          </div>
        </transition>
        <transition>
          <div v-if="currImg == 3" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/3.png" />
          </div>
        </transition>
        <transition>
          <div v-if="currImg == 4" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/4.png" />
          </div>
        </transition>
        <transition>
          <div v-if="currImg == 5" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/5.png" />
          </div>
        </transition>
        <transition>
          <div v-if="currImg == 6" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/6.png" />
          </div>
        </transition>
        <transition>
          <div v-if="currImg == 7" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/7.png" />
          </div>
        </transition>
        <div class="text">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
      </div>
      <div class="slider2-next">
        <transition>  
          <div v-if="(currImg+1) == 1 || currImg == 7" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/1.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg+1) == 2" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/2.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg+1) == 3" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/3.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg+1) == 4" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/4.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg+1) == 5" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/5.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg+1) == 6" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/6.png" />
          </div>
        </transition>
        <transition>  
          <div v-if="(currImg+1) == 7" class="item w-full h-full absolute t-0 l-0">
            <img class="photo w-full hidden md:block" src="@/section/s9/7.png" />
          </div>
        </transition>
      </div>
      <div class="slideToPrev absolute" @click="slideToPrev2">
        <img class="w-full hidden md:block" src="@/section/s9/prev.svg" />
      </div>
      <div class="slideToNext absolute" @click="slideToNext2">
        <img class="w-full hidden md:block" src="@/section/s9/next.svg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s9 {
  width: 100%;
  height: size-m(1000);
  @media screen and (min-width:768px) {
    height: size(1375);
  }

  .v-enter-active, .v-leave-active {
    transition: opacity .6s;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1;
  }

  .circle {
    top: size-m(36);
    left: size-m(95);
    width: size-m(184);
    animation: circle 8s infinite linear;
    transform-origin: center center;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(54);
      left: size(1469);
      width: size(291.8);
    }
  }

  .circle-num {
    top: size-m(98);
    left: size-m(149);
    width: size-m(77.58);
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(153);
      left: size(1558);
      width: size(113.48);
    }
  }

  .title {
    top: size-m(254);
    left: size-m(69);
    width: size-m(235.38);
    @media screen and (min-width:768px) {
      top: size(96);
      left: size(182);
      width: size(1046.43);
    }
  }

  .content {
    top: size-m(371);
    left: size-m(40);
    width: size-m(295);
    font-size: size-m(12);
    line-height: size-m(27);
    text-align: justify;
    letter-spacing: 0em;
    @media screen and (min-width:768px) {
      top: size(225);
      left: size(182);
      width: size(1148);
      font-size: size(19);
      line-height: size(48);
      text-align: left;
    }
  }

  .slider {
    width: 100%;
    height: size-m(460);
    top: size-m(540);
    left: 0;
    @media screen and (min-width:768px) {
      height: size(822);
      top: size(419);
    }

    .swiper {
      height: 100%;
      @media screen and (min-width:768px) {
        width: 100%;
      }

      .photo{
       transition: all .4s;

      @media screen and (min-width:768px) {
       filter: grayscale(1) sepia(.4);
       
       &:hover {
        filter: none;
        }
      }

      }

      .text {
        width: 100%;
        position: absolute;
        top: size-m(8);
        left: 0;
        padding: 0 size-m(30);
        font-size: size-m(10);
        line-height: size-m(14);
        text-align: center;
        letter-spacing: 0.16em;
        color: #fff;
        @media screen and (min-width:768px) {
          top: size(18);
          padding: 0;
          font-size: size(14);
          line-height: size(20);
        }
      }

      .swiper-slide {
        width: 100%;
        @media screen and (min-width:768px) {
          width: size(1219);
          display: flex;
          align-items: flex-end;
        }

        .item {
          @media screen and (min-width:768px) {
            transition: all .4s;
            width: size(454 + 80);
            height: size(306);
            opacity: 0.2;
            transform: translateY(size(-86));
            padding: 0 size(40);
          }

          .text {
            @media screen and (min-width:768px) {
              opacity: 0;
            }
          }
        }

        &.swiper-slide-active {
          @media screen and (min-width:768px) {
            .item {
              width: size(1219 + 80);
              height: size(822);
              opacity: 1;
              transform: translateY(0);

              .text {
                opacity: 1;
              }
              
            }
          }
        }
      }
    }
    
    .slideToPrev, .slideToNext {
      cursor: pointer;
      z-index: 10;
      @media screen and (min-width:768px) {
        width: 16vw;
        height: size(306);
        top: 22.4vw;
      }
      
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: size(42);
      }
    }

    .slideToPrev {
      left: 0;
    }

    .slideToNext {
      right: 0;
    }
  }

  .slider2 {
    width: 100%;
    top: size(419);
    left: 0;

    .slider2-prev {
      position: absolute;
      width: size(454);
      height: size(306);
      top: size(430);
      left: size(-183);
      // border-radius: size(35);
      // background: #b5b3a8;
    }

    .slider2-active {
      position: absolute;
      width: size(1219);
      height: size(822);
      top: size(0);
      left: size(351);
      // border-radius: size(35);
      // background: #b5b3a8;

      .photo{
        filter: none;  
        }
    }

    .slider2-next {
      position: absolute;
      width: size(454);
      height: size(306);
      top: size(430);
      left: size(1650);
      // border-radius: size(35);
      // background: #b5b3a8;
    }

    .slideToPrev, .slideToNext {
      cursor: pointer;
      z-index: 10;
      @media screen and (min-width:768px) {
        width: 13vw;
        height: size(306);
        top: 22.4vw;
      }
      
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: size(42);
      }
    }

    .slideToPrev {
      left: 0;
    }

    .slideToNext {
      right: 0;
    }

    .photo{ 
      
      opacity: 0.2;
      transition: all .4s;

      
      &:hover {
        filter: none;
        opacity: 1;
      }

       @media screen and (min-width:768px) {
        filter: grayscale(1) sepia(.4);


        &:hover {
            filter: none;
            opacity: 1;
        }
       }
    }

    .text {
      width: 100%;
      position: absolute;
      top: size-m(8);
      left: 0;
      padding: 0 size-m(30);
      font-size: size-m(10);
      line-height: size-m(14);
      text-align: center;
      letter-spacing: 0.16em;
      color: #fff;
      @media screen and (min-width:768px) {
        top: size(18);
        padding: 0;
        font-size: size(14);
        line-height: size(20);
      }
    }

    .slider2-active .photo {
      opacity: 1;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";
import { gsap } from "gsap";
const modules = ref([Autoplay]);
const swiperRef = ref(null);
const currImg = ref(7);
const interval = ref(null);

const setSwiperRef = (swiper) => {
  swiperRef.value = swiper;
};
const slideToPrev = () => {
  swiperRef.value.slidePrev();
};
const slideToNext = () => {
  swiperRef.value.slideNext();
};

interval.value = setInterval(() => {
  if(currImg.value == 7) {
    currImg.value = 1;
  }else {
    currImg.value++;
  }
}, 4500);

const slideToPrev2 = () => {
  if(currImg.value == 1) {
    currImg.value = 7;
  }else {
    currImg.value--;
  }

  clearInterval(interval.value);
  interval.value = setInterval(() => {
    slideToNext2();
  }, 4500);
};
const slideToNext2 = () => {
  if(currImg.value == 7) {
    currImg.value = 1;
  }else {
    currImg.value++;
  }

  clearInterval(interval.value);
  interval.value = setInterval(() => {
    slideToNext2();
  }, 4500);
};
</script>