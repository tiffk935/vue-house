<template>
  <section class="video w-full relative">
    <div class="video-container">

      <!-- ✅ iOS 用 API -->
      <div v-if="isIOS" id="player"></div>

      <!-- ✅ 其他用 iframe -->
      <iframe
        v-else
        ref="videoIframe"
        :src="videoSrc"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>

    </div>

    <!-- 按鈕 -->
    <button class="mute-btn" @click="toggleMute">
      <svg v-if="isMuted" viewBox="0 0 24 24">
        <path d="M20,22l-2.5-2.5c-1,.7-2.2,1.3-3.6,1.5v-2c.8-.2,1.5-.5,2.1-.9l-4.1-4.1v6l-5-5H3v-6h4S2,4,2,4l1.6-1.6,18.1,18.1-1.6,1.6ZM14,8v2l2.1,2.1c0-1.7-.7-3.4-2.1-4.1ZM18.6,14.6l1.5,1.5c2.2-5.1.1-12.3-6.2-13.1v2c4.1,1,5.8,5.8,4.6,9.6ZM12,4l-2,2,2,2v-3.9Z"/>
      </svg>
      <svg v-else viewBox="0 0 24 24">
        <path d="M14,8v8.1c2.8-1.4,2.8-6.7,0-8.1ZM3,9v6h4l5,5V4l-5,5H3ZM14,21v-2c6.9-1.5,6.4-12.5,0-14v-2c9.4,1.2,9.3,16.6,0,18Z"/>
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMuted = ref(true)
const videoId = 'MUnomlIlGDs'
const videoIframe = ref(null)
let player = null

// ✅ 判斷 iOS
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)

// iframe 用
const videoSrc = ref(
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`
)

// 🎯 切換聲音
const toggleMute = () => {
  // ✅ iOS 用 API
  if (isIOS) {
    if (!player) return

    if (isMuted.value) {
      player.playVideo()   // ⭐ 關鍵
      player.unMute()
      isMuted.value = false
    } else {
      player.mute()
      isMuted.value = true
    }
  } 
  // ✅ 其他用 iframe
  else {
    isMuted.value = !isMuted.value
    videoSrc.value = `https://www.youtube.com/embed/${videoId}?autoplay=1&${
      isMuted.value ? 'mute=1' : 'mute=0'
    }&loop=1&playlist=${videoId}`
  }
}

// 🎬 iOS 初始化播放器
onMounted(() => {
  if (!isIOS) return

  const tag = document.createElement('script')
  tag.src = "https://www.youtube.com/iframe_api"
  document.body.appendChild(tag)

  window.onYouTubeIframeAPIReady = () => {
    player = new window.YT.Player('player', {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: videoId,
        controls: 0,
        playsinline: 1
      },
      events: {
        onReady: (e) => {
          e.target.playVideo()
        }
      }
    })
  }
})
</script>

<style lang="scss">
.video {
  .video-container {
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    pointer-events: none;

    iframe,
    #player {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .mute-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0,0,0,0.6);
    border-radius: 50%;
    padding: 10px;
    z-index: 10;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: white;
    stroke: white;
  }
}
</style>