<template>
  <section class="s4 user-n w-full relative">
    <div class="titles md:flex md:justify-between md:items-end">
      <div>
        <div class="t1 text-[#9F223D] font-['Noto_Serif_TC']" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">台南核心</div>
        <div class="t2 text-[#000] font-['Noto_Serif_TC']" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">「一小時不只是一小時，<br>它是一個裝滿香味、聲音、念頭和情緒的容器。」</div>
      </div>
      <div class="t3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">這句話正是台南市北區的縮影。便利東西向和緯路、南北向文賢路、即將完工的北外環道路等，一小時隨心穿梭台南裡裡外外。這裡有繁華的市井生活，也有高端的購物享受；有雙語學校、頂級醫療，有著最精彩的人生樣貌。</div>
    </div>
    <div class="sliders md:flex md:justify-between">
      <div class="slider" v-for="slider in sliders">
        <swiper
          :spaceBetween="10"
          :pagination="{
            clickable: true
          }"
          :loop="true"
          :navigation="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(slide, idx) in slider.imgs">
            <div class="relative">
              <img :src="getImg(`./s4/${slider.name}/${idx+1}.jpg`)" />
              <div class="info" :style="{color: slider.name == 'hospital' && idx === 1 ? '#000' : null}">{{slide}}</div>
            </div>
          </swiper-slide>
        </swiper>
        <img class="en" :src="getImg(`./s4/${slider.name}/en.svg`)" />
      </div>
    </div>
    <div class="t4 md:flex md:justify-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <span class="text-[#9F223D]">繁華商圈</span>鄰近台南唯一美式大賣場，傳統市場散步即達<br>
        <span class="text-[#9F223D]">日夜精彩</span>夜市小吃、精品百貨相伴，生活風格自由切換<br>
        <span class="text-[#9F223D]">精品學區</span>文元國小、文賢國中雙語教育，從小接軌國際<br>
        <span class="text-[#9F223D]">頂級醫療</span>成大、奇美醫療15分鐘直達，守護全家健康<br>
        <span class="text-[#9F223D]">交通網路</span>北外環完工在即，高速路網無縫接軌科技台南
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  padding: size-m(47) size-m(30);
  @media screen and (min-width:768px) {
    padding: size(175) 0 size(121) 0;
  }

  .titles {
    @media screen and (min-width:768px) {
      width: size(1287);
      margin: 0 auto;
    }
  }

  .t1 {
    font-size: size-m(30);
    font-weight: 700;
    letter-spacing: .05em;
    margin-bottom: size-m(8);
    @media screen and (min-width:768px) {
      font-size: size(48);
      letter-spacing: .03em;
      margin-bottom: size(29);
    }
  }

  .t2 {
    font-size: size-m(13);
    font-weight: 500;
    line-height: size-m(24);
    letter-spacing: .03em;
    margin-bottom: size-m(19);
    @media screen and (min-width:768px) {
      font-size: size(21);
      line-height: size(29);
      margin-bottom: 0;
    }
  }

  .t3 {
    text-align: justify;
    font-size: size-m(12);
    font-weight: 500;
    line-height: size-m(21);
    margin-bottom: size-m(38);
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: size(42);
      margin-bottom: 0;
      width: size(732);
    }
  }

  .sliders {
    margin-bottom: size-m(34);
    @media screen and (min-width:768px) {
      width: size(1693);
      margin: size(125) auto size(101) auto;
    }
  }

  .slider {
    position: relative;
    margin-bottom: size-m(20.3);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      width: size(549);
    }

    &:last-child {
      margin-bottom: 0;
    }

    .swiper, .swiper * {
      z-index: initial;
    }

    .swiper-slide {
      img {
        width: 100%;
        display: block;
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(40);
      height: size-m(40);
      background-size: size-m(13) auto;
      background-position: center;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        display: none;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 0;
      background-position: size-m(6) center;
      background-image: url('data:image/svg+xml,<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4652 23.0664C12.0053 23.5071 12.8025 23.4761 13.306 22.9726C13.8095 22.4691 13.8405 21.6719 13.3998 21.1318L13.306 21.0273L4.27867 11.9999L13.306 2.9726C13.843 2.43563 13.843 1.56426 13.306 1.02729C12.769 0.490317 11.8977 0.490317 11.3607 1.02729L1.3607 11.0273C0.82373 11.5643 0.82373 12.4356 1.3607 12.9726L11.3607 22.9726L11.4652 23.0664Z" fill="white"/></svg>');
    }

    .swiper-button-next {
      right: 0;
      background-position: right size-m(6) center;
      background-image: url('data:image/svg+xml,<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.53481 0.933647C1.99474 0.492892 1.1975 0.523888 0.693988 1.0274C0.19048 1.53091 0.159482 2.32815 0.600238 2.86822L0.693988 2.97271L9.72133 12.0001L0.693988 21.0274C0.157017 21.5644 0.157017 22.4357 0.693988 22.9727C1.23096 23.5097 2.10233 23.5097 2.6393 22.9727L12.6393 12.9727C12.9078 12.7042 13.042 12.3521 13.0418 12.0001C13.042 11.648 12.9078 11.2959 12.6393 11.0274L2.6393 1.0274L2.53481 0.933647Z" fill="white"/></svg>');
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        bottom: auto;
        top: size(27);
        left: auto;
        right: size(29 - 4);
        line-height: 1;
        margin: 0;
        display: flex;
        width: auto;

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0);
          border: size(1) solid #fff;
          width: size(11);
          height: size(11);
          margin: 0 size(4);
          opacity: 1;

          &.swiper-pagination-bullet-active {
            background: #fff;
          }
        }
      }
    }

    .info {
      position: absolute;
      top: size-m(5.5);
      left: size-m(11.5);
      color: #FFF;
      font-size: size-m(12);
      font-weight: 700;
      line-height: 170%;
      letter-spacing: .05em;
      @media screen and (min-width:768px) {
        top: size(15);
        left: size(17);
        font-size: size(15);
      }
    }

    .en {
      position: absolute;
      bottom: size-m(5.6);
      left: 50%;
      transform: translate(-50%, 0);
      width: auto;
      height: size-m(42);
      @media screen and (min-width:768px) {
        bottom: size(14);
        height: size(69);
      }
    }
  }

  .t4 {
    color: #000;
    font-size: size-m(12);
    font-weight: 500;
    line-height: 214%;
    letter-spacing: .05em;
    white-space: nowrap;
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: size(42);
      letter-spacing: 0;
    }

    span {
      margin-right: 1em;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
const images = import.meta.globEager('./s4/**/*.*');
const getImg = path => images[path]?.default || '';
const sliders = ref([
  {
    name: 'store',
    imgs: ['新光三越 台南新天地', '林百貨', '好市多']
  },
  {
    name: 'school',
    imgs: ['臺南第一高級中等學校', '文賢國民中學', '立人國民小學', '國立成功大學']
  },
  {
    name: 'hospital',
    imgs: ['成大醫院', '奇美醫院', '郭綜合醫院']
  },
]);
</script>