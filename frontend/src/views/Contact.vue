<template>
  <section class="contact">
    <!-- FORMULARIO -->
    <form @submit.prevent="submitForm" >
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

      <button class="send-button" type="submit">Enviar</button>
    </form>

    <!-- ALERTAS -->
    <div v-if="alert.message" :class="['alert', alert.type]">
      {{ alert.message }}
    </div>

    <div class="contact-info">
      <p class="info">
        📍 Carrer del Canigó, Moià 08180 (Barcelona)<br />
        📞 +34 600 000 000<br />
        🕒 L–V: 9:00 – 19:00
      </p>

      <!-- MAPA -->
      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.208525020964!2d2.091414075556446!3d41.8092974697199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4e6c5137ce49b%3A0x99fc806946edea1b!2sCarrer%20del%20Canig%C3%B3%2C%20El%20Moian%C3%A8s%2C%2008180%20Moi%C3%A0%2C%20Barcelona!5e1!3m2!1sca!2ses!4v1765964221620!5m2!1sca!2ses"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from "@emailjs/browser";

emailjs.init("9S6nxdltzFu3ygbdS");

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      alert: { message: "", type: "" },
    };
  },
  methods: {
    async submitForm() {
      emailjs
        .send("service_0tdh3mo", "template_4aq2axm", {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        })
        .then(() => {
          this.showAlert("Email enviado con éxito!", "success");
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        })
        .catch((err) => {
          this.showAlert("Error al enviar el email: " + err.text, "error");
        });
    },
    showAlert(message, type) {
      this.alert.message = message;
      this.alert.type = type;
      setTimeout(() => {
        this.alert.message = "";
        this.alert.type = "";
      }, 4000); // desaparece tras 4 segundos
    },
  },
};

</script>
<style scoped src="../assets/contact.css"></style>