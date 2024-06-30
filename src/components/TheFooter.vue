<script>
import BaseInput from './UI/form/BaseInput.vue'
export default {
  components: {
    BaseInput
  },
  data() {
    return {
      linkProduct: [
        {
          title: 'Home',
          url: '#'
        },
        {
          title: 'Pricing',
          url: '#'
        },
        {
          title: 'Products',
          url: '#'
        },
        {
          title: 'About Us',
          url: '#'
        }
      ],
      linkCommunity: [
        {
          title: 'Careers',
          url: '#'
        },
        {
          title: 'Community',
          url: '#'
        },
        {
          title: 'Privacy Policy',
          url: '#'
        }
      ],
      linkSocial: [
        {
          title: 'icon-facebook',
          url: '#'
        },
        {
          title: 'icon-youtube',
          url: '#'
        },
        {
          title: 'icon-twitter',
          url: '#'
        },
        {
          title: 'icon-pinterest',
          url: '#'
        },
        {
          title: 'icon-instagram',
          url: '#'
        }
      ],
      email: ''
    }
  }
}
</script>

<template>
  <footer class="bg-headline py-8 lg:py-10">
    <div
      class="container grid grid-rows-[repeat(3,auto)] grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr_auto] xl:grid-cols-[1fr_0.5fr_0.5fr_1fr] 2xl:grid-cols-[1fr_0.65fr_0.65fr_1fr] lg:grid-rows-1 gap-y-8 gap-x-4"
    >
      <div class="flex flex-col justify-between gap-2 col-span-2 lg:col-auto lg:order-last">
        <div class="flex gap-2">
          <BaseInput
            v-model="email"
            type="email"
            placeholder="Updates in your inbox ..."
          ></BaseInput>
          <TheButton mode="brand" small="true">Go</TheButton>
        </div>
        <p class="hidden lg:block self-center lg:self-end">
          Copyright <span>{{ new Date().getFullYear() }}</span
          >. All Rights Reserved
          </p>
      </div>

      <div
        class="flex flex-col items-start gap-4 justify-self-center lg:justify-self-start lg:order-2"
      >
        <a
          v-for="(link, i) in linkProduct"
          :href="link.url"
          :key="i"
          class="hover:text-brand transition-all duration-300 ease-in"
          >{{ link.title }}</a
        >
      </div>
      <div
        class="flex flex-col items-start gap-4 justify-self-center lg:justify-self-start lg:order-3"
      >
        <a
          v-for="(link, i) in linkCommunity"
          :href="link.url"
          :key="i"
          class="hover:text-brand transition-all duration-300 ease-in"
          >{{ link.title }}</a
        >
      </div>

      <div
        class="col-span-2 lg:col-auto flex flex-col items-center lg:items-start justify-between gap-8 lg:order-1"
      >
        <div class="w-full lg:w-auto flex justify-around gap-4">
          <a
            v-for="(link, i) in linkSocial"
            :href="link.url"
            class="icon hover:text-brand"
            :class="link.title"
          ></a>
        </div>
        <img src="../assets/logo-white.svg" alt="logo" class="w-36 h-6 lg:order-first" />
        <p class="lg:hidden">
          Copyright <span>{{ new Date().getFullYear() }}</span
          >. All Rights Reserved
          </p>
      </div>
    </div>
  </footer>
</template>
