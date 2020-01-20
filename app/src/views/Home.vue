<template lang="pug">
  .home
    Navbar
    section.section
      .container
        .parallax-container.valign-wrapper
          .parallax
            img(src="../assets/images/office.jpg")
          .container.center
            .btn-large.center Get It
      
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import M from 'materialize-css'

export default {
  name: 'home',
  components: {
    Navbar
  },
  mounted() {
    M.AutoInit()
  }
}
</script>
