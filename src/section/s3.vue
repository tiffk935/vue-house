<template>
  <section class="s3 user-n w-full relative">
    <video class="block w-full" src="https://h35.banner.tw/yjp/pc.mov" playsinline autoplay muted loop></video>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<script setup>
</script>
