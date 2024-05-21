<script>
import TheSection from '@/components/UI/TheSection.vue';
export default {
    components: {
        TheSection
    },
    data() {
        return {
            advantages: [
                {
                    title: 'Track company-wide progress',
                    description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
                },
                {
                    title: 'Advanced built-in reports',
                    description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
                },
                {
                    title: 'Everything you need in one place',
                    description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
                }
            ]
        }
    }
}
</script>

<template>
    <TheSection>
        <template #title>
            <h2 class="text-3xl text-headline font-semibold text-center xl:text-4xl/[3rem] lg:text-left">What’s
                different about Manage?</h2>
            <p class="text-center lg:text-left">Manage provides all the functionality your team needs,
                without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </template>
        <template #description>
            <ul class="flex flex-col gap-8 xl:gap-6">
                <!--lg:gap-6 [58px_1fr] lg:gap-y-5 -->
                <!--lg:gap-7 [52px_1fr] lg:gap-y-7 -->
                <li v-for="(advantage, i) in advantages" :key="i"
                    class="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] xl:grid-rows-[56px_1fr] gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-8 xl:gap-y-6 items-center
                    relative lg:before:content-none before:content-[''] before:absolute before:top-0 before:left-0 before:h-[56px]  before:w-full before:bg-brand-light before:rounded-l-full before:-z-10">
                    <span class="lg:row-span-2 min-w-12 py-3.5 md:px-6 lg:px-8 bg-brand text-white text-center font-semibold rounded-full self-start">{{ String(i + 1).padStart(2, '0') }}</span>

                    <!-- class="relative before:content-[''] before:absolute before:w-16 before:h-10 before:rounded-sm before:bg-brand before:text-white" -->
                    <h6 class=" text-xl text-headline font-semibold">{{ advantage.title }}</h6>
                    <p class="col-span-2 lg:col-auto lg:text-left">{{ advantage.description }}</p>
                </li>
            </ul>
        </template>
    </TheSection>
</template>