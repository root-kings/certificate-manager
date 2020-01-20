<template lang="pug">
  .home
    Navbar
    section.section
      .container
        router-link.btn.blue(to="/dashboard/new") New Cert

    section.section
        .container
            .collection
                router-link.collection-item(to="/dashboard/cert") cert 1
                    
                router-link.collection-item(to="/dashboard/cert") cert 2

                router-link.collection-item(to="/dashboard/cert") cert 3
      
  
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
