<script>
import TheHeader from '@/components/UI/TheHeader.vue';
import TheHero from '@/components/TheHero.vue';
import TheAdvantage from '@/components/TheAdvantage.vue';
import TheTesimonial from '@/components/TheTesimonial.vue';
import TheBottom from '@/components/TheBottom.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheContact from '@/components/TheContact.vue';
export default {
  // components: ['TheHero']
  components: {
    TheHeader,
    TheHero,
    TheAdvantage,
    TheTesimonial,
    TheBottom,
    TheFooter, TheContact
  }
}
</script>

<template>
    <TheHeader></TheHeader>

  <main class="bg-[url('../assets/bg.svg'),url('../assets/bg-b.svg')] bg-no-repeat [background-position:top_right,bottom_left] bg-[length:100vmax_auto] lg:bg-[length:75vmax_auto] xl:bg-[length:50vmax_auto]">
    <TheHero></TheHero>
    <TheAdvantage></TheAdvantage>
    <TheTesimonial></TheTesimonial>
    <TheBottom></TheBottom>
  </main>
  
  <TheFooter></TheFooter>
  <!-- <TheContact></TheContact> -->
</template>

<style scoped>
</style>
