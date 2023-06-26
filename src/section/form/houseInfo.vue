<template>
    <div class="aaaaa flex flex-col md:flex-row items-center justify-between bg-[#004B47] text-white">
        <img class="lines absolute hidden md:block" src="@/section/form/lines.svg" />
        <div class="flex-1 items-center justify-center relative">
            <div class="info-box mx-auto flex flex-col items-center justify-between">
                <div class="info-flex">
                    <div class="info-items">
                        <div class="title">建案資訊</div>
                        <div class="item flex justify-between items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="mr-5 font-bold">{{ item[0] }}</p>
                            <p class="whitespace-pre-line leading-normal text-right" v-html="item[1]"></p>
                        </div>
                    </div>
                    <div class="logos">
                        <img class="logo hidden md:block" src="@/section/form/logo.svg" />

                        <a target="_blank" href="https://www.zenarchi.com/">
                                <img class="logo1" src="@/section/form/logo1.svg" />
                        </a>
                        <div class="flex">
                            <a target="_blank" href="https://unigiants.com.tw/">
                                <img class="logo2" src="@/section/form/logo2.svg" alt="" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/unigiant/">
                                <img class="logo3" src="@/section/form/logo3.svg" alt="" />
                            </a>
                        </div>
                        <img class="logo md:hidden" src="@/section/form/logo.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="展宜常閑" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div-->
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.aaaaa {
    background-image: url(@/section/form/bg2.jpg);
    background-size: 100% auto;
    background-position: bottom;
    position: relative;

    .lines {
        width: size(800);
        left: size(130);
        top: size(300);
    }
}

.info-box {
    font-family: 'Noto Serif TC';
    width: size(1660);

    .title {
        width: 100%;
        font-size: size(37);
        line-height: size(53);
        font-weight: 700;
        margin-bottom: size(52);
        color: #fff;
        text-align: left;
    }

    .info-items {
        width: size(700);

        .item {
            line-height: size(58);
            font-size: size(23);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;
            margin-bottom: size(20);
        }
    }

    .logos {
        width: size(505.73);
    }

    .logo {
        width: size(492);
        margin-bottom: size(225.83);
    }

    .logo1 {
        height: size(29);
        margin-bottom: size(29);
    }

    .logo2 {
        height: size(29);
        margin-bottom: size(29);
        margin-right: size(47);
    }

    .logo3 {
        height: size(29);
        margin-bottom: size(29);
    }
}

@media screen and (max-width:768px) {

    .aaaaa {
        background-image: url(@/section/form/bg2-m.jpg);
        background-position: top;
    }

    .info-box {
        width: size-m(313);
        padding: size-m(38) 0 size-m(100) 0;
        margin-bottom: 0;

        .title {
            font-size: size-m(19);
            line-height: size-m(27);
            margin-bottom: size-m(22);
        }

        .info-items {
            width: 100%;
            border-bottom: size-m(1) solid #fff;
            padding-bottom: size-m(28.37 - 22);
            margin-bottom: size-m(28);

            .item {
                font-size: size-m(12);
                line-height: size-m(17);
                margin-bottom: size-m(15.3);
            }
        
        }

        .logos {
            width: 100%;
            
            .flex {
                flex-direction: column;
            }
        }

        .logo {
            width: size-m(204);
            margin: size(56 - 29) auto 0 auto;
        }

        .logo1 {
            height: size-m(17);
            margin-bottom: size-m(29);
        }

        .logo2 {
            height: size-m(17);
            margin-bottom: size-m(29);
            margin-right: 0;
        }

        .logo3 {
            height: size-m(17);
            margin-bottom: size-m(29);
        }
    }
}

.info-flex {
    width: 100%;
    @media screen and (min-width:768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        width: 100%;
        padding: size(323) 0 size(116) 0;
    }

    .info-items {
        margin-bottom: size-m(39);
        @media screen and (min-width:768px) {
            margin-bottom: 0;
        }
    }
}
</style>

<script setup>
import info from "@/info"


</script>