<template>
  <div class="instagram-embed-wrapper" ref="wrapper" v-html="embedHTML"></div>
</template>

<script>
import embedHTML from '../assets/embed-instagram.html?raw';

export default {
  name: "InstagramEmbed",
  data() {
    return {
      embedHTML
    };
  },
  mounted() {
    // Insertar el script de Instagram si no existe
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      // Si el script ya está cargado, procesar los embeds en este componente
      window.instgrm.Embeds.process();
    }
  }
};
</script>

<style scoped>
.instagram-embed-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
</style>
