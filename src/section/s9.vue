<template>
  <section class="s9 relative">
    <div class="map user-n relative" ref="map">
      <img class="map1" src="@/section/s9/map.jpg" @load="onImgLoad($event)" />
    </div>
    <img class="hand-bg absolute md:hidden" src="@/section/s9/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s9/hand.svg" />
    <div class="content bg-[#EBECC5]">
      <div class="md:flex md:justify-between md:items-center" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">
        <div>
          <div class="t1 text-center md:text-left text-[#000] font-['Noto_Serif_TC']">上質都心贏者圈 <br class="md:hidden"> 全能資產一期一會</div>
          <div class="t2 text-center md:text-left text-[#CCB071]">OWN THE CITY, MEET THE FUTURE</div>
        </div>
        <div class="t3 text-justify font-['Noto_Serif_TC']">古今交織的魅力韻味，因雙捷運十字交會，格外閃耀。一席核心資產，難得；雙線捷運交會，稀有；三越誠品在側，絕版！精打細算的時代贏家，理當讓全球通膨速度，跟不上你的穩健態度。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  @keyframes swing {
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
  @media screen and (min-width:768px) {
    height: auto;
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
      height: size-m(514);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
      }
    }
  }

  .hand {
    width: size-m(40);
    top: size-m(403);
    left: size-m(169);
    cursor: pointer;
    transition: opacity .5s;
    animation: swing 3s linear 0s infinite;
    pointer-events: none;
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .hand-bg {
    width: 100%;
    top: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }

  .content {
    padding: size-m(66) size-m(29) size-m(48);
    @media screen and (min-width:768px) {
      padding: size(56) size(132) size(54) size(128);
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(27);
      margin-bottom: size-m(11);
      font-weight: 600;
      @media screen and (min-width:768px) {
        font-size: size(45);
        line-height: size(65);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(9.5);
      line-height: size-m(14);
      letter-spacing: .16em;
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(26);
      }
    }

    .t3 {
      font-size: size-m(9.5);
      line-height: 201.1%;
      margin-top: size-m(24);
      letter-spacing: -.01em;
      color: #000;
      font-weight: 600;
      @media screen and (min-width:768px) {
        font-size: size(20);
        margin-top: 0;
        letter-spacing: .11em;
        width: size(779);
      }
    }
  }
}

</style>

<script setup>
import { ref } from 'vue';

const map = ref();

function onImgLoad(e) {
  const img = e.target;
  if (map.value && img) {
    let status = 0;
    let hideHand = false;
    map.value.scrollLeft = img.clientWidth * 0.51 - window.innerWidth/2;
    map.value.addEventListener("scroll", () => {
      status++;
      if(status > 1 && !hideHand){
        map.value.parentNode.querySelector('.hand').style.opacity = 0;
        map.value.parentNode.querySelector('.hand-bg').style.opacity = 0;
        hideHand = true;
      }
    });
  }
}
</script>