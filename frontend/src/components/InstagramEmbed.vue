<template>
  <div class="instagram-embed">
    <blockquote
      class="instagram-media"
      :data-instgrm-permalink="permalink"
      data-instgrm-version="14"
      style="margin: 0 auto; max-width: 540px;"
    >
      <a :href="permalink" target="_blank"></a>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "InstagramEmbed",
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  computed: {
    permalink() {
      return `https://www.instagram.com/p/${this.postId}/`
      // Si es un reel:
      // return `https://www.instagram.com/reel/${this.postId}/`
    },
  },
  mounted() {
    this.loadInstagram()
  },
  methods: {
    loadInstagram() {
      if (!window.instgrm) {
        const script = document.createElement("script")
        script.src = "https://www.instagram.com/embed.js"
        script.async = true
        script.onload = () => {
          window.instgrm.Embeds.process()
        }
        document.body.appendChild(script)
      } else {
        window.instgrm.Embeds.process()
      }
    },
  },
}
</script>

<style scoped>
.instagram-embed {
  display: flex;
  justify-content: center;
}
</style>
