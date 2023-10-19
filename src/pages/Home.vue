<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="研森" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC'] bg-[#E97290]">
    <h1 style="display:none;">研森</h1>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <Order />
  </div>
</template>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init();

    setTimeout(() => {
      let status = 0;
      let hideHand = false;
      document.querySelector('.s2 .map').scrollLeft = document.querySelector('.s2 .map .map1').clientWidth * 0.435 - window.innerWidth/2;
      document.querySelector('.s2 .map').addEventListener("scroll", () => {
        status++;
        if(status > 1 && !hideHand){
          document.querySelector('.s2 .hand').style.opacity = 0;
          document.querySelector('.s2 .hand-bg').style.opacity = 0;
          hideHand = true;
        }
      });
    }, 0);
  };

})
</script>


<style lang="scss">
@import '@/assets/style/function.scss';


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.home{

}
img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
/*
*/
.caption{
      @apply absolute;
      left:1em;
      bottom: .5em;
      font-weight: 500;
      font-size: size(15);
      color: #FFF;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}
.slider {
  @apply relative;
    .slide-item {
      background-size: cover;
      background-position: center center;
    }
  
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0; 
    height: 100%;
    pointer-events: none;
    .prev,
    .next{
      width:5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{background-color: #0003;}
    }
    .prev{transform: scaleX(-1);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0;
    gap: .5em;
    color: #D9D9D9;
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: 2em;
        height: .5em;
       // border: 2px solid currentColor;
        background:currentColor;
        border-radius:0;

        &.is-active{
          background:#A68577;
      }
      }
    }
  }
}
@media screen and (max-width: 767px) {
.home{
  background-size: size-m(85) auto;
.bg{
  
  background-size:7.1vw auto;
}
}
/*
*/
.caption{
      font-size: size-m(12);
}
.slider {
  @apply relative;
  .arrows{
    .prev,
    .next{
      width: 8%;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    display: none;
    bottom: size-m(6.7);
    gap: size-m(2.5);
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: size-(10.3);
        height: size-m(3.34);
        border: size-m(1) solid #fff;

        &.is-active{
          @apply bg-white;
      }
      }
    }
  }
}
}
</style>
