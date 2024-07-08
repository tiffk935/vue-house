<template>
    <div class="nav font-['Noto_Serif_TC']"
        v-bind:class="{ 'r16-9': higherScreen }">
        <div class="mbg fixed z-10" @click="menuOpen = !menuOpen"
        v-bind:class="{ 'open': menuOpen }"></div>
        <div class="menu flex flex-col items-center justify-center z-50" v-bind:class="{ open: menuOpen }">
            <div class="menu-inner">
                <div class="menu-item cursor-pointer text-white" v-for="item, in info.navList"
                    @click="scrollTo(item.target)" :key="item">
                    <span>{{ item.name }}</span>
                </div>
                <div class="to-order" @click="scrollTo('.order')">立即預約</div>
            </div>
        </div>
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <div class="bar z-10"></div>
        </div>
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {
    // padding: 0 size(50);
    // height: size(80);
    .mbg{top: 0;left: 0;width: 100%;height: 100%;background:linear-gradient(90deg, #0000 0%,#0006 75%);
        transform: translateX(100%);
        transition:transform .5s ;
        &.open {
            transform: translateX(0%);}}
    .menu-btn {
        // position: relative;
        z-index: 1;
        width: size(90);
        height: size(90);
        background: rgba(255, 255, 255, 0.56);
        position: fixed;
        top: size(0);
        right: size(0);
        // border: 1px solid #fff;
        z-index: 99;

        .bar {
            width: size(38);
            height: 2px;
            background-color: #505050;
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
                background-color: #505050;
                transition: all .5s;
            }

            &::before {
                content: '';
                width: 100%;
                height: 2px;
                top: -#{size(10)};
                position: absolute;
                background-color: #505050;
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
            background: rgba(255, 255, 255, 0.001);

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
        background-color: rgba(0, 100, 87, 0.8);
        backdrop-filter: blur(2px);
        width: size(375);
        height: 100%;
        z-index: 99;
        transform: translateX(100%);
        transition: all .5s;
        padding: size(100) 0;
        gap: size(20);

        .menu-inner {
            width: size(185);
            margin: 0 auto;
        }

        .menu-item {
            text-align: center;
            padding: size(15) 0;
            font-weight: 600;
            // border-bottom: 1px solid #fff;

            &:last-child {
                border: none;
            }
            
            span {
                font-size: size(23);
                width: 100%;
                display: block;
                white-space: nowrap;
                transition: width .4s linear, transform .1s linear;
                transform-origin: left center;
                text-shadow: 0 0 .6em #2d612699 ,0 0 .15em #2d612699;
            }

            // &:hover {
            //     span {
            //         transform: scale(1.3);
            //         width: 0;
            //     }
            // }
        }

        .to-order {
            margin-top: size(30);
            border-radius: size(10);
            border: size(1) solid #B28247;
            background: linear-gradient(90deg, #FFE679 0%, #BB7C1A 100%);
            color: #FFF;
            font-family: "Noto Sans TC";
            font-size: size(20);
            font-weight: 400;
            line-height: 100%;
            letter-spacing: .1em;
            text-align: center;
            padding: size(15) size(37);
            cursor: pointer;
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
            position: fixed;
            background-color: rgba(0, 100, 87, 0.8);
            width: 100%;
            padding: 0;
            gap: size-m(45);

            .menu-inner {
                width: size-m(128);
                margin: 0 auto;
            }

            .menu-item {
                padding: size-m(10) 0;
                
                span {
                    font-size: size-m(18);
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

            .to-order {
                margin-top: size-m(20);
                border-radius: size-m(10);
                border: size-m(1) solid #B28247;
                font-size: size-m(16);
                padding: size-m(15) size-m(26);
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