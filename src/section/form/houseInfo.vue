<template>
    <div class="house-info relative">
        <img class="logo" src="@/section/form/logo.svg" />
        <div class="text">
            <div class="item" v-for="item in info.houseInfos" :key="item">
                <p>{{ item[0] }}</p>
                <p>{{ item[1] }}</p>
            </div>
        </div>
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank">
            <img class="hover:opacity-50" src="@/section/form/footerlogo.gif" />
        </a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.footer {
    display: none;
}

.house-info {
    padding: size-m(33) size-m(46) size-m(38) size-m(46);
    z-index: 1;
    font-family: "Noto Serif TC";
    text-align: left;
    margin-bottom: size-m(63);
    @media (min-width: 768px) {
        padding: size(98) size(299) size(95) size(318);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: size-m(318);
        background: linear-gradient(0deg, rgba(235, 236, 197, 0.50) 48%, rgba(235, 245, 207, 0.00) 92%);
        z-index: -1;
        @media (min-width: 768px) {
            height: size(594);
        }
    }

    .logo {
        width: size-m(207);
        margin: 0 auto size-m(56) auto;
        @media (min-width: 768px) {
            width: size(423.2);
            margin: 0;
        }
    }

    .text {
        .item {
            display: flex;
            border-bottom: size-m(1) solid #931F1C;
            padding-bottom: size-m(7);
            margin-bottom: size-m(7);
            @media (min-width: 768px) {
                border-bottom: size(1) solid #931F1C;
                padding-bottom: size(10);
                margin-bottom: size(10);
            }
        }

        p {
            color: #000;
            font-size: size-m(12);
            font-weight: 700;
            line-height: 201.1%;
            letter-spacing: .06em;
            @media (min-width: 768px) {
                font-size: size(22);
            }

            &:nth-child(1) {
                width: size-m(58);
                margin-right: size-m(25);
                @media (min-width: 768px) {
                    width: size(96);
                    margin-right: size(69);
                }
            }
        }
    }
}
</style>

<script setup>
import info from "@/info"
</script>