<template>
    <div class="nav"
        v-bind:class="{ 'r16-9': higherScreen }">
        <div class="menu flex flex-col items-center justify-center z-50" v-bind:class="{ open: menuOpen }">
            <div class="menu-inner">
                <div class="menu-item font-bold cursor-pointer text-white" v-for="item, in info.navList"
                    @click="scrollTo(item.target)" :key="item">
                    <span>{{ item.name }}</span>
                </div>
                <div 
                    class="menu-item menu-item-full font-bold cursor-pointer text-white"
                    @click="modalOpen = true; modalType = 'phone'; menuOpen = false;">
                    <span>立即來電</span>
                </div>
                <div 
                    class="menu-item menu-item-full font-bold cursor-pointer text-white"
                    @click="modalOpen = true; modalType = 'gmap'; menuOpen = false;">
                    <span>地圖導航</span>
                </div>
                <div 
                    class="menu-item menu-item-full font-bold cursor-pointer text-white"
                    @click="scrollTo('.order')">
                    <span>立即預約</span>
                </div>
            </div>
        </div>
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <div class="bar z-10"></div>
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
      <div class="btn btn-lg bg-[#666] border-0 text-white mt-12" @click="go()" v-bind:class="{
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

.nav {
    // padding: 0 size(50);
    // height: size(80);
    .menu-btn {
        // position: relative;
        z-index: 1;
        width: size(90);
        height: size(90);
        // background: rgba(139, 199, 130, 0.8);
        position: fixed;
        top: size(0);
        right: size(0);
        // border: 1px solid #fff;
        z-index: 99;

        .bar {
            width: size(38);
            height: 2px;
            background-color: #666;
            // position: relative;
            transform: all .5s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &::after {
                content: '';
                width: 100%;
                height: 2px;
                bottom: -#{size(10)};
                position: absolute;
                background-color: #666;
                transition: all .5s;
            }

            &::before {
                content: '';
                width: 100%;
                height: 2px;
                top: -#{size(10)};
                position: absolute;
                background-color: #666;
                transition: all .5s;
            }
        }

        &:hover {
            .bar {
                &::after {
                    transform: translateX(10%);
                }

                &::before {
                    transform: translateX(-10%);
                }
            }
        }

        &.open {
            p {
                color: #fff;
            }

            .bar {
                height: 0;

                &::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    bottom: 50%;
                    margin-bottom: -1px;
                    position: absolute;
                    background-color: #fff;
                    transition: all .5s;
                    transform: rotate(135deg);
                }

                &::before {
                    content: '';
                    width: 100%;
                    height: 2px;
                    top: 50%;
                    margin-top: -1px;
                    position: absolute;
                    background-color: #fff;
                    transition: all .5s;
                    transform: rotate(-135deg);
                }
            }
        }
    }

    .menu {
        position: fixed;
        top: size(0);
        right: size(0);
        /* background-color: rgba(139, 199, 130, 0.8); */
        background: #6a1684 ;
        background: linear-gradient(90deg, #6a1684  0%, #450957  100%);
        backdrop-filter: blur(2px);
        width: size(375);
        height: 100%;
        z-index: 99;
        transform: translateX(100%);
        transition: all .5s;
        padding: size(100) 0;
        gap: size(20);

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(@/section/form/bg.svg);
            background-size: cover;
            z-index: -1;
        }

        .menu-item {
            text-align: center;
            margin-bottom: size(20);

            &:last-child {
                margin-bottom: 0;
            }
            
            span {
                font-size: size(18);
                line-height: size(47);
                width: 100%;
                display: block;
                white-space: nowrap;
            }
        }

        .menu-item-full {
            background: #fff;
            color: #6a1684;
            width: size(232);
            padding: 0;
        }

        &.open {
            transform: translateX(0);
        }
    }

    // &.r16-9 {
    //     background-color: transparent;

    //     .menu-btn {
    //         &::after {
    //             content: '';
    //             width: 160%;
    //             height: 170%;
    //             background-color: #fff;
    //             position: absolute;
    //             left: 50%;
    //             top: 50%;
    //             transform: translate(-50%, -50%);
    //             border-radius: size(20);
    //             transition: all .5s;
    //         }

    //         &:hover {
    //             &::after {
    //                 box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: .1);
    //             }
    //         }

    //         &.open {
    //             &::after {
    //                 content: '';
    //                 background-color: transparent;
    //                 box-shadow: unset;

    //             }

    //         }
    //     }

    // }
}

@media screen and (max-width:768px) {

    .nav {
        // width: size-m(350);
        // left: size-m(12.5);
        // top: size-m(12.5);
        // padding: 0 size-m(24);
        // height: size-m(35);
        // border-radius: 9999px;

        .menu-btn {
            width: size-m(60);
            height: size-m(60);
            top: size-m(0);
            left: auto;
            right: size-m(0);

            .bar {
                width: size-m(25);

                &::after {
                    bottom: -#{size-m(8)};
                }

                &::before {
                    top: -#{size-m(8)};
                }
            }

            &.open {
                p {
                    color: #fff;
                }

                .bar {
                    height: 0;

                    &::after {
                        content: '';
                        width: 100%;
                        height: 2px;
                        bottom: 50%;
                        margin-bottom: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(135deg);
                    }

                    &::before {
                        content: '';
                        width: 100%;
                        height: 2px;
                        top: 50%;
                        margin-top: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(-135deg);
                    }
                }
            }
        }

        .menu {
            width: 100%;
            position: fixed;
            width: 100%;
            padding: 0;
            gap: size-m(45);

            &:before {
                background-image: url(@/section/form/bg-m.svg);
            }

            .menu-item {
                margin-bottom: size-m(10);
                
                span {
                    font-size: size-m(18);
                    line-height: size-m(36);
                    letter-spacing: .15em;
                    width: 100%;
                    display: block;
                    white-space: nowrap;
                    transition: width .4s linear, transform .1s linear;
                    transform-origin: left center;
                }

                // &:hover {
                //     span {
                //         transform: scale(1.3);
                //         width: 0;
                //     }
                // }
                
            }

            .menu-item-full {
                width: size-m(232);
                padding: 0;
                margin-top: size-m(20);
                
                span {
                    line-height: size-m(40);
                }
            }

            &.open {
                transform: translateX(0);
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
  window.open(info.fbLink);
}
</script>