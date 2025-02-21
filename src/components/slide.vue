<template>
    <Splide ref="splide" :options="options" @splide:mounted="mounted" @splide:move="moved" class="splide-widget">
        <SplideSlide class="slide" v-for="img in props.imgs" :style="{ backgroundImage: `url(${img.img})` }">
            <div class="mask"></div>
            <div class="caption font-['Noto_sans_tc']" v-html="img.caption"></div>
        </SplideSlide>
    </Splide>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.splide-widget {}

.slide {
    position: relative;
    background-size: cover;

    .caption {
        position: absolute;
        color: #fff;
        font-size: size(20);
        left: size(35);
        bottom: size(20);


        span {
            font-size: size(25);
        }
    }

    .mask {
        @apply absolute bottom-0 left-0;
        width: 100%;
        height: size(144);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%)
    }
}

.splide__pagination {
    position: absolute;
    width: 100%;
    gap: size(15);

    li {
        line-height: 0 !important;

        .splide__pagination__page {
            position: relative;
            opacity: 0.3;

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #fff;
                opacity: .65;
                left: 0;
                top: 0;
            }

            &.is-active {
                opacity: 1;

                &::after {
                    opacity: 0;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {


    .splide-widget {
        .splide__arrows {
            @apply absolute flex justify-between left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10;
            width: sizem(365);

            .splide__arrow {
                filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(299deg) brightness(103%) contrast(102%) drop-shadow(0 4px 2px rgba(0, 0, 0, 0.6));


                &.splide__arrow--next {
                    @apply transform rotate-180;
                    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(299deg) brightness(103%) contrast(102%) drop-shadow(0 -4px 2px rgba(0, 0, 0, 0.6));
                }
            }
        }
    }

    .slide {
        .caption {
            font-size: sizem(12);
            left: sizem(10);
            bottom: sizem(5);

            span {
                font-size: sizem(15);
            }
        }
    }

    .splide__pagination {
        gap: sizem(10);
        padding: 0 sizem(10);
    }

    .mask {
        @apply hidden;
    }
}
</style>

<script setup>
import { size, size_m } from '@/utils/size'
import { onMounted, ref, getCurrentInstance } from 'vue';

const getGap = () => {
    if (document.documentElement.clientWidth < 767) {
        return props.gap_m ? size_m(props.gap_m) : 5
    } else {
        return props.gap ? size(props.gap) : 5
    }
}
const getShowArrow = () => {
    if (document.documentElement.clientWidth < 767) {
        return props.arrow_m ?? false;
    } else {
        return props.arrow ?? false;
    }
}

const props = defineProps(['arrow', 'arrow_m', 'gap', 'gap_m', 'per_page', 'imgs', 'w', 'w_m', 'h', 'h_m', 'box_w', 'box_h', 'box_w_m', 'box_h_m', 'dot', 'dot_color', 'dot_size', 'dot_bottom', 'dot_bottom_m', 'align', 'align_m'])
const options = {
    rewind: true,
    arrows: getShowArrow(),
    pagination: props.dot ?? false,
    perPage: props.per_page ?? 1,
    autoplay: true,
    interval: 4000,
    gap: getGap(),
    type: 'loop',
    arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`
}

const width = ref(0);
const height = ref(0);
const splide = ref(null);
const currentSlideIndex = ref(0);
const ctx = getCurrentInstance();

const go = (idx) => {
    splide.value.splide.go(idx)
}

const moved = (newIdx, prevIdx, destIdx) => {
    currentSlideIndex.value = prevIdx
    ctx.emit('slideIndex', currentSlideIndex.value)
}

const mounted = () => {
    let boxWidth;
    let boxHeight;
    if (document.documentElement.clientWidth < 767) {
        width.value = size_m(props.w_m);
        height.value = size_m(props.h_m);
        boxWidth = props.box_w_m ? size_m(props.box_w_m) : width.value;
        boxHeight = props.box_h_m ? size_m(props.box_h_m) : height.value;
    } else {
        width.value = size(props.w);
        height.value = size(props.h);
        boxWidth = props.box_w ? size(props.box_w) : width.value;
        boxHeight = props.box_h ? size(props.box_h) : height.value;
    }

    splide.value.$el.style.width = boxWidth + 'px';
    splide.value.$el.style.height = boxHeight + 'px';

    splide.value.splide.options = {
        fixedWidth: width.value,
        fixedHeight: height.value
    }

    if (props.dot) {
        setDot();
    }

    ctx.emit('mounted', splide.value)
}

const setDot = () => {
    let bottom = size(props.dot_bottom);
    if (document.documentElement.clientWidth < 767) {
        bottom = size_m(props.dot_bottom_m);
    }

    const dotParent = splide.value.$el.querySelector('.splide__pagination');
    dotParent.style.bottom = bottom + 'px';

    if (props.align_m && document.documentElement.clientWidth < 767) {
        dotParent.style.justifyContent = props.align_m;
    } else if (props.align) {
        dotParent.style.justifyContent = props.align;
    }

    const dots = splide.value.$el.querySelectorAll('.splide__pagination__page');

    dots.forEach(element => {
        element.style.backgroundColor = props.dot_color;
        element.style.width = document.documentElement.clientWidth < 767 ? size_m(props.dot_size) + 'px' : size(props.dot_size) + 'px';
        element.style.height = document.documentElement.clientWidth < 767 ? size_m(props.dot_size) + 'px' : size(props.dot_size) + 'px';
    });
}

defineExpose({
    go
})

onMounted(() => {
    window.addEventListener('resize', function (event) {
        mounted()
    }, true);
})
</script>