<template>
  <div id="enter">
    <swiper
      :modules="modules"
      loop
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
    >
      <swiper-slide>
        <div class="item">
          <div class="pic">
            <img src="@/assets/home/banner/img-m.webp" />
          </div>
          <div class="info">
            <div>
              <img src="@/assets/enter/txt1-m.svg" />
              <!-- <div class="enter-btn" @click="props.setShowEnterSection(false)">點擊了解更多</div> -->
              <RouterLink class="enter-btn" to="/gem">點擊了解更多</RouterLink>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="pic">
            <img class="mob" src="@/assets/vision/banner/img-m.webp" />
            <img class="pc" src="@/assets/enter/img1.webp" />
          </div>
          <div class="info">
            <div>
              <img src="@/assets/enter/txt2-m.svg" />
              <RouterLink class="enter-btn" to="/vision">點擊了解更多</RouterLink>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="inline">
      <div class="item-wrapper">
        <div class="item">
          <div class="pic">
            <img class="mob" src="@/assets/home/banner/img-m.webp" />
            <img class="pc" src="@/assets/enter/img1.webp" />
          </div>
          <div class="info">
            <div>
              <img src="@/assets/enter/txt1-m.svg" />
              <!-- <div class="enter-btn" @click="props.setShowEnterSection(false)">點擊了解更多</div> -->
              <RouterLink class="enter-btn" to="/gem">點擊了解更多</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="item-wrapper">
        <div class="item">
          <div class="pic">
            <img class="mob" src="@/assets/vision/banner/img-m.webp" />
            <img class="pc" src="@/assets/enter/img2.webp" />
          </div>
          <div class="info">
            <div>
              <img src="@/assets/enter/txt2-m.svg" />
              <RouterLink class="enter-btn" to="/vision">點擊了解更多</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

#enter {
  position: fixed;
  top: func.size-m(74);
  left: 0;
  width: 100%;
  height: calc(100% - func.size-m(74));
  background: #fff;
  background-image: url(@/assets/enter/bg-m.webp);
  background-size: 100% auto;
  background-position: center;
  z-index: 998;
  @media screen and (min-width:768px) {
    top: func.size(165);
    height: calc(100% - func.size(165));
  }

  .swiper {
    width: 100%;
    height: 100%;
    @media screen and (min-width:768px) {
      height: 0;
    }
  }

  .inline {
    display: none;
    @media screen and (min-width:768px) {
      height: 100%;
      display: flex;
      position: relative;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: func.size(1);
      height: 100%;
      background: #888888;
    }

    .item-wrapper {
      width: 50%;
      background: #fff;
      background-image: url(@/assets/enter/bg.webp);
      background-size: 100% 100%;
    }
  }

  .item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .pic {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .mob {
        display: block;
        @media screen and (min-width:768px) {
          display: none;
        }
      }

      .pc {
        display: none;
        @media screen and (min-width:768px) {
          display: block;
        }
      }

      img {
        max-width: func.size-m(268);
        max-height: func.size-m(268);
        @media screen and (min-width:768px) {
          max-width: func.size(706.43);
          max-height: func.size(359);
        }
      }
    }

    .info {
      padding: func.size-m(23) 0 func.size-m(20) 0;
      display: flex;
      justify-content: center;
      background: #fff;
      box-shadow: 0px func.size-m(4) func.size-m(24) func.size-m(10) rgba(0, 0, 0, 0.25);
      @media screen and (min-width:768px) {
        padding: func.size(63) 0;
        box-shadow: 0px func.size(4) func.size(24) func.size(10) rgba(0, 0, 0, 0.25);

        & > div {
          display: flex;
          justify-content: center;
        }
      }

      img {
        display: block;
        width: auto;
        height: func.size-m(86);
        margin-bottom: func.size-m(15);
        @media screen and (min-width:768px) {
          height: func.size(117.98);
          margin-right: func.size(46);
          margin-bottom: 0;
        }
      }

      .enter-btn {
        display: block;
        color: #101010;
        text-align: center;
        font-size: func.size-m(15);
        font-weight: 700;
        letter-spacing: .26em;
        text-indent: .26em;
        padding: func.size-m(12) func.size-m(70);
        border: func.size-m(1) solid #040000;
        text-decoration: none;
        cursor: pointer;
        transition: all .2s;
        @media screen and (min-width:768px) {
          font-size: func.size(20);
          padding: func.size(45) func.size(52);
          border: func.size(1) solid #040000;
        }

        &:hover {
          background: #1D9C67;
          color: #fff;
          border-color: #1D9C67;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const modules = ref([Autoplay]);
const swiperRef = ref();
const props = defineProps(['setShowEnterSection']);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>