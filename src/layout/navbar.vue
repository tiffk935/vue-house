<template>
    <div class="top-nav hidden md:block font-['Noto_Serif_TC']">
        <div class="top-nav-inner">
            <div class="links">
                <div 
                    class="link-item"
                    v-for="item, in info.navList"
                    :data-sec="item.target"
                    @click="scrollTo(item.target)"
                    :key="item"
                >
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="nav-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="nav-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img//form/messenger.svg" alt="messenger" srcset="" />
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
      <div class="btn btn-lg bg-[#560048] border-0 text-white mt-12" @click="go()" v-bind:class="{
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

.top-nav {
    position: fixed;
    top: size(35);
    right: 0;
    width: size(1168);
    height: size(63);
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 15.01%);
    z-index: 99;
    padding: 0 0 0 size(99);
    transform: translateX(100%);

    .top-nav-inner {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        width: size(110);
        cursor: pointer;
    }

    .links {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .link-item {
            color: #008D87;
            font-weight: 700;
            font-size: size(24);
            line-height: 100%;
            cursor: pointer;
            flex: 1;
            text-align: center;
            border-right: size(1) solid #008D87;

            &:last-child {
                border: none;
            }
        }
    }
}
</style>

<script setup>
import { inject, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

const modalOpen = ref(false);
const modalType = ref('');
const menuOpen = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const higherScreen = ref(false)

const scrollPos = ref(0)

onMounted(() => {
    const ratio = window.innerHeight / window.innerWidth

    if (!globals.$isMobile() && ratio > 0.46875) {
        higherScreen.value = true
    }

    window.addEventListener('scroll', (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollPos.value = scroll
    });
})


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
    smoothScroll({
        scrollTo: document.querySelector(el)
    })
    menuOpen.value = false;
}

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
</script>