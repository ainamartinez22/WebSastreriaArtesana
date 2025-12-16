<template>
  <section class="contact">
    <h2>Contacto</h2>

    <p>
      📍 Carrer del Canigó, Moià<br>
      📞 +34 600 000 000<br>
      🕒 L–V: 9:00 – 19:00
    </p>

    <!-- MAPA -->
    <iframe
      src="https://www.google.com/maps?q=Carrer+Canigo+Moia&output=embed"
      width="100%"
      height="300"
      style="border:0; border-radius: 8px"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <!-- FORMULARIO -->
    <form @submit.prevent="send">
      <input v-model="name" placeholder="Nombre" />
      <input v-model="email" placeholder="Email" />
      <textarea v-model="message" placeholder="Mensaje"></textarea>
      <button>Enviar</button>
    </form>
  </section>
</template>
