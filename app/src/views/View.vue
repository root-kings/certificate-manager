<template lang="pug">
  Layout
    .cert-view
      section.section
        .container
          img.rounded.full-width.z-depth-3(src="/images/office.jpg")
      
      section.section
        .container.center
          a.btn.deep-purple.darken-3(href="/link/to/cert.pdf") Download

    
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'cert-view',
  components: {
    Layout
  }
}
</script>
