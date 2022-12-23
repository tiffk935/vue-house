<template>
  <section class="s7 relative">
    <img class="bg absolute hidden md:block" src="@/section/s6/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s6/bg-m.png" />
    <div class="tabs absolute">
      <div 
        :class="{'tk-tab': true, active: activeTab === 1}"
        @click="activeTab = 1"
      >
        <span>33</span>坪 鈔值居
      </div>
      <div 
        :class="{'tk-tab': true, active: activeTab === 2}"
        @click="activeTab = 2"
      >
        <span>42</span>坪 團圓居
      </div>
    </div>

    <transition>
      <div v-if="activeTab === 1">
        <div class="text absolute" data-aos="fade-up" data-aos-delay="0">
          <div class="t1">超CP 大三房</div>
          <div class="content">
            買房成家輕鬆圓夢，邊間正3 房採光視野佳，<br>
            景觀大客廳、前後大陽台，結構柱外推，無虛
            坪走道，最高坪效格局規劃，收納好簡單。
          </div>
        </div>
        <img class="floor absolute" src="@/section/s7/floor1.png" />
        <div class="vr absolute">
          <img src="@/section/s7/vr1.jpg" />
          <div class="mask">
            <div class="flex justify-center items-end text-white absolute">
              <div>
                <span>A9</span> 樣品屋
              </div>
              <a class="tk-link" target="_blank" href="https://vr333.8sms.tw/">請點擊VR實境看房</a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition>
      <div v-if="activeTab === 2">
        <div class="text absolute" data-aos="fade-up" data-aos-delay="0">
          <div class="t1">超餘裕 正四房</div>
          <div class="content">
            豪宅方正格局規劃、雙衛浴設計，開放式大廚<br />
            房空間，客餐廳區域規劃，完美凝聚家的核<br />
            心，溫馨又舒適。
          </div>
        </div>
        <img class="floor absolute" src="@/section/s7/floor2.png" />
        <div class="vr absolute">
          <img src="@/section/s7/vr2.jpg" />
          <div class="mask">
            <div class="flex justify-center items-end text-white absolute">
              <div>
                <span>B2</span> 樣品屋
              </div>
              <a class="tk-link" target="_blank" href="https://vr336.8sms.tw/">請點擊VR實境看房</a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="line1 absolute hidden md:block"></div>
    <div class="line2 absolute hidden md:block"></div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(667);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(900);
  }

  .v-enter-active, .v-leave-active {
    transition: opacity .4s;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1;
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .tabs {
    width: size-m(280);
    top: size-m(43);
    left: size-m(52);
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      width: size(351);
      top: size(212);
      left: size(1398);
    }

    .tk-tab {
      color: #000;
      opacity: 0.5;
      transition: opacity .2s;
      font-size: size-m(20);
      font-family: 'Noto Serif TC';
      font-weight: 700;
      cursor: pointer;
      position: relative;
      @media screen and (min-width:768px) {
        font-size: size(24);
      }

      &:hover {
        opacity: 1;
      }

      &:after {
        content: "";
        position: absolute;
        top: 1vw;
        left: 0;
        width: 100%;
        height: size-m(16);
        background-image: url(@/section/s7/tab-arrow.svg);
        transform: translateY(-100%);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        opacity: 0;
        @media screen and (min-width:768px) {
          top: 0.7vw;
          height: size(16);
        }
      }

      span {
        font-size: size-m(25);
        @media screen and (min-width:768px) {
          font-size: size(36);
        }
      }

      &.active, &.active:after {
        opacity: 1;
      }
    }
  }

  .text {
    width: 100%;
    padding: 0 size-m(30);
    top: size-m(106);
    left: 0;
    text-align: center;
    @media screen and (min-width:768px) {
      width: size(379);
      top: size(376);
      left: size(1388);
      padding: 0;
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 800;
      font-size: size-m(25);
      line-height: size-m(17.5);
      margin-bottom: size-m(21);
      @media screen and (min-width:768px) {
        font-size: size(36);
        line-height: size(42.48);
        margin-bottom: size(19);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: size-m(19.5);
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(28.62);
      }
    }
  }

  .floor {
    width: size-m(258);
    top: size-m(218);
    left: size-m(58);
    @media screen and (min-width:768px) {
      width: size(344);
      top: size(544);
      left: size(1401);
    }
  }

  .vr {
    width: 100%;
    height: size-m(263.55);
    bottom: 0;
    left: 0;
    @media screen and (min-width:768px) {
      width: size(1282);
      height: 100%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mask {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: size-m(52);
      background: rgba(0,0,0,0.6);
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: 700;
      font-size: size-m(20);
      line-height: 1;
      @media screen and (min-width:768px) {
        height: 100%;
        font-size: size(37.71);
        transition: height .4s;
      }

      .flex {
        width: 100%;
        top: 50%;
        transform: translate(0, -50%);
      }

      span {
        font-size: size-m(30);
        @media screen and (min-width:768px) {
          font-size: size(56.57);
        }
      }

      .tk-link {
        font-family: 'Noto Sans TC';
        font-weight: 500;
        font-size: size-m(15);
        letter-spacing: 0.01em;
        color: #DC8039;
        margin-left: size-m(39);
        position: relative;
        @media screen and (min-width:768px) {
          font-size: size(20);
          margin-left: size(47);
          margin-bottom: size(8.7);
        }

        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: size-m(-22 - 7);
          transform: translate(0, -50%);
          width: size-m(22);
          height: size-m(13.09);
          background-image: url(@/section/s7/vr-arrow.svg);
          background-repeat: no-repeat;
          background-size: contain;
          @media screen and (min-width:768px) {
            left: size(-24 - 7);
            width: size(24);
            height: size(16);
          }
        }
      }
    }

    &:hover .mask {
      @media screen and (min-width:768px) {
        height: 15%;
      }
    }

  }

  .line1, .line2 {
    width: size(379);
    height: size(6);
    top: size(281);
    left: size(1385);
    background: #DC8039;
  }

  .line2 {
    top: size(805);
  }
}

</style>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    }
  },
};
</script>