<template>
  <article class="s0" id="s0">
    <img class="s0-main" src="@/section/s0/B-2.jpg" />
    <img class="ball-1" src="@/section/balls/green.png" />
    <img class="ball-2" src="@/section/balls/yellow.png" />
    <img class="ball-3" src="@/section/balls/blue.png" />
    

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes 0 {
  50% {
    opacity: 0;
  }
}
@keyframes an {
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ball {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-30px);
  }
}

.s0 {
  @apply relative w-full;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: size(36);
  background-size: cover;

  .t0 {
    position: absolute;
    width: 100%;
    top: 0vw;
    left: 0;
    pointer-events: none;
    z-index: 10;
    opacity: .3;
  }

  .ball-1 {
    display: none; // 手機版隱藏
    position: absolute;

    @media (min-width: 768px) {
      display: block; // 平板、桌機顯示

      top: size(800);
      left: size(1500);
      width: size(475);
      transform: translateY(size(-160));
      align-self: flex-end;
      animation: ball 3.5s ease-in-out 0s infinite alternate;
    }
  }

  .ball-2 {
    display: none; // 手機版隱藏
    position: absolute;
    
    @media (min-width: 768px) {
      display: block; // 平板、桌機顯示

      top: size(1000);
      left: size(1400);
      width: size(200);
      transform: translateY(size(-160));
      align-self: flex-end;
      animation: ball 3.5s ease-in-out 0s infinite alternate-reverse;
    }
  }

  .ball-3 {
  display: none; // 手機版隱藏
  position: absolute;

  @media (min-width: 768px) {
    display: block; // 平板、桌機顯示

    top: size(80);
    left: size(80);
    width: size(200);
    transform: translateY(size(-800));
    align-self: flex-end;
    animation: ball 3.5s ease-in-out 0s infinite alternate;
  }
}

  .s0-main {
   position: relative;

  /* 手機版 */
  width: 100%;
  margin-top: size(0);
  object-fit: contain;

  @media (min-width: 768px) {
    width: size(1920);
    max-width: 48%;
    margin-top: size(40);
    animation: an 0.7s ease-out;
  }
}

}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>