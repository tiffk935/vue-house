<template>
  <div class="s6 relative">
  <div class="play relative" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" @click="openPlayer(true)">
    <img class="videobg absolute" loading="lazy" src="@/section/s6/videobg.jpg" alt="" srcset="">
    <img class="playbut relative" loading="lazy" src="@/section/s6/play.svg" alt="" srcset="">
  </div>
      <div class="video-box aspect-video">
        <!-- <iframe src="https://www.youtube.com/embed/T0nbkFw0EYs" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe> -->
          <div id="yt-player"></div>
      </div>
      <div class="close shadow-xl font-['noto_sans_tc'] font-bold" @click="openPlayer(false)">
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
  margin: size(83) auto;
  // overflow: hidden;

  .play {
  width: size(1305);
  height: size(733);
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
    cursor: pointer;
    .videobg{width: 100%;height: 100%;transition:transform 10s;}
  .playbut{
    width: size(80);}

    &:hover {
    .videobg{transform: scale(1.5);}
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
    margin: size-m(72) 0;

    .play {
    width: 100%;
    height: size-m(210.63); 
    
    .playbut{
    width: size-m(30);}
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
import { ref, onMounted } from "vue";
const videoOpened = ref(false);
const player = ref(null);
onMounted(() => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(tag, firstScript);

  window.onYouTubeIframeAPIReady = function(){
    console.log('success');
    player.value = new YT.Player('yt-player', {
      videoId: 'T0nbkFw0EYs', // T0nbkFw0EYs
    });
  };
})

function openPlayer(bool) {
  if(bool) {
    player.value.playVideo();
  } else {
    player.value.stopVideo();
  }
  videoOpened.value = bool;
}
</script>