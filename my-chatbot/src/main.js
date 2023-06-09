import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import router from './router';
//import './style.css'
import App from './App.vue'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})
createApp(App).use(vuetify).use(router).use(VCalendar).mount('#app')