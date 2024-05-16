<template>
    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank">
            <img class="hover:opacity-50" src="@/section/form/footerlogo.gif" />
        </a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank"><p class="text-white text-xs">網頁製作</p></a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.footer {
        display: none;
    }

@media screen and (max-width:768px) {
    .footer {
        margin-bottom: size-m(63);
    }
}
</style>

<script setup>
</script>