<template>
  <section class="s3 user-n w-full relative">
    <!-- <video class="block w-full" src="https://h35.banner.tw/yjp/pc.mov" playsinline autoplay muted loop></video>  -->
     <img src="./s3/video.jpg" alt="">
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  //filter: blur(20px);
  video,img{width: 100%;}
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
