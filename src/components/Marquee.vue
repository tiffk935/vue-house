<template>
  <div class="marquee-wrapper">
    <div class="marquee marquee1">
      <img v-for="num in 4" src="@/assets/home/about/pic1.webp" />
    </div>
    <div class="marquee marquee2">
      <img v-for="num in 4" src="@/assets/home/about/pic2.webp" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

.marquee-wrapper {
  .marquee {
    height: func.size-m(118.5);
    background: #ddd;
    display: flex;
    overflow: hidden;
    @media screen and (min-width:768px) {
      height: func.size(229);
    }

    img {
      width: auto;
      height: 100%;
      /* animation: marquee 30s linear infinite; */
    }


    /* &.marquee2 {
      img {
        animation-delay: -2s;
      }
    } */
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const marquee1TL = gsap.timeline({ repeat: -1, paused: true });
  marquee1TL.to('.marquee1 img', { xPercent: -100, duration: 30, ease: 'none' });
  const marquee2TL = gsap.timeline({ repeat: -1, paused: true });
  marquee2TL.to('.marquee2 img', { xPercent: -100, duration: 30, ease: 'none' });
  marquee2TL.seek(1.2);
  marquee1TL.play();
  marquee2TL.play();
});
</script>