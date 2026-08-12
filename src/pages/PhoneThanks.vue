<template>
    <div class="thanks">
        <a href="/">
            <img src="~@/assets/thank-img.png" alt="SUN PARK" class="img">
            <img src="~@/assets/thank-img-hover.png" alt="SUN PARK" class="img-hover">
        </a>
    </div>
</template>
<style lang="scss" scoped>
.thanks {
    width: 100vw;
    min-height: 100vh;    // fallback，舊瀏覽器看這行
    min-height: 100dvh;   // 新瀏覽器會用這行覆蓋
    background: url('//h65.tw/img/thank_bg.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        .img {
            position: absolute;
            opacity: 1;
        }

        .img-hover {
            opacity: 0;
        }

        &:hover {
            .img {
                opacity: 0;
            }

            .img-hover {
                opacity: 1;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .thanks {
        a {

            .img,
            .img-hover {
                width: 90vw;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'phoneThanks',
    components: {},
    methods: {},
}
</script>