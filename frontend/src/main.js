import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import './assets/navigation.css'
import './assets/home.css'
import './assets/sections.css'
import './assets/gallery.css'
import './assets/contact.css'


createApp(App).use(router).mount('#app')