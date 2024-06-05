<!-- <script>
import { register } from 'swiper/element/bundle';
export default {
    props: [
        slidesPerView, spaceBetween, breakpoints
    ],
    created() {
        register()
    }
}
</script>

<template>
    <swiper-container slides-per-view=slidesPerView space-between=spaceBetween speed=true loop=true css-mode=true
        breakpoints=breakpoints>
        <swiper-slide v-for="(testimonial, i) in testimonials" :key="i">
            <h6>{{ testimonial.name }}</h6>
            <p>{{ testimonial.text }}</p>
        </swiper-slide>
    </swiper-container>
</template> -->
