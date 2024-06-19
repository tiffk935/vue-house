<template>
  <section class="s1 user-n w-full relative">
    <div class="vid">
      <video src="https://h35.banner.tw/yjp/pc.mov" autoplay muted loop></video>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

[data-aos=line] {
  transform: scaleY(0);
  transform-origin: top;

  &.aos-animate {
    transform: scaleY(1);
  }
}

[data-aos=line-left] {
  transform: scaleX(0);
  transform-origin: left;

  &.aos-animate {
    transform: scaleX(1);
  }
}

[data-aos=line-right] {
  transform: scaleX(0);
  transform-origin: right;

  &.aos-animate {
    transform: scaleX(1);
  }
}

.s1 {
  width: 100%;
  height: 100vh;
  background: #004E2B;

  .vid {
    width: 100%;
    height: 100%;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<script setup>
// import { inject } from 'vue';
// const smoothScroll = inject('smoothScroll')
// const scrollTo = (el) => {
//   smoothScroll({
//     scrollTo: document.querySelector(el)
//   })
// }
</script>
