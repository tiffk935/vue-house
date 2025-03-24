<template>
  <div class="contact-info mx-auto bg-[transparent] flex flex-col items-center justify-between">

    <!-- <div class="logo" data-aos="zoom-in"></div> -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-between md:justify-center items-center" @click="modalOpen = true; modalType = 'phone'">
        <img src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-between md:justify-center items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="//h35.banner.tw/img//form/messenger.svg" alt="messenger" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-between md:justify-center items-center btfanpage" @click="open()">
        <img src="//h35.banner.tw/img//form/fb.svg" alt="fb" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-center w-full contact-item-box no-gap">
      <div class="flex contact-item justify-center items-center address">
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-between md:justify-center items-center googlemap" @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>

  </div>


  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="//h35.banner.tw/img//form/messenger.svg" alt="messenger" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img//form/pen.svg" alt="pen" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input
    type="checkbox"
    v-model="modalOpen"
    id="contact-modal"
    class="modal-toggle"
  />
  <div class="modal -mt-20 md:-mt-72">
    <div
      class="modal-box py-12 relative flex flex-col items-center justify-center"
    >
      <label
        for="contact-modal"
        class="btn btn-sm btn-circle absolute right-4 top-4"
        >✕</label
      >
      <!-- icon -->
      <img
        class="h-12"
        v-if="modalType == 'phone'"
        src="//h35.banner.tw/img//form/phone.svg"
        alt="phone"
        srcset=""
      />
      <img
        class="h-12"
        v-else-if="modalType == 'fb'"
        src="//h35.banner.tw/img//form/messenger.svg"
        alt="messenger"
        srcset=""
      />
      <img
        class="h-12"
        v-else-if="modalType == 'gmap'"
        src="//h35.banner.tw/img//form/gmap.svg"
        alt="gmap"
        srcset=""
      />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">
        {{
          modalType == "phone"
            ? "賞屋專線"
            : modalType == "fb"
            ? "Facebook Messenger"
            : "接待會館"
        }}
      </div>
      <!-- content -->
      <div class="text-md mt-4">
        {{
          modalType == "phone"
            ? info.phone
            : modalType == "fb"
            ? "線上諮詢"
            : `接待中心：${info.address}`
        }}
      </div>
      <!-- btn -->
      <div
        class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2"
        @click="go()"
        v-if="modalType != 'phone'"
        v-bind:class="{
          hidden: modalType == 'phone' && !$isMobile(),
          btlead: modalType == 'fb',
          btsearch: modalType == 'gmap',
          btcontac: modalType == 'phone',
        }"
      >
        {{
          modalType == "phone"
            ? "撥打電話"
            : modalType == "fb"
            ? "立即諮詢"
            : "開啟導航"
        }}
      </div>
      <!-- btn phone -->
      <div
        class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2"
        @click="go()"
        id="phonegtm"
        v-else
        v-bind:class="{
          hidden: modalType == 'phone' && !$isMobile(),
          btlead: modalType == 'fb',
          btsearch: modalType == 'gmap',
          btcontac: modalType == 'phone',
        }"
      >
        {{
          modalType == "phone"
            ? "撥打電話"
            : modalType == "fb"
            ? "立即諮詢"
            : "開啟導航"
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.contact-info {
  // @apply left-1/2 -translate-x-1/2;
  padding: 0;
  position: relative;
  z-index: 50;

  .tree {
    @apply absolute;
    width: size(104);
    left: size(125);
    bottom: 115%;
    animation: an1 5s ease-in-out alternate infinite;
    transform-origin: bottom center;

    @keyframes an1 {
      from {
        transform: skewX(-3deg);
      }

      to {
        transform: skewX(3deg);
      }
    }
  }

  .hill {
    @apply absolute;
    bottom: 100%;
    width: size(1413);
  }

  .logo {
    width: size(361);
    height: size(180);
   /* background-image: url("@/section/s1/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; */
    margin-bottom: size(0);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    .contact-item {
      background: #303C80;
      border: 0;
      color: #fff;
      width: 100%;
      padding: 0 size(55);
      border-radius: 0px;
      font-size: size(16);
      line-height: 3;
      letter-spacing: 0.06em;
      z-index: 1;
      transition: all 0.3s;
      cursor: pointer;
      gap: size(20);

      &:hover {
        background-color: #0a809e;
        color: #fff;

        img {
          filter: brightness(1) invert(1);
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(1) invert(1);

        transition: all 0.5s;
      }

      &.address {
        background-color: #fff;
        border: 0;
        z-index: 0;
        position: relative;
        border-radius: 0px 0 0 0px;
        max-width: 9999px;
        justify-content: center;
        border: 0;
        color: #000;
        border: 1px solid #000000;
        border-right: none;
        @apply basis-2/3 ;
      }

      &.googlemap {
        background: #303C80;
        color: #fff;
        border: 0;
        border: 0;
        gap: size(20);
        border: 1px solid #303C80;
        @apply basis-1/3 ;

        img {
        }

        &:hover {
          background-color: #0a809e;
          color: #fff;

          img {
            filter: brightness(1) invert(1);
          }
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box img{filter:invert(17%) sepia(23%) saturate(3137%) hue-rotate(157deg) brightness(102%) contrast(98%);}
@media screen and (max-width: 768px) {
  .mo-contact-info {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    // background: url("@/section/mo_menu.jpg");
    background-size: cover;

    .contact-item {
      height: 100%;
      background-color: #0D5052;
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-right: 1px solid #fff;

      &:last-child {
        border: 0;
      }

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(1) invert(1);
      }
    }
  }

  .contact-info {
    width: sizem(375);
    height: auto;
    // border-radius: sizem(68);
    padding: sizem(40) sizem(30);
    margin-top: sizem(20);
    position: relative;
    justify-content: space-between;

    .hill {
      @apply absolute;
      bottom: 90%;
      width: 100%;
    }

    .tree {
      @apply absolute;
      width: sizem(89.9);
      left: 10%;
      bottom: 90%;
      animation: an1 5s ease-in-out alternate infinite;
      transform-origin: bottom center;

      @keyframes an1 {
        from {
          transform: skewX(-3deg);
        }

        to {
          transform: skewX(3deg);
        }
      }
    }

    .logo {
      @apply hidden;
      width: sizem(177);
      height: sizem(138.51);
    //  background-image: url("@/section/form/logo.png");
      margin-bottom: sizem(30);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(20);
      flex-direction: column;

      .contact-item {
        padding: 0 sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        border-radius: sizem(0);

        img {
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
        }

        &.address {
          padding: 0 0;
          margin-top: sizem(20);
          // font-size: sizem(12);
          border-radius: sizem(0) sizem(0) 0 0;
          border-right: 1px solid #000;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address + div {
          border-radius: 0 0 sizem(0) sizem(0);
        }
      }

      &.no-gap {
        gap: 0 !important;
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue"
const modalOpen = ref(false)
const modalType = ref("")

const go = () => {
  if (modalType.value == "phone") {
    window.location.href = `tel:${info.phone.replace("-", "")}`
     setTimeout(() => {
       window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == "fb") {
    window.open(info.fbMessage)
  } else if (modalType.value == "gmap") {
    window.open(info.googleLink)
  }
}

const open = () => {
  window.open(info.fbLink)
}

const smoothScroll = inject("smoothScroll")
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el),
  })
}
</script>
