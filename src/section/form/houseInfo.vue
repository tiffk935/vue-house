<template>
    <div class="hinfo flex flex-col md:flex-row items-center justify-between bg-white">
        <!-- <div class="map"></div> -->
        <div class="flex-1 items-center justify-center py-4 md:py-10">
            <div class="info-box mx-auto mt-4 flex flex-col items-center justify-center">
                <div class="title font-['Noto_Sans_TC']">建案資訊</div>
                <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2">
                    <div class="item font-bold flex items-center w-full whitespace-nowrap"
                        v-for="(item, idx) in info.houseInfos" :key="idx">
                        <p class="mr-5 border-l-2 border-[#6189B3] text-[#6189B3] pl-2 font-bold mb-0">{{ item[0] }}</p>
                        <p class="whitespace-pre-line leading-normal text-left font-normal">{{ item[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="艾美國際城" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="inline-block text-white text-xs ml-3 mb-0">網頁製作</p></a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.info-box {

    width: size(900);

    .mr-5 {
        margin-right: 1.25rem !important;
    }

    .title {
        width: 100%;
        font-size: size(48);
        font-weight: 700;
        margin-bottom: size(23);
        color: #595757;
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(17);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;

            p {
                font-size: size(17);
            }

            p:first-child {
                width: 4.5em;
            }
        }
    }
}

.hinfo .flex-1 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
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

            .item p {
                font-size: size-m(14);
            }
        }
    }

    .hinfo .flex-1 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

}
</style>

<script setup>
import info from "@/info"


</script>