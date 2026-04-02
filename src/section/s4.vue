<template>
  <section class="s4 user-n w-full relative bg-[#F3DCC5]">
    <div class="ball absolute"></div>
    <div class="map user-n relative">
      <div class="scrollable" ref="scrollable" v-if="isMobile">
        <img class="map1" src="@/section/s4/map.webp" @load="onImgLoad($event)" />
        <img class="marker marker1 absolute" src="@/section/s4/marker1.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker2 absolute" src="@/section/s4/marker2.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker3 absolute" src="@/section/s4/marker3.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker4 absolute" src="@/section/s4/marker4.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker5 absolute" src="@/section/s4/marker5.png" data-aos="zoom-in" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker6 absolute" src="@/section/s4/marker6.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker7 absolute" src="@/section/s4/marker7.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker8 absolute" src="@/section/s4/marker8.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker9 absolute" src="@/section/s4/marker9.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker10 absolute" src="@/section/s4/marker10.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
        <img class="marker marker11 absolute" src="@/section/s4/marker11.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="0" />
      </div>
      <div class="scrollable" ref="scrollable" v-else>
        <img class="map1" src="@/section/s4/map.webp" @load="onImgLoad($event)" />
        <img class="marker marker1 absolute" src="@/section/s4/marker1.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="800" />
        <img class="marker marker2 absolute" src="@/section/s4/marker2.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="1600" />
        <img class="marker marker3 absolute" src="@/section/s4/marker3.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="200" />
        <img class="marker marker4 absolute" src="@/section/s4/marker4.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="1200" />
        <img class="marker marker5 absolute" src="@/section/s4/marker5.png" data-aos="zoom-in" data-aos-duration="1000"
          data-aos-delay="2200" />
        <img class="marker marker6 absolute" src="@/section/s4/marker6.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="1000" />
        <img class="marker marker7 absolute" src="@/section/s4/marker7.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="2000" />
        <img class="marker marker8 absolute" src="@/section/s4/marker8.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="1400" />
        <img class="marker marker9 absolute" src="@/section/s4/marker9.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="800" />
        <img class="marker marker10 absolute" src="@/section/s4/marker10.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="1800" />
        <img class="marker marker11 absolute" src="@/section/s4/marker11.png" data-aos="fade-down" data-aos-duration="0"
          data-aos-delay="400" />
      </div>
      <div class="map-label">實景拍攝</div>
      <div class="mask md:hidden">
        <img class="hand-label absolute" src="@/section/s4/hand-label.svg" />
      </div>
    </div>

    <img class="title md:hidden" src="@/section/s4/title-m.png" data-aos="zoom-in" data-aos-duration="1000"
      data-aos-delay="0" />
    <img class="title hidden md:block" src="@/section/s4/title.png" data-aos="zoom-in" data-aos-duration="1000"
      data-aos-delay="0" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes light {
  90% {
    background-position: 0% 100%;
  }

  to {
    background-position: 0% 100%;
  }
}

.s4 {
  height: size-m(700);

  @media screen and (min-width:768px) {
    height: auto;
  }

  .map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: size-m(700 - 650);

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

      .marker {
        filter: drop-shadow(0 0 size-m(10) rgba(0, 0, 0, 1));

        @media screen and (min-width:768px) {
          filter: drop-shadow(0 0 size(10) rgba(0, 0, 0, 1));
        }
      }

      .marker1 {
        width: size-m(47.35);
        top: size-m(277.79);
        left: size-m(25.91);

        @media screen and (min-width:768px) {
          width: size(97);
          top: size(568);
          left: size(51);
        }
      }

      .marker2 {
        width: size-m(47.84);
        top: size-m(345.65);
        left: size-m(81.07);

        @media screen and (min-width:768px) {
          width: size(98);
          top: size(707);
          left: size(164);
        }
      }

      .marker3 {
        width: size-m(47.84);
        top: size-m(321.73);
        left: size-m(192.87);

        @media screen and (min-width:768px) {
          width: size(98);
          top: size(658);
          left: size(393);
        }
      }

      .marker4 {
        width: size-m(47.35);
        top: size-m(297.81);
        left: size-m(334.93);

        @media screen and (min-width:768px) {
          width: size(97);
          top: size(609);
          left: size(684);
        }
      }

      .marker5 {
        width: size-m(85.43);
        top: size-m(325.15);
        left: size-m(504.32);

        @media screen and (min-width:768px) {
          width: size(175);
          top: size(665);
          left: size(1031);
        }
      }

      .marker6 {
        width: size-m(47.84);
        top: size-m(314.41);
        left: size-m(647.36);

        @media screen and (min-width:768px) {
          width: size(98);
          top: size(643);
          left: size(1324);
        }
      }

      .marker7 {
        width: size-m(47.84);
        top: size-m(277.79);
        left: size-m(709.36);

        @media screen and (min-width:768px) {
          width: size(98);
          top: size(568);
          left: size(1451);
        }
      }

      .marker8 {
        width: size-m(47.84);
        top: size-m(390.56);
        left: size-m(758.67);

        @media screen and (min-width:768px) {
          width: size(98);
          top: size(799);
          left: size(1552);
        }
      }

      .marker9 {
        width: size-m(47.35);
        top: size-m(259.73);
        left: size-m(793.81);

        @media screen and (min-width:768px) {
          width: size(97);
          top: size(531);
          left: size(1624);
        }
      }

      .marker10 {
        width: size-m(47.35);
        top: size-m(228.49);
        left: size-m(862.65);

        @media screen and (min-width:768px) {
          width: size(97);
          top: size(467);
          left: size(1765);
        }
      }

      .marker11 {
        width: size-m(47.84);
        top: size-m(443.78);
        left: size-m(841.17);

        @media screen and (min-width:768px) {
          width: size(98);
          top: size(908);
          left: size(1721);
        }
      }
    }

    .mask {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: size-m(445);
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
      transition: opacity .5s;
      pointer-events: none;

      .hand-label {
        width: size-m(111);
        bottom: size-m(25);
        left: size-m(132);
      }
    }

    .map-label {
      position: absolute;
      bottom: size-m(5);
      right: size-m(5);
      color: #fff;
      font-size: size-m(6);

      @media screen and (min-width:768px) {
        bottom: size(12);
        right: size(19);
        font-size: size(10);
      }
    }
  }

  .title {
    position: absolute;
    top: size-m(60);
    left: size-m(16);
    width: size-m(343);

    @media screen and (min-width:768px) {
      top: size(136);
      left: size(583);
      width: size(753);
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
      scrollable.value.scrollLeft = img.clientWidth * 0.48 - window.innerWidth / 2;
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