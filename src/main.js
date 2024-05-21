import './assets/main.css'
// import VueApexCharts from "vue3-apexcharts";
import TheButton from '@/components/UI/TheButton.vue';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// app.use(VueApexCharts)
app.component('TheButton', TheButton)

app.mount('#app')
