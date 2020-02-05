<template lang="pug">
  Layout
    .home
      section.section
        .container.rounded.z-depth-5
          .parallax-container.valign-wrapper
            .parallax
              img.dark(src="../assets/images/office.jpg")
            .container.center
              h1.light.center.white-text Certificate Manager
              p.flow-text.center.white-text Generate, manage and distribute digitally signed verifiable certificates for all events at low costs.
      
              router-link.btn-large.center.deep-purple.darken-3(to="/dashboard") Get It
      section.section
        .container.center
          h3.light.center Download your certificates
          router-link.btn-large.center.deep-purple.darken-3.z-depth-5(to="/certificates") Download

      
  
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'home',
  components: {
    Layout
  }
}
</script>
