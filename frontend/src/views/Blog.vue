<template>
<div>
<h2>Blog</h2>
<iframe
  src="https://www.instagram.com/usuario/?utm_source=ig_embed"
  width="320"
  height="440"
  frameborder="0"
  scrolling="no"
  allowtransparency="true">
</iframe>

<!-- <div v-for="post in posts" :key="post.id">
<h3>{{ post.title }}</h3>
<img :src="post.image" />
<p>{{ post.content }}</p>
</div> -->
</div>
</template>


<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'


const posts = ref([])


onMounted(async () => {
const res = await axios.get('/api/posts')
posts.value = res.data
})
</script>