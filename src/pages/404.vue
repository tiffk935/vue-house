<template>
    <div class="bg">
    </div>
</template>
<style lang="scss" scoped>
.bg {
    background-image: url('@/assets/404-bg.png');
    background-size: cover;
    background-position: center;
    width: 100vw;
    min-height: 100vh;    // fallback，舊瀏覽器看這行
    min-height: 100dvh;   // 新瀏覽器會用這行覆蓋
}

@media screen and (max-width: 767px) {
    .bg {
        background-image: url('@/assets/404-bg-m.png');
    }
}
</style>

<script>
// import gtm from '@/mixins/gtm.js'
export default {
    name: '404',
    // mixins: [gtm],
    components: {},
    methods: {},
}
</script>