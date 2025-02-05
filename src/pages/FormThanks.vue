<template>
    <div class="thanks">
        <img src="https://bcp.crwdcntrl.net/5/c=13578/b=78113418" width="1" height="1" />
        <a href="/">
            感謝您的預約<br>回首頁
        </a>
    </div>
</template>
<style lang="scss" scoped>
.thanks {
    background: #CCC;
    width: 100vw;
    height: 100vh;
    /*
    background: url('//h35.banner.tw/img/thank_bg.png');
    background-size: cover;
    background-position: center;
    */
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
</style>

<script>
export default {
    name: 'formThanks',
    components: {},
    methods: {},
}
</script>