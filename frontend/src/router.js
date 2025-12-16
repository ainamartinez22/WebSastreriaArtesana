import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
  history: createWebHashHistory('/WebSastreriaArtesana/'),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/galeria', component: Gallery },
    { path: '/contacto', component: Contact },
    ],
    scrollBehavior() {
        return { top: 0 }
      }
})

export default router

