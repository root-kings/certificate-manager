<template lang="pug">
  .layout
    header
      Navbar
    main
      slot
    Footer
</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Footer
  },
  mounted() {
    M.AutoInit()
  }
}
</script>
