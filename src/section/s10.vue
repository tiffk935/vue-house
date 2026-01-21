<template>
  <section class="s10 user-n w-full relative">
    <Transition>
      <div v-if="roomType === 'room2'" class="room room2 bg-[#E7E7E7] text-[#393939]">
        <div class="md:hidden">
          <div class="t1 text-[#5ACBBD]">雅緻精品 幸福核心</div>
          <div class="t2 text-[#000]">倆房齊美 <br class="md:hidden">好室成雙</div>
        </div>

        <div class="md:flex md:items-center md:justify-end">
          <div class="slider relative">
            <Transition>
              <img v-if="roomType2 === 'A1'" class="block w-full" src="@/section/s10/a1.png" alt="">
            </Transition>
            <Transition>
              <img v-if="roomType2 === 'A2'" class="block w-full" src="@/section/s10/a2.png" alt="">
            </Transition>
            <Transition>
              <img v-if="roomType2 === 'A5'" class="block w-full" src="@/section/s10/a5.png" alt="">
            </Transition>
          </div>

          <div>
            <div class="hidden md:block">
              <div class="t1 text-[#5ACBBD]">雅緻精品 幸福核心</div>
              <div class="t2 text-[#000]">倆房齊美 <br class="md:hidden">好室成雙</div>
              <div class="info">
                <span class="text-[#5ACBBD]">・</span>兩房擁雙衛 如廁不緊張<br>
                <span class="text-[#5ACBBD]">・</span>廣角大客廳 奢華串影音<br>
                <span class="text-[#5ACBBD]">・</span>開放式廚房 共賞品味藏<br>
                <span class="text-[#5ACBBD]">・</span>大工作陽台 生活豐厚滿<br>
                <span class="text-[#5ACBBD]">・</span>王者大主臥 完美私領域
              </div>
            </div>
            
            <div class="controller">
              <div class="prev-btn" @click="clickPrev"></div>
              <div class="types text-[#5ACBBD]">
                <div class="t3">2房格局 傢俱配置參考圖</div>
                <div class="type-tabs">
                  <div class="type-tab" :class="{active: roomType2 === 'A1'}" @click="roomType2 = 'A1'">A1</div>
                  <div class="type-tab" :class="{active: roomType2 === 'A2'}" @click="roomType2 = 'A2'">A2</div>
                  <div class="type-tab" :class="{active: roomType2 === 'A5'}" @click="roomType2 = 'A5'">A5</div>
                </div>
              </div>
              <div class="next-btn" @click="clickNext"></div>
            </div>

            <div class="room-type-tabs flex md:hidden">
              <div class="room-type-tab active" @click="roomType = 'room2'">2房格局</div>
              <div class="room-type-tab" @click="roomType = 'room3'">3房格局</div>
            </div>

            <div class="info md:hidden">
              <span class="text-[#5ACBBD]">・</span>兩房擁雙衛 如廁不緊張<br>
              <span class="text-[#5ACBBD]">・</span>廣角大客廳 奢華串影音<br>
              <span class="text-[#5ACBBD]">・</span>開放式廚房 共賞品味藏<br>
              <span class="text-[#5ACBBD]">・</span>大工作陽台 生活豐厚滿<br>
              <span class="text-[#5ACBBD]">・</span>王者大主臥 完美私領域
            </div>

            <div class="room-type-tabs hidden md:flex">
              <div class="room-type-tab active" @click="roomType = 'room2'">2房格局</div>
              <div class="room-type-tab" @click="roomType = 'room3'">3房格局</div>
            </div>

            <div class="bottom-pic">
              <img class="en w-full block md:hidden" src="@/section/s10/en2-m.svg" alt="">
              <img class="en w-full hidden md:block" src="@/section/s10/en2.svg" alt="">
              <img class="img w-full block md:hidden" src="@/section/s10/img2-m.jpg" alt="">
              <img class="img w-full hidden md:block" src="@/section/s10/img2.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="note text-[#393939]">
          傢俱配置園及裝飾建材設計規畫僅供參考，<br class="md:hidden">
          實際以使用執照圖為準，房地面積以地政機關登記之面積為準。
        </div>
      </div>
    </Transition>

    <Transition>
      <div v-if="roomType === 'room3'" class="room room3 bg-[#5ACBBD] text-white">
        <div class="md:hidden">
          <div class="t1 text-white">經典格局 雋永舒適</div>
          <div class="t2 text-[#000]">三房馥域<br class="md:hidden">富裕成家</div>
        </div>

        <div class="md:flex md:items-center md:justify-end">
          <div class="slider relative">
            <Transition>
              <img v-if="roomType3 === 'A3'" class="block w-full" src="@/section/s10/a3.png" alt="">
            </Transition>
            <Transition>
              <img v-if="roomType3 === 'A6'" class="block w-full" src="@/section/s10/a6.png" alt="">
            </Transition>
            <Transition>
              <img v-if="roomType3 === 'A7'" class="block w-full" src="@/section/s10/a5.png" alt="">
            </Transition>
          </div>

          <div>
            <div class="hidden md:block">
              <div class="t1 text-white">經典格局 雋永舒適</div>
              <div class="t2 text-[#000]">三房馥域 <br class="md:hidden">富裕成家</div>
              <div class="info">
                <span class="text-[#393939]">・</span>面寬大客廳 奢華串影音<br>
                <span class="text-[#393939]">・</span>獨立式廚房 分享式用餐<br>
                <span class="text-[#393939]">・</span>陽台大尺度 家事好幫手<br>
                <span class="text-[#393939]">・</span>臥室皆開窗 風光入室來<br>
                <span class="text-[#393939]">・</span>飯店級衛浴 乾溼極分明
              </div>
            </div>

            <div class="controller">
              <div class="prev-btn" @click="clickPrev"></div>
              <div class="types text-white">
                <div class="t3">3房格局 傢俱配置參考圖</div>
                <div class="type-tabs">
                  <div class="type-tab" :class="{active: roomType3 === 'A3'}" @click="roomType3 = 'A3'">A3</div>
                  <div class="type-tab" :class="{active: roomType3 === 'A6'}" @click="roomType3 = 'A6'">A6</div>
                  <div class="type-tab" :class="{active: roomType3 === 'A7'}" @click="roomType3 = 'A7'">A7</div>
                </div>
              </div>
              <div class="next-btn" @click="clickNext"></div>
            </div>

            <div class="room-type-tabs flex md:hidden">
              <div class="room-type-tab" @click="roomType = 'room2'">2房格局</div>
              <div class="room-type-tab active" @click="roomType = 'room3'">3房格局</div>
            </div>

            <div class="info md:hidden">
              <span class="text-[#393939]">・</span>面寬大客廳 奢華串影音<br>
              <span class="text-[#393939]">・</span>獨立式廚房 分享式用餐<br>
              <span class="text-[#393939]">・</span>陽台大尺度 家事好幫手<br>
              <span class="text-[#393939]">・</span>臥室皆開窗 風光入室來<br>
              <span class="text-[#393939]">・</span>飯店級衛浴 乾溼極分明
            </div>

            <div class="room-type-tabs hidden md:flex">
              <div class="room-type-tab" @click="roomType = 'room2'">2房格局</div>
              <div class="room-type-tab active" @click="roomType = 'room3'">3房格局</div>
            </div>

            <div class="bottom-pic">
              <img class="en w-full block md:hidden" src="@/section/s10/en3-m.svg" alt="">
              <img class="en w-full hidden md:block" src="@/section/s10/en3.svg" alt="">
              <img class="img w-full block md:hidden" src="@/section/s10/img3-m.jpg" alt="">
              <img class="img w-full hidden md:block" src="@/section/s10/img3.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="note text-[#393939]">
          傢俱配置園及裝飾建材設計規畫僅供參考，<br class="md:hidden">
          實際以使用執照圖為準，房地面積以地政機關登記之面積為準。
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.s10 {
  height: size-m(1115);
  @media screen and (min-width:768px) {
    height: size(1000);
  }

  .room {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: size-m(30);
    @media screen and (min-width:768px) {
      padding-top: size(136);
      padding-right: size(90);
    }
  }

  .t1 {
    text-align: center;
    font-size: size-m(18);
    line-height: size-m(22);
    font-weight: 700;
    letter-spacing: .1em;
    margin-bottom: size-m(18);
    @media screen and (min-width:768px) {
      text-align: left;
      font-size: size(28);
      line-height: size(40);
      margin-bottom: size(20);
    }
  }

  .t2 {
    text-align: center;
    font-size: size-m(28);
    line-height: size-m(40);
    font-weight: 700;
    letter-spacing: .1em;
    margin-bottom: size-m(53);
    @media screen and (min-width:768px) {
      text-align: left;
      font-size: size(42);
      line-height: size(50);
      margin-bottom: size(20);
    }
  }

  .slider {
    width: calc(100% - size-m(22));
    height: size-m(277);
    margin: 0 auto size-m(22) auto;
    @media screen and (min-width:768px) {
      width: size(987 * 0.82984);
      height: size(772 * 0.82984);
      margin: 0 size(90) 0 0;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .controller {
    width: size-m(320);
    height: size-m(50);
    margin: 0 auto size-m(37) auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width:768px) {
      width: size(270);
      height: auto;
      margin: 0 0 size(20) 0;
    }

    .prev-btn, .next-btn {
      width: size-m(50);
      height: size-m(50);
      background-image: url('data:image/svg+xml,<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.6094 10.8696L10.8702 24.9992L32.6094 39.1304" stroke="white" stroke-width="2.17391"/><circle cx="25" cy="25" r="23.913" transform="matrix(-1 0 0 1 50 0)" stroke="white" stroke-width="2.17391"/></svg>');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      cursor: pointer;
      @media screen and (min-width:768px) {
        display: none;
      }
    }

    .next-btn {
      background-image: url('data:image/svg+xml,<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3906 10.8696L39.1298 24.9992L17.3906 39.1304" stroke="white" stroke-width="2.17391"/><circle cx="25" cy="25" r="23.913" stroke="white" stroke-width="2.17391"/></svg>');
    }

    .t3 {
      text-align: center;
      font-size: size-m(14);
      line-height: size-m(20);
      font-weight: 700;
      letter-spacing: .1em;
      margin-bottom: size-m(6.9);
      @media screen and (min-width:768px) {
        font-size: size(22);
        line-height: size(32);
        margin-bottom: size(5);
      }
    }

    .type-tabs {
      display: flex;
      justify-content: space-between;
      width: size-m(134);
      margin: 0 auto;
      @media screen and (min-width:768px) {
        width: size(263);
        margin: 0;
      }

      .type-tab {
        color: #fff;
        font-size: size-m(16.6);
        line-height: size-m(24);
        font-weight: 700;
        letter-spacing: .1em;
        cursor: pointer;
        @media screen and (min-width:768px) {
          font-size: size(32);
          line-height: size(46);
        }

        &.active {
          color: #5ACBBD;
        }
      }
    }
  }

  .room-type-tabs {
    width: size-m(262);
    height: size-m(28);
    margin: 0 auto size-m(35) auto;
    @media screen and (min-width:768px) {
      width: size(428);
      height: size(45);
      margin: 0;
    }

    .room-type-tab {
      width: 50%;
      height: 100%;
      background: #5ACBBD;
      color: #fff;
      text-align: center;
      font-size: size-m(13.44);
      font-weight: 700;
      letter-spacing: .1em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: size-m(30);
      cursor: pointer;
      @media screen and (min-width:768px) {
        font-size: size(22);
        border-radius: size(50);
      }

      &:nth-child(1) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:nth-child(2) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }

  .info {
    width: size-m(273);
    padding: size-m(18) size-m(0) size-m(18) size-m(9);
    border: size-m(1) solid #5ACBBD;
    margin: 0 auto size-m(9) auto;
    font-size: size-m(20);
    line-height: size-m(35);
    font-weight: 700;
    letter-spacing: .1em;
    @media screen and (min-width:768px) {
      width: size(370);
      padding: size(20) size(18);
      border: size(1) solid #5ACBBD;
      margin: 0 0 size(157) 0;
      font-size: size(26);
      line-height: size(50);
    }
  }

  .note {
    text-align: center;
    font-size: size-m(8);
    line-height: size-m(12);
    font-weight: 700;
    @media screen and (min-width:768px) {
      font-size: size(14);
      line-height: size(35);
      margin-top: size(56);
    }
  }

  .bottom-pic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    @media screen and (min-width:768px) {
      bottom: size(140);
      width: auto;
    }

    .img {
      @media screen and (min-width:768px) {
        width: size(352);
        position: relative;
        z-index: 1;
      }
    }

    .en {
      margin-bottom: size-m(0.25);
      @media screen and (min-width:768px) {
        margin-bottom: 0;
        position: absolute;
        top: 0;
        right: 0;
        width: size(77);
        max-width: none;
        transform: translateX(98%);
      }
    }
  }

  .room2 {
    .room-type-tabs .room-type-tab.active {
      background: #eee;
      color: #000;
      box-shadow: inset 0 size-m(2.44) size-m(2.44) rgba(0, 0, 0, 0.25);
      @media screen and (min-width:768px) {
        box-shadow: inset 0 size(2.5) size(2.5) rgba(0, 0, 0, 0.25);
      }
    }
  }

  .room3 {
    .controller .type-tabs .type-tab {
      color: #008D87;

      &.active {
        color: #fff;
      }
    }

    .room-type-tabs .room-type-tab {
      background: #fff;
      color: #000;

      &.active {
        background: #008D87;
        color: #fff;
        box-shadow: inset 0 size-m(2.44) size-m(2.44) rgba(0, 0, 0, 0.25);
        @media screen and (min-width:768px) {
          box-shadow: inset 0 size(2.5) size(2.5) rgba(0, 0, 0, 0.25);
        }
      }
    }

    .info {
      border-color: #fff;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
const roomType2Arr = ['A1', 'A2', 'A5'];
const roomType3Arr = ['A3', 'A6', 'A7'];
const roomType = ref('room2');
const roomType2 = ref(roomType2Arr[0]);
const roomType3 = ref(roomType3Arr[0]);

function clickPrev() {
  if (roomType.value === 'room2') {
    let currIdx = roomType2Arr.indexOf(roomType2.value);
    currIdx = currIdx < 0 ? roomType2Arr.length - 1 : currIdx;
    currIdx--;
    currIdx = currIdx < 0 ? roomType2Arr.length - 1 : currIdx;
    roomType2.value = roomType2Arr[currIdx];
  } else if (roomType.value === 'room3') {
    let currIdx = roomType3Arr.indexOf(roomType3.value);
    currIdx = currIdx < 0 ? roomType3Arr.length - 1 : currIdx;
    currIdx--;
    currIdx = currIdx < 0 ? roomType3Arr.length - 1 : currIdx;
    roomType3.value = roomType3Arr[currIdx];
  }
}
function clickNext() {
  if (roomType.value === 'room2') {
    let currIdx = roomType2Arr.indexOf(roomType2.value);
    currIdx = currIdx < 0 ? roomType2Arr.length - 1 : currIdx;
    currIdx++;
    currIdx = currIdx > roomType2Arr.length - 1 ? 0 : currIdx;
    roomType2.value = roomType2Arr[currIdx];
  } else if (roomType.value === 'room3') {
    let currIdx = roomType3Arr.indexOf(roomType3.value);
    currIdx = currIdx < 0 ? roomType3Arr.length - 1 : currIdx;
    currIdx++;
    currIdx = currIdx > roomType3Arr.length - 1 ? 0 : currIdx;
    roomType3.value = roomType3Arr[currIdx];
  }
}
</script>