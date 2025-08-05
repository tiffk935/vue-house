<template>
  <section class="s4 user-n w-full relative z-[1]">
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/K4TOrB7at0Y?autoplay=1&mute=1&loop=1&playlist=K4TOrB7at0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  .video {
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