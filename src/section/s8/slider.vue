<template>
  <div class="slide-box">
    <Splide
      ref="splide"
      class="slide"
      :options="{
        arrows: false,
        autoplay: true,
        drag: true,
        pagination: false,
        easing: 'linear',
        direction: 'ltr',
        speed: isMobile ? 4000 : 5000, // 調整跑馬燈速度請改前面值，speed/interval須一致
        interval: isMobile ? 4000 : 5000,  // 調整跑馬燈速度請改前面值，speed/interval須一致
        gap: 0,
        type: 'loop',
        snap: false,
        perPage: isMobile ? 1 : 3,
        perMove: 1,
        autoWidth: true,
      }"
    >
      <SplideSlide
        class="slide-item"
        :key="i"
        v-for="i in imgs"
      >
        <img :src="i.img" />
        <!-- <div class="caption" :class="{ rt: i.rt }">
          {{ i.caption }}
        </div> -->
        <div class="caption" v-html="i.caption"></div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.slide-box {
  @apply flex flex-col-reverse relative;
  gap: size(44);
  .slide {
    @apply relative;
    .slide-item {
      @apply relative;
      background-size: cover;
      transform-style: preserve-3d;
    }
  }
}

@media screen and (max-width: 767px) {
  .slide-box {
    @apply flex-col-reverse items-start justify-end;
    gap: sizem(25);
    .slide {
      .splide__pagination {
        @apply hidden;
      }
      &::after {
        @apply hidden;
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img: new URL("1.jpg", import.meta.url).href,
    caption: '走出家門就是兒二公園，<br>獨享永久棟距、永恆視野，天天森呼吸。',
  },
  {
    img: new URL("2.jpg", import.meta.url).href,
    caption: '鄰近燕巢國小國中，孩子輕鬆上下學，<br>父母不必趕時間接送。',
  },
  {
    img: new URL("3.jpg", import.meta.url).href,
    caption: '<div><span>位於燕巢市心行政特區</span><br>近戶政事務所、郵局、農會、生鮮超市、<br>圖書館、警察局、全聯、全家、7-11</div>',
  },
  {
    img: new URL("4.jpg", import.meta.url).href,
    caption: '匯集國1、國3、國10三大交流道，<br>約20分鐘直達左營高鐵。',
  },
  {
    img: new URL("5.jpg", import.meta.url).href,
    caption: '阿公店風景區、水庫自行車道，<br>度假休閒近在咫尺。',
  },
  {
    img: new URL("6.jpg", import.meta.url).href,
    caption: '約14-20分鐘暢遊三大百貨商圈<br>義大世界、岡山樂購廣場、左營新光三越',
    rt: true,
  },
]
</script>
