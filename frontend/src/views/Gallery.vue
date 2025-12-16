<template>
  <section class="gallery-page">

    <!-- SUBSECCIÓN: TELAS -->
    <section class="fabrics-section">
      <h2>Nuestras telas</h2>
      <p class="section-description">
        Trabajamos únicamente con telas de alta calidad procedentes de proveedores
        especializados en sastrería artesanal y confección de lujo.
      </p>

      <div class="providers">
        <a
          class="provider-card"
          href="https://www.ribescasals.com/"
          target="_blank"
          rel="noopener"
        >
          <h3>Ribes & Casals</h3>
          <p>
            Todo tipo de tejidos de alta calidad, ideales para vestidos
            de ceremonia y trajes a medida. Desde 1933
          </p>
        </a>

        <a
          class="provider-card"
          href="https://julianlopez.es/"
          target="_blank"
          rel="noopener"
        >
          <h3>Julián López</h3>
          <p>
            La tienda de las telas, el lugar para encontrar materiales únicos, sostenibles y de calidad
          </p>
        </a>

        <a
          class="provider-card"
          href="https://www.dormeuil.com"
          target="_blank"
          rel="noopener"
        >
          <h3>Gratacós</h3>
          <p>
            Las mejores materias y tejidos que acaban dando forma a las ideas de otros. Un referente para las grandes firmas del diseño y la Alta Costura
          </p>
        </a>
      </div>
    </section>

    <!-- SUBSECCIÓN: PRODUCTOS TERMINADOS -->
    <section class="products-section">
      <h2>Productos terminados</h2>
      <p class="section-description">
        Algunas de nuestras piezas finalizadas, confeccionadas de manera
        artesanal y totalmente personalizadas.
      </p>

      <div class="products-grid">
        <div class="product-placeholder"></div>
        <div class="product-placeholder"></div>
        <div class="product-placeholder"></div>
        <div class="product-placeholder"></div>
      </div>
    </section>

  </section>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style scoped src="../assets/gallery.css"></style>
