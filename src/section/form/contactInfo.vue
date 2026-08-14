<template>
  <div>
  <div class="contact-info-img relative">
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
   <!--    --><div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div>
    <div class="flex justify-between w-full contact-item-box">
      <div
  class="flex contact-item justify-center items-center"
 @mousemove="handleMouseMove"
@mouseenter="handleMouseEnter"
@mouseleave="handleMouseLeave"
  @click="modalOpen = true; modalType = 'phone'"
  v-if="info.phone">
        <img src="@/section/icon/line-md_phone-filled.svg" alt="電話" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div
  class="flex contact-item justify-center items-center"
  @mousemove="handleMouseMove"
@mouseenter="handleMouseEnter"
@mouseleave="handleMouseLeave"
  @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/icon/ri_messenger-line.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
     <div
  class="flex contact-item justify-center items-center btfanpage"
  @mousemove="handleMouseMove"
@mouseenter="handleMouseEnter"
@mouseleave="handleMouseLeave"
  @click="open()">
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
    <div v-if="$isMobile()" class="mo-contact-info">
    <div class="flex  flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="@/section/icon/line-md_phone-filled.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex  flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/icon/ri_messenger-line.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex  flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
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
  width: clamp(768px, 90vw, 1000px);
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
  position: relative;
  overflow: hidden;

  border-radius: 12px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);

  // 原本透白
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.178) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  box-shadow:
    1.127px 4.508px 43.168px 0 rgba(255, 255, 255, 0.2) inset;

  backdrop-filter: blur(2.3105762004852295px);

  color: #fff;

  width: 100%;
  flex: 1;

  padding: 1.1em 0;

  line-height: 1.6;
  letter-spacing: 0.05em;

  z-index: 1;
  cursor: pointer;


  // =================================
  // 藍色覆蓋層
  // =================================

   &::before {
    content: "";
    position: absolute;
    inset: 0;

    background:
      radial-gradient(
        ellipse at 36% -20%,
        rgba(233, 63, 255, 0.72) 0%,
        rgba(178, 105, 220, 0.55) 12%,
        rgba(54, 120, 210, 0.38) 48%,
        transparent 78%
      ),

      radial-gradient(
        ellipse at -100% 100%,
        rgba(88, 147, 255, 0.62) 18%,
        rgba(30, 115, 205, 0.38) 52%,
        transparent 80%
      ),

      radial-gradient(
        ellipse at 180% 120%,
        rgba(190, 55, 210, 0.55) 0%,
        rgba(80, 145, 255, 0.42) 24%,
        rgba(0, 105, 175, 0.28) 55%,
        transparent 82%
      ),

      #064875;

    z-index: 0;
    pointer-events: none;

    clip-path: circle(
      0% at
      var(--mouse-x, 50%)
      var(--mouse-y, 50%)
    );

    // 滑入動畫
    transition:
      clip-path 0.4s cubic-bezier(
        0.5,
        1,
        0.1,
        1
      );
  }

  // 滑入
  &.is-hover::before {
    clip-path: circle(
      150% at
      var(--mouse-x)
      var(--mouse-y)
    );
  }

  // ★ 滑出快速消失
  &:not(.is-hover)::before {
    transition: clip-path 0.03s ease-in-out;
  }

  img,
  div {
    position: relative;
    z-index: 1;
  }



  // =================================
  // Hover
  // =================================

  &.is-hover::before {
    clip-path: circle(
      150% at
      var(--mouse-x)
      var(--mouse-y)
    );
  }


  // =================================
  // 文字 / icon
  // =================================

  img,
  div {
    position: relative;
    z-index: 1;
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
@media screen and (max-width: 768px) {

  .mo-contact-info {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 80px;

  /* ★ 固定三欄橫排 */
  display: grid !important;
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: 1fr;

  justify-content: center;
  align-items: center;

  column-gap: clamp(20px, 80vw, 40px);

    box-sizing: border-box;

    background-blend-mode: darken;
    backdrop-filter: blur(5.6px);

    background:
      radial-gradient(
        ellipse 200% 220% at 35% -10%,
        #3361dfc4 2%,
        rgba(135, 54, 146, 0.747) 15%,
        rgb(19, 44, 77) 30%,
        transparent 85%
      ),
      radial-gradient(
        ellipse 80% 180% at -10% 110%,
        rgba(60, 110, 190, 0.5) 0%,
        rgba(0, 55, 100, 0.6) 45%,
        transparent 80%
      ),
      radial-gradient(
        ellipse 80% 180% at 80% 70%,
        rgb(81, 125, 207) 0%,
        rgba(0, 55, 100, 0.6) 45%,
        transparent 80%
      );

    overflow: hidden;
    isolation: isolate;


    /* noise */
    &::after {
      content: "";
      position: absolute;
      inset: 0;

      pointer-events: none;
      z-index: 0;

      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");

      opacity: 1;
      mix-blend-mode: soft-light;
    }


    /* =========================
       三個按鈕
       ========================= */

    .contact-item {
  position: relative;
  z-index: 1;

  width: sizem(70px);
  min-width: 0;
  max-width: none;

  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  font-size: sizem(16px);
  font-weight: 400;
  color: #fff;

  background: transparent;
  border: 0;
  box-shadow: none;
  backdrop-filter: none;

  img {
    position: static;

    width: sizem(27px);
    height: sizem(27px);

    max-width: sizem(27px);
    max-height: sizem(27px);

    margin: 0 0 sizem(5px) 0;

    transform: none;

    filter: brightness(0) invert(1);
  }

  div {
    text-indent: 0;
    white-space: nowrap;
  }
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
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.178) 0%, rgba(255, 255, 255, 0.05) 100%);
        box-shadow: 1.127px 4.508px 43.168px 0 rgba(255, 255, 255, 0.2) inset;
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

let mouseAnimation = null

const mouseState = new WeakMap()

const handleMouseEnter = (e) => {
  const item = e.currentTarget

  item.classList.add("is-hover")

  const rect = item.getBoundingClientRect()

  mouseState.set(item, {
    targetX: e.clientX - rect.left,
    targetY: e.clientY - rect.top,

    x: e.clientX - rect.left,
    y: e.clientY - rect.top,

    vx: 0,
    vy: 0,

    stretch: 1
  })

  startMouseAnimation()
}

const handleMouseLeave = (e) => {
  const item = e.currentTarget

  item.classList.remove("is-hover")

  const state = mouseState.get(item)

  if (!state) return

  state.leaving = true
}

const handleMouseMove = (e) => {
  const item = e.currentTarget
  const rect = item.getBoundingClientRect()

  const state = mouseState.get(item)

  if (!state) return

  state.targetX = e.clientX - rect.left
  state.targetY = e.clientY - rect.top
}

const startMouseAnimation = () => {
  if (mouseAnimation) return

  const animate = () => {
    let hasHover = false

    document.querySelectorAll(".contact-item").forEach((item) => {
      hasHover = true

      const state = mouseState.get(item)

      if (!state) return

      // ★ 慣性追蹤
      const ease = 0.08

      state.vx += (state.targetX - state.x) * ease
      state.vy += (state.targetY - state.y) * ease

      // ★ 阻尼
      state.vx *= 0.72
      state.vy *= 0.72

      state.x += state.vx
      state.y += state.vy

      // ★ 計算移動速度
      const speed = Math.sqrt(
        state.vx * state.vx +
        state.vy * state.vy
      )

      // ★ 速度越快，拉伸越明顯
      const stretch = Math.min(
        1 + speed * 0.06,
        2.2
      )

      state.stretch +=
        (stretch - state.stretch) * 0.18

      // ★ 方向角度
      const angle = Math.atan2(
        state.vy,
        state.vx
      ) * 180 / Math.PI

      const rect = item.getBoundingClientRect()

const mouseX =
  (state.x / rect.width) * 100

const mouseY =
  (state.y / rect.height) * 100

item.style.setProperty(
  "--mouse-x",
  `${mouseX}%`
)

item.style.setProperty(
  "--mouse-y",
  `${mouseY}%`
)

      item.style.setProperty(
        "--stretch",
        state.stretch
      )

      item.style.setProperty(
        "--angle",
        `${angle}deg`
      )
    })

    if (hasHover) {
      mouseAnimation = requestAnimationFrame(animate)
    } else {
      mouseAnimation = null
    }
  }

  

  mouseAnimation = requestAnimationFrame(animate)
}



</script>