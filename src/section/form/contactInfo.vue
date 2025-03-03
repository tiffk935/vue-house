<template>
  <div class="contact-info mx-auto flex flex-col items-center justify-between">
    <!-- <div class="border absolute"></div> -->
    <!-- <div class="logo"></div> -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center rounded-none" @click="modalOpen = true; modalType = 'phone'">
        <div class="flex justify-center items-center">
          <img src="@/section/form/phone.svg" alt="phone" srcset="" />
          <div>來電預約</div>
        </div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none" @click="modalOpen = true; modalType = 'fb'">
        <div class="flex justify-center items-center">
          <img src="@/section/form/messenger.svg" alt="messenger" srcset="" />
          <div>FB 諮詢</div>
        </div>
      </div>
      <div class="flex contact-item justify-center items-center rounded-none btfanpage" @click="open()">
        <div class="flex justify-center items-center">  
          <img src="@/section/form/fb.svg" alt="fb" srcset="" />
          <div>前往粉絲專頁</div>
        </div>
      </div>
    </div>
    <div class="address-wrap flex justify-center w-full contact-item-box no-gap md:rounded-none overflow-hidden">
      <div class="flex contact-item justify-between items-center address">
        <div><span v-html="info.address"></span></div>
      </div>
      <div class="flex contact-item justify-center items-center md:rounded-none" @click="modalOpen = true; modalType = 'gmap'">
        <div class="flex justify-center items-center">
          <img src="@/section/form/gmap.svg" alt="gmap" srcset="" />
          <div>導航 GoogleMap</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-[#C9A063] mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="phone" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="messenger" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="pen" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="gmap" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-[#931F1C] border-0 text-white mt-12 hover:bg-[#6f1412]" @click="go()" v-bind:class="{
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

.bg-color1{background-color: #E5005C;}
.hover\:bg-color2:hover{background-color:#a00040;}

.contact-info {
  width: 965px;
  position: relative;
  @media screen and (max-width:1040px) {
    width: 680px;
  }

  .logo {
    width: 19.1145833333vw;
    height: 8.9583333333vw;
    background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    //margin-bottom: size(40);
    margin-bottom: size(20);
  }

  .contact-item-box {
    position: relative;
    display: table;
    border-collapse: collapse;

    &.address-wrap {
      // margin-top: size(20);

      .contact-item {
        border-top: none;
      }

      &>div:nth-child(2) {
        // background: #666666;
        color: #fff;

        &:hover {
          background: #303640;
          color: #fff;
        }

        img {
          filter: brightness(0) invert(1);
        }
      }
    } 

    .contact-item {
      display: table-cell;
      vertical-align: middle;
      // background-color: #fff;
      border: 1px solid #fff;
      color: #fff;
      width: 33.3333%;
      padding: 0 size(40);
      // font-size: size(16);
      font-size: 0.875rem;
      line-height: 3.8;
      letter-spacing: 0.1em;
      // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: #303640;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
          // filter: invert(20%) sepia(21%) saturate(6267%) hue-rotate(343deg) brightness(92%) contrast(96%);
        }
      }

      img {
        max-width: 20px;
        height: auto;
        max-height: 20px;
        transition: all .5s;
        filter: brightness(0) invert(1);
        // filter: invert(20%) sepia(21%) saturate(6267%) hue-rotate(343deg) brightness(92%) contrast(96%);
        margin-right: size(10);
      }

      &.address {
        // background-color: #fff;
        color: #fff;
        z-index: 0;
        position: relative;
        max-width: 9999px;
        justify-content: center;
        border-color: #fff;
        width: 66.666%;

        &:hover {
          cursor: auto;
          background: none;
        }

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: #fff;
          left: calc(100% - 4em);
          z-index: -1;
          display: none;
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{filter: invert(12%) sepia(69%) saturate(4692%) hue-rotate(348deg) brightness(87%) contrast(86%);
  //用這個工具變顏色 https://www.zhangxinxu.com/sp/filter.html 
  }
}

@media screen and (max-width:768px) {
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
      background-color: #981F23;
      font-size: size-m(14);
      font-weight: 400;
      color: #C9A063;

      img {
        margin-bottom: size-m(5);
        max-width: size-m(16.5);
        height: auto;
        max-height: size-m(16.5);
        filter: invert(93%) sepia(52%) saturate(1331%) hue-rotate(306deg) brightness(83%) contrast(89%);
      }

    }
  }

  .contact-info {
    width: size-m(375);
    height: auto;
    padding: size-m(68) size-m(32);
    // margin-top: size-m(60);
    position: relative;
    justify-content: flex-start;

    // .border {
    //   top: size-m(13);
    //   bottom: size-m(13);
    //   left: size-m(9);
    //   right: size-m(10);
    //   border: size-m(8) solid #e6c57c;
    // }

    .logo {
      width: size-m(258);
      height: size-m(87.68);
      //background-image: url("@/section/form/logo.svg");
      margin-bottom: size-m(39);
    }

    .contact-item-box {
      position: relative;
      gap: size-m(20);
      flex-direction: column;
      display: flex;

      &.address-wrap {
        // border-radius: size-m(50);
        margin-top: size-m(20);
        // border: size-m(4) solid #e6c57c;
      }

      .contact-item {
        padding: 0 size-m(65);
        font-size: size-m(16);
        max-width: 100%;
        justify-content: space-around;
        display: flex;
        width: 100%;

        img {
          max-width: size-m(27);
          height: auto;
          max-height: size-m(27);
        }

        &.address {
          padding: size-m(20) 0;
          width: 100%;
          border-top: 1px solid #fff;

          &::before {
            width: 100%;
            height: 100%;
            // bottom: -50%;
            left: 0;
          }

          div {
            line-height: 1.3;
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