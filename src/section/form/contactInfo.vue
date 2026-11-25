<template>
  <div class="contact-info mx-auto flex flex-col items-center justify-between">
    <!-- <div class="border absolute"></div> -->
    <!-- <div class="logo"></div> -->
    <!-- 寬度設定參考 j莫 新版：上排 3 欄平均，下排 地址:導航 = 2:1 -->
    <div class="contact-row">
      <div class="flex contact-item justify-center items-center rounded-none" v-if="info.phone" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="夢公園" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none" v-if="info.fbMessage" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="夢公園" srcset="" />
        <div>FB 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none btfanpage" v-if="info.fbLink" @click="open()">
        <img src="@/section/form/fb.svg" alt="夢公園" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="contact-row bottom" v-if="info.address">
      <div class="flex contact-item items-center address">
        <div>接待中心：<br class="md:hidden"><span v-html="info.address"></span></div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap" @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="夢公園" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" v-if="info.phone"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="夢公園" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="夢公園" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="夢公園" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="夢公園" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="夢公園" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="夢公園" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="夢公園" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4" v-html="modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `接待中心：${info.address}`"></div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1  border-0 text-white mt-12 hover:bg-color2" @click="go()" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
            '開啟導航'
        }}</div>
    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// ── 寬度設定（參考 j莫 新版）──────────────────────
$gap: 15px;

.contact-info {
  width: min(1200px, 95%);
  margin: 0 auto;
  padding: size(68) 0 size(50) 0;
  gap: $gap;
  position: relative;

  .contact-row {
    display: grid;
    width: 100%;
    gap: $gap;
    grid-template-columns: repeat(3, 1fr); // 上排 3 欄平均寬

    .contact-item {
      background-color: transparent;
      border: 1px solid #fff;
      color: #ffffff;
      width: 100%;
      padding: 0 1em;
      font-size: 16px;
      line-height: 3.8;
      letter-spacing: 0.1em;
      white-space: nowrap;
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: #303640;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        width: 1.65em;
        height: 1.65em;
        object-fit: contain;
        flex-shrink: 0;
        transition: all .5s;
        filter: brightness(0) invert(1);
        margin-right: 0.6em;
      }
    }

    &.bottom {
      gap: 0;
      grid-template-columns: 2fr 1fr; // 地址:導航 = 2:1

      .contact-item.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        justify-content: center;
        white-space: normal;
        text-align: center;
        cursor: default;

        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
}

@media screen and (max-width:768px) {
  .mo-contact-info {
    z-index: 49;
    position: fixed;
    bottom: 0;
    left: 0;
    width: size-m(375);
    height: size-m(63);
    gap: size-m(1);

    .contact-item {
      height: 100%;
      background-color: #0c0c24;
      font-size: size-m(16);
      font-weight: 400;
      color: #fff;

      img {
        margin-bottom: size-m(5);
        max-width: size-m(16.5);
        height: auto;
        max-height: size-m(16.5);
        filter: brightness(0) invert(1);
      }

    }
  }

  .contact-info {
    width: size-m(310);
    padding: size-m(50) 0;

    .contact-row {
      grid-template-columns: 1fr;
      gap: 12px;

      .contact-item {
        position: relative;
        justify-content: center;

        img {
          position: absolute;
          left: 3em;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &.bottom {
        grid-template-columns: 1fr;
        gap: 0;

        .contact-item.address {
          padding: 0;

          div {
            line-height: 1.3;
          }
        }
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>