<script>


export default {
    data() {
        return {
            links: [
                {
                    title: 'Pricing',
                    url: '#'
                },
                {
                    title: 'Product',
                    url: '#'
                },
                {
                    title: 'About Us',
                    url: '#'
                },
                {
                    title: 'Careers',
                    url: '#'
                },
                {
                    title: 'Community',
                    url: '#'
                },
            ],
            header: null,
            observer: null,
            isScroll: false,
            isMobile: false,
            isActive: false
        }
    },
    methods: {
        handleWindowResize() {
            this.isMobile = window.innerWidth < 1024 ? true : false
        },
        toggleMobile() {
            this.isActive = !this.isActive;
            const html = document.querySelector('html');
            html.classList.toggle('block')
        },
        handleClickOutside(event) {
            const icon = document.querySelector('#icon-mobile')
            if (icon.contains(event.target)) return

            const menu = document.querySelector('#mobile-menu')
            if (!menu.contains(event.target)) {
                this.isActive = false
                const html = document.querySelector('html')
                html.classList.remove('block')
            }
        }
    },
    created() {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize)
        document.addEventListener('mousedown', this.handleClickOutside)
    },
    mounted() {
        this.observer = new IntersectionObserver(
            ([entry]) => {
                this.isScroll = entry.isIntersecting;
            },
            { threshold: 0.0 }
        )
        this.header = this.$refs.headerEl;
        this.observer.observe(this.header);
    },
    beforeUnmount() {
        this.observer.disconnect()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleWindowResize)
        document.removeEventListener('mousedown', this.handleClickOutside)
    }
}
</script>

<template>
    <header ref="headerEl" class="relative">
        <div class="fixed w-full py-5 lg:py-8 transition-all duration-300 ease-in z-50"
            :class="{ 'before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10': !isScroll, 'pt-3 pb-3 lg:pt-3.5 lg:pb-3.5': !isScroll }">
            <div class="container flex gap-4 justify-between items-center">
                <img src="../../assets/logo.svg" alt="logo" class="w-36 h-6 relative">
                <nav v-show="!isMobile">
                    <ul class="flex justify-center items-center lg:gap-6 xl:gap-10">
                        <li v-for="(link, i) in links" :key="i">
                            <a :href="link.url"
                                class="text-headline hover:text-primary transition-color duration-300 ease-in">{{
                                    link.title
                                }}</a>
                        </li>
                    </ul>
                </nav>
                <TheButton v-show="!isMobile" mode="brand" isShadow="true">Get Started</TheButton>
                <div v-show="isMobile" class="flex flex-col h-8 justify-between relative z-50" @click="toggleMobile"
                    ref="icon-mobile" id="icon-mobile">
                    <span v-for="i in 3" class="block w-8 h-1 bg-headline transition duration-300 ease-in"
                        :class="{ 'first:translate-y-[14px] first:rotate-45 last:-translate-y-[14px] last:-rotate-45 even:opacity-0': isActive }"></span>
                </div>
                <Transition enter-from-class="translate-x-full"
                    enter-active-class="transition-transform duration-300 ease-out" enter-to-class="translate-x-0"
                    leave-from-class="translate-x-0" leave-active-class="transition-transform duration-300 ease-in"
                    leave-to-class="translate-x-full">
                    <nav v-show="isMobile && isActive" ref="mobile-menu" id="mobile-menu"
                        class="absolute right-0 max-w-xs w-full top-0 h-lvh bg-brand-light overflow-auto">
                        <ul class="pt-20 md:pt-24 flex flex-col justify-start items-center gap-6 md:gap-8 ">
                            <li v-for="(link, i) in links" :key="i">
                                <a :href="link.url" @click="toggleMobile"
                                    class="text-headline hover:text-primary md:text-lg transition-color duration-300 ease-in">{{
                                        link.title
                                    }}</a>
                            </li>
                        </ul>
                    </nav>
                </Transition>
            </div>
        </div>
    </header>
</template>
