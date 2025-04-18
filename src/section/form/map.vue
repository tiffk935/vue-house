<template>
  <div class="gmap relative z-10">
    <iframe :src="info.googleSrc" frameborder="0"></iframe>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.gmap {
  width: 100%;
  height: size-m(288);
  @media screen and (min-width:768px) {
    width: calc(100% - size(960));
    height: size(1080);
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>

<script setup>
import info from "@/info"
</script>