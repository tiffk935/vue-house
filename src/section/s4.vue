<template>
  <section class="s4 user-n w-full relative bg-[#3265AB] text-white">
    <div class="map user-n relative">
      <div class="scrollable" ref="scrollable" v-if="isMobile">
        <img class="map1" src="@/section/s4/map-m.jpg" @load="onImgLoad($event)" />
        <img class="marker marker1 absolute" src="@/section/s4/marker1.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker marker2 absolute" src="@/section/s4/marker2.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker marker3 absolute" src="@/section/s4/marker3.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker marker4 absolute" src="@/section/s4/marker4.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker marker5 absolute" src="@/section/s4/marker5.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker marker6 absolute" src="@/section/s4/marker6.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker logo absolute" src="@/section/s4/logo.svg" data-aos="fade-up" data-aos-duration="1500"
          data-aos-delay="1000" data-aos-anchor=".trigger" />
      </div>
      <div class="scrollable" ref="scrollable" v-else>
        <img class="map1" src="@/section/s4/map.jpg" @load="onImgLoad($event)" />
        <img class="marker marker1 absolute" src="@/section/s4/marker1.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="0" data-aos-anchor=".trigger" />
        <img class="marker marker2 absolute" src="@/section/s4/marker2.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="100" data-aos-anchor=".trigger" />
        <img class="marker marker3 absolute" src="@/section/s4/marker3.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="200" data-aos-anchor=".trigger" />
        <img class="marker marker4 absolute" src="@/section/s4/marker4.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="300" data-aos-anchor=".trigger" />
        <img class="marker marker5 absolute" src="@/section/s4/marker5.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="400" data-aos-anchor=".trigger" />
        <img class="marker marker6 absolute" src="@/section/s4/marker6.svg" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="500" data-aos-anchor=".trigger" />
        <img class="marker logo absolute" src="@/section/s4/logo.svg" data-aos="fade-up" data-aos-duration="1500"
          data-aos-delay="1200" data-aos-anchor=".trigger" />
      </div>

      <div class="trigger"></div>

      <div class="mask md:hidden" v-if="isMobile">
        <img class="hand-label absolute" src="@/section/s4/hand-label.svg" />
        <img class="hand absolute" src="@/section/s4/hand.svg" />
      </div>

      <div class="pc-content hidden md:flex">
        <div class="note">空拍環境實景拍攝．輔以3D建物合成示意</div>

        <div class="content">
          <div class="t1">奔赴幸福</div>
          <div class="t2">汐·港·湖  超完美崛起共榮</div>
          <div class="line"></div>
          <div class="t3 text-[#59CCFF]">TOWARD A BETTER LIFE</div>
          <div class="t4 text-[#59CCFF]">Rising Together in Perfect Harmony</div>
        </div>

        <div class="photos">
          <div class="item" data-aos="fade" data-aos-duration="1000" data-aos-delay="0">
            <img class="block w-full" src="@/section/s4/1.jpg" />
            <div class="info">汐止環境實景拍攝</div>
          </div>
          <div class="item" data-aos="fade" data-aos-duration="1000" data-aos-delay="400">
            <img class="block w-full" src="@/section/s4/2.jpg" />
            <div class="info">捷運交通實景拍攝</div>
          </div>
          <div class="item" data-aos="fade" data-aos-duration="1000" data-aos-delay="800">
            <img class="block w-full" src="@/section/s4/3.jpg" />
            <div class="info">中信金融園區實景拍攝</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes hand {
  0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(50%);
  }
  50% {
    transform: translateX(0%);
  }
  75% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.s4 {
  height: size-m(561);
  @media screen and (min-width:768px) {
    height: auto;
  }

  .map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: size-m(561 - 561);
    @media screen and (min-width:768px) {
      position: static;
      height: auto;
      padding: 0;
    }

    .scrollable {
      position: relative;
      overflow-x: scroll;
      overflow-y: hidden;
      width: 100%;
      height: 100%;
      @media screen and (min-width:768px) {
        height: auto;
        overflow: hidden;
      }

      .map1 {
        width: auto;
        height: 100%;
        max-width: none;
        display: block;
        @media screen and (min-width:768px) {
          width: 100%;
          height: auto;
        }
      }

      .marker1 {
        width: size-m(12);
        bottom: size-m(172);
        left: size-m(202);
        @media screen and (min-width:768px) {
          width: size(17);
          bottom: size(395);
          left: calc(501 / 1920) * 100%;
        }
      }

      .marker2 {
        width: size-m(12);
        bottom: size-m(172);
        left: size-m(270);
        @media screen and (min-width:768px) {
          width: size(17);
          bottom: size(395);
          left: calc(597 / 1920) * 100%;
        }
      }

      .marker3 {
        width: size-m(12);
        bottom: size-m(172);
        left: size-m(324);
        @media screen and (min-width:768px) {
          width: size(17);
          bottom: size(395);
          left: calc(673 / 1920) * 100%;
        }
      }

      .marker4 {
        width: size-m(12);
        bottom: size-m(172);
        left: size-m(439);
        @media screen and (min-width:768px) {
          width: size(17);
          bottom: size(395);
          left: calc(1227 / 1920) * 100%;
        }
      }

      .marker5 {
        width: size-m(12);
        bottom: size-m(172);
        left: size-m(463);
        @media screen and (min-width:768px) {
          width: size(17);
          bottom: size(395);
          left: calc(1261 / 1920) * 100%;
        }
      }

      .marker6 {
        width: size-m(17);
        bottom: size-m(172);
        left: size-m(487);
        @media screen and (min-width:768px) {
          width: size(23);
          bottom: size(395);
          left: calc(1295 / 1920) * 100%;
        }
      }

      .logo {
        width: size-m(50);
        bottom: size-m(303);
        left: size-m(532);
        @media screen and (min-width:768px) {
          width: size(50);
          bottom: size(702);
          left: calc(1315 / 1920) * 100%;
        }
      }
    }

    .mask {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity .5s;
      pointer-events: none;

      .hand-label {
        width: size-m(290);
        bottom: size-m(209);
        left: size-m(43);
      }

      .hand {
        width: size-m(22.34);
        bottom: size-m(240);
        left: size-m(177);
        animation: hand 5s linear 0s infinite;
      }
    }
  }

  .pc-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: size(156) size(53) 0 size(145);
    justify-content: space-between;

    .note {
      position: absolute;
      top: size(18);
      right: size(14);
      font-size: size(14);
      line-height: size(22);
      font-weight: 700;
      filter: drop-shadow(0 0 size(5) #000);
    }

    .t1 {
      font-size: size(42);
      line-height: size(60);
      font-weight: 900;
      letter-spacing: .25em;
      margin-bottom: size(17);
    }

    .t2 {
      font-size: size(28);
      line-height: size(34);
      font-weight: 700;
      letter-spacing: .1em;
      margin-bottom: size(43);
    }

    .line {
      width: size(600);
      height: size(1);
      background: #fff;
      margin-bottom: size(31);
    }

    .t3 {
      font-size: size(36);
      line-height: size(41);
      font-weight: 700;
      margin-bottom: size(17);
    }

    .t4 {
      font-size: size(24);
      line-height: size(28);
    }

    .photos {
      display: flex;
      justify-content: space-between;
      width: size(1042);

      .item {
        width: size(318);
        
        .info {
          text-align: right;
          font-size: size(14);
          line-height: size(22);
          margin-top: size(9);
          filter: drop-shadow(0 0 size(5) #000);
        }
      }
    }
  }

  .trigger {
    position: absolute;
    bottom: 35%;
    left: 0;
    width: 100%;
    height: 1px;
    pointer-events: none;
    @media screen and (min-width:768px) {
      bottom: 50%;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const scrollable = ref();
const isMobile = computed(() => globals.$isMobile());

function onImgLoad(e) {
  const img = e.target;
  if (scrollable.value && img) {
    setTimeout(() => {
      let status = 0;
      let hideHand = false;
      scrollable.value.scrollLeft = img.clientWidth * 0.669 - window.innerWidth / 2;
      scrollable.value.addEventListener("scroll", () => {
        status++;
        if (status > 1 && !hideHand) {
          scrollable.value.parentNode.querySelector('.mask').style.opacity = 0;
          hideHand = true;
        }
      });
    }, 10);
  }
}
</script>