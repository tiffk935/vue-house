<template>
  <article class="s8">
      <div class="txt">
        <img src="./s8/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0">
        <h2 class="title font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-delay="200" >東奧主場館設計師 隈研吾
限量打造獨一無二精品藝術</h2>
        </div>
        <div class="img" ><img src="./s8/1.jpg"><div class="caption">3D示意圖</div>
        </div>
    
    <img src="./s8/copyright.svg" class="copyright">
<!-- 
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
 -->
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative items-center justify-center bg-[#fff];
  width: 100%;
  //height: size(800);
  padding:0;
  font-size:size(23);
  color: #3E3A39;
  .txt{
    text-align: center;
    padding: 7em 0 2.5em 0 ;width:size(890);
    margin: auto;
    .en{width: 100%;
    }
    .title{
    text-align: justify;font-size:2.3em;letter-spacing:0.4em;font-weight: 700;margin: 1.4em auto 1.3em auto;
    }
  }

 .img{position: relative;
  img{
  object-fit: cover;
    width: 100%;
  height: size(1191);}}
  .copyright{height: 1em; margin: 0 0 0 .5em;}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
  @apply flex-col;
    height: auto;
  font-size:size-m(13);
  text-align: center;
  .txt{
    padding: 3.2em 0 1em 0 ;width:size-m(235);
    .title{font-size:1.07em;margin: 1em auto 2.5em auto;

      }
  }
  .copyright{height:auto;width: 95%; margin: 0 auto;}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
/*
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
    img:  new URL("./s8/1.jpg", import.meta.url).href,
    caption: ""
  },
]
*/
</script>
