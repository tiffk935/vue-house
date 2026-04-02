<template>
  <template v-if="$route.fullPath === '/formThanks'">
    <RouterView :key="$route.path" />
  </template>
  <template v-else>
    <img src="@/assets/bg1.png" 
  fetchpriority="high" 
  alt="LCP-Priority" 
  width="1" 
  height="1" 
  style="opacity: 0.01; position: absolute; pointer-events: none;">
    <div class="bg-container"></div>
    <NavBar />
    <main :id="`page-${$route.name}`">
    <section v-if="$route.path === '/'" class="app-main-banner">
       
    <picture>
      <source srcset="@/assets/home/banner/bgm.jpg" media="(max-width: 768px)" />
      <img
        class="bg"
        src="@/assets/home/banner/bg1.jpg"
        alt="bg" fetchpriority="high"
      />
    </picture>
    <picture>
      <source srcset="@/assets/s1logo-m.webp" media="(max-width: 768px)" />
      <img
        class="logo"
        src="@/assets/logo.svg"
        alt="logo"
        width="500"
        height="335" fetchpriority="high"
      />
    </picture>
    <picture>
      <source srcset="@/assets/home/banner/txt-m.svg" media="(max-width: 768px)" />
      <img
        class="txt"
        src="@/assets/home/banner/txt.svg"
        alt="txt" fetchpriority="high"
      />
    </picture>
    <RouterLink class="onder-btn" to="/order">立即預約</RouterLink>
    </section>
      <RouterView :key="$route.path" />
    </main>
    <Footer />
  </template>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

* {
  box-sizing: border-box;
}
/*
// noto-sans-tc-regular - chinese-traditional_latin 
@font-face {
  font-display: swap; 
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  src: url('@/assets/fonts/noto-sans-tc-v39-chinese-traditional_latin-regular.woff2') format('woff2'); 
}
// noto-sans-tc-700 - chinese-traditional_latin 
@font-face {
  font-display: swap; 
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  src: url('@/assets/fonts/noto-sans-tc-v39-chinese-traditional_latin-700.woff2') format('woff2'); 
}
// roboto-500 - latin 
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('@/assets/fonts/roboto-v51-latin-500.woff2') format('woff2'); 
}
*/
@font-face {
  font-family: "NotoSansTC-Fallback";
  src: local("Arial");
  font-display: swap; /* 加入這一行 */
  size-adjust: 105%;
  ascent-override: 90%;
  descent-override: 20%;
  line-gap-override: 0%;
}

body {
  margin: 0;
  font-family: "Noto Sans TC",
    "NotoSansTC-Fallback",
    sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.bg-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(@/assets/bg1.png) ;
  transform: translateZ(0); /* 開啟 GPU 加速 */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  position: relative;
  flex: 1;
  padding: func.size-m(74) 0 0 0;
  min-height: 110vh;
  @media screen and (min-width:768px) {
    padding: func.size(0) 0 0 0;
  }
}
.app-main-banner {
  position: relative;
  width: 100%;
  height: func.size-m(667 - 74);
  padding: 0;

  @media screen and (min-width:768px) {
    height: func.size(1080);
  padding: 0;
  }
  .bg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo {
    position: absolute;
    top: func.size-m(37);
    left: 0;
    right: 0;
    margin: auto;
    width: func.size-m(170);
    height: auto;

    @media screen and (min-width:768px) {
      top: calc(40% + func.size(255 - 1080 * .4));
      width: func.size(500);
    }
  }

  .txt {
    position: absolute;
    top: func.size-m(364);
    left: 0;
    right: 0;
    margin: auto;
    width: func.size-m(217);
    height: func.size-m(119);

    @media screen and (min-width:768px) {
      //top: func.size(750);
      top: calc(70% + func.size(750 - 1080 * .7));
      width: func.size(1090);
      height: func.size(200);
    }
  }

  .onder-btn {
    position: absolute;
    top: func.size-m(455);
    left: func.size-m(230);
    border: func.size-m(1) solid #219664;
    background: #219664;
    text-decoration: none;
    color: #fff;
    font-size: func.size-m(12);
    font-weight: 400;
    letter-spacing: .1em;
    text-indent: .1em;
    width: func.size-m(65);
    height: func.size-m(22);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s;

    @media screen and (min-width:768px) {
      display: none;
      top: func.size(575);
      left: func.size(1513);
      border: func.size(1) solid #219664;
      font-size: func.size(24);
      width: func.size(175.05);
      height: func.size(55.31);
    }

    &:hover {
      background: none;
      color: #219664;
    }
  }
}
</style>

<script setup>
import { onMounted, defineAsyncComponent } from "vue"
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))

import AOS from 'aos';
import 'aos/dist/aos.css';
// App.vue
onMounted(() => {
  setTimeout(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 0,
      easing: 'ease-out-quad',
      // 如果手機端分數還是上不去，可以考慮在手機端停用
      // disable: window.innerWidth < 768 
    });
    // 啟動後強制重新計算一次，防止圖片載入後的位移
    AOS.refresh(); 
  }, 1000);
})
</script>