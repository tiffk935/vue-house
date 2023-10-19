<template>
  <article class="s6">
      <div class="txt">
        <img src="./s6/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0">
        <h2 class="title font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-delay="200" >公設旅程藝境 飯店美好之域</h2>
        </div>

    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="$isMobile()">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative items-center justify-center bg-[#fff];
  width: 100%;
  //height: size(800);
  padding:0;
  font-size:size(23);
  color: #3E3A39;
  .txt{
    text-align: center;
    padding: 7em 0 2.5em 0 ;
    .en{
      width:size(906);
    }
    .title{font-size:2.3em;letter-spacing:0.4em;font-weight: 700;text-indent: .4em;margin: 1.4em auto 1.3em auto;
    }
  }

 
  .slider {
    margin: 0;
    .slide-item {
    width: 100%;
  height: size(1076);
  margin-right:.7em;
      
    }
    .splide__pagination{
      left:0;
      bottom: 1em;
      justify-content:center;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  @apply flex-col;
    height: auto;
  font-size:size-m(13);
  .txt{
    padding: 3.2em 0 1em 0 ;
    .en{
      width:size-m(235);
    }
    .title{font-size:1.07em;margin: 1em auto 2.5em auto;

      }
  }

  .slider {

    .slide-item {
      height: size-m(414);
  margin-right:0;
      
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s6/1.jpg", import.meta.url).href,
    caption: "3D示意圖"
  },
  {
    img: new URL("./s6/2.jpg", import.meta.url).href,
    caption: "3D示意圖"
  },
  {
    img: new URL("./s6/3.jpg", import.meta.url).href,
    caption: "3D示意圖"
  },
  {
    img: new URL("./s6/4.jpg", import.meta.url).href,
    caption: "3D示意圖"
  },
  {
    img: new URL("./s6/5.jpg", import.meta.url).href,
    caption: "3D示意圖"
  },
]
</script>
