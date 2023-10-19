<template>
  <article class="s3">
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="$isMobile()">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img1">
          <img :src="img.img2">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s3 {
  @apply relative items-center justify-center bg-[#fff];
  width: 100%;
  //height: size(800);
  padding:0;
  font-size:size(20);

 
  .slider {
    margin: 0;
    .slide-item {
    width: 100%;
  height: size(1080);
  margin-right:.7em;
  img{width: 100%;}
    }
    .splide__pagination{
      left:0;
      bottom: 1em;
      justify-content:center;
    }
    .arrows{
      top: 93%;
      justify-content: center;
      height:3em;
      gap: 3em;
      
    .prev,
    .next{
    &:hover{}
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
    height: auto;
  font-size:size-m(13);

  .slider {

    .caption {
    font-size:size-m(12);
    right:size-m(5);
    bottom:size-m(5);
    }
    .slide-item {
      height: size-m(667);
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
  autoplay: false,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img1: globals.$isMobile() ? new URL("./s3/1bgm.jpg", import.meta.url).href : new URL("./s3/1bg.jpg", import.meta.url).href,
    img2: globals.$isMobile() ? new URL("./s3/1m.png", import.meta.url).href : new URL("./s3/1.png", import.meta.url).href,
    caption: ""
  },
  {
    img1: globals.$isMobile() ? new URL("./s3/2bgm.jpg", import.meta.url).href : new URL("./s3/2bg.jpg", import.meta.url).href,
    img2: globals.$isMobile() ? new URL("./s3/2m.png", import.meta.url).href : new URL("./s3/2.png", import.meta.url).href,
    caption: ""
  },
  {
    img1: globals.$isMobile() ? new URL("./s3/3bgm.jpg", import.meta.url).href : new URL("./s3/3bg.jpg", import.meta.url).href,
    img2: globals.$isMobile() ? new URL("./s3/3m.png", import.meta.url).href : new URL("./s3/3.png", import.meta.url).href,
    caption: ""
  },
]
</script>
