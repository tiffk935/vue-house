<template>
    <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- <div class="map"></div> -->
        <div class="flex-1 items-center justify-center py-4 md:py-10">
            <div class="info-box mx-auto mt-4 flex flex-col items-center justify-center">
                <div class="title font-['Noto_Sans_TC']">建案資訊</div>
                <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2">
                    <div class="item flex items-center w-full whitespace-nowrap"
                        v-for="(item, idx) in info.houseInfos" :key="idx">
                        <p class="mr-5 font-bold border-l-2 border-[#676767] text-[#676767] pl-2 ">{{ item[0] }}</p>
                        <img class="logo" v-if="idx == 5" src="@/section/form/logo.svg">
                        <p v-else class="whitespace-pre-line leading-normal text-left">{{ item[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="graysec">
        <img class="logo2" src="@/section/form/logo2.svg">
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="巴克禮onepark" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.info-box {

    width: size(900);

    .title {
        width: 100%;
        font-size: size(48);
        font-weight: 700;
        margin-bottom: size(23);
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(17);
            // align-items: flex-start;
            line-height: 1.5;
            text-align: left;

            p:first-child {
                width: 4.5em;
            }
        }
    }

    .logo {
        width: size(135);
    }
}

.graysec {
    padding: size(40) 0;
    background: #4D4D4D;

    .logo2 {
        margin: 0 auto;
        width: size(383);
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
            row-gap: size-m(20);

            .item {
                font-size: size-m(14);
            }
        }

        .logo {
            width: size-m(135);
        }
    }

    .graysec {
        padding: size-m(45) 0;
        
        .logo2 {
            width: size-m(295);
        }
    }
}
</style>

<script setup>
import info from "@/info"


</script>