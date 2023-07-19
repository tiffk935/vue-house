<template>
  <section class="s1 relative">
    <img class="grid absolute" v-if="$isMobile()" src="@/section/s1/grid-m.jpg" />
    <img class="grid absolute" v-else src="@/section/s1/grid.jpg" />
    <img class="t1 absolute" v-if="$isMobile()" src="@/section/s1/t1-m.svg" />
    <img class="t1 absolute" v-else src="@/section/s1/t1.svg" />
    <div class="t2 upup absolute">
      <div class="tt"></div>
    </div>
    <div class="t3 upup absolute">
      <div class="tt"></div>
    </div>
    <div class="logo upup absolute">
      <div class="tt"></div>
    </div>
    <div class="line1 absolute"></div>
    <div class="line2 absolute"></div>
    <div class="title upup absolute">
      <div class="tt"></div>
    </div>
    <div class="comingsoon upup absolute text-[#39684F]">
      <div class="tt">
        <div class="c1">COMING SOON</div>
        <div class="c2">即將公開</div>
      </div>
    </div>
    <div class="order-btn absolute" @click="scrollTo('.order')">預約品賞</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.upup, .upup1, .upup9, .upup11 {
  overflow: hidden;

  .tt {
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    // transition: 1s all cubic-bezier(.32,0,.24,1.09);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

.s1 {
  width: 100%;
  height: size-m(720);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .grid {
    width: size-m(295);
    left: size-m(40);
    top: size-m(79);
    @media screen and (min-width:768px) {
      width: size(713);
      left: size(178);
      top: size(235);
    }
  }

  .t1 {
    width: size-m(69.87);
    left: size-m(149.02);
    top: size-m(107.5);
    @media screen and (min-width:768px) {
      width: size(237.53);
      left: size(240);
      top: size(284);
    }
  }

  .t2 {
    width: size-m(190.11);
    height: size-m(66.82);
    left: size-m(93.59);
    top: size-m(175.4);
    @media screen and (min-width:768px) {
      width: size(430.94);
      height: size(150.41);
      left: size(242.26);
      top: size(501.99);
    }

    .tt {
      background-image: url(@/section/s1/t2-m.svg);
      @media screen and (min-width:768px) {
        background-image: url(@/section/s1/t2.svg);
      }
    }
  }

  .t3 {
    width: size-m(192.94);
    height: size-m(60.82);
    left: size-m(91.04);
    top: size-m(266.05);
    @media screen and (min-width:768px) {
      width: size(344.71);
      height: size(48.06);
      left: size(240);
      top: size(704.72);
    }

    .tt {
      background-image: url(@/section/s1/t3-m.svg);
      @media screen and (min-width:768px) {
        background-image: url(@/section/s1/t3.svg);
      }
    }
  }

  .logo {
    width: size-m(293.38);
    height: size-m(71.24);
    left: size-m(41.66);
    top: size-m(394);
    @media screen and (min-width:768px) {
      width: size(708);
      height: size(171.92);
      left: size(1027);
      top: size(235);
    }

    .tt {
      background-image: url(@/section/s1/logo.svg);
    }
  }

  .line1 {
    width: size-m(294.75);
    height: size-m(1);
    left: size-m(40);
    top: size-m(484.88);
    background: #26694D;
    @media screen and (min-width:768px) {
      width: size(3);
      height: size(713);
      left: size(960);
      top: size(235);
    }
  }

  .line2 {
    width: size-m(294.75);
    height: size-m(1);
    left: size-m(40);
    top: size-m(633.15);
    background: #26694D;
    @media screen and (min-width:768px) {
      width: size(775);
      height: size(3);
      left: size(960);
      top: size(832);
    }
  }

  .title {
    width: size-m(299.02);
    height: size-m(129.25);
    left: size-m(37.69);
    top: size-m(493.22);
    @media screen and (min-width:768px) {
      width: size(716);
      height: size(313);
      left: size(1025);
      top: size(469);
    }

    .tt {
      background-image: url(@/section/s1/title.svg);
    }
  }

  .comingsoon {
    width: size-m(166.68);
    height: size-m(17.4);
    left: size-m(40);
    top: size-m(657.02);
    @media screen and (min-width:768px) {
      width: size(392);
      height: size(40);
      left: size(1025);
      top: size(901);
    }

    &>div {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-family: 'Noto Serif TC';
      font-weight: 600;
      font-size: size-m(12);
      line-height: size-m(17);
      @media screen and (min-width:768px) {
        font-size: size(27);
        line-height: size(38);
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: size-m(101);
        width: size-m(1);
        height: size-m(10);
        background: #39684F;
        transform: translate(0, -50%);
        @media screen and (min-width:768px) {
          left: size(214 + 29);
          width: size(1);
          height: size(24);
        }
      }
    }

    .c1 {
      letter-spacing: 0.03em;
    }

    .c2 {
      letter-spacing: 0.23em;
    }
  }

  .order-btn {
    width: size-m(107);
    height: size-m(22);
    left: size-m(228.32);
    top: size-m(654.51);
    background: #0A1611;
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(22);
    text-align: center;
    letter-spacing: 0.21em;
    color: #FFFFFF;
    cursor: pointer;
    transition: all .5s;
    @media screen and (min-width:768px) {
      width: size(254.64);
      height: size(54.95);
      left: size(1480);
      top: size(892);
      font-size: size(23);
      line-height: size(54.95);
    }

    &:hover {
      background: #39684F;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
// import { inject } from 'vue';
const props = defineProps({
  smallScrollBar: {
    type: Object
  }
});
// const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  props.smallScrollBar.scrollIntoView(document.querySelector(el));
}
</script>
