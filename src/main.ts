import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/index.css'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          greenDark: '#2C4928',
          something: '#00ff00',
        },
      },
    },
  },
})



createApp(App).use(store).use(vuetify).use(router).mount('#app')

