<template>
    <div class="flex flex-col md:flex-row items-center justify-between relative z-5">
        <div class="flex-1 items-center justify-center py-4 md:py-10">
            <div class="info-box mx-auto mt-4 flex flex-col items-center justify-center">
                <div class="title">建案資訊</div>
                <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2">
                    <div class="item flex items-center w-full whitespace-nowrap"
                        v-for="item in info.houseInfos" :key="item">
                        <p class="mr-5 font-bold border-l-4 border-[#BBA693] text-[#3E3A39] pl-2 ">{{ item[0] }}</p>
                        <p class="whitespace-pre-line leading-normal text-left text-[#3E3A39]">{{ item[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
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
        color: #3E3A39;
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
            row-gap: size-m(20);

            .item {
                font-size: size-m(13);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>