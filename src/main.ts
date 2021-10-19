import { createApp } from 'vue';
import 'virtual:windi.css';
import { createPinia } from 'pinia';
import VTooltip from 'v-tooltip';
import router from './router';
import App from './App.vue';
import GButton from '@/components/GButton.vue';

createApp(App)
  .component('GButton', GButton)
  .use(createPinia())
  .use(router)
  .use(VTooltip)
  .mount('#app');
