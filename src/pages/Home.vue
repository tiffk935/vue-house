<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="蒔築" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">蒔築</h1>
    <S1 />
    <S2 />
    <S3S4 />
    <S5 />
    <S6 />
    <!--S7 /-->
    <Order />
  </div>
</template>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3S4 from "@/section/s3s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
//import S7 from "@/section/s7.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"
import AOS from 'aos';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: true
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init();

    setTimeout(() => {
      let status = 0;
      let hideHand = false;
      document.querySelector('.s2 .map').scrollLeft = document.querySelector('.s2 .map .map1').clientWidth * 0.28 - window.innerWidth/2;
      document.querySelector('.s2 .map').addEventListener("scroll", () => {
        status++;
        if(status > 1 && !hideHand){
          document.querySelector('.s2 .hand').style.opacity = 0;
          document.querySelector('.s2 .hand-bg').style.opacity = 0;
          hideHand = true;
        }
      });
    }, 0);

    const sec = ['.s2', '.s3', '.s4', '.s6', '.order'];
    sec.forEach((s, idx) => {
      ScrollTrigger.create({
        trigger: s,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          document.querySelectorAll('.menu-item span')[idx].classList.add('active');
        },
        onLeave: () => {
          document.querySelectorAll('.menu-item span')[idx].classList.remove('active');
        },
        onLeave: () => {
          document.querySelectorAll('.menu-item span')[idx].classList.remove('active');
        },
        onEnterBack: () => {
          document.querySelectorAll('.menu-item span')[idx].classList.add('active');
        },
        onLeaveBack: () => {
          document.querySelectorAll('.menu-item span')[idx].classList.remove('active');
        }
      });
    });
  };

})
</script>
