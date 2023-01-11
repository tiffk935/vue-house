<template>
  <div class="contact-info mx-auto flex flex-col items-center justify-between">
    <!-- <div class="border absolute"></div> -->
    <!-- <div class="logo"></div> -->
    <div class="flex justify-center w-full contact-item-box">
      <div class="flex contact-item justify-center items-center rounded-full" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="宗大青田" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-full" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="宗大青田" srcset="" />
        <div>FB 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-full btfanpage" @click="open()">
        <img src="@/section/form/fb.svg" alt="宗大青田" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="address-wrap flex justify-center w-full contact-item-box md:rounded-full overflow-hidden">
      <div class="flex contact-item justify-between items-center address">
        <div class="hidden md:block">接待中心｜{{ info.address }}</div>
        <div class="md:hidden text-center">
          <div>
            <small>接待中心</small>
            {{ info.address }}
          </div>
        </div>
      </div>
      <div class="flex contact-item justify-center items-center md:rounded-full gmap-item" @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="宗大青田" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.s1s2')">
      <img src="@/section/form/icon-home.svg" alt="宗大青田" srcset="" />
      <!-- <div>預約賞屋</div> -->
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/icon-fb.svg" alt="宗大青田" srcset="" />
      <!-- <div>FB 諮詢</div> -->
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/icon-contactus.svg" alt="宗大青田" srcset="" />
      <!-- <div>撥打電話</div> -->
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/icon-location.svg" alt="宗大青田" srcset="" />
      <!-- <div>地圖導航</div> -->
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="宗大青田" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="宗大青田" srcset="" />
      <!-- <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="宗大青田" srcset="" /> -->
      <svg class="h-12" v-else-if="modalType == 'gmap'" viewBox="0 0 25 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4993 0.00135968C19.4041 0.00135968 25 5.68499 25 12.6981C25 15.2606 24.2532 17.6463 22.9683 19.6405L12.5582 37L2.19364 19.8852C1.95407 19.5318 1.73323 19.1675 1.53113 18.7909L1.51373 18.7596H1.51641C0.551422 16.9584 0 14.8922 0 12.6967C0 5.68363 5.59586 0 12.5007 0L12.4993 0.00135968ZM12.4993 6.95738C15.6205 6.95738 18.1514 9.528 18.1514 12.6981C18.1514 15.8682 15.6205 18.4388 12.4993 18.4388C9.37818 18.4388 6.84726 15.8682 6.84726 12.6981C6.84726 9.528 9.37818 6.95738 12.4993 6.95738Z" fill="#D08421"/>
      </svg>

      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `接待中心：${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1  border-0 text-white mt-12 bg-[#d89038] hover:bg-color2" @click="go()" v-bind:class="{
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
  padding: size(108) size(160) size(108) size(160);
  // margin-top: size(73);
  position: relative;

  .border {
    top: size(21);
    bottom: size(21);
    left: size(23);
    right: size(23);
    border: size(12) solid #D9374B;
  }

  .logo {
    width: size(448.44);
    height: size(152.4);
    background-image: url("@/section/form/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    //margin-bottom: size(40);
    margin-bottom: size(73);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    // &.address-wrap {
    //   border: size(3) solid #D9374B;
    // } 

    .contact-item {
      background-color: #fff;
      color: #000;
      width: 100%;
      padding: 0;
      font-size: size(16);
      line-height: 3.8;
      letter-spacing: 0.1em;
      max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      border: 1px dashed #D08421;
      gap:size(10);

      &:hover {
        background-color: theme('colors.color2');
        color: #fff;

        img {

          filter: brightness(0) invert(1);
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        // filter: brightness(0) invert(1);
        transition: all .5s;
        margin: 0;

      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        max-width: 9999px;
        justify-content: center;
        border-radius: 9999px;

        // &::before {
        //   content: "";
        //   position: absolute;
        //   width: 8em;
        //   height: 100%;
        //   background-color: #eee;
        //   left: calc(100% - 4em);
        //   z-index: -1;
        // }
      }
    }

    .gmap-item {
      background: #D08421;
      color: #fff;
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}

@media screen and (max-width:768px) {
  .mo-contact-info {
    background: rgba(255,255,255,0.6);
    z-index: 49;
    position: fixed;
    bottom: 0;
    left: 0;
    width: size-m(375);
    height: size-m(63);
    // gap: size-m(1);
    border: 1px solid #D08421;
    border-right: none;

    .contact-item {
      height: 100%;
      font-size: size-m(16);
      font-weight: 400;
      color: #fff;
      border-right: 1px solid #D08421;
      line-height: 1;

      img {
        // margin-bottom: size-m(5);
        // max-width: size-m(16.5);
        // height: auto;
        // max-height: size-m(16.5);
        // filter: brightness(0) invert(1);
        width: auto;
        height: size-m(41.37);
        display: block;
      }

    }
  }

  .contact-info {
    width: size-m(375);
    height: auto;
    padding: size-m(50) size-m(32);
    // margin-top: size-m(60);
    position: relative;
    justify-content: flex-start;

    .border {
      top: size-m(13);
      bottom: size-m(13);
      left: size-m(9);
      right: size-m(10);
      border: size-m(8) solid #D9374B;
    }

    .logo {
      width: size-m(258);
      height: size-m(87.68);
      background-image: url("@/section/form/logo.svg");
      margin-bottom: size-m(39);
    }

    .contact-item-box {
      position: relative;
      margin-top: size-m(0);
      gap: size-m(20);
      flex-direction: column;

      &.address-wrap {
        border-radius: size-m(0);
        margin-top: size-m(20);
        // border: size-m(4) solid #D9374B;
      }

      .contact-item {
        padding: 0 size-m(65);
        font-size: size-m(16);
        max-width: 100%;
        justify-content: space-around;
        line-height: 1;
        height: size-m(69);

        img {
          max-width: size-m(27);
          height: auto;
          max-height: size-m(27);
        }

        &.address {
          padding: 0 0;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        small {
          font-size: size-m(12);
          color: #D08421;
          display: block;
          margin-bottom: size-m(8);
        }
      }

      .gmap-item {
        border-radius: 999px;
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
