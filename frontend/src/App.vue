<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> 
      <router-link to="/blog">Blog</router-link> 
      <router-link to="/galeria">Galería</router-link> 
      <router-link to="/contacto">Contacto</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
// App principal
</script>

<style>
nav {
  padding: 1rem;
  background: #222;
}
nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
