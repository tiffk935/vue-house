<template>
  <section class="s5 user-n w-full relative" @click="showModal">
    <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="title w-full block" src="@/section/s5/title.svg" />
      <div>寬敞視野、明亮通風，提升居住品質，無論客廳或臥房都倍感適意舒暢，盡享尊榮生活尺度。</div>
    </div>
    <div class="img relative">
      <img class="w-full block" src="@/section/s5/bg.jpg" />
      <div class="info absolute md:hidden">點擊瀏覽3d透視參考示意圖</div>
      <div class="info absolute hidden md:block">夜間外觀3d透視參考示意圖 | 此為廣告效果示意，為單一建物電腦3d透視表現，周遭環境係電腦合成，建設公司保有建物外觀修正之權利</div>
    </div>
  </section>

  <div class="s5s6-modal" v-if="isShow">
    <div class="scrollable" ref="scrollable">
      <img src="@/section/s5/bg.jpg" @load="onImgLoad($event)" />
    </div>
    <div class="close" @click="closeModal"></div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

body {
  &.lock {
    overflow: hidden;
  }
}

.s5 {
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
      width: size(710);
      padding: size(31) size(35) size(34) size(166);
      background: #fff;
      z-index: 1;
    }

    .title {
      margin-bottom: size-m(25);
      @media screen and (min-width:768px) {
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

.s5s6-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 999999;

  .scrollable {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;

    img {
      width: auto;
      height: 100%;
      max-width: none;
      display: block;
    }
  }

  .close {
    position: absolute;
    top: size-m(20);
    right: size-m(28);
    width: size-m(40);
    height: size-m(40);
    cursor: pointer;

    &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: size-m(1);
      background: #fff;
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
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
    scrollable.value.scrollLeft = img.clientWidth * 0.56 - window.innerWidth/2;
  }
}
</script>