<template>
  <section class="s6 user-n w-full relative">
    <div class="title relative font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">Great accessibility</div>
      <div class="t2">台北奔馳動力學 <br class="md:hidden">雙捷隨時恭候差遣</div>
      <img class="style" src="@/section/s6/style.svg" />
    </div>

    <div class="slider-wrapper relative">
      <div class="slider">
        <swiper
          :loop="false"
          :navigation="false"
          :slidesPerView="1"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '768': {
              slidesPerView: 3,
            },
          }"
          :modules="modules"
          @init="init"
        >
          <swiper-slide>
            <div class="relative">
              <div class="img relative" @click="openModal(1)">
                <img class="img1" src="@/section/s6/slider/1.webp" />
              </div>
              <div class="content">
                <div class="t1">Dual Metro Lines</div>
                <div class="t2">向左走向右走 <br class="md:hidden">雙捷雙站任您選</div>
                <div class="t3">雙捷美好，無須多言「恆合中山」只需漫步500米即可達捷運車站，雙連站和民權西路站由你決定。市心悠遊從容自在，高效快速想去哪就去哪。</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <div class="img relative" @click="openModal(2)">
                <img class="img2" src="@/section/s6/slider/2.webp" />
              </div>
              <div class="content">
                <div class="t1">Prosperous city</div>
                <div class="t2">一線直指大安信義 <br class="md:hidden">共鳴國際金融時尚</div>
                <div class="t3">閃耀的捷運淡水信義線將中山區、大安區、中正區及信義區的富裕繁華一線連成。台北繁華最都心，都心璀璨遙相成趣。</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <div class="img relative" @click="openModal(3)">
                <img class="img3" src="@/section/s6/slider/3.webp" />
              </div>
              <div class="content">
                <div class="t1">Transportation hub</div>
                <div class="t2">兩站瞬移北車六鐵 <br class="md:hidden">全台場景輕鬆切換</div>
                <div class="t3">台北車站名列為全球第25大車站。搭乘淡水信義線，兩站即達台北車站六鐵共構，無論生活或是工作，為您提供輕鬆全台移動城市的便捷交通。</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      <div class="slide-prev md:hidden" @click="slidePrev">
        <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15.3071" r="14" transform="rotate(-180 15 15.3071)" fill="white" stroke="#4C6145" stroke-width="2"/>
          <path d="M21.2495 15.458L9.80718 15.458" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.1567 21.185L9.43557 15.4638L15.1567 9.74268" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="slide-next md:hidden" @click="slideNext">
        <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.3071" r="14" fill="white" stroke="#4C6145" stroke-width="2"/>
          <path d="M9.25049 15.1562H20.6928" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.3433 9.42925L21.0644 15.1504L15.3433 20.8716" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    
    <Transition>
      <div v-if="showModal">
        <div class="tk-modal">
          <div class="tk-close" @click="showModal = false"></div>
          <div class="img-wrapper">
            <img v-if="img === 1" src="@/section/s6/slider/1.webp" @load="onImgLoad($event)" />
            <img v-if="img === 2" src="@/section/s6/slider/2.webp" @load="onImgLoad($event)" />
            <img v-if="img === 3" src="@/section/s6/slider/3.webp" @load="onImgLoad($event)" />
          </div>
          <svg viewBox="0 0 181 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292893 7.04289C-0.0976311 7.43342 -0.0976311 8.06658 0.292893 8.45711L6.65685 14.8211C7.04738 15.2116 7.68054 15.2116 8.07107 14.8211C8.46159 14.4305 8.46159 13.7974 8.07107 13.4069L2.41421 7.75L8.07107 2.09315C8.46159 1.70262 8.46159 1.06946 8.07107 0.678932C7.68054 0.288408 7.04738 0.288408 6.65685 0.678932L0.292893 7.04289ZM180.707 8.45711C181.098 8.06658 181.098 7.43342 180.707 7.04289L174.343 0.678932C173.953 0.288408 173.319 0.288408 172.929 0.678932C172.538 1.06946 172.538 1.70262 172.929 2.09315L178.586 7.75L172.929 13.4069C172.538 13.7974 172.538 14.4305 172.929 14.8211C173.319 15.2116 173.953 15.2116 174.343 14.8211L180.707 8.45711ZM1 8.75H180V6.75H1V8.75Z" fill="black"/>
            <circle cx="90.5" cy="8.5" r="8.25" fill="black"/>
            <circle cx="90.5" cy="8.5" r="5.25" fill="#39C8F0"/>
          </svg>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  padding: size-m(67) 0 size-m(70) 0;
  background-image: url(@/section/s6/bg-m.webp);
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    padding: size(173) 0 size(339) 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity .2s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }

  .title {
    font-weight: 700;
    text-align: center;
    margin-bottom: size-m(30);
    @media (min-width: 768px) {
      margin-bottom: size(182);
    }
    
    .t1 {
      font-size: size-m(14);
      line-height: normal;
      margin-bottom: size-m(3);
      background: linear-gradient(90deg, rgba(249, 225, 176, 0.60) 0%, rgba(156, 199, 142, 0.60) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (min-width: 768px) {
        font-size: size(45);
        margin-bottom: size(20);
      }
    }
    
    .t2 {
      color: #D3AD62;
      font-size: size-m(24);
      line-height: 150%;
      letter-spacing: size-m(1.44);
      margin-bottom: size-m(14);
      @media (min-width: 768px) {
        font-size: size(45);
        letter-spacing: size(2.7);
        margin-bottom: size(29);
      }
    }
    
    .style {
      width: size-m(134);
      margin: 0 auto;
      @media (min-width: 768px) {
        width: size(299);
      }
    }
  }

  .slide-prev, .slide-next {
    position: absolute;
    top: size-m(200);
    width: size-m(30);
    cursor: pointer;
    z-index: 11;
  }

  .slide-prev {
    left: size-m(15);
  }

  .slide-next {
    right: size-m(15);
  }

  .slider {
    margin: 0 auto;
    width: size-m(310);
    position: relative;
    overflow: hidden;
    padding-bottom: size-m(5);
    @media (min-width: 768px) {
      width: size(1740);
      padding-bottom: size(5);
    }

    .swiper {
      overflow: visible;
      z-index: 0;

      .swiper-slide {
        @media (min-width: 768px) {
          padding: 0 size(20);
        }

        .img {
          cursor: pointer;

          &:after {
            @media (min-width: 768px) {
              content: '';
              position: absolute;
              top: size(513);
              left: size(397);
              width: size(52);
              height: size(52);
              background-image: url(@/section/s6/zoom.svg);
              background-size: contain;
              opacity: 0;
              transition: opacity .2s;
            }
          }

          &:hover:after {
            opacity: 1;
          }
        }

        img {
          width: 100%;
          height: size-m(401);
          object-fit: cover;
          border-top-left-radius: size-m(30);
          border-top-right-radius: size-m(30);
          @media (min-width: 768px) {
            height: size(700);
            border-top-left-radius: size(0);
            border-top-right-radius: size(0);

            &.img1 {
              border-top-left-radius: size(80);
            }

            &.img3 {
              border-top-right-radius: size(80);
            }
          }

          &.img1 {
            object-position: 19% center;
            @media (min-width: 768px) {
              object-position: 21% center;
            }
          }
        }

        .content {
          padding: size-m(27) size-m(25);
          background: #F7F7F7;
          box-shadow: size-m(0) size-m(4) size-m(4) size-m(0) rgba(0, 0, 0, 0.25);
          @media (min-width: 768px) {
            padding: size(48) size(55) size(92);
            box-shadow: size(0) size(4) size(4) size(0) rgba(0, 0, 0, 0.25);
          }
        }

        .t1 {
          color: rgba(211, 173, 98, 0.50);
          font-family: "Noto Serif TC";
          font-size: size-m(14);
          font-weight: 700;
          line-height: normal;
          margin-bottom: size-m(6.26);
          @media (min-width: 768px) {
            font-size: size(35);
            margin-bottom: size(48);
          }
        }

        .t2 {
          font-family: "Noto Serif TC";
          font-size: size-m(22);
          font-weight: 700;
          line-height: normal;
          background: linear-gradient(90deg, #123872 0%, #226AD8 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border-bottom: size-m(2) solid #123872;
          padding-bottom: size-m(14);
          margin-bottom: size-m(9);
          @media (min-width: 768px) {
            font-size: size(25);
            border-bottom: size(2) solid #123872;
            padding-bottom: size(16);
            margin-bottom: size(17);
          }
        }

        .t3 {
          color: #1F1F1F;
          text-align: justify;
          font-size: size-m(14);
          line-height: 170%;
          @media (min-width: 768px) {
            font-size: size(16);
          }
        }
      }
    }
  }






  .tk-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background: #F7F7F7;

    .tk-close {
      position: absolute;
      top: size-m(10);
      right: size-m(10);
      width: size-m(40);
      height: size-m(40);
      cursor: pointer;
      @media (min-width: 768px) {
        top: size(0);
        right: size(0);
        width: size(90);
        height: size(90);
      }
      
      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: size-m(25);
        height: size-m(1);
        background: #000;
        @media (min-width: 768px) {
          width: size(50);
          height: size(1);
        }
      }

      &:after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: size-m(180);
      pointer-events: none;
      transition: opacity .2s;
      @media (min-width: 768px) {
        display: none
      }
    }

    .img-wrapper {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: 100%;
      height: calc(100% - size-m(120));
      overflow-y: hidden;
      overflow-x: auto;
      @media (min-width: 768px) {
        height: calc(100% - size(220));
      }

      img {
        width: auto;
        max-width: none;
        height: 100%;
        display: block;
        @media (min-width: 768px) {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
const modules = ref([Autoplay, Navigation]);
const showModal = ref(false);
const img = ref();
const swiperRef = ref();

const init = swiper => {
  swiperRef.value = swiper;
}

const slidePrev = () => {
  if(swiperRef.value){
    swiperRef.value.slidePrev();
  }
}

const slideNext = () => {
  if(swiperRef.value){
    swiperRef.value.slideNext();
  }
}

function openModal(num) {
  showModal.value = true;
  img.value = num;
}

function onImgLoad(e) {
  const img = e.target;
  if (document.querySelector('.s6 .img-wrapper') && img) {
    let status = 0;
    let hideHand = false;
    document.querySelector('.s6 .tk-modal svg').style.opacity = 1;
    document.querySelector('.s6 .img-wrapper').scrollLeft = img.clientWidth * 0.4 - window.innerWidth/2;
    document.querySelector('.s6 .img-wrapper').addEventListener("scroll", () => {
      status++;
      if(status > 1 && !hideHand){
        document.querySelector('.s6 .img-wrapper').parentNode.querySelector('svg').style.opacity = 0;
        hideHand = true;
      }
    });
  }
}
</script>