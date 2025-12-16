import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import Gallery from './views/Gallery.vue'


export default createRouter({
history: createWebHistory(),
routes: [
{ path: '/', component: Home },
{ path: '/blog', component: Blog },
{ path: '/galeria', component: Gallery },
{ path: '/contacto', component: Contact }
]
})