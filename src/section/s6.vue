<template>
  <section class="s6 user-n w-full relative" @click="showModal">
    <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="title w-full block" src="@/section/s6/title.svg" />
      <div>奢擁4車位稀有配置，核心地段停車無憂、輕鬆出行，訪客隨時歡迎，迎接從容愜意的居住體驗。</div>
    </div>
    <div class="img relative">
      <img class="w-full block" src="@/section/s6/bg.jpg" />
      <div class="info absolute md:hidden">點擊瀏覽3d透視參考示意圖</div>
      <div class="info absolute hidden md:block">室內情境示意 | 裝潢風格參考情境示意圖，實際格局依合約書為準</div>
    </div>
  </section>

  <div class="s5s6-modal" v-if="isShow">
    <div class="scrollable" ref="scrollable">
      <img src="@/section/s6/bg.jpg" @load="onImgLoad($event)" />
    </div>
    <div class="close" @click="closeModal"></div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  text-align: justify;
  font-size: size-m(12);
  font-weight: 500;
  line-height: size-m(21);
  @media screen and (min-width:768px) {
    font-size: size(20);
    line-height: size(34);
  }

  .content {
    padding: size-m(52) size-m(30);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(95);
      left: 0;
      width: size(661);
      padding: size(33) size(47) size(37) size(166);
      background: #fff;
      z-index: 1;
    }

    .title {
      padding: 0 size-m(10);
      margin-bottom: size-m(25);
      @media screen and (min-width:768px) {
        padding: 0;
        margin-bottom: size(19);
      }
    }
  }

  .img {
    .info {
      bottom: size-m(8);
      right: size-m(9);
      color: #FFF;
      font-size: size-m(12);
      font-weight: 500;
      @media screen and (min-width:768px) {
        bottom: size(25);
        right: size(47);
        font-size: size(15);
      }
    }
  }
}
</style>

<script setup>
import { getCurrentInstance, ref } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const scrollable = ref();
const isShow = ref(false);

const showModal = () => {
  if (!globals.$isMobile()) return;
  isShow.value = true;
  document.querySelector('body').classList.add('lock');
}

const closeModal = () => {
  isShow.value = false;
  document.querySelector('body').classList.remove('lock');
}

function onImgLoad(e) {
  const img = e.target;
  if (scrollable.value && img) {
    scrollable.value.scrollLeft = img.clientWidth * 0.5 - window.innerWidth/2;
  }
}
</script>