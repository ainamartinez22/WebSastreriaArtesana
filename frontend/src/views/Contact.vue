<template>
  <section class="contact">
    <!-- FORMULARIO -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="tu@email.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Escribe tu mensaje..."
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit">Enviar</button>
    </form>

    <div class="contact-info">
      <p class="info">
        📍 Carrer del Canigó, Moià<br />
        📞 +34 600 000 000<br />
        🕒 L–V: 9:00 – 19:00
      </p>

      <!-- MAPA -->
      <iframe
        src="https://www.google.com/maps?q=Carrer+Canigo+Moia&output=embed"
        width="100%"
        height="300"
        style="border: 0; border-radius: 8px"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(
        `Mensaje enviado:\n${this.form.name}\n${this.form.email}\n${this.form.message}`
      );
      // Aquí puedes conectar con tu backend Express para enviar email o guardar datos
    },
  },
};
</script>


<style scoped>
.info{
  margin-bottom: 20px;
  color:white;
}
.contact-info{
  padding-top: 20px;
}
.contact {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #1c1c1c; /* fondo oscuro elegante */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #ffffff;
}

.contact h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #444;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3f51b5; /* color azul elegante al enfocar */
  box-shadow: 0 0 5px rgba(63, 81, 181, 0.5);
  background-color: #222;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3f51b5; /* azul destacado */
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #303f9f;
  box-shadow: 0 4px 10px rgba(63, 81, 181, 0.4);
}
</style>
