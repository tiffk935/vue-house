<template>
    <div class="house-info bg-[#0A534C] text-white relative">
        <img class="bg hidden md:block" src="@/section/s1/bg.png" />
        <img class="bg md:hidden" src="@/section/s1/bg-m.png" />
        <div class="links relative">
            <a target="_blank" href="#">
                <img src="@/section/form/btn1.svg" alt="達麗建設官網" />
            </a>
            <a target="_blank" href="#">
                <img src="@/section/form/btn2.svg" alt="聯碩行銷團隊官網" />
            </a>
            <a target="_blank" href="#">
                <img src="@/section/form/btn3.svg" alt="聯碩城市風格誌" />
            </a>
        </div>
        <div class="content relative">
            <div class="title">建案資訊</div>
            <div class="list">
                <div class="item flex justify-between items-stretch" v-for="(item, idx) in info.houseInfos" :key="idx">
                    <div class="t1 whitespace-nowrap">{{ item[0] }}</div>
                    <div class="ll flex-1 relative"></div>
                    <div class="t2 whitespace-nowrap">{{ item[1] }}</div>
                </div>
            </div>
        </div>
        <img class="logo2 relative" src="@/section/form/logo2.svg" />
    </div>

    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="達麗天蒔" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.house-info {
    width: 100%;
    margin: 0 auto;
    padding: size-m(42) size-m(50) size-m(100) size-m(50);
    font-family: 'Noto Serif TC';
    @media screen and (min-width:768px) {
        // padding: size(116) size(0);
        padding: 0;
        height: size(968);
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    .links {
        margin-bottom: size-m(38);
        @media screen and (min-width:768px) {
            margin-bottom: 0;
            position: absolute;
            top: size(119);
            left: size(128);
        }

        img {
            height: size-m(25);
            width: auto;
            margin-bottom: size-m(13);
            @media screen and (min-width:768px) {
                height: size(43);
                margin-bottom: size(23);
            }
        }
    }

    .content {
        @media screen and (min-width:768px) {
            position: absolute;
            width: size(924);
            top: size(129);
            left: size(867);
        }

        .title {
            border: size-m(1) solid #E3B15F;
            border-radius: size-m(10);
            font-weight: 700;
            font-size: size-m(18);
            line-height: size-m(26);
            text-align: left;
            color: #E3B15F;
            padding: size-m(6) size-m(11);
            @media screen and (min-width:768px) {
                border: size(1) solid #E3B15F;
                border-radius: size(10);
                font-size: size(29);
                line-height: size(42);
                padding: size(12) size(20);
                margin-bottom: size(12);
            }
        }

        .list {
            font-weight: 600;
            font-size: size-m(12);
            line-height: size-m(17);
            margin-bottom: size-m(74);
            @media screen and (min-width:768px) {
                font-size: size(25);
                line-height: size(62);
                margin-bottom: size(0);
            }

            .item {
                margin-top: size-m(15);
                @media screen and (min-width:768px) {
                    margin-top: size(3);
                }
            }

            .ll {
                &:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: size-m(10);
                    right: size-m(10);
                    height: 1px;
                    background: #fff;
                    @media screen and (min-width:768px) {
                        left: size(10);
                        right: size(10);
                    }
                }
            }
        }
    }

    .logo2 {
        width: 100%;
        @media screen and (min-width:768px) {
            position: absolute;
            width: size(420);
            top: size(701);
            left: size(128);
        }
    }
}

@media screen and (max-width:768px) {
    .footer {
        margin-bottom: size-m(63);
    }
}
</style>

<script setup>
import info from "@/info"
</script>