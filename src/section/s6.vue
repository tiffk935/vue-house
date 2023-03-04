<template>
  <div class="s6 relative">
    <img loading="lazy" class="play" src="@/section/s6/play.webp" alt="" srcset="" @click="videoOpened = !videoOpened">
    <div class="player" v-bind:class="{ 'open': videoOpened }">
      <div class="video-box aspect-video">
        <iframe src="https://www.youtube.com/embed/-EEVOmxNSaM" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div class="close shadow-xl font-['noto_sans_tc'] font-bold" @click="videoOpened = !videoOpened">
        返回
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: size(1305);
  height: size(733);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/section/s6/videobg.jpg');
  background-size: cover;
  margin: size(83) auto;

  .play {
    width: size(142);
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }

  .player {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
    backdrop-filter: blur(10px);
    gap: size(50);
    transition: all .5s;
    transform: translateY(200%);
    background-color: rgba(0,0,0,.8);

    &.open {
      transform: translateY(0%);
    }

    .video-box {
      height: 80%;
      background-color: #000;

      iframe {
        width: 100%;
        height: 100%;
      }
    }

    .close {
      background-color: #fff;
      padding: size(10) size(25);
      font-size: size(24);
      border-radius: 9999px;
      transition: all .2s;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }
}

@media screen and (max-width:768px) {
  .s6 {
    width: 100%;
    height: size-m(210.63);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/section/s6/videobg.jpg');
    margin: size-m(72) 0;

    .play {
      width: size-m(84);
    }

    .player {
      backdrop-filter: blur(15px);
      gap: size-m(50);

      .video-box {
        height: auto;
        width: 100%;
      }

      .close {
        background-color: #fff;
        padding: size-m(10) size-m(25);
        font-size: size-m(15);
        border-radius: 9999px;
        transition: all .2s;
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
const videoOpened = ref(false);
</script>