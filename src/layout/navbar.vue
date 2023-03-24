<template>
    <div class="nav"
        v-bind:class="{ 'r16-9': higherScreen }">
        <div class="menu flex flex-col items-center justify-start z-50" v-bind:class="{ open: menuOpen }">
            <img class="logo absolute" src="@/section/s1/logo.svg" />
            <div class="close absolute cursor-pointer" @click="menuOpen = false"></div>
            <div class="menu-inner">
                <div class="menu-item font-bold cursor-pointer text-white" v-for="item, i in info.navList"
                    @click="scrollTo(item.target)">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="menu-btn cursor-pointer" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <svg class="w-full h-auto block" width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4013 50L0 0H130V50H41.4013Z" fill="#DD5519"/>
                <line class="line1" x1="49.709" y1="14.5" x2="79.709" y2="14.5" stroke="white" stroke-width="3"/>
                <line x1="49.709" y1="24.5" x2="79.709" y2="24.5" stroke="white" stroke-width="3"/>
                <line class="line3" x1="49.709" y1="34.5" x2="79.709" y2="34.5" stroke="white" stroke-width="3"/>
            </svg>
        </div>
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {

    .menu-btn {
        // position: relative;
        z-index: 1;
        width: size(100);
        height: size(50);
        position: fixed;
        top: size(0);
        right: size(0);
        z-index: 99;

        line {
            transition: all .2s;
        }

        &:hover {
            .line1 {
                transform: translateX(-6%);
            }

            .line3 {
                transform: translateX(6%);
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
        background: rgba(221, 85, 25, 0.9);
        width: size(375);
        height: 100%;
        z-index: 99;
        transform: translateX(100%);
        transition: all .5s;
        padding: size(242) 0 0 0;
        gap: size(20);
        z-index: 999;
        background-image: url(@/assets/nav-bg.svg);
        background-size: 100% auto;
        background-repeat: no-repeat;

        .menu-inner {
            width: size(128);
            margin: 0 auto;
        }

        .menu-item {
            text-align: center;
            padding: size(20) 0;

            &:last-child {
                border: none;
            }
            
            span {
                font-size: size(18);
                width: 100%;
                display: block;
                white-space: nowrap;
                transition: width .4s linear, transform .1s linear;
                transform-origin: left center;
            }
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
            width: size-m(100);
            height: size-m(50);
            top: size-m(0);
            right: size-m(0);

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
            width: 100%;
            padding: size-m(210) 0 0 0;
            gap: size-m(10);

            .menu-inner {
                width: size-m(128);
                margin: 0 auto;
            }

            .menu-item {
                padding: size-m(15) 0;
                
                span {
                    font-size: size-m(15);
                    width: 100%;
                    display: block;
                    white-space: nowrap;
                    transition: width .4s linear, transform .1s linear;
                    transform-origin: left center;
                }
            }

            &.open {
                transform: translateX(0);
            }
        }
    }
}

.nav .menu {
    .logo {
        top: size-m(76.04);
        left: size-m(119.78);
        width: size-m(145.44);
        @media screen and (min-width:768px) {
            top: size(76.04);
            left: size(119.78);
            width: size(135.44);
        }
    }
    
    .close {
        top: 0;
        right: 0;
        width: size-m(50);
        height: size-m(50);
        background-image: url(@/assets/nav-close.svg);
        background-size: contain;
        background-repeat: no-repeat;
        @media screen and (min-width:768px) {
            width: size(50);
            height: size(50);
        }
    }
}
</style>

<script setup>
import { inject, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

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
</script>