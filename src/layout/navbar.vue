<template>
    <div class="nav"
        v-bind:class="{ 'r16-9': higherScreen }">
        <div class="menu flex flex-col items-center justify-center z-50" v-bind:class="{ open: menuOpen }">
            <div class="line"></div>
            <div class="menu-inner">
                <div class="menu-item font-bold cursor-pointer text-white" v-for="item, i in info.navList"
                    @click="scrollTo(item.target)">
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
        width: size(60);
        height: size(60);
        background: #364923;
        position: fixed;
        top: size(54);
        left: size(50);
        // border: 1px solid #fff;
        z-index: 99;

        .bar {
            width: size(31);
            height: size(3);
            background-color: #fff;
            // position: relative;
            transform: all .5s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &::after {
                content: '';
                width: size(31);
                height: size(3);
                bottom: -#{size(10)};
                position: absolute;
                background-color: #fff;
                transition: all .5s;
            }

            &::before {
                content: '';
                width: 100%;
                height: size(3);
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
                    height: size(3);
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
                    height: size(3);
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
        top: size(37);
        left: size(29);
        background-color: #4B6730;
        width: size(250);
        height: size(652);
        z-index: 99;
        transform: translateX(calc(-100% - size(29)));
        transition: all .5s;
        padding: size(100) 0;
        gap: size(20);

        .line {
            position: absolute;
            top: size(118);
            left: size(81);
            width: size(1);
            height: size(436);
            background: #fff;
        }

        .menu-inner {
            // width: size(128);
            // margin: 0 size(40) 0 auto;
            width: 100%;
            padding-left: size(101);
        }

        .menu-item {
            font-weight: 500;
            font-size: size(24);
            line-height: size(56);
            letter-spacing: 0.03em;
            margin: size(6.5) 0;

            span {
                width: 100%;
                display: block;
                white-space: nowrap;
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: size(-23 - 8);
                    width: size(20);
                    height: size(20);
                    background: #4B6730;
                    border: size(3) solid #fff;
                    border-radius: 50%;
                    transform: translate(0, -50%);
                }

                &.active:after {
                    background: #fff;
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
            width: size-m(40);
            height: size-m(40);
            top: size-m(30);
            left: size-m(31);

            .bar {
                width: size-m(20.85);
                height: size-m(2);

                &::after {
                    bottom: -#{size-m(8)};
                    width: 100%;
                    height: size-m(2);
                }

                &::before {
                    top: -#{size-m(8)};
                    width: 100%;
                    height: size-m(2);
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
                        height: size-m(2);
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
                        height: size-m(2);
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
            top: 0;
            left: 0%;
            background-color: #4B6730;
            width: size-m(203);
            height: 100%;
            padding: 0;
            gap: size-m(45);

            .line {
                top: size-m(128);
                left: size-m(52);
                width: size-m(1);
                height: size-m(436);
            }

            .menu-inner {
                // width: size-m(128);
                // margin: 0 auto;
                width: 100%;
                padding-left: size-m(72);
                position: absolute;
                top: size-m(202);
            }

            .menu-item {
                font-size: size-m(18);
                line-height: size-m(55.5);
                letter-spacing: 0.03em;
                margin: size-m(6.5) 0;

                span:after {
                    left: size-m(-17 - 9.5);
                    width: size-m(14);
                    height: size-m(14);
                    border: size-m(3) solid #fff;
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