<template>
    <section class="blog-page">
        <section class="blog-section">
            <h2>Últimos posts de Instagram</h2>
            <p class="section-description">
                Aquí mostramos algunos de nuestros últimos trabajos, el proceso detrás de cada prenda y pequeños consejos de costura que forman parte de nuestro día a día en el taller.
            </p>
            <div class="posts-grid">
                <div class="post-placeholder"><InstagramEmbed postId="DRPJfDPjPHe" /></div>
                <div class="post-placeholder"><InstagramEmbed postId="DN0GD-EWAhi" /></div>
                <div class="post-placeholder"><InstagramEmbed postId="DL6x58NMKA4" /></div>
                <div class="post-placeholder"><InstagramEmbed postId="DIB-9LZs5Lo" /></div>
                <div class="post-placeholder"><InstagramEmbed postId="DRaKpJ3AOHP" /></div>
                <div class="post-placeholder"><InstagramEmbed postId="DLw0cicMb0H" /></div>
            </div>
        </section>
    </section>
</template>

<script>
import InstagramEmbed from '../components/InstagramEmbed.vue';

export default {
  components: {
    InstagramEmbed
  }
};
</script>

<style scoped src="../assets/blog.css"></style>