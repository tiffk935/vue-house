<template>
    <div class="flex flex-col md:flex-row items-center justify-between bg-[#004B47] text-white">
        <div class="flex-1 items-center justify-center py-4 md:py-10">
            <div class="info-box mx-auto mt-4 flex flex-col items-center justify-center">
                <div class="title">建案資訊</div>
                <div class="info-flex">
                    <div class="info-items mt-4 w-full">
                        <div class="item flex justify-between items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="mr-5 font-bold">{{ item[0] }}</p>
                            <p class="whitespace-pre-line leading-normal text-right" v-html="item[1]"></p>
                        </div>
                    </div>
                    <img class="logo" src="@/section/form/logo2.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="德林哲里" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.info-box {
    font-family: 'Noto Serif TC';
    width: size(1260);

    .title {
        width: 100%;
        font-size: size(48);
        font-weight: 700;
        margin-bottom: size(23);
        color: #fff;
    }

    .info-items {
        // row-gap: size(20);
        // column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(17);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;
            border-bottom: size(1) solid #fff;
            padding-bottom: size(19);
            margin-bottom: size(19);

            p:first-child {
                width: 4.5em;
            }
        }
    }
}

@media screen and (max-width:768px) {
    .footer {
        margin-bottom: size-m(63);
    }

    .info-box {
        width: size-m(313);
        padding: size-m(30) 0;

        .title {
            font-size: size-m(29);
        }

        .info-items {
            // row-gap: size-m(20);

            .item {
                font-size: size-m(14);
                border-bottom: size-m(1) solid #fff;
                padding-bottom: size-m(10);
                margin-bottom: size-m(10);
            }
        }
    }

}
.info-flex {
    @media screen and (min-width:768px) {
        display: flex;
        gap: size(125);
        align-items: center;
        flex-direction: row-reverse;
    }

    .info-items {
        margin-bottom: size-m(39);
        @media screen and (min-width:768px) {
            margin-bottom: 0;
        }
    }
    
    .logo {
        width: size-m(174.41);
        margin: 0 auto;
    }
}
</style>

<script setup>
import info from "@/info"


</script>