<template>
  <section class="s2 w-full relative">
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/M2uKm6BKJV8?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
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