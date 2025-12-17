<template>
  <div id="app">
    <header class="toolbar">
      <div class="toolbar-inner">
        <!-- LOGO -->
        <router-link to="/" class="logo">
          MABEL QUIROGA
        </router-link>

        <!-- BOTÓN HAMBURGER MÓVIL -->
        <button class="menu-toggle" @click="toggleMenu">
          ☰
        </button>

        <!-- NAV -->
        <nav :class="{ open: menuOpen }" class="nav">
          <router-link to="/" @click="closeMenu" active-class="active-link">Inicio</router-link>
          <router-link to="/blog" @click="closeMenu" active-class="active-link">Blog</router-link>
          <router-link to="/galeria" @click="closeMenu" active-class="active-link">Galería</router-link>
          <router-link to="/contacto" @click="closeMenu" active-class="active-link">Contacto</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

// Cierra el menú al clicar un enlace
function closeMenu() {
  menuOpen.value = false;
}
</script>
<style>

</style>