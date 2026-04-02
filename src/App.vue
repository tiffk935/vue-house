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
      <source srcset="@/assets/home/banner/1m.webp" media="(max-width: 768px)" />
      <img
        class="bg"
        src="@/assets/home/banner/1.webp"
        alt="bg" fetchpriority="high"
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
  /* 優先順序：萍方(蘋果) -> 系統黑體 -> 預設無襯線 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", 
               "PingFang TC", "Microsoft JhengHei", "微軟正黑體", sans-serif;
  font-weight: 400;
  line-height: 1.6; /* 稍微增加行高，增加系統字體的閱讀舒適度 */
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
  width: 100vw;overflow: hidden;
  @media screen and (min-width:768px) {
    padding: func.size(0) 0 0 0;
  width: 100%;
  }
}
.app-main-banner {
  position: relative;
  width: 100%;
  min-height:func.size-m(667 - 74);
  height: calc(100dvh - func.size-m(74));
  max-height:func.size-m(877-74);
  // max-height:func.size-m(900);
  // height: func.size-m(667 - 74);
  padding: 0;
  // overflow: hidden;

  @media screen and (min-width:768px) {
    height:100dvh ;
  min-height:func.size(960);
  max-height:func.size(1290);
  padding: 0;
  }
  .bg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .onder-btn {
    position: absolute;
    top: func.size-m(455);
    top: calc(50% + func.size-m(455 - (593 * 0.5)));
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

<script setup>import { onMounted } from "vue"
import NavBar from '@/components/NavBar.vue' // 改為同步匯入
import Footer from '@/components/Footer.vue' // 改為同步匯入

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