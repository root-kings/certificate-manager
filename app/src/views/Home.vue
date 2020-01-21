<template lang="pug">
  Layout
    .home
      section.section
        .container
          .parallax-container.valign-wrapper
            .parallax
              img(src="../assets/images/office.jpg")
            .container.center
              router-link.btn-large.center.deep-purple.darken-3(to="/dashboard") Get It
      
  
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
