<template>
    <section class="blog-page">
        <section class="blog-section">
            <h2>Últimos posts de Instagram</h2>
            <p class="section-description">
                Los últimos trabajos realizados.
            </p>
            <div class="posts-grid">
                <div class="post-placeholder"><InstagramEmbed /></div>
                <div class="post-placeholder"><InstagramEmbed /></div>
                <div class="post-placeholder"><InstagramEmbed /></div>
                <div class="post-placeholder"><InstagramEmbed /></div>
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

<style>
.blog-page {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* TITULOS */
.blog-page h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}


.section-description {
  max-width: 700px;
  margin-bottom: 3rem;
  color: #555;
  line-height: 1.6;
}

/* ───────────── TELAS ───────────── */

.blog-section {
  margin-bottom: 5rem;
}


/* ───────────── postOS ───────────── */

.posts-section {
  margin-top: 2rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* Placeholder negro elegante */
.post-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 4px;
}

/* ───────────── RESPONSIVE ───────────── */

@media (max-width: 900px) {
  .posts-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 500px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}

</style>
