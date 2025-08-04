<template>
  <section class="s3 user-n w-full relative">
    <div class="map user-n relative">
      <div class="scrollable" ref="scrollable">
        <img class="map1" src="@/section/s3/map.jpg" @load="onImgLoad($event)" />
        <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s3/map2.svg" />
        <!-- <div class="lights-wrapper">
          <div class="lights">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> -->
      </div>
      <div class="mask md:hidden">
        <img class="hand-label absolute" src="@/section/s3/hand-label.svg" />
      </div>
    </div>
    <div class="content">
      <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">眾勢成一王 <br class="md:hidden">贏接國政副都心增值盛世</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">副都心強勢接棒信義，北台灣資源、人口與商業，紛紛向副都心靠攏，國家級溪北計畫，三大科園資源傾注於此，產官學界齊力造就產業、<br class="hidden md:block">交通與生活核心，當城市中心西移，形塑大台北生活樣貌，「國王大道」站在千億投資的中心點上，勢必迎來資產增值的黃金時代。</div>
    </div>
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

.s3 {
  background: #016AAE;
  height: size-m(800);
  @media screen and (min-width:768px) {
    height: auto;
  }

  .map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: size-m(800 - 654);
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

      img {
        width: auto;
        height: 100%;
        max-width: none;
        display: block;
        @media screen and (min-width:768px) {
          width: 100%;
          height: auto;
        }
      }

      .lights-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(1308 / 375) * 100%;
        height: 100%;
        pointer-events: none;
        @media screen and (min-width:768px) {
          width: 100%;
        }

        .lights {
          position: absolute;
          width: calc(72 / 1308) * 100%;
          height: calc(208 / 654) * 100%;
          left: calc(587 / 1308) * 100%;
          bottom: calc(94 / 654) * 100%;
          // background: rgba(255,0,0,.3);
          @media screen and (min-width:768px) {
            width: calc(104.15 / 1920) * 100%;
            height: calc(240.5 / 960) * 100%;
            left: calc(863 / 1920) * 100%;
            bottom: calc(144.39 / 960) * 100%;
          }

          div {
            position: absolute;
            bottom: 0;
            width: calc(10 / 72) * 100%;
            background: linear-gradient(1deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0) 100%);
            background-size: 100% 200%;
            animation: light 8s ease infinite;
            @media screen and (min-width:768px) {
              width: calc(9.39 / 104.15) * 100%;
            }

            &:nth-child(1) {
              left: 0;
              height: calc(175 / 208) * 100%;
              @media screen and (min-width:768px) {
                height: calc(205.86 / 240.5) * 100%;
              }
            }

            &:nth-child(2) {
              left: calc(32 / 72) * 100%;
              bottom: calc(4 / 208) * 100%;
              height: calc(208 / 208) * 100%;
              @media screen and (min-width:768px) {
                left: calc(46.71 / 104.15) * 100%;
                bottom: 0;
                width: calc(13.08 / 104.15) * 100%;
                height: calc(205.86 / 240.5) * 100%;
              }
            }

            &:nth-child(3) {
              left: calc(62 / 72) * 100%;
              height: calc(175 / 208) * 100%;
              @media screen and (min-width:768px) {
                left: calc(94.76 / 104.15) * 100%;
                height: calc(205.86 / 240.5) * 100%;
              }
            }
          }
        }
      }
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(39, 64, 112, 0.60) 8.21%, rgba(75, 122, 214, 0.60) 99.98%);
      transition: opacity .5s;
      pointer-events: none;

      .hand-label {
        width: size-m(290);
        top: size-m(678);
        left: size-m(44);
      }
    }
  }

  .content {
    position: absolute;
    top: size-m(86);
    width: 100%;
    padding: 0 size-m(22);
    text-align: justify;
    font-size: size-m(14);
    line-height: 160%;
    letter-spacing: .08em;
    @media screen and (min-width:768px) {
      top: size(174);
      padding: 0;
      text-align: center;
      font-size: size(16);
    }

    .t1 {
      text-align: center;
      font-size: size-m(28);
      line-height: size-m(40);
      font-weight: 500;
      margin-bottom: size-m(75);
      position: relative;
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(48);
        font-weight: 400;
        margin-bottom: size(32);
      }

      &:after {
        content: '';
        position: absolute;
        bottom: -17vw;
        left: 50%;
        transform: translate(-50%, 0);
        width: size-m(340);
        height: size-m(57);
        background-image: url(@/section/s3/line.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        @media screen and (min-width:768px) {
          bottom: -2vw;
          width: size(698);
          height: size(57);
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue';

const scrollable = ref();

function onImgLoad(e) {
  const img = e.target;
  if (scrollable.value && img) {
    setTimeout(() => {
      let status = 0;
      let hideHand = false;
      scrollable.value.scrollLeft = img.clientWidth * 0.48 - window.innerWidth/2;
      scrollable.value.addEventListener("scroll", () => {
        status++;
        if(status > 1 && !hideHand){
          scrollable.value.parentNode.querySelector('.mask').style.opacity = 0;
          hideHand = true;
        }
      });
    }, 10);
  }
}
</script>