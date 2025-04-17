<template>
  <section class="s3 user-n w-full relative">
    <div class="vid">
      <video src="https://h35.banner.tw/yjp/pc.mov" playsinline autoplay muted loop></video>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  .vid {
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    position: relative;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<script setup>
</script>
