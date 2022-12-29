<template>
    <div class="flex flex-col md:flex-row items-center justify-between relative">
        <!-- <div class="map"></div> -->
        <div class="flex-1 items-center justify-center py-4 md:py-10">
            <div class="info-box mx-auto flex flex-col items-center justify-center">
                <!-- <div class="title font-['Noto_Sans_TC']">建案資訊</div> -->
                <div class="w-full md:flex items-center justify-between">
                    <img class="logo" src="@/section/form/logo.svg" />
                    <div class="info-items mt-2 mb-2 w-full grid grid-cols-1 md:grid-cols-1">
                        <div class="item flex items-center w-full whitespace-nowrap"
                            v-for="item in info.houseInfos">
                            <p class="mr-5 text-[#D08421] pl-2" v-html="item[0]"></p>
                            <p class="whitespace-pre-line leading-normal text-left" v-html="item[1]"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footernone"></div>
    <!--div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="@/section/form/footerlogo.png" alt="宗大青田" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div-->
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.info-box {

    width: size(1378.01);

    .title {
        width: 100%;
        font-size: size(48);
        font-weight: 700;
        margin-bottom: size(23);
        color: #fff;
    }

    .logo {
        width: size(515.7);
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);
        width: auto;
        min-width: size(588);

        .item {
            // line-height: size(33);
            font-size: size(20);
            align-items: flex-start;
            text-align: left;
            border-bottom: 1px dashed #D08421;
            padding-bottom: size(11);

            &:last-child {
                border: none;
            }

            span{
            font-size: size(16);
            }
        }
    }
}

@media screen and (max-width:768px) {
    .footernone{
        margin-bottom: size-m(63);
    }
    .footer {
        margin-bottom: size-m(63);
    }

    .info-box {
        width: size-m(305);
        padding: size-m(50) 0;

        .title {
            font-size: size-m(29);
        }

        .logo {
            width: size-m(257.72);
            display: block;
            margin: 0 auto;
            margin-bottom: size-m(60);
        }

        .info-items {
            row-gap: size-m(0);

            .item {
                font-size: size-m(15);
                padding: size-m(11) 0;

                span{
                font-size: size-m(13);
                }
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>