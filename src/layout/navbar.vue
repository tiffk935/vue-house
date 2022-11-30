<template>
    <div class="nav"
        v-bind:class="{ 'r16-9': higherScreen }">
        <div class="menu flex flex-col items-center justify-center z-50" v-bind:class="{ open: menuOpen }">
            <div class="menu-inner">
                <div class="menu-item font-bold cursor-pointer text-white" v-for="item, i in info.navList"
                    @click="scrollTo(item.target)">
                    <span>{{ item.name }}</span>
                    <img class="absolute w-full left-0 bottom-0" src="@/assets/nav-item.svg" alt="">
                </div>
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

    .menu-btn {
        // position: relative;
        z-index: 1;
        width: size(54);
        height: size(54);
        // background: rgba(158, 47, 61, 0.9);
        position: fixed;
        top: size(46);
        right: size(47);
        // border: 1px solid #fff;
        z-index: 99;

        .bar {
            width: size(28);
            height: 2px;
            background-color: #fff;
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
                background-color: #fff;
                transition: all .5s;
            }

            &::before {
                content: '';
                width: 100%;
                height: 2px;
                top: -#{size(10)};
                position: absolute;
                background-color: #fff;
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
        // background-color: #9E2F3D;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
        width: size(280);
        height: 100%;
        z-index: 99;
        transform: translateX(100%);
        transition: all .5s;
        padding: size(100) 0;
        gap: size(20);

        // .menu-inner {
        //     width: size(128);
        //     margin: 0 size(40) 0 auto;
        // }

        .menu-item {
            text-align: center;
            padding: size(10);
            // border-bottom: 1px solid #fff;
            position: relative;
            margin-bottom: size(40);

            &:last-child {
                // border: none;
                margin-bottom: 0;
            }
            
            span {
                font-family: 'Noto Serif TC';
                font-weight: 700;
                font-size: size(30);
                line-height: size(40);
                width: 100%;
                display: block;
                white-space: nowrap;
                transition: width .4s linear, transform .1s linear;
                transform-origin: left center;
            }

            img {
                transition: all .2s;
                filter: brightness(0) invert(1);
            }

            &:hover {
                img {
                    filter: brightness(1) invert(0);
                }
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
            width: size-m(45);
            height: size-m(45);
            top: size-m(25);
            left: auto;
            right: size-m(31);

            .bar {
                width: size-m(23.33);

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
            // background-color: rgba(158, 47, 61, 0.9);
            width: 100%;
            padding: 0;
            gap: size-m(45);

            // .menu-inner {
            //     width: size-m(110.6);
            //     margin: 0 auto;
            // }

            .menu-item {
                padding: size-m(8);
                margin-bottom: size-m(40);
                
                span {
                    font-size: size-m(20);
                    line-height: size-m(23.7);
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