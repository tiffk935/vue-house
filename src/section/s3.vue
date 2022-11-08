<template>
  <section class="s3 relative">
    <div class="map relative">
      <img class="map3" src="@/section/s3/map3.jpg" alt="双和心">
      <img class="map2 absolute top-0 left-0" src="@/section/s3/map2.png" alt="双和心">
      <img class="map1 absolute top-0 left-0" src="@/section/s3/map1.png" alt="双和心">
    </div>
    <img ref="hand" class="hand absolute" src="@/section/s3/hand.svg" alt="双和心">
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {

  @keyframes swing {
    // from {
    //   transform: translateX(0%);
    // }
    // to {
    //   transform: translateX(-30%);
    // }
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-15%);
    }
    50% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(15%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(970);
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    @media screen and (min-width:768px) {
      overflow: hidden;
    }

    img {
      width: auto;
      height: size-m(667);
      max-width: none;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
      }
    }
  }

  .logo {
    width: size-m(178);
    top: size-m(64);
    left: size-m(98.5);
    @media screen and (min-width:768px) {
      width: size(245);
      top: size(97);
      left: size(845);
    }
  }

  .hand {
    width: size-m(110);
    top: size-m(278);
    left: size-m(132.5);
    cursor: pointer;
    animation: swing 5s linear 0s infinite;
    transition: opacity .5s;
    @media screen and (min-width:768px) {
      display: none;
    }
  }
}

</style>

<script setup>
import { ref } from 'vue'
const hand = ref(null);

// onMounted(() => {
//   setTimeout(() => {
//     document.querySelector('.s3 .map').scrollLeft = document.querySelector('.s3 .map .map3').clientWidth/2 - document.querySelector('.s3 .logo').clientWidth;
//   }, 1000);

//   document.querySelector('.s3 .map').addEventListener("scroll", () => {
//     document.querySelector('.s3 .hand').opacity = 0;
//   });
// })

const scrollMap = () => {
  console.log('scrollMap')
  hand.value.style.opacity = 0;
}
</script>