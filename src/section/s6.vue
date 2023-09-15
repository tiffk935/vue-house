<template>
<div class="s6 relative">
    <div class="s2v relative bg-[#000]">
      <div class="video" >
       <iframe data-aos="fade-up" src="https://www.youtube.com/embed/FuxwcyfcYJw?autoplay=1&amp;mute=1&amp;mute=1&amp;loop=1&amp;playlist=FuxwcyfcYJw" title="YouTube video player" frameborder="0"
    allowfullscreen></iframe>
      </div>
    </div>
</div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2v {overflow: hidden;}

iframe {
   width: 100%;
   height: 100%;
}

.video {
    width: 100%;
    height: size(1070);
    //margin: size(60) auto;
    background: url('@/section/s2/v.jpg') center;
    background-size: cover;
}

@media screen and (max-width:768px) {

  .s6{
    margin-top: sizem(60);
  }

    .video {
        width: 100%;
        margin: sizem(10) auto;


    }
}
</style>
<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import AOS from "aos";
const globals = getCurrentInstance().appContext.config.globalProperties;
</script>