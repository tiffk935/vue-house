<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="雍雋品" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">雍雋品</h1>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <S10 />
    <S11 />
    <Order />
  </div>
</template>

<style lang="scss">
  @import "@/assets/style/function.scss";
  .user-n{
    user-select:none;
  }
  .home {
    background-image: url(@/section/s1/bg.jpg);
    background-size: size-m(450);
    font-size: size-m(14);
    line-height: 1.5;
    font-weight: 600;
    font-family: "Noto Serif TC";
    @media screen and (min-width:768px) {
      background-size: size(900);
      font-size: size(20);
    }
  }
  .title{
    font-size: size-m(25);
    font-weight: 700;
    @media screen and (min-width:768px) {
      font-size: size(50);
    }
  }
  .subtitle{
    font-weight: 700;
    font-size: size-m(20);
    @media screen and (min-width:768px) {
      font-size: size(40);
    }
  }
  .desc {
    line-height: 2;
  }
  .en{font-family: "Times New Roman", Times, serif;
        font-weight: 500;}

  .labell {
      .labell-en {
        color: #BBA693;
        font-family: "Times New Roman", Times, serif;
        font-size: size-m(10);
        font-weight: 500;
        letter-spacing: .06em;
        margin-bottom: size-m(12);
        text-transform: uppercase;
        @media screen and (min-width:768px) {
          font-size: size(23);
          margin-bottom: 0;
          margin-right: size(15);
          writing-mode: vertical-lr;
        }
      }
      .labell-zh {
        font-size: size-m(20);
        font-weight: 700;
        line-height: 109%;
        padding: size-m(5) size-m(14);
        border: size-m(1) solid #000;
        display: inline-block;
        @media screen and (min-width:768px) {
          font-size: size(37);
          padding: size(15) size(15);
          border: size(1) solid #000;
          writing-mode: vertical-lr;
        }
      }

  }

  .t1 {
    color: #12352A;
    font-size: size-m(15);
    font-weight: 700;
    letter-spacing: .01em;
    @media screen and (min-width:768px) {
      font-size: size(30);
    }
  }

  .t2 {
    margin-bottom: 0.1em;
  }

  .t3 {
    color: #12352A;
    font-size: size-m(13);
    font-weight: 700;
    letter-spacing: 0.01em;
    @media screen and (min-width:768px) {
      font-size: size(25);
    }
  }

  .t4 {
    line-height: 2;
    margin-bottom: size-m(30);
    text-align: justify;
    @media screen and (min-width:768px) {
      margin-bottom: 0;
    }
  }

</style>

<script setup>
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
import S11 from "@/section/s11.vue"
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
  };
})
</script>
