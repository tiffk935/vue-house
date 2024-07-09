<template>
    <div class="thanks">
        <a href="/">
            感謝您的來電<br>回首頁
        </a>
    </div>
</template>
<style lang="scss" scoped>
.thanks {
    width: 100vw;
    height: 100vh;
    background: #CCC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

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