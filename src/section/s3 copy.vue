<template>
  <section class="s3 user-n w-full relative">
    <!-- <video class="block w-full" src="https://h35.banner.tw/yjp/pc.mov" playsinline autoplay muted loop></video>  -->
     <div class="video-container">
      <iframe src="https://www.youtube.com/embed/MUnomlIlGDs?autoplay=1&mute=1&loop=1&playlist=MUnomlIlGDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
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

  .video-container {
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    position: relative;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script setup>
</script>
