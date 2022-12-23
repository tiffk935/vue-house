<template>
  <div class="s3 relative">
    <img class="play" src="@/section/s3/play.png" alt="" srcset="" @click="videoOpened = !videoOpened">
    <div class="player" v-bind:class="{ 'open': videoOpened }">
      <div class="video-box aspect-video">
            <iframe src="https://www.youtube.com/embed/L52pIFHsebY" title="YouTube video player" frameborder="0" 
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
.s3 {
  width: 100%;
  height: size(1080);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/section/s3/fake.png');
  background-size: cover;
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
  .s3 {
      width: 100%;
      height: size-m(667);
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('@/section/s3/fake.png');
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
import { ref } from "vue"
// import { ref, getCurrentInstance } from "vue"
// import AOS from 'aos';
// const globals = getCurrentInstance().appContext.config.globalProperties;
// const splide = ref();
// const currentIdx = ref(0)
const videoOpened = ref(false)
// const move = (newIdx, prevIdx, destIdx) => {
//   currentIdx.value = prevIdx
//   AOS.refresh();
// }
// const imgs = ref([
//   {
//       img: globals.$isMobile() ? new URL("../section/s3/1_m.jpg", import.meta.url).href : new URL("../section/s3/1.jpg", import.meta.url).href,
//       caption: '富貴森林公園'
//   },
//   {
//       img: globals.$isMobile() ? new URL("../section/s3/2_m.jpg", import.meta.url).href : new URL("../section/s3/2.jpg", import.meta.url).href,
//       caption: '富貴森林公園'
//   },
//   {
//       img: globals.$isMobile() ? new URL("../section/s3/3_m.jpg", import.meta.url).href : new URL("../section/s3/3.jpg", import.meta.url).href,
//       caption: '富貴森林公園'
//   },
//   {
//       img: globals.$isMobile() ? new URL("../section/s3/4_m.jpg", import.meta.url).href : new URL("../section/s3/4.jpg", import.meta.url).href,
//       caption: '富貴森林公園'
//   },
//   {
//       img: globals.$isMobile() ? new URL("../section/s3/5_m.jpg", import.meta.url).href : new URL("../section/s3/5.jpg", import.meta.url).href,
//       caption: '富貴森林公園'
//   },
// ])
</script>