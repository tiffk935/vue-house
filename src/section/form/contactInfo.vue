<template>
  <div class="contact-info">

    <div class="container">
      <div class="contact-item-box">
        <div class="contact-item btn text-white bg-[#C59B6D] flex justify-center items-center"
          @click="modalOpen = true; modalType = 'phone'">
          <img src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
          <div>{{ info.phone }}</div>
        </div>
        <div class="contact-item btn text-white bg-[#C59B6D] flex justify-center items-center"
          @click="modalOpen = true; modalType = 'fb'">
          <img src="//h35.banner.tw/img//form/messenger.svg" alt="messenger" srcset="" />
          <div>FB 諮詢</div>
        </div>
        <div class="contact-item btn text-white bg-[#C59B6D] flex justify-center items-center btfanpage"
          @click="open()">
          <img src="//h35.banner.tw/img//form/fb.svg" alt="fb" srcset="" />
          <div>前往粉絲專頁</div>
        </div>
      </div>
      <div class="address-wrap contact-item-box">
        <div class="address contact-item flex justify-center items-center">
          <div><span>{{ info.address1 }}</span><span v-html="info.address"></span></div>
        </div>
        <div class="contact-item btn text-white bg-[#C59B6D] flex justify-center items-center"
          @click="modalOpen = true; modalType = 'gmap'">
          <img src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
          <div>導航 Google 地圖</div>
        </div>
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
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img//form/messenger.svg" alt="messenger"
        srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
        '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
        `接待中心：${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-[#C59B6D] border-0 text-white mt-12" @click="go()" v-bind:class="{
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
  position: relative;
  padding: size-m(90) 0 size-m(40) 0;

  @media screen and (min-width:768px) {
    padding: size(108) 0 size(51) 0;
  }


  .contact-item-box {
    &:nth-child(1) {
      @media screen and (min-width:768px) {
        display: flex;
        justify-content: space-between;
      }
    }

    .contact-item {
      width: 100%;
      height: size-m(60);
      margin-bottom: size-m(25);
      font-size: size-m(16);
      line-height: 1;
      letter-spacing: .1em;
      border-radius: 0;
      min-height: auto;
      border: none;

      @media screen and (min-width:768px) {
        width: calc(33.333% - size(6.666666));
        height: size(38);
        margin-bottom: 0;
        font-size: size(11);
      }

      img {
        filter: brightness(0) invert(1);
        margin-right: .8em;
        width: auto;
        height: size-m(22);

        @media screen and (min-width:768px) {
          height: size(18);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.address-wrap {
      margin-top: size-m(30);

      @media screen and (min-width:768px) {
        width: 100%;
        display: flex;
        margin-top: size(12);
      }

      .address {
        background: #fff;
        color: #000000;
        margin-bottom: 0;
        letter-spacing: 0;

        @media screen and (min-width:768px) {
          flex: 1;
        }
      }

      .contact-item:nth-child(2) {
        img {
          filter: invert(100%) sepia(13%) saturate(7447%) hue-rotate(200deg) brightness(114%) contrast(114%);
        }
      }
    }
  }
}

.modal-box {
  img {
    filter: invert(95%) sepia(5%) saturate(5644%) hue-rotate(311deg) brightness(82%) contrast(85%);
    //用這個工具變顏色 https://www.zhangxinxu.com/sp/filter.html 
  }
}

.mo-contact-info {
  z-index: 89;
  position: fixed;
  bottom: 0;
  left: 0;
  width: size-m(375);
  height: size-m(63);
  gap: size-m(1);

  .contact-item {
    height: 100%;
    background-color: #C59B6D;
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
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
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