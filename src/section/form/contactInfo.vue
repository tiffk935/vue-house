<template>
  <div class="contact-info mx-auto flex flex-col items-center justify-between">
    <!-- <div class="border absolute"></div> -->
    <!-- <div class="logo"></div> -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center rounded-none" @click="setModal('phone')">
        <img src="@/section/form/phone.svg" alt="展宜常閑" srcset="" />
        <div class="">{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none" @click="setModal('fb')">
        <img src="@/section/form/messenger.svg" alt="展宜常閑" srcset="" />
        <div class="">FB 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none btfanpage" @click="open()">
        <img src="@/section/form/fb.svg" alt="展宜常閑" srcset="" />
        <div class="">前往粉絲專頁</div>
      </div>
    </div>
    <div class="address-wrap flex justify-between w-full contact-item-box no-gap md:rounded-none overflow-hidden">
      <div class="flex contact-item justify-between items-center address">
        <div v-html="info.address"></div>
      </div>
      <div class="flex contact-item justify-center items-center md:rounded-none" @click="setModal('gmap')">
        <img src="@/section/form/gmap.svg" alt="展宜常閑" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  

  <!-- Modal -->
  


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.contact-info {
  width: size(1200);
  padding: size(68) size(160) size(56) size(160);
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

    &.address-wrap {
      .contact-item:not(.address) {
        background: rgba(128, 175, 147, 0.52);

        &:hover {
          background: rgba(128, 175, 147, 1);
        }
      }

      .address:hover {
        cursor: default;
        background: rgba(82, 109, 88, 0.52);
      }
    } 

    .contact-item {
      background: rgba(82, 109, 88, 0.52);
      color: #fff;
      width: 100%;
      padding: size(22) size(40);
      font-size: size(16);
      line-height: 1.5;
      letter-spacing: 0.1em;
      max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &:hover {
        background: rgba(128, 175, 147, 1);
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(0) invert(1);
        transition: all .5s;
        margin-right: size(15);
      }

      &.address {
        // background-color: #eee;
        // color: #000;
        z-index: 0;
        position: relative;
        max-width: 9999px;
        justify-content: center;

        &:before {
          display: none;
        }

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          // background-color: #eee;
          left: calc(100% - 4em);
          z-index: -1;
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
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
    background-image: url(@/section/form/bg-mo.jpg);
    background-size: cover;

    .contact-item {
      height: 100%;
      font-size: size-m(16);
      font-weight: 400;
      color: #fff;
      border-right: 1px solid #fff;

      &:last-child {
        border-right: none;
      }

      img {
        margin-bottom: size-m(5);
        max-width: size-m(16.5);
        height: auto;
        max-height: size-m(16.5);
        
        // filter: brightness(0) invert(1);
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
        // border-radius: size-m(50);
        margin-top: size-m(20);
        // border: size-m(4) solid #D9374B;
      }

      &.address-wrap>div>div {
        line-height: 1.5;
        padding: size-m(0) 0;
      }

      .contact-item {
        padding: size-m(15) size-m(55);
        font-size: size-m(16);
        max-width: 100%;
        //justify-content: space-around;


        img {
          max-width: size-m(27);
          max-height: size-m(25);
          width: size-m(27);
          height: size-m(27);
          margin-right: size-m(10);
        }

        &.address {
          padding: size-m(15) 0;

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
import { inject, ref, defineProps } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const props = defineProps({
  setModal: {
    type: Function,
  }
})

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

const open = () => {
  window.open(info.fbLink);
}

function setModal(type) {
  props.setModal({
    modalOpen: true,
    modalType: type
  });
}
</script>
