<template>
    <div class="nav"
        v-bind:class="{ 'r16-9': higherScreen }">
        <div class="menu flex flex-col items-center justify-center z-50" v-bind:class="{ open: menuOpen }">
            <div class="menu-inner">
                <div class="menu-item font-bold cursor-pointer text-white" v-for="item, in info.navList"
                    @click="scrollTo(item.target)" :key="item">
                    <span>{{ item.name }}</span>
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
        background-color: rgba(139, 199, 130, 0.8);
        backdrop-filter: blur(2px);
        width: size(280);
        height: 100%;
        z-index: 99;
        transform: translateX(100%);
        transition: all .5s;
        padding: size(100) 0;
        gap: size(20);

        .menu-inner {
            width: size(128);
            margin: 0 auto;
        }

        .menu-item {
            text-align: center;
            padding: size(20) 0;
            // border-bottom: 1px solid #fff;

            &:last-child {
                border: none;
            }
            
            span {
                font-size: size(24);
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
            background-color: rgba(139, 199, 130, 0.8);
            width: 100%;
            padding: 0;
            gap: size-m(45);

            .menu-inner {
                width: size-m(128);
                margin: 0 auto;
            }

            .menu-item {
                padding: size-m(15) 0;
                
                span {
                    font-size: size-m(24);
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