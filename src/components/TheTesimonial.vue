<script>
import { register } from 'swiper/element/bundle'
import { Autoplay } from 'swiper/modules'
export default {
  emits: ['show-contact'],
  data() {
    return {
      testimonials: [
        {
          name: 'Anisha Li',
          text: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
          url: '/images/test_1.jpg'
        },
        {
          name: 'Ali Bravo',
          text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
          url: '/images/test_2.jpg'
        },
        {
          name: 'Richard Watts',
          text: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
          url: '/images/test_3.jpg'
        },
        {
          name: 'Ali Bravo',
          text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
          url: '/images/test_2.jpg'
        }
      ],
      swiperEl: null,
      swiperParams: {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        autoheight: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 32
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        },
        modules: [Autoplay],
        //     observer: true,
        // observeParents: true,
        updateOnWindowResize: true
        //     on: {
        //         init() {
        //             // ...
        //         },
        //         update(){
        //             this.swiperEl.update();
        //         }
        //     },
      }
    }
  },
  methods: {
    swiperInit() {
      this.swiperEl = this.$refs.swiperEl
      Object.assign(this.swiperEl, this.swiperParams)
      this.swiperEl.initialize()
    },
    toogleContact() {
      this.$emit('show-contact')
    }
  },
  created() {
    register()
  },
  mounted() {
    this.swiperInit()
  }
}
</script>

<template>
  <section
    class="mt-20 md:mt-24 2xl:mt-28 flex flex-col gap-8 xl:gap-10 justify-center items-center"
  >
    <h2 class="text-3xl text-headline font-semibold xl:text-4xl/[3rem]">What they’ve said</h2>
    <swiper-container init="false" ref="swiperEl" class="max-w-full">
      <swiper-slide v-for="(testimonial, i) in testimonials" :key="i" class="h-auto flex flex-col">
        <div
          class="mt-8 relative px-3.5 pb-3.5 pt-11 bg-primary-light flex flex-col gap-3.5 items-center rounded-sm flex-[1_1_100%]"
        >
          <img
            :src="testimonial.url"
            :alt="testimonial.name"
            class="w-16 h-16 aspect-square object-center object-cover rounded-full absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
          <h6 class="text-sm text-headline font-semibold">{{ testimonial.name }}</h6>
          <p class="text-center">{{ testimonial.text }}</p>
        </div>
      </swiper-slide>
    </swiper-container>
    <TheButton @click="toogleContact" mode="brand" isShadow="true">Get Started</TheButton>
  </section>
</template>
