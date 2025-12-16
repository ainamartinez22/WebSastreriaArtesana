<template>
  <div>
    <h2>Nuestras telas</h2>

    <div class="grid">
      <a
        v-for="item in instagram"
        :key="item.id"
        :href="item.permalink"
        target="_blank"
        class="card"
      >
        <img :src="item.media_url" />
        <p>{{ item.caption }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const instagram = ref([])

onMounted(async () => {
  const res = await axios.get('/api/instagram')
  instagram.value = res.data
})
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.card img {
  width: 100%;
  border-radius: 8px;
}
</style>
