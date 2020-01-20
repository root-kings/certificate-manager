<template lang="pug">
  .home
    Navbar
    section.section
      .container
        .btn.blue New Cert

    section.section
        .container
            .collection
                a.collection-item cert 1
                    
                a.collection-item cert 2

                a.collection-item cert 3
      
  
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
