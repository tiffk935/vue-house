<template>
  <div class="contact-info mx-auto flex flex-col items-center justify-between">
    <!--div class="logo"></div-->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center rounded-none" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="艾美新時代" srcset="" />
        <div >{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="艾美新時代" srcset="" />
        <div >FB 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none btfanpage" @click="open()">
        <img src="@/section/form/fb.svg" alt="艾美新時代" srcset="" />
        <div >前往粉絲專頁</div>
      </div>
    </div>
    <div class="address-wrap flex justify-center w-full contact-item-box no-gap md:rounded-none overflow-hidden">
      <div class="flex contact-item justify-between items-center address">
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="艾美新時代" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="艾美新時代" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="艾美新時代" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="艾美新時代" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="艾美新時代" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="艾美新時代" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="艾美新時代" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="艾美新時代" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '品牌形象館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `${info.address}`
      }}</div>
      <!-- btn -->
      <div :id="modalType == 'phone' && $isMobile() ? 'phonegtm' : ''" class="btn btn-lg btn-color  border-0 text-white mt-12 hover:bg-color2" @click="go()" v-bind:class="{
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

.contact-info {
  width: size(1200);
  padding: size(98) size(160) size(56) size(160);
  margin-top: size(73);
  position: relative;

  .logo {
    width: size(492);
    height: size(185);
    background-image: url("@/section/form/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    //margin-bottom: size(40);
    margin-bottom: size(50);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    .contact-item {
      background-color: #135689;
      color: #ffffff;
      width: 100%;
      padding: 0 size(0);
      font-size: size(16);
      line-height: 3.8;
      font-weight:600;
      letter-spacing: 0.1em;
      max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: #022B4A;
        color: #fff;

        img {

          filter: brightness(0) invert(1);
          
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(0) invert(1);
        transition: all .5s;
        margin-right:size(20);
      }

      .btn-color{
       background-color: #135689; 
      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        font-size: size(17);
        font-weight:700;
        position: relative;
        max-width: 9999px;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: #fff;
          left: calc(100% - 4em);
          z-index: -1;
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }

  .address-wrap .contact-item {
    border: none;
    background-color: #135689;
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
      background-color: #80000b;
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
    width: size-m(375);
    height: auto;
    padding: size-m(50) size-m(32);
    margin-top: size-m(0);
    position: relative;
    justify-content: flex-start;

    .logo {
      width: size-m(279);
      height: size-m(105);
      background-image: url("@/section/form/logo.svg");
      margin-bottom: size-m(39);
    }

    .contact-item-box {
      position: relative;
      margin-top: size-m(0);
      gap: size-m(20);
      flex-direction: column;

      &.address-wrap {
        margin-top: size-m(20);
      }

      .contact-item {
        padding: 0 size-m(65);
        font-size: size-m(16);
        max-width: 100%;
        justify-content: space-around;


        img {
          max-width: size-m(27);
          height: auto;
          max-height: size-m(27);
        }

        &.address {
          padding: 0 0;
          font-size: size-m(13);

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
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
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    // setTimeout(() => {
    //   window.location.href = "phoneThanks";
    // }, 1000);
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
