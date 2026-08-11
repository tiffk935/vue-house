<template>
  <div>
  <div class="contact-info-img relative">
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
   <!--    --><div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div>
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
        <img src="@/section/icon/line-md_phone-filled.svg" alt="電話" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/icon/ri_messenger-line.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center btfanpage" @click="open()">
        <img src="@/section/icon/ic_baseline-facebook.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap address" v-if="info.address">
      <div class="flex contact-item justify-center items-center add">
        <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h35.banner.tw/img/form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>

  </div>
</div>

  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="@/section/icon/line-md_phone-filled.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/icon/ri_messenger-line.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/icon/iCON.svg" alt="立即預約" srcset="" />
      <div>立即預約
      </div>
    </div>
    <!--
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="//h35.banner.tw/img/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  -->
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img/form/messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '預約專線' : modalType == 'fb' ? 'Facebook Messenger' :
      `${info.address2?info.address2:'導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
      `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="modalType != 'phone'" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
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

.bg-color1{background-color: #00312E;}
.hover\:bg-color2:hover{background-color:#002421;}


.contact-info-img{
  height: 0;z-index: 52;
}
.contact-info {
  margin-bottom: 48px;
  padding: 5em 0 2.5em 0;
  position: relative;
  z-index: 50;
  width: size(1000);
  min-width: 750px;
  font-size:18px;

  .logo {position: relative;
    display: none;
    width: size(367);
   // height: size(172);
    // background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(30) auto 0;
    img{width: 100%;}
    .logot{position: absolute;top:31%;left: 0;right: 0;margin: auto;width: 85%;}
  }

  .contact-item-box {
    font-family: "Chiron Hei HK", sans-serif;
    position: relative;
    margin-top:0em;
    gap: 1.8em;
   // width: size(920);
    // min-width: 680px;

    .contact-item {
      
      border-radius: 12px;
border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
background: rgba(255, 255, 255, 0.1);
box-shadow: 1.127px 4.508px 43.168px 0 rgba(255, 255, 255, 0.04) inset;
backdrop-filter: blur(2.3105762004852295px);
      color: #fff;
      width: 100%;
      flex: 1;
      padding: 1.1em 0;
      line-height: 1.6;//3.8
      letter-spacing: 0.05em;
     // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      //border: 1px solid #C29267;
      gap: 1em;

      &:hover {
        background: rgba(0, 62, 143, 0.664);
        color: #fff;

        img {
          filter: invert(0%) sepia(1%) saturate(4%) hue-rotate(348deg) brightness(99%) contrast(101%);
        }
      }

      img {
        max-width: 1.35em;
        height: auto;
        max-height: 1.35em;
        filter: invert(0%) sepia(1%) saturate(4%) hue-rotate(348deg) brightness(99%) contrast(101%);
        transition: all .5s;
        margin: 0;
      }

    }
    &.address {
        display: none;
        background-color: #eee;
        border-radius: 16px;

      .contact-item {
        &.add{
          background: none;
        color: #000;
        cursor: text;
        flex:2.10;

        }
        /*
        background: none;
        z-index: 0;
        position: relative;
        flex:2.17;
        // border-radius: 999px 0 0 999px;
      //  max-width: 9999px;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: transparent;
          left: calc(100% - 4em);
          z-index: -1;
        }
        div{
          text-indent:0em;
          white-space: normal;
          padding: 0 1em;
        }


      &.googlemap {
        flex:1;
  //    background-color: #9B1E44;
      border-left-width: 0;
      //  color: #fff;
      }
    */
    }
    }
    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{filter: invert(0%) sepia(1%) saturate(4%) hue-rotate(348deg) brightness(99%) contrast(101%);
  }
}

@media screen and (max-width:768px) {


  .mo-contact-info {
    
    z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  width: sizem(375);
  height: sizem(63);
  gap: sizem(1);
  background:
    radial-gradient(
      ellipse at 36% -20%,
      #e93fff 0%,
      #9b66b9 10%,
      #003c80 55%,
      transparent 75%
    ),
    radial-gradient(
      ellipse at -100% 100%,
      #5893FF 22%,
      #00446E 55%,
      transparent 75%
    ),
    #00446E;;
  background-blend-mode: multiply;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(5.6px);
   //background:linear-gradient(180deg, #FF8BF3 , #6D1EDB );
    //background:linear-gradient(180deg, #f575a6 , #652ccf );
    // background:linear-gradient(180deg, #b2baff , #781297 );


    .contact-item {
      height: 100%;   
      margin-top: 16px;   
      margin-bottom: 16px;
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-left:1px solid #fff9;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }
      &:first-child{
      border-left:0;}

    }
  }

  .contact-info {
    width: 92%;
    margin-bottom: 32px;
    min-width:0;
    // height: sizem(400);
    // border-radius: sizem(68);
    //padding: sizem(0) sizem(0);
    padding: sizem(80) 0 sizem(80) 0;
    margin-top: sizem(0);
    position: relative;
    justify-content: space-between;
  background-size: sizem(450) auto;

    .logo {
      width: sizem(257);
    margin: sizem(00) auto sizem(50) auto;
     // margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(15);
      flex-direction: column;
    width: sizem(310);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin: 0;

        img {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }
        div{
          text-indent: 2em;
        }
/*
        &.address {
          font-size: sizem(15);
          border-radius: sizem(0) sizem(0) 0 0;
          padding: 1.1em 0;
          margin-top: sizem(25);
          //font-size: .9em;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }
        &.address+div {
          border-radius: 0 0 sizem(0) sizem(0);
        }
      &.googlemap {
        border-top-width: 0;
      border-left-width:0;
      }
*/
      }
      &.address {
        margin:sizem(15) 0 0 0 ;
        .contact-item {
          &.add{text-align: center;
          div{text-indent: 0em;}
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