<template>
  <article class="s7">
        <img src="./s7/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0">
        <div class="lists">
<div class="list" data-aos="zoom-in" data-aos-delay="200">
  <img src="./s7/1.jpg" class="a1">
  <h2 class="title font-['Noto_Serif_TC']" >建築團隊 大磊聯合建築師事務所</h2>
</div> 
<div class="list" data-aos="zoom-in" data-aos-delay="400">
  <img src="./s7/2.jpg" class="a2">
  <h2 class="title font-['Noto_Serif_TC']" >
公設設計 常季設計-張立人</h2>
</div> </div>
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

.s7 {
  @apply relative items-center justify-center bg-[#9E8077];
  width: 100%;
  //height: size(800);
  padding:7em 0 4em 0;
  font-size:size(23);
  color: #fff;
text-align: center;
    .en{width:size(575);margin:0 auto 4em;
    }
    .title{font-size:1.7em;letter-spacing:0.06em;font-weight: 700;margin: .5em auto 1.3em auto;
    }
    .lists{
display: flex;justify-content:space-between;
gap: .5em;

    }
    .a1{width:size(1143);}
    .a2{width:size(761);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  //@apply flex-col;
    height: auto;
  font-size:size-m(13);
    .en{width:size-m(200);
    }
    .title{font-size:1.3em;
    }
    .lists{justify-content:space-between; flex-direction:column;gap: 1em;

    }
    .a1{width:size-m(340);}
    .a2{width:size-m(340);}

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
    img:  new URL("./s7/1.jpg", import.meta.url).href,
    caption: ""
  },
]
*/
</script>
